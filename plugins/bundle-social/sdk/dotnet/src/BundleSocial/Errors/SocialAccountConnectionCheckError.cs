using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountConnectionCheckError : ApiError
{
    private readonly Optional<ApiV1SocialAccountConnectionCheck400Error1> _apiV1SocialAccountConnectionCheck400Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck401Error1> _apiV1SocialAccountConnectionCheck401Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck403Error1> _apiV1SocialAccountConnectionCheck403Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck404Error1> _apiV1SocialAccountConnectionCheck404Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck429Error1> _apiV1SocialAccountConnectionCheck429Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck500Error1> _apiV1SocialAccountConnectionCheck500Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck502Error1> _apiV1SocialAccountConnectionCheck502Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck503Error1> _apiV1SocialAccountConnectionCheck503Error1Value;

    private readonly Optional<ApiV1SocialAccountConnectionCheck504Error1> _apiV1SocialAccountConnectionCheck504Error1Value;

    private SocialAccountConnectionCheckError(Optional<ApiV1SocialAccountConnectionCheck400Error1> apiV1SocialAccountConnectionCheck400Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck401Error1> apiV1SocialAccountConnectionCheck401Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck403Error1> apiV1SocialAccountConnectionCheck403Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck404Error1> apiV1SocialAccountConnectionCheck404Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck429Error1> apiV1SocialAccountConnectionCheck429Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck500Error1> apiV1SocialAccountConnectionCheck500Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck502Error1> apiV1SocialAccountConnectionCheck502Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck503Error1> apiV1SocialAccountConnectionCheck503Error1Value,
        Optional<ApiV1SocialAccountConnectionCheck504Error1> apiV1SocialAccountConnectionCheck504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountConnectionCheck400Error1Value = apiV1SocialAccountConnectionCheck400Error1Value;
        _apiV1SocialAccountConnectionCheck401Error1Value = apiV1SocialAccountConnectionCheck401Error1Value;
        _apiV1SocialAccountConnectionCheck403Error1Value = apiV1SocialAccountConnectionCheck403Error1Value;
        _apiV1SocialAccountConnectionCheck404Error1Value = apiV1SocialAccountConnectionCheck404Error1Value;
        _apiV1SocialAccountConnectionCheck429Error1Value = apiV1SocialAccountConnectionCheck429Error1Value;
        _apiV1SocialAccountConnectionCheck500Error1Value = apiV1SocialAccountConnectionCheck500Error1Value;
        _apiV1SocialAccountConnectionCheck502Error1Value = apiV1SocialAccountConnectionCheck502Error1Value;
        _apiV1SocialAccountConnectionCheck503Error1Value = apiV1SocialAccountConnectionCheck503Error1Value;
        _apiV1SocialAccountConnectionCheck504Error1Value = apiV1SocialAccountConnectionCheck504Error1Value;
    }

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck400Error1(ApiV1SocialAccountConnectionCheck400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountConnectionCheck400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck401Error1(ApiV1SocialAccountConnectionCheck401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountConnectionCheck401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck403Error1(ApiV1SocialAccountConnectionCheck403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck404Error1(ApiV1SocialAccountConnectionCheck404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck429Error1(ApiV1SocialAccountConnectionCheck429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck500Error1(ApiV1SocialAccountConnectionCheck500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck502Error1(ApiV1SocialAccountConnectionCheck502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck503Error1(ApiV1SocialAccountConnectionCheck503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck503Error1>.Some(value),
            default,
            default);

    private static SocialAccountConnectionCheckError AsApiV1SocialAccountConnectionCheck504Error1(ApiV1SocialAccountConnectionCheck504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnectionCheck504Error1>.Some(value),
            default);

    private static SocialAccountConnectionCheckError AsFallback(RawError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RawError>.Some(value));

    public bool TryGetApiV1SocialAccountConnectionCheck400Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck400Error1? value) =>
        _apiV1SocialAccountConnectionCheck400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck401Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck401Error1? value) =>
        _apiV1SocialAccountConnectionCheck401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck403Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck403Error1? value) =>
        _apiV1SocialAccountConnectionCheck403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck404Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck404Error1? value) =>
        _apiV1SocialAccountConnectionCheck404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck429Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck429Error1? value) =>
        _apiV1SocialAccountConnectionCheck429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck500Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck500Error1? value) =>
        _apiV1SocialAccountConnectionCheck500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck502Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck502Error1? value) =>
        _apiV1SocialAccountConnectionCheck502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck503Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck503Error1? value) =>
        _apiV1SocialAccountConnectionCheck503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnectionCheck504Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck504Error1? value) =>
        _apiV1SocialAccountConnectionCheck504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountConnectionCheck400Error1, TResult> onApiV1SocialAccountConnectionCheck400Error1,
        Func<ApiV1SocialAccountConnectionCheck401Error1, TResult> onApiV1SocialAccountConnectionCheck401Error1,
        Func<ApiV1SocialAccountConnectionCheck403Error1, TResult> onApiV1SocialAccountConnectionCheck403Error1,
        Func<ApiV1SocialAccountConnectionCheck404Error1, TResult> onApiV1SocialAccountConnectionCheck404Error1,
        Func<ApiV1SocialAccountConnectionCheck429Error1, TResult> onApiV1SocialAccountConnectionCheck429Error1,
        Func<ApiV1SocialAccountConnectionCheck500Error1, TResult> onApiV1SocialAccountConnectionCheck500Error1,
        Func<ApiV1SocialAccountConnectionCheck502Error1, TResult> onApiV1SocialAccountConnectionCheck502Error1,
        Func<ApiV1SocialAccountConnectionCheck503Error1, TResult> onApiV1SocialAccountConnectionCheck503Error1,
        Func<ApiV1SocialAccountConnectionCheck504Error1, TResult> onApiV1SocialAccountConnectionCheck504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountConnectionCheck400Error1(
                out var apiV1SocialAccountConnectionCheck400Error1Value) => onApiV1SocialAccountConnectionCheck400Error1(
                apiV1SocialAccountConnectionCheck400Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck401Error1(
                out var apiV1SocialAccountConnectionCheck401Error1Value) => onApiV1SocialAccountConnectionCheck401Error1(
                apiV1SocialAccountConnectionCheck401Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck403Error1(
                out var apiV1SocialAccountConnectionCheck403Error1Value) => onApiV1SocialAccountConnectionCheck403Error1(
                apiV1SocialAccountConnectionCheck403Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck404Error1(
                out var apiV1SocialAccountConnectionCheck404Error1Value) => onApiV1SocialAccountConnectionCheck404Error1(
                apiV1SocialAccountConnectionCheck404Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck429Error1(
                out var apiV1SocialAccountConnectionCheck429Error1Value) => onApiV1SocialAccountConnectionCheck429Error1(
                apiV1SocialAccountConnectionCheck429Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck500Error1(
                out var apiV1SocialAccountConnectionCheck500Error1Value) => onApiV1SocialAccountConnectionCheck500Error1(
                apiV1SocialAccountConnectionCheck500Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck502Error1(
                out var apiV1SocialAccountConnectionCheck502Error1Value) => onApiV1SocialAccountConnectionCheck502Error1(
                apiV1SocialAccountConnectionCheck502Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck503Error1(
                out var apiV1SocialAccountConnectionCheck503Error1Value) => onApiV1SocialAccountConnectionCheck503Error1(
                apiV1SocialAccountConnectionCheck503Error1Value),
            _ when TryGetApiV1SocialAccountConnectionCheck504Error1(
                out var apiV1SocialAccountConnectionCheck504Error1Value) => onApiV1SocialAccountConnectionCheck504Error1(
                apiV1SocialAccountConnectionCheck504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountConnectionCheckError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountConnectionCheck400Error1> onApiV1SocialAccountConnectionCheck400Error1,
        Action<ApiV1SocialAccountConnectionCheck401Error1> onApiV1SocialAccountConnectionCheck401Error1,
        Action<ApiV1SocialAccountConnectionCheck403Error1> onApiV1SocialAccountConnectionCheck403Error1,
        Action<ApiV1SocialAccountConnectionCheck404Error1> onApiV1SocialAccountConnectionCheck404Error1,
        Action<ApiV1SocialAccountConnectionCheck429Error1> onApiV1SocialAccountConnectionCheck429Error1,
        Action<ApiV1SocialAccountConnectionCheck500Error1> onApiV1SocialAccountConnectionCheck500Error1,
        Action<ApiV1SocialAccountConnectionCheck502Error1> onApiV1SocialAccountConnectionCheck502Error1,
        Action<ApiV1SocialAccountConnectionCheck503Error1> onApiV1SocialAccountConnectionCheck503Error1,
        Action<ApiV1SocialAccountConnectionCheck504Error1> onApiV1SocialAccountConnectionCheck504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountConnectionCheck400Error1(
            out var apiV1SocialAccountConnectionCheck400Error1Value)) onApiV1SocialAccountConnectionCheck400Error1(
            apiV1SocialAccountConnectionCheck400Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck401Error1(
            out var apiV1SocialAccountConnectionCheck401Error1Value)) onApiV1SocialAccountConnectionCheck401Error1(
            apiV1SocialAccountConnectionCheck401Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck403Error1(
            out var apiV1SocialAccountConnectionCheck403Error1Value)) onApiV1SocialAccountConnectionCheck403Error1(
            apiV1SocialAccountConnectionCheck403Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck404Error1(
            out var apiV1SocialAccountConnectionCheck404Error1Value)) onApiV1SocialAccountConnectionCheck404Error1(
            apiV1SocialAccountConnectionCheck404Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck429Error1(
            out var apiV1SocialAccountConnectionCheck429Error1Value)) onApiV1SocialAccountConnectionCheck429Error1(
            apiV1SocialAccountConnectionCheck429Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck500Error1(
            out var apiV1SocialAccountConnectionCheck500Error1Value)) onApiV1SocialAccountConnectionCheck500Error1(
            apiV1SocialAccountConnectionCheck500Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck502Error1(
            out var apiV1SocialAccountConnectionCheck502Error1Value)) onApiV1SocialAccountConnectionCheck502Error1(
            apiV1SocialAccountConnectionCheck502Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck503Error1(
            out var apiV1SocialAccountConnectionCheck503Error1Value)) onApiV1SocialAccountConnectionCheck503Error1(
            apiV1SocialAccountConnectionCheck503Error1Value);
        else if (TryGetApiV1SocialAccountConnectionCheck504Error1(
            out var apiV1SocialAccountConnectionCheck504Error1Value)) onApiV1SocialAccountConnectionCheck504Error1(
            apiV1SocialAccountConnectionCheck504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountConnectionCheckError)} holds no value.");
    }

    private static Task<SocialAccountConnectionCheckError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountConnectionCheck400Error1>().As(
                AsApiV1SocialAccountConnectionCheck400Error1),
            401 => response.Json<ApiV1SocialAccountConnectionCheck401Error1>().As(
                AsApiV1SocialAccountConnectionCheck401Error1),
            403 => response.Json<ApiV1SocialAccountConnectionCheck403Error1>().As(
                AsApiV1SocialAccountConnectionCheck403Error1),
            404 => response.Json<ApiV1SocialAccountConnectionCheck404Error1>().As(
                AsApiV1SocialAccountConnectionCheck404Error1),
            429 => response.Json<ApiV1SocialAccountConnectionCheck429Error1>().As(
                AsApiV1SocialAccountConnectionCheck429Error1),
            500 => response.Json<ApiV1SocialAccountConnectionCheck500Error1>().As(
                AsApiV1SocialAccountConnectionCheck500Error1),
            502 => response.Json<ApiV1SocialAccountConnectionCheck502Error1>().As(
                AsApiV1SocialAccountConnectionCheck502Error1),
            503 => response.Json<ApiV1SocialAccountConnectionCheck503Error1>().As(
                AsApiV1SocialAccountConnectionCheck503Error1),
            504 => response.Json<ApiV1SocialAccountConnectionCheck504Error1>().As(
                AsApiV1SocialAccountConnectionCheck504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountConnectionCheckError> Response { get; } = new(Create);
}
