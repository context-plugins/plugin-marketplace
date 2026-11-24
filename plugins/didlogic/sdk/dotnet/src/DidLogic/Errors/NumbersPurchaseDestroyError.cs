using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersPurchaseDestroyError : ApiError
{
    private readonly Optional<ApiV2NumbersPurchase401Error1> _apiV2NumbersPurchase401Error1Value;

    private readonly Optional<ApiV2NumbersPurchase403Error1> _apiV2NumbersPurchase403Error1Value;

    private readonly Optional<Error> _errorValue;

    private NumbersPurchaseDestroyError(Optional<ApiV2NumbersPurchase401Error1> apiV2NumbersPurchase401Error1Value,
        Optional<ApiV2NumbersPurchase403Error1> apiV2NumbersPurchase403Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersPurchase401Error1Value = apiV2NumbersPurchase401Error1Value;
        _apiV2NumbersPurchase403Error1Value = apiV2NumbersPurchase403Error1Value;
        _errorValue = errorValue;
    }

    private static NumbersPurchaseDestroyError AsApiV2NumbersPurchase401Error1(ApiV2NumbersPurchase401Error1 value) =>
        new(Optional<ApiV2NumbersPurchase401Error1>.Some(value), default, default, default);

    private static NumbersPurchaseDestroyError AsApiV2NumbersPurchase403Error1(ApiV2NumbersPurchase403Error1 value) =>
        new(default, Optional<ApiV2NumbersPurchase403Error1>.Some(value), default, default);

    private static NumbersPurchaseDestroyError AsError(Error value) =>
        new(default, default, Optional<Error>.Some(value), default);

    private static NumbersPurchaseDestroyError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersPurchase401Error1([NotNullWhen(true)] out ApiV2NumbersPurchase401Error1? value) =>
        _apiV2NumbersPurchase401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersPurchase403Error1([NotNullWhen(true)] out ApiV2NumbersPurchase403Error1? value) =>
        _apiV2NumbersPurchase403Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersPurchase401Error1, TResult> onApiV2NumbersPurchase401Error1,
        Func<ApiV2NumbersPurchase403Error1, TResult> onApiV2NumbersPurchase403Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersPurchase401Error1(
                out var apiV2NumbersPurchase401Error1Value) => onApiV2NumbersPurchase401Error1(
                apiV2NumbersPurchase401Error1Value),
            _ when TryGetApiV2NumbersPurchase403Error1(
                out var apiV2NumbersPurchase403Error1Value) => onApiV2NumbersPurchase403Error1(
                apiV2NumbersPurchase403Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersPurchaseDestroyError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersPurchase401Error1> onApiV2NumbersPurchase401Error1,
        Action<ApiV2NumbersPurchase403Error1> onApiV2NumbersPurchase403Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersPurchase401Error1(
            out var apiV2NumbersPurchase401Error1Value)) onApiV2NumbersPurchase401Error1(
            apiV2NumbersPurchase401Error1Value);
        else if (TryGetApiV2NumbersPurchase403Error1(
            out var apiV2NumbersPurchase403Error1Value)) onApiV2NumbersPurchase403Error1(
            apiV2NumbersPurchase403Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersPurchaseDestroyError)} holds no value.");
    }

    private static Task<NumbersPurchaseDestroyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersPurchase401Error1>().As(AsApiV2NumbersPurchase401Error1),
            403 => response.Json<ApiV2NumbersPurchase403Error1>().As(AsApiV2NumbersPurchase403Error1),
            422 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersPurchaseDestroyError> Response { get; } = new(Create);
}
