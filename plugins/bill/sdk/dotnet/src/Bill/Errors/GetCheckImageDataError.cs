using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bill.Core.ErrorResponse;
using Bill.Core.Models;
using Bill.Models;

namespace Bill.Errors;

public sealed class GetCheckImageDataError : ApiError
{
    private readonly Optional<IReadOnlyList<BdcError>> _listOfBdcErrorValue;

    private GetCheckImageDataError(Optional<IReadOnlyList<BdcError>> listOfBdcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _listOfBdcErrorValue = listOfBdcErrorValue;
    }

    private static GetCheckImageDataError AsListOfBdcError(IReadOnlyList<BdcError> value) =>
        new(Optional<IReadOnlyList<BdcError>>.Some(value), default);

    private static GetCheckImageDataError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value) =>
        _listOfBdcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<BdcError>, TResult> onListOfBdcError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfBdcError(out var listOfBdcErrorValue) => onListOfBdcError(listOfBdcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCheckImageDataError)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<BdcError>> onListOfBdcError, Action<RawError> otherwise)
    {
        if (TryGetListOfBdcError(out var listOfBdcErrorValue)) onListOfBdcError(listOfBdcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCheckImageDataError)} holds no value.");
    }

    private static Task<GetCheckImageDataError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            >= 500 and <= 599 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCheckImageDataError> Response { get; } = new(Create);
}
