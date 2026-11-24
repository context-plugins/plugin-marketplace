using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class TransactionsIndexError : ApiError
{
    private readonly Optional<ApiV1Transactions403Error1> _apiV1Transactions403Error1Value;

    private readonly Optional<Error> _errorValue;

    private TransactionsIndexError(Optional<ApiV1Transactions403Error1> apiV1Transactions403Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Transactions403Error1Value = apiV1Transactions403Error1Value;
        _errorValue = errorValue;
    }

    private static TransactionsIndexError AsApiV1Transactions403Error1(ApiV1Transactions403Error1 value) =>
        new(Optional<ApiV1Transactions403Error1>.Some(value), default, default);

    private static TransactionsIndexError AsError(Error value) => new(default, Optional<Error>.Some(value), default);

    private static TransactionsIndexError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Transactions403Error1([NotNullWhen(true)] out ApiV1Transactions403Error1? value) =>
        _apiV1Transactions403Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Transactions403Error1, TResult> onApiV1Transactions403Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Transactions403Error1(
                out var apiV1Transactions403Error1Value) => onApiV1Transactions403Error1(
                apiV1Transactions403Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TransactionsIndexError)} holds no value.")
        };

    public void Match(Action<ApiV1Transactions403Error1> onApiV1Transactions403Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Transactions403Error1(out var apiV1Transactions403Error1Value)) onApiV1Transactions403Error1(
            apiV1Transactions403Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TransactionsIndexError)} holds no value.");
    }

    private static Task<TransactionsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error>().As(AsError),
            403 => response.Json<ApiV1Transactions403Error1>().As(AsApiV1Transactions403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TransactionsIndexError> Response { get; } = new(Create);
}
