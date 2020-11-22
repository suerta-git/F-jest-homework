import { register } from '../user';
import { verifyUsername } from '../verify';

jest.mock('../verify');
jest.mock('axios');

describe('register', () => {
    test('should post user when validated', () => {
        // TODO 19: add test here
        return expect(register('user', 'pass')).resolves.toBe('success');
    });

    test('should reject with Error when username is invalid', () => {
        // TODO 20: add test here
        verifyUsername.mockImplementationOnce(() => false);
        return expect(register('user', 'pass')).rejects.toThrow(Error);
    });
});
