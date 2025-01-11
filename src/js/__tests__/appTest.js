import ErrorRepository from '../app';

test('the error is in ErrorRepository', () => {
    const errorRepo = new ErrorRepository;
    errorRepo.addError(3, 'деление на ноль');
    expect(errorRepo.translate(3)).toEqual('деление на ноль');
});

test('new error', () => {
    const errorRepo = new ErrorRepository;
    expect(errorRepo.translate(4)).toEqual('Unknown error');
});
