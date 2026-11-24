using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class CallPriceShowError : ApiError
{
    private readonly Optional<ApiV1CallPrice404Error1> _apiV1CallPrice404Error1Value;

    private readonly Optional<ApiV1CallPrice422Error1> _apiV1CallPrice422Error1Value;

    private CallPriceShowError(Optional<ApiV1CallPrice404Error1> apiV1CallPrice404Error1Value,
        Optional<ApiV1CallPrice422Error1> apiV1CallPrice422Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CallPrice404Error1Value = apiV1CallPrice404Error1Value;
        _apiV1CallPrice422Error1Value = apiV1CallPrice422Error1Value;
    }

    private static CallPriceShowError AsApiV1CallPrice404Error1(ApiV1CallPrice404Error1 value) =>
        new(Optional<ApiV1CallPrice404Error1>.Some(value), default, default);

    private static CallPriceShowError AsApiV1CallPrice422Error1(ApiV1CallPrice422Error1 value) =>
        new(default, Optional<ApiV1CallPrice422Error1>.Some(value), default);

    private static CallPriceShowError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1CallPrice404Error1([NotNullWhen(true)] out ApiV1CallPrice404Error1? value) =>
        _apiV1CallPrice404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CallPrice422Error1([NotNullWhen(true)] out ApiV1CallPrice422Error1? value) =>
        _apiV1CallPrice422Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CallPrice404Error1, TResult> onApiV1CallPrice404Error1,
        Func<ApiV1CallPrice422Error1, TResult> onApiV1CallPrice422Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CallPrice404Error1(out var apiV1CallPrice404Error1Value) => onApiV1CallPrice404Error1(
                apiV1CallPrice404Error1Value),
            _ when TryGetApiV1CallPrice422Error1(out var apiV1CallPrice422Error1Value) => onApiV1CallPrice422Error1(
                apiV1CallPrice422Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CallPriceShowError)} holds no value.")
        };

    public void Match(Action<ApiV1CallPrice404Error1> onApiV1CallPrice404Error1,
        Action<ApiV1CallPrice422Error1> onApiV1CallPrice422Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CallPrice404Error1(out var apiV1CallPrice404Error1Value)) onApiV1CallPrice404Error1(
            apiV1CallPrice404Error1Value);
        else if (TryGetApiV1CallPrice422Error1(out var apiV1CallPrice422Error1Value)) onApiV1CallPrice422Error1(
            apiV1CallPrice422Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CallPriceShowError)} holds no value.");
    }

    private static Task<CallPriceShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ApiV1CallPrice404Error1>().As(AsApiV1CallPrice404Error1),
            422 => response.Json<ApiV1CallPrice422Error1>().As(AsApiV1CallPrice422Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CallPriceShowError> Response { get; } = new(Create);
}
