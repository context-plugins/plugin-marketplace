using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsGetSocialAccountAnalyticsError : ApiError
{
    private readonly Optional<ApiV1AnalyticsSocialAccount400Error1> _apiV1AnalyticsSocialAccount400Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount401Error1> _apiV1AnalyticsSocialAccount401Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount403Error1> _apiV1AnalyticsSocialAccount403Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount404Error1> _apiV1AnalyticsSocialAccount404Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount429Error1> _apiV1AnalyticsSocialAccount429Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount500Error1> _apiV1AnalyticsSocialAccount500Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount502Error1> _apiV1AnalyticsSocialAccount502Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount503Error1> _apiV1AnalyticsSocialAccount503Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccount504Error1> _apiV1AnalyticsSocialAccount504Error1Value;

    private AnalyticsGetSocialAccountAnalyticsError(Optional<ApiV1AnalyticsSocialAccount400Error1> apiV1AnalyticsSocialAccount400Error1Value,
        Optional<ApiV1AnalyticsSocialAccount401Error1> apiV1AnalyticsSocialAccount401Error1Value,
        Optional<ApiV1AnalyticsSocialAccount403Error1> apiV1AnalyticsSocialAccount403Error1Value,
        Optional<ApiV1AnalyticsSocialAccount404Error1> apiV1AnalyticsSocialAccount404Error1Value,
        Optional<ApiV1AnalyticsSocialAccount429Error1> apiV1AnalyticsSocialAccount429Error1Value,
        Optional<ApiV1AnalyticsSocialAccount500Error1> apiV1AnalyticsSocialAccount500Error1Value,
        Optional<ApiV1AnalyticsSocialAccount502Error1> apiV1AnalyticsSocialAccount502Error1Value,
        Optional<ApiV1AnalyticsSocialAccount503Error1> apiV1AnalyticsSocialAccount503Error1Value,
        Optional<ApiV1AnalyticsSocialAccount504Error1> apiV1AnalyticsSocialAccount504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsSocialAccount400Error1Value = apiV1AnalyticsSocialAccount400Error1Value;
        _apiV1AnalyticsSocialAccount401Error1Value = apiV1AnalyticsSocialAccount401Error1Value;
        _apiV1AnalyticsSocialAccount403Error1Value = apiV1AnalyticsSocialAccount403Error1Value;
        _apiV1AnalyticsSocialAccount404Error1Value = apiV1AnalyticsSocialAccount404Error1Value;
        _apiV1AnalyticsSocialAccount429Error1Value = apiV1AnalyticsSocialAccount429Error1Value;
        _apiV1AnalyticsSocialAccount500Error1Value = apiV1AnalyticsSocialAccount500Error1Value;
        _apiV1AnalyticsSocialAccount502Error1Value = apiV1AnalyticsSocialAccount502Error1Value;
        _apiV1AnalyticsSocialAccount503Error1Value = apiV1AnalyticsSocialAccount503Error1Value;
        _apiV1AnalyticsSocialAccount504Error1Value = apiV1AnalyticsSocialAccount504Error1Value;
    }

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount400Error1(ApiV1AnalyticsSocialAccount400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsSocialAccount400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount401Error1(ApiV1AnalyticsSocialAccount401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsSocialAccount401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount403Error1(ApiV1AnalyticsSocialAccount403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount404Error1(ApiV1AnalyticsSocialAccount404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount429Error1(ApiV1AnalyticsSocialAccount429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount500Error1(ApiV1AnalyticsSocialAccount500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount502Error1(ApiV1AnalyticsSocialAccount502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount503Error1(ApiV1AnalyticsSocialAccount503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount503Error1>.Some(value),
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccount504Error1(ApiV1AnalyticsSocialAccount504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccount504Error1>.Some(value),
            default);

    private static AnalyticsGetSocialAccountAnalyticsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsSocialAccount400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount400Error1? value) =>
        _apiV1AnalyticsSocialAccount400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount401Error1? value) =>
        _apiV1AnalyticsSocialAccount401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount403Error1? value) =>
        _apiV1AnalyticsSocialAccount403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount404Error1? value) =>
        _apiV1AnalyticsSocialAccount404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount429Error1? value) =>
        _apiV1AnalyticsSocialAccount429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount500Error1? value) =>
        _apiV1AnalyticsSocialAccount500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount502Error1? value) =>
        _apiV1AnalyticsSocialAccount502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount503Error1? value) =>
        _apiV1AnalyticsSocialAccount503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccount504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount504Error1? value) =>
        _apiV1AnalyticsSocialAccount504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsSocialAccount400Error1, TResult> onApiV1AnalyticsSocialAccount400Error1,
        Func<ApiV1AnalyticsSocialAccount401Error1, TResult> onApiV1AnalyticsSocialAccount401Error1,
        Func<ApiV1AnalyticsSocialAccount403Error1, TResult> onApiV1AnalyticsSocialAccount403Error1,
        Func<ApiV1AnalyticsSocialAccount404Error1, TResult> onApiV1AnalyticsSocialAccount404Error1,
        Func<ApiV1AnalyticsSocialAccount429Error1, TResult> onApiV1AnalyticsSocialAccount429Error1,
        Func<ApiV1AnalyticsSocialAccount500Error1, TResult> onApiV1AnalyticsSocialAccount500Error1,
        Func<ApiV1AnalyticsSocialAccount502Error1, TResult> onApiV1AnalyticsSocialAccount502Error1,
        Func<ApiV1AnalyticsSocialAccount503Error1, TResult> onApiV1AnalyticsSocialAccount503Error1,
        Func<ApiV1AnalyticsSocialAccount504Error1, TResult> onApiV1AnalyticsSocialAccount504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsSocialAccount400Error1(
                out var apiV1AnalyticsSocialAccount400Error1Value) => onApiV1AnalyticsSocialAccount400Error1(
                apiV1AnalyticsSocialAccount400Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount401Error1(
                out var apiV1AnalyticsSocialAccount401Error1Value) => onApiV1AnalyticsSocialAccount401Error1(
                apiV1AnalyticsSocialAccount401Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount403Error1(
                out var apiV1AnalyticsSocialAccount403Error1Value) => onApiV1AnalyticsSocialAccount403Error1(
                apiV1AnalyticsSocialAccount403Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount404Error1(
                out var apiV1AnalyticsSocialAccount404Error1Value) => onApiV1AnalyticsSocialAccount404Error1(
                apiV1AnalyticsSocialAccount404Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount429Error1(
                out var apiV1AnalyticsSocialAccount429Error1Value) => onApiV1AnalyticsSocialAccount429Error1(
                apiV1AnalyticsSocialAccount429Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount500Error1(
                out var apiV1AnalyticsSocialAccount500Error1Value) => onApiV1AnalyticsSocialAccount500Error1(
                apiV1AnalyticsSocialAccount500Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount502Error1(
                out var apiV1AnalyticsSocialAccount502Error1Value) => onApiV1AnalyticsSocialAccount502Error1(
                apiV1AnalyticsSocialAccount502Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount503Error1(
                out var apiV1AnalyticsSocialAccount503Error1Value) => onApiV1AnalyticsSocialAccount503Error1(
                apiV1AnalyticsSocialAccount503Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccount504Error1(
                out var apiV1AnalyticsSocialAccount504Error1Value) => onApiV1AnalyticsSocialAccount504Error1(
                apiV1AnalyticsSocialAccount504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(AnalyticsGetSocialAccountAnalyticsError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsSocialAccount400Error1> onApiV1AnalyticsSocialAccount400Error1,
        Action<ApiV1AnalyticsSocialAccount401Error1> onApiV1AnalyticsSocialAccount401Error1,
        Action<ApiV1AnalyticsSocialAccount403Error1> onApiV1AnalyticsSocialAccount403Error1,
        Action<ApiV1AnalyticsSocialAccount404Error1> onApiV1AnalyticsSocialAccount404Error1,
        Action<ApiV1AnalyticsSocialAccount429Error1> onApiV1AnalyticsSocialAccount429Error1,
        Action<ApiV1AnalyticsSocialAccount500Error1> onApiV1AnalyticsSocialAccount500Error1,
        Action<ApiV1AnalyticsSocialAccount502Error1> onApiV1AnalyticsSocialAccount502Error1,
        Action<ApiV1AnalyticsSocialAccount503Error1> onApiV1AnalyticsSocialAccount503Error1,
        Action<ApiV1AnalyticsSocialAccount504Error1> onApiV1AnalyticsSocialAccount504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsSocialAccount400Error1(
            out var apiV1AnalyticsSocialAccount400Error1Value)) onApiV1AnalyticsSocialAccount400Error1(
            apiV1AnalyticsSocialAccount400Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount401Error1(
            out var apiV1AnalyticsSocialAccount401Error1Value)) onApiV1AnalyticsSocialAccount401Error1(
            apiV1AnalyticsSocialAccount401Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount403Error1(
            out var apiV1AnalyticsSocialAccount403Error1Value)) onApiV1AnalyticsSocialAccount403Error1(
            apiV1AnalyticsSocialAccount403Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount404Error1(
            out var apiV1AnalyticsSocialAccount404Error1Value)) onApiV1AnalyticsSocialAccount404Error1(
            apiV1AnalyticsSocialAccount404Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount429Error1(
            out var apiV1AnalyticsSocialAccount429Error1Value)) onApiV1AnalyticsSocialAccount429Error1(
            apiV1AnalyticsSocialAccount429Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount500Error1(
            out var apiV1AnalyticsSocialAccount500Error1Value)) onApiV1AnalyticsSocialAccount500Error1(
            apiV1AnalyticsSocialAccount500Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount502Error1(
            out var apiV1AnalyticsSocialAccount502Error1Value)) onApiV1AnalyticsSocialAccount502Error1(
            apiV1AnalyticsSocialAccount502Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount503Error1(
            out var apiV1AnalyticsSocialAccount503Error1Value)) onApiV1AnalyticsSocialAccount503Error1(
            apiV1AnalyticsSocialAccount503Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccount504Error1(
            out var apiV1AnalyticsSocialAccount504Error1Value)) onApiV1AnalyticsSocialAccount504Error1(
            apiV1AnalyticsSocialAccount504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AnalyticsGetSocialAccountAnalyticsError)} holds no value.");
    }

    private static Task<AnalyticsGetSocialAccountAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsSocialAccount400Error1>().As(AsApiV1AnalyticsSocialAccount400Error1),
            401 => response.Json<ApiV1AnalyticsSocialAccount401Error1>().As(AsApiV1AnalyticsSocialAccount401Error1),
            403 => response.Json<ApiV1AnalyticsSocialAccount403Error1>().As(AsApiV1AnalyticsSocialAccount403Error1),
            404 => response.Json<ApiV1AnalyticsSocialAccount404Error1>().As(AsApiV1AnalyticsSocialAccount404Error1),
            429 => response.Json<ApiV1AnalyticsSocialAccount429Error1>().As(AsApiV1AnalyticsSocialAccount429Error1),
            500 => response.Json<ApiV1AnalyticsSocialAccount500Error1>().As(AsApiV1AnalyticsSocialAccount500Error1),
            502 => response.Json<ApiV1AnalyticsSocialAccount502Error1>().As(AsApiV1AnalyticsSocialAccount502Error1),
            503 => response.Json<ApiV1AnalyticsSocialAccount503Error1>().As(AsApiV1AnalyticsSocialAccount503Error1),
            504 => response.Json<ApiV1AnalyticsSocialAccount504Error1>().As(AsApiV1AnalyticsSocialAccount504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsGetSocialAccountAnalyticsError> Response { get; } = new(Create);
}
