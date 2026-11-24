using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class Click2CallShowError : ApiError
{
    private readonly Optional<ApiV1Click2Call401Error1> _apiV1Click2Call401Error1Value;

    private readonly Optional<ApiV1Click2Call403Error1> _apiV1Click2Call403Error1Value;

    private readonly Optional<ApiV1Click2Call404Error1> _apiV1Click2Call404Error1Value;

    private Click2CallShowError(Optional<ApiV1Click2Call401Error1> apiV1Click2Call401Error1Value,
        Optional<ApiV1Click2Call403Error1> apiV1Click2Call403Error1Value,
        Optional<ApiV1Click2Call404Error1> apiV1Click2Call404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Click2Call401Error1Value = apiV1Click2Call401Error1Value;
        _apiV1Click2Call403Error1Value = apiV1Click2Call403Error1Value;
        _apiV1Click2Call404Error1Value = apiV1Click2Call404Error1Value;
    }

    private static Click2CallShowError AsApiV1Click2Call401Error1(ApiV1Click2Call401Error1 value) =>
        new(Optional<ApiV1Click2Call401Error1>.Some(value), default, default, default);

    private static Click2CallShowError AsApiV1Click2Call403Error1(ApiV1Click2Call403Error1 value) =>
        new(default, Optional<ApiV1Click2Call403Error1>.Some(value), default, default);

    private static Click2CallShowError AsApiV1Click2Call404Error1(ApiV1Click2Call404Error1 value) =>
        new(default, default, Optional<ApiV1Click2Call404Error1>.Some(value), default);

    private static Click2CallShowError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Click2Call401Error1([NotNullWhen(true)] out ApiV1Click2Call401Error1? value) =>
        _apiV1Click2Call401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Click2Call403Error1([NotNullWhen(true)] out ApiV1Click2Call403Error1? value) =>
        _apiV1Click2Call403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Click2Call404Error1([NotNullWhen(true)] out ApiV1Click2Call404Error1? value) =>
        _apiV1Click2Call404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Click2Call401Error1, TResult> onApiV1Click2Call401Error1,
        Func<ApiV1Click2Call403Error1, TResult> onApiV1Click2Call403Error1,
        Func<ApiV1Click2Call404Error1, TResult> onApiV1Click2Call404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Click2Call401Error1(out var apiV1Click2Call401Error1Value) => onApiV1Click2Call401Error1(
                apiV1Click2Call401Error1Value),
            _ when TryGetApiV1Click2Call403Error1(out var apiV1Click2Call403Error1Value) => onApiV1Click2Call403Error1(
                apiV1Click2Call403Error1Value),
            _ when TryGetApiV1Click2Call404Error1(out var apiV1Click2Call404Error1Value) => onApiV1Click2Call404Error1(
                apiV1Click2Call404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(Click2CallShowError)} holds no value.")
        };

    public void Match(Action<ApiV1Click2Call401Error1> onApiV1Click2Call401Error1,
        Action<ApiV1Click2Call403Error1> onApiV1Click2Call403Error1,
        Action<ApiV1Click2Call404Error1> onApiV1Click2Call404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Click2Call401Error1(out var apiV1Click2Call401Error1Value)) onApiV1Click2Call401Error1(
            apiV1Click2Call401Error1Value);
        else if (TryGetApiV1Click2Call403Error1(out var apiV1Click2Call403Error1Value)) onApiV1Click2Call403Error1(
            apiV1Click2Call403Error1Value);
        else if (TryGetApiV1Click2Call404Error1(out var apiV1Click2Call404Error1Value)) onApiV1Click2Call404Error1(
            apiV1Click2Call404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(Click2CallShowError)} holds no value.");
    }

    private static Task<Click2CallShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV1Click2Call401Error1>().As(AsApiV1Click2Call401Error1),
            403 => response.Json<ApiV1Click2Call403Error1>().As(AsApiV1Click2Call403Error1),
            404 => response.Json<ApiV1Click2Call404Error1>().As(AsApiV1Click2Call404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<Click2CallShowError> Response { get; } = new(Create);
}
