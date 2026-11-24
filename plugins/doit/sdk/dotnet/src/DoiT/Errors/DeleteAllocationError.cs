using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class DeleteAllocationError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<IReadOnlyList<AllocationDeleteValidation>> _listOfAllocationDeleteValidationValue;

    private DeleteAllocationError(Optional<Error> errorValue,
        Optional<IReadOnlyList<AllocationDeleteValidation>> listOfAllocationDeleteValidationValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _listOfAllocationDeleteValidationValue = listOfAllocationDeleteValidationValue;
    }

    private static DeleteAllocationError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static DeleteAllocationError AsListOfAllocationDeleteValidation(IReadOnlyList<AllocationDeleteValidation> value) =>
        new(default, Optional<IReadOnlyList<AllocationDeleteValidation>>.Some(value), default);

    private static DeleteAllocationError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetListOfAllocationDeleteValidation([NotNullWhen(true)] out IReadOnlyList<AllocationDeleteValidation>? value) =>
        _listOfAllocationDeleteValidationValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<IReadOnlyList<AllocationDeleteValidation>, TResult> onListOfAllocationDeleteValidation,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetListOfAllocationDeleteValidation(
                out var listOfAllocationDeleteValidationValue) => onListOfAllocationDeleteValidation(
                listOfAllocationDeleteValidationValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteAllocationError)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<IReadOnlyList<AllocationDeleteValidation>> onListOfAllocationDeleteValidation,
        Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetListOfAllocationDeleteValidation(
            out var listOfAllocationDeleteValidationValue)) onListOfAllocationDeleteValidation(
            listOfAllocationDeleteValidationValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteAllocationError)} holds no value.");
    }

    private static Task<DeleteAllocationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 => response.Json<Error>().As(AsError),
            409 => response.Json<IReadOnlyList<AllocationDeleteValidation>>().As(AsListOfAllocationDeleteValidation),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteAllocationError> Response { get; } = new(Create);
}
