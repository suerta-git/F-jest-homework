export default {
    get: jest.fn((ignore) =>
        Promise.resolve({ data: 'success', useless: ignore })
    ),
    post: jest.fn((ignore, ignore2) =>
        Promise.resolve({ data: 'success', useless: { ignore, ignore2 } })
    ),
};
