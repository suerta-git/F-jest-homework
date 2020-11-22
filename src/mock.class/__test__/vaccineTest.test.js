import VaccineTest from '../vaccineTest';

const mockAcceptInjection = jest.fn();

const mockGetHasAntibodies = jest.fn().mockImplementation(() => true);

jest.mock('../recipient', () => {
    // mock class实现
    const mockClass = jest.fn().mockImplementation(() => {
        const returnValue = {
            acceptInjection: mockAcceptInjection,
            getHasAntibodies: mockGetHasAntibodies,
        };
        return returnValue;
    });

    return mockClass;
});

beforeEach(() => {
    // clear mock here
});

describe('inject', () => {
    test('should recipient accept injection with vaccine', () => {
        // TODO 14: add test here
        const vaccineTest = new VaccineTest();
        vaccineTest.inject();
        expect(mockAcceptInjection).toHaveBeenCalledTimes(1);
    });
});

describe('test', () => {
    test('should get Success if recipient has antibodies', () => {
        // TODO 15: add test here
        const vaccineTest = new VaccineTest();
        expect(vaccineTest.test()).toBe('Vaccine Test Success');
    });

    test('should get Failed if recipient has no antibodies', () => {
        // TODO 16: add test here
        mockGetHasAntibodies.mockImplementation(() => false);
        const vaccineTest = new VaccineTest();
        expect(vaccineTest.test()).toBe('Vaccine Test Failed');
    });
});
