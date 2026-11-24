using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetDailyLimitsUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsageDailyLimits400Error1> _apiV1OrganizationUsageDailyLimits400Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits401Error1> _apiV1OrganizationUsageDailyLimits401Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits403Error1> _apiV1OrganizationUsageDailyLimits403Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits404Error1> _apiV1OrganizationUsageDailyLimits404Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits429Error1> _apiV1OrganizationUsageDailyLimits429Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits500Error1> _apiV1OrganizationUsageDailyLimits500Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits502Error1> _apiV1OrganizationUsageDailyLimits502Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits503Error1> _apiV1OrganizationUsageDailyLimits503Error1Value;

    private readonly Optional<ApiV1OrganizationUsageDailyLimits504Error1> _apiV1OrganizationUsageDailyLimits504Error1Value;

    private OrganizationGetDailyLimitsUsageError(Optional<ApiV1OrganizationUsageDailyLimits400Error1> apiV1OrganizationUsageDailyLimits400Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits401Error1> apiV1OrganizationUsageDailyLimits401Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits403Error1> apiV1OrganizationUsageDailyLimits403Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits404Error1> apiV1OrganizationUsageDailyLimits404Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits429Error1> apiV1OrganizationUsageDailyLimits429Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits500Error1> apiV1OrganizationUsageDailyLimits500Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits502Error1> apiV1OrganizationUsageDailyLimits502Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits503Error1> apiV1OrganizationUsageDailyLimits503Error1Value,
        Optional<ApiV1OrganizationUsageDailyLimits504Error1> apiV1OrganizationUsageDailyLimits504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsageDailyLimits400Error1Value = apiV1OrganizationUsageDailyLimits400Error1Value;
        _apiV1OrganizationUsageDailyLimits401Error1Value = apiV1OrganizationUsageDailyLimits401Error1Value;
        _apiV1OrganizationUsageDailyLimits403Error1Value = apiV1OrganizationUsageDailyLimits403Error1Value;
        _apiV1OrganizationUsageDailyLimits404Error1Value = apiV1OrganizationUsageDailyLimits404Error1Value;
        _apiV1OrganizationUsageDailyLimits429Error1Value = apiV1OrganizationUsageDailyLimits429Error1Value;
        _apiV1OrganizationUsageDailyLimits500Error1Value = apiV1OrganizationUsageDailyLimits500Error1Value;
        _apiV1OrganizationUsageDailyLimits502Error1Value = apiV1OrganizationUsageDailyLimits502Error1Value;
        _apiV1OrganizationUsageDailyLimits503Error1Value = apiV1OrganizationUsageDailyLimits503Error1Value;
        _apiV1OrganizationUsageDailyLimits504Error1Value = apiV1OrganizationUsageDailyLimits504Error1Value;
    }

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits400Error1(ApiV1OrganizationUsageDailyLimits400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsageDailyLimits400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits401Error1(ApiV1OrganizationUsageDailyLimits401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsageDailyLimits401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits403Error1(ApiV1OrganizationUsageDailyLimits403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits404Error1(ApiV1OrganizationUsageDailyLimits404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits429Error1(ApiV1OrganizationUsageDailyLimits429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits500Error1(ApiV1OrganizationUsageDailyLimits500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits502Error1(ApiV1OrganizationUsageDailyLimits502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits503Error1(ApiV1OrganizationUsageDailyLimits503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetDailyLimitsUsageError AsApiV1OrganizationUsageDailyLimits504Error1(ApiV1OrganizationUsageDailyLimits504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageDailyLimits504Error1>.Some(value),
            default);

    private static OrganizationGetDailyLimitsUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsageDailyLimits400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits400Error1? value) =>
        _apiV1OrganizationUsageDailyLimits400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits401Error1? value) =>
        _apiV1OrganizationUsageDailyLimits401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits403Error1? value) =>
        _apiV1OrganizationUsageDailyLimits403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits404Error1? value) =>
        _apiV1OrganizationUsageDailyLimits404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits429Error1? value) =>
        _apiV1OrganizationUsageDailyLimits429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits500Error1? value) =>
        _apiV1OrganizationUsageDailyLimits500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits502Error1? value) =>
        _apiV1OrganizationUsageDailyLimits502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits503Error1? value) =>
        _apiV1OrganizationUsageDailyLimits503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageDailyLimits504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits504Error1? value) =>
        _apiV1OrganizationUsageDailyLimits504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsageDailyLimits400Error1, TResult> onApiV1OrganizationUsageDailyLimits400Error1,
        Func<ApiV1OrganizationUsageDailyLimits401Error1, TResult> onApiV1OrganizationUsageDailyLimits401Error1,
        Func<ApiV1OrganizationUsageDailyLimits403Error1, TResult> onApiV1OrganizationUsageDailyLimits403Error1,
        Func<ApiV1OrganizationUsageDailyLimits404Error1, TResult> onApiV1OrganizationUsageDailyLimits404Error1,
        Func<ApiV1OrganizationUsageDailyLimits429Error1, TResult> onApiV1OrganizationUsageDailyLimits429Error1,
        Func<ApiV1OrganizationUsageDailyLimits500Error1, TResult> onApiV1OrganizationUsageDailyLimits500Error1,
        Func<ApiV1OrganizationUsageDailyLimits502Error1, TResult> onApiV1OrganizationUsageDailyLimits502Error1,
        Func<ApiV1OrganizationUsageDailyLimits503Error1, TResult> onApiV1OrganizationUsageDailyLimits503Error1,
        Func<ApiV1OrganizationUsageDailyLimits504Error1, TResult> onApiV1OrganizationUsageDailyLimits504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsageDailyLimits400Error1(
                out var apiV1OrganizationUsageDailyLimits400Error1Value) => onApiV1OrganizationUsageDailyLimits400Error1(
                apiV1OrganizationUsageDailyLimits400Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits401Error1(
                out var apiV1OrganizationUsageDailyLimits401Error1Value) => onApiV1OrganizationUsageDailyLimits401Error1(
                apiV1OrganizationUsageDailyLimits401Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits403Error1(
                out var apiV1OrganizationUsageDailyLimits403Error1Value) => onApiV1OrganizationUsageDailyLimits403Error1(
                apiV1OrganizationUsageDailyLimits403Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits404Error1(
                out var apiV1OrganizationUsageDailyLimits404Error1Value) => onApiV1OrganizationUsageDailyLimits404Error1(
                apiV1OrganizationUsageDailyLimits404Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits429Error1(
                out var apiV1OrganizationUsageDailyLimits429Error1Value) => onApiV1OrganizationUsageDailyLimits429Error1(
                apiV1OrganizationUsageDailyLimits429Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits500Error1(
                out var apiV1OrganizationUsageDailyLimits500Error1Value) => onApiV1OrganizationUsageDailyLimits500Error1(
                apiV1OrganizationUsageDailyLimits500Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits502Error1(
                out var apiV1OrganizationUsageDailyLimits502Error1Value) => onApiV1OrganizationUsageDailyLimits502Error1(
                apiV1OrganizationUsageDailyLimits502Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits503Error1(
                out var apiV1OrganizationUsageDailyLimits503Error1Value) => onApiV1OrganizationUsageDailyLimits503Error1(
                apiV1OrganizationUsageDailyLimits503Error1Value),
            _ when TryGetApiV1OrganizationUsageDailyLimits504Error1(
                out var apiV1OrganizationUsageDailyLimits504Error1Value) => onApiV1OrganizationUsageDailyLimits504Error1(
                apiV1OrganizationUsageDailyLimits504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetDailyLimitsUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsageDailyLimits400Error1> onApiV1OrganizationUsageDailyLimits400Error1,
        Action<ApiV1OrganizationUsageDailyLimits401Error1> onApiV1OrganizationUsageDailyLimits401Error1,
        Action<ApiV1OrganizationUsageDailyLimits403Error1> onApiV1OrganizationUsageDailyLimits403Error1,
        Action<ApiV1OrganizationUsageDailyLimits404Error1> onApiV1OrganizationUsageDailyLimits404Error1,
        Action<ApiV1OrganizationUsageDailyLimits429Error1> onApiV1OrganizationUsageDailyLimits429Error1,
        Action<ApiV1OrganizationUsageDailyLimits500Error1> onApiV1OrganizationUsageDailyLimits500Error1,
        Action<ApiV1OrganizationUsageDailyLimits502Error1> onApiV1OrganizationUsageDailyLimits502Error1,
        Action<ApiV1OrganizationUsageDailyLimits503Error1> onApiV1OrganizationUsageDailyLimits503Error1,
        Action<ApiV1OrganizationUsageDailyLimits504Error1> onApiV1OrganizationUsageDailyLimits504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsageDailyLimits400Error1(
            out var apiV1OrganizationUsageDailyLimits400Error1Value)) onApiV1OrganizationUsageDailyLimits400Error1(
            apiV1OrganizationUsageDailyLimits400Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits401Error1(
            out var apiV1OrganizationUsageDailyLimits401Error1Value)) onApiV1OrganizationUsageDailyLimits401Error1(
            apiV1OrganizationUsageDailyLimits401Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits403Error1(
            out var apiV1OrganizationUsageDailyLimits403Error1Value)) onApiV1OrganizationUsageDailyLimits403Error1(
            apiV1OrganizationUsageDailyLimits403Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits404Error1(
            out var apiV1OrganizationUsageDailyLimits404Error1Value)) onApiV1OrganizationUsageDailyLimits404Error1(
            apiV1OrganizationUsageDailyLimits404Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits429Error1(
            out var apiV1OrganizationUsageDailyLimits429Error1Value)) onApiV1OrganizationUsageDailyLimits429Error1(
            apiV1OrganizationUsageDailyLimits429Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits500Error1(
            out var apiV1OrganizationUsageDailyLimits500Error1Value)) onApiV1OrganizationUsageDailyLimits500Error1(
            apiV1OrganizationUsageDailyLimits500Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits502Error1(
            out var apiV1OrganizationUsageDailyLimits502Error1Value)) onApiV1OrganizationUsageDailyLimits502Error1(
            apiV1OrganizationUsageDailyLimits502Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits503Error1(
            out var apiV1OrganizationUsageDailyLimits503Error1Value)) onApiV1OrganizationUsageDailyLimits503Error1(
            apiV1OrganizationUsageDailyLimits503Error1Value);
        else if (TryGetApiV1OrganizationUsageDailyLimits504Error1(
            out var apiV1OrganizationUsageDailyLimits504Error1Value)) onApiV1OrganizationUsageDailyLimits504Error1(
            apiV1OrganizationUsageDailyLimits504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetDailyLimitsUsageError)} holds no value.");
    }

    private static Task<OrganizationGetDailyLimitsUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsageDailyLimits400Error1>().As(
                AsApiV1OrganizationUsageDailyLimits400Error1),
            401 => response.Json<ApiV1OrganizationUsageDailyLimits401Error1>().As(
                AsApiV1OrganizationUsageDailyLimits401Error1),
            403 => response.Json<ApiV1OrganizationUsageDailyLimits403Error1>().As(
                AsApiV1OrganizationUsageDailyLimits403Error1),
            404 => response.Json<ApiV1OrganizationUsageDailyLimits404Error1>().As(
                AsApiV1OrganizationUsageDailyLimits404Error1),
            429 => response.Json<ApiV1OrganizationUsageDailyLimits429Error1>().As(
                AsApiV1OrganizationUsageDailyLimits429Error1),
            500 => response.Json<ApiV1OrganizationUsageDailyLimits500Error1>().As(
                AsApiV1OrganizationUsageDailyLimits500Error1),
            502 => response.Json<ApiV1OrganizationUsageDailyLimits502Error1>().As(
                AsApiV1OrganizationUsageDailyLimits502Error1),
            503 => response.Json<ApiV1OrganizationUsageDailyLimits503Error1>().As(
                AsApiV1OrganizationUsageDailyLimits503Error1),
            504 => response.Json<ApiV1OrganizationUsageDailyLimits504Error1>().As(
                AsApiV1OrganizationUsageDailyLimits504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetDailyLimitsUsageError> Response { get; } = new(Create);
}
