using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class NumbersPurchaseCreateError : ApiError
{
    private readonly Optional<ApiV2NumbersPurchase400Error1> _apiV2NumbersPurchase400Error1Value;

    private readonly Optional<ApiV2NumbersPurchase401Error1> _apiV2NumbersPurchase401Error1Value;

    private readonly Optional<ApiV2NumbersPurchaseResponse11> _apiV2NumbersPurchaseResponse11Value;

    private NumbersPurchaseCreateError(Optional<ApiV2NumbersPurchase400Error1> apiV2NumbersPurchase400Error1Value,
        Optional<ApiV2NumbersPurchase401Error1> apiV2NumbersPurchase401Error1Value,
        Optional<ApiV2NumbersPurchaseResponse11> apiV2NumbersPurchaseResponse11Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersPurchase400Error1Value = apiV2NumbersPurchase400Error1Value;
        _apiV2NumbersPurchase401Error1Value = apiV2NumbersPurchase401Error1Value;
        _apiV2NumbersPurchaseResponse11Value = apiV2NumbersPurchaseResponse11Value;
    }

    private static NumbersPurchaseCreateError AsApiV2NumbersPurchase400Error1(ApiV2NumbersPurchase400Error1 value) =>
        new(Optional<ApiV2NumbersPurchase400Error1>.Some(value), default, default, default);

    private static NumbersPurchaseCreateError AsApiV2NumbersPurchase401Error1(ApiV2NumbersPurchase401Error1 value) =>
        new(default, Optional<ApiV2NumbersPurchase401Error1>.Some(value), default, default);

    private static NumbersPurchaseCreateError AsApiV2NumbersPurchaseResponse11(ApiV2NumbersPurchaseResponse11 value) =>
        new(default, default, Optional<ApiV2NumbersPurchaseResponse11>.Some(value), default);

    private static NumbersPurchaseCreateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersPurchase400Error1([NotNullWhen(true)] out ApiV2NumbersPurchase400Error1? value) =>
        _apiV2NumbersPurchase400Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersPurchase401Error1([NotNullWhen(true)] out ApiV2NumbersPurchase401Error1? value) =>
        _apiV2NumbersPurchase401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersPurchaseResponse11([NotNullWhen(true)] out ApiV2NumbersPurchaseResponse11? value) =>
        _apiV2NumbersPurchaseResponse11Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersPurchase400Error1, TResult> onApiV2NumbersPurchase400Error1,
        Func<ApiV2NumbersPurchase401Error1, TResult> onApiV2NumbersPurchase401Error1,
        Func<ApiV2NumbersPurchaseResponse11, TResult> onApiV2NumbersPurchaseResponse11,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersPurchase400Error1(
                out var apiV2NumbersPurchase400Error1Value) => onApiV2NumbersPurchase400Error1(
                apiV2NumbersPurchase400Error1Value),
            _ when TryGetApiV2NumbersPurchase401Error1(
                out var apiV2NumbersPurchase401Error1Value) => onApiV2NumbersPurchase401Error1(
                apiV2NumbersPurchase401Error1Value),
            _ when TryGetApiV2NumbersPurchaseResponse11(
                out var apiV2NumbersPurchaseResponse11Value) => onApiV2NumbersPurchaseResponse11(
                apiV2NumbersPurchaseResponse11Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersPurchaseCreateError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersPurchase400Error1> onApiV2NumbersPurchase400Error1,
        Action<ApiV2NumbersPurchase401Error1> onApiV2NumbersPurchase401Error1,
        Action<ApiV2NumbersPurchaseResponse11> onApiV2NumbersPurchaseResponse11,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersPurchase400Error1(
            out var apiV2NumbersPurchase400Error1Value)) onApiV2NumbersPurchase400Error1(
            apiV2NumbersPurchase400Error1Value);
        else if (TryGetApiV2NumbersPurchase401Error1(
            out var apiV2NumbersPurchase401Error1Value)) onApiV2NumbersPurchase401Error1(
            apiV2NumbersPurchase401Error1Value);
        else if (TryGetApiV2NumbersPurchaseResponse11(
            out var apiV2NumbersPurchaseResponse11Value)) onApiV2NumbersPurchaseResponse11(
            apiV2NumbersPurchaseResponse11Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersPurchaseCreateError)} holds no value.");
    }

    private static Task<NumbersPurchaseCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV2NumbersPurchase400Error1>().As(AsApiV2NumbersPurchase400Error1),
            401 => response.Json<ApiV2NumbersPurchase401Error1>().As(AsApiV2NumbersPurchase401Error1),
            422 => response.Json<ApiV2NumbersPurchaseResponse11>().As(AsApiV2NumbersPurchaseResponse11),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersPurchaseCreateError> Response { get; } = new(Create);
}
