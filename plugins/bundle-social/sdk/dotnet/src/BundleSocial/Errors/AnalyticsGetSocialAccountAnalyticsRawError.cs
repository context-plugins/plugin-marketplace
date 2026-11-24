using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsGetSocialAccountAnalyticsRawError : ApiError
{
    private readonly Optional<ApiV1AnalyticsSocialAccountRaw400Error1> _apiV1AnalyticsSocialAccountRaw400Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw401Error1> _apiV1AnalyticsSocialAccountRaw401Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw403Error1> _apiV1AnalyticsSocialAccountRaw403Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw404Error1> _apiV1AnalyticsSocialAccountRaw404Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw429Error1> _apiV1AnalyticsSocialAccountRaw429Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw500Error1> _apiV1AnalyticsSocialAccountRaw500Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw502Error1> _apiV1AnalyticsSocialAccountRaw502Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw503Error1> _apiV1AnalyticsSocialAccountRaw503Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountRaw504Error1> _apiV1AnalyticsSocialAccountRaw504Error1Value;

    private AnalyticsGetSocialAccountAnalyticsRawError(Optional<ApiV1AnalyticsSocialAccountRaw400Error1> apiV1AnalyticsSocialAccountRaw400Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw401Error1> apiV1AnalyticsSocialAccountRaw401Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw403Error1> apiV1AnalyticsSocialAccountRaw403Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw404Error1> apiV1AnalyticsSocialAccountRaw404Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw429Error1> apiV1AnalyticsSocialAccountRaw429Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw500Error1> apiV1AnalyticsSocialAccountRaw500Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw502Error1> apiV1AnalyticsSocialAccountRaw502Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw503Error1> apiV1AnalyticsSocialAccountRaw503Error1Value,
        Optional<ApiV1AnalyticsSocialAccountRaw504Error1> apiV1AnalyticsSocialAccountRaw504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsSocialAccountRaw400Error1Value = apiV1AnalyticsSocialAccountRaw400Error1Value;
        _apiV1AnalyticsSocialAccountRaw401Error1Value = apiV1AnalyticsSocialAccountRaw401Error1Value;
        _apiV1AnalyticsSocialAccountRaw403Error1Value = apiV1AnalyticsSocialAccountRaw403Error1Value;
        _apiV1AnalyticsSocialAccountRaw404Error1Value = apiV1AnalyticsSocialAccountRaw404Error1Value;
        _apiV1AnalyticsSocialAccountRaw429Error1Value = apiV1AnalyticsSocialAccountRaw429Error1Value;
        _apiV1AnalyticsSocialAccountRaw500Error1Value = apiV1AnalyticsSocialAccountRaw500Error1Value;
        _apiV1AnalyticsSocialAccountRaw502Error1Value = apiV1AnalyticsSocialAccountRaw502Error1Value;
        _apiV1AnalyticsSocialAccountRaw503Error1Value = apiV1AnalyticsSocialAccountRaw503Error1Value;
        _apiV1AnalyticsSocialAccountRaw504Error1Value = apiV1AnalyticsSocialAccountRaw504Error1Value;
    }

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw400Error1(ApiV1AnalyticsSocialAccountRaw400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsSocialAccountRaw400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw401Error1(ApiV1AnalyticsSocialAccountRaw401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw403Error1(ApiV1AnalyticsSocialAccountRaw403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw404Error1(ApiV1AnalyticsSocialAccountRaw404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw429Error1(ApiV1AnalyticsSocialAccountRaw429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw500Error1(ApiV1AnalyticsSocialAccountRaw500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw502Error1(ApiV1AnalyticsSocialAccountRaw502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw503Error1(ApiV1AnalyticsSocialAccountRaw503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw503Error1>.Some(value),
            default,
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsApiV1AnalyticsSocialAccountRaw504Error1(ApiV1AnalyticsSocialAccountRaw504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountRaw504Error1>.Some(value),
            default);

    private static AnalyticsGetSocialAccountAnalyticsRawError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsSocialAccountRaw400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw400Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw401Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw403Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw404Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw429Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw500Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw502Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw503Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountRaw504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw504Error1? value) =>
        _apiV1AnalyticsSocialAccountRaw504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsSocialAccountRaw400Error1, TResult> onApiV1AnalyticsSocialAccountRaw400Error1,
        Func<ApiV1AnalyticsSocialAccountRaw401Error1, TResult> onApiV1AnalyticsSocialAccountRaw401Error1,
        Func<ApiV1AnalyticsSocialAccountRaw403Error1, TResult> onApiV1AnalyticsSocialAccountRaw403Error1,
        Func<ApiV1AnalyticsSocialAccountRaw404Error1, TResult> onApiV1AnalyticsSocialAccountRaw404Error1,
        Func<ApiV1AnalyticsSocialAccountRaw429Error1, TResult> onApiV1AnalyticsSocialAccountRaw429Error1,
        Func<ApiV1AnalyticsSocialAccountRaw500Error1, TResult> onApiV1AnalyticsSocialAccountRaw500Error1,
        Func<ApiV1AnalyticsSocialAccountRaw502Error1, TResult> onApiV1AnalyticsSocialAccountRaw502Error1,
        Func<ApiV1AnalyticsSocialAccountRaw503Error1, TResult> onApiV1AnalyticsSocialAccountRaw503Error1,
        Func<ApiV1AnalyticsSocialAccountRaw504Error1, TResult> onApiV1AnalyticsSocialAccountRaw504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsSocialAccountRaw400Error1(
                out var apiV1AnalyticsSocialAccountRaw400Error1Value) => onApiV1AnalyticsSocialAccountRaw400Error1(
                apiV1AnalyticsSocialAccountRaw400Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw401Error1(
                out var apiV1AnalyticsSocialAccountRaw401Error1Value) => onApiV1AnalyticsSocialAccountRaw401Error1(
                apiV1AnalyticsSocialAccountRaw401Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw403Error1(
                out var apiV1AnalyticsSocialAccountRaw403Error1Value) => onApiV1AnalyticsSocialAccountRaw403Error1(
                apiV1AnalyticsSocialAccountRaw403Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw404Error1(
                out var apiV1AnalyticsSocialAccountRaw404Error1Value) => onApiV1AnalyticsSocialAccountRaw404Error1(
                apiV1AnalyticsSocialAccountRaw404Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw429Error1(
                out var apiV1AnalyticsSocialAccountRaw429Error1Value) => onApiV1AnalyticsSocialAccountRaw429Error1(
                apiV1AnalyticsSocialAccountRaw429Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw500Error1(
                out var apiV1AnalyticsSocialAccountRaw500Error1Value) => onApiV1AnalyticsSocialAccountRaw500Error1(
                apiV1AnalyticsSocialAccountRaw500Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw502Error1(
                out var apiV1AnalyticsSocialAccountRaw502Error1Value) => onApiV1AnalyticsSocialAccountRaw502Error1(
                apiV1AnalyticsSocialAccountRaw502Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw503Error1(
                out var apiV1AnalyticsSocialAccountRaw503Error1Value) => onApiV1AnalyticsSocialAccountRaw503Error1(
                apiV1AnalyticsSocialAccountRaw503Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountRaw504Error1(
                out var apiV1AnalyticsSocialAccountRaw504Error1Value) => onApiV1AnalyticsSocialAccountRaw504Error1(
                apiV1AnalyticsSocialAccountRaw504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(AnalyticsGetSocialAccountAnalyticsRawError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsSocialAccountRaw400Error1> onApiV1AnalyticsSocialAccountRaw400Error1,
        Action<ApiV1AnalyticsSocialAccountRaw401Error1> onApiV1AnalyticsSocialAccountRaw401Error1,
        Action<ApiV1AnalyticsSocialAccountRaw403Error1> onApiV1AnalyticsSocialAccountRaw403Error1,
        Action<ApiV1AnalyticsSocialAccountRaw404Error1> onApiV1AnalyticsSocialAccountRaw404Error1,
        Action<ApiV1AnalyticsSocialAccountRaw429Error1> onApiV1AnalyticsSocialAccountRaw429Error1,
        Action<ApiV1AnalyticsSocialAccountRaw500Error1> onApiV1AnalyticsSocialAccountRaw500Error1,
        Action<ApiV1AnalyticsSocialAccountRaw502Error1> onApiV1AnalyticsSocialAccountRaw502Error1,
        Action<ApiV1AnalyticsSocialAccountRaw503Error1> onApiV1AnalyticsSocialAccountRaw503Error1,
        Action<ApiV1AnalyticsSocialAccountRaw504Error1> onApiV1AnalyticsSocialAccountRaw504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsSocialAccountRaw400Error1(
            out var apiV1AnalyticsSocialAccountRaw400Error1Value)) onApiV1AnalyticsSocialAccountRaw400Error1(
            apiV1AnalyticsSocialAccountRaw400Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw401Error1(
            out var apiV1AnalyticsSocialAccountRaw401Error1Value)) onApiV1AnalyticsSocialAccountRaw401Error1(
            apiV1AnalyticsSocialAccountRaw401Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw403Error1(
            out var apiV1AnalyticsSocialAccountRaw403Error1Value)) onApiV1AnalyticsSocialAccountRaw403Error1(
            apiV1AnalyticsSocialAccountRaw403Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw404Error1(
            out var apiV1AnalyticsSocialAccountRaw404Error1Value)) onApiV1AnalyticsSocialAccountRaw404Error1(
            apiV1AnalyticsSocialAccountRaw404Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw429Error1(
            out var apiV1AnalyticsSocialAccountRaw429Error1Value)) onApiV1AnalyticsSocialAccountRaw429Error1(
            apiV1AnalyticsSocialAccountRaw429Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw500Error1(
            out var apiV1AnalyticsSocialAccountRaw500Error1Value)) onApiV1AnalyticsSocialAccountRaw500Error1(
            apiV1AnalyticsSocialAccountRaw500Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw502Error1(
            out var apiV1AnalyticsSocialAccountRaw502Error1Value)) onApiV1AnalyticsSocialAccountRaw502Error1(
            apiV1AnalyticsSocialAccountRaw502Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw503Error1(
            out var apiV1AnalyticsSocialAccountRaw503Error1Value)) onApiV1AnalyticsSocialAccountRaw503Error1(
            apiV1AnalyticsSocialAccountRaw503Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountRaw504Error1(
            out var apiV1AnalyticsSocialAccountRaw504Error1Value)) onApiV1AnalyticsSocialAccountRaw504Error1(
            apiV1AnalyticsSocialAccountRaw504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(AnalyticsGetSocialAccountAnalyticsRawError)} holds no value.");
    }

    private static Task<AnalyticsGetSocialAccountAnalyticsRawError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsSocialAccountRaw400Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw400Error1),
            401 => response.Json<ApiV1AnalyticsSocialAccountRaw401Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw401Error1),
            403 => response.Json<ApiV1AnalyticsSocialAccountRaw403Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw403Error1),
            404 => response.Json<ApiV1AnalyticsSocialAccountRaw404Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw404Error1),
            429 => response.Json<ApiV1AnalyticsSocialAccountRaw429Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw429Error1),
            500 => response.Json<ApiV1AnalyticsSocialAccountRaw500Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw500Error1),
            502 => response.Json<ApiV1AnalyticsSocialAccountRaw502Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw502Error1),
            503 => response.Json<ApiV1AnalyticsSocialAccountRaw503Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw503Error1),
            504 => response.Json<ApiV1AnalyticsSocialAccountRaw504Error1>().As(
                AsApiV1AnalyticsSocialAccountRaw504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsGetSocialAccountAnalyticsRawError> Response { get; } = new(Create);
}
