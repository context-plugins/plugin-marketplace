using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsForceSocialAccountAnalyticsError : ApiError
{
    private readonly Optional<ApiV1AnalyticsSocialAccountForce400Error1> _apiV1AnalyticsSocialAccountForce400Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce401Error1> _apiV1AnalyticsSocialAccountForce401Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce403Error1> _apiV1AnalyticsSocialAccountForce403Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce404Error1> _apiV1AnalyticsSocialAccountForce404Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce429Error1> _apiV1AnalyticsSocialAccountForce429Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce500Error1> _apiV1AnalyticsSocialAccountForce500Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce502Error1> _apiV1AnalyticsSocialAccountForce502Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce503Error1> _apiV1AnalyticsSocialAccountForce503Error1Value;

    private readonly Optional<ApiV1AnalyticsSocialAccountForce504Error1> _apiV1AnalyticsSocialAccountForce504Error1Value;

    private AnalyticsForceSocialAccountAnalyticsError(Optional<ApiV1AnalyticsSocialAccountForce400Error1> apiV1AnalyticsSocialAccountForce400Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce401Error1> apiV1AnalyticsSocialAccountForce401Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce403Error1> apiV1AnalyticsSocialAccountForce403Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce404Error1> apiV1AnalyticsSocialAccountForce404Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce429Error1> apiV1AnalyticsSocialAccountForce429Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce500Error1> apiV1AnalyticsSocialAccountForce500Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce502Error1> apiV1AnalyticsSocialAccountForce502Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce503Error1> apiV1AnalyticsSocialAccountForce503Error1Value,
        Optional<ApiV1AnalyticsSocialAccountForce504Error1> apiV1AnalyticsSocialAccountForce504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsSocialAccountForce400Error1Value = apiV1AnalyticsSocialAccountForce400Error1Value;
        _apiV1AnalyticsSocialAccountForce401Error1Value = apiV1AnalyticsSocialAccountForce401Error1Value;
        _apiV1AnalyticsSocialAccountForce403Error1Value = apiV1AnalyticsSocialAccountForce403Error1Value;
        _apiV1AnalyticsSocialAccountForce404Error1Value = apiV1AnalyticsSocialAccountForce404Error1Value;
        _apiV1AnalyticsSocialAccountForce429Error1Value = apiV1AnalyticsSocialAccountForce429Error1Value;
        _apiV1AnalyticsSocialAccountForce500Error1Value = apiV1AnalyticsSocialAccountForce500Error1Value;
        _apiV1AnalyticsSocialAccountForce502Error1Value = apiV1AnalyticsSocialAccountForce502Error1Value;
        _apiV1AnalyticsSocialAccountForce503Error1Value = apiV1AnalyticsSocialAccountForce503Error1Value;
        _apiV1AnalyticsSocialAccountForce504Error1Value = apiV1AnalyticsSocialAccountForce504Error1Value;
    }

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce400Error1(ApiV1AnalyticsSocialAccountForce400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsSocialAccountForce400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce401Error1(ApiV1AnalyticsSocialAccountForce401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsSocialAccountForce401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce403Error1(ApiV1AnalyticsSocialAccountForce403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce404Error1(ApiV1AnalyticsSocialAccountForce404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce429Error1(ApiV1AnalyticsSocialAccountForce429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce500Error1(ApiV1AnalyticsSocialAccountForce500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce502Error1(ApiV1AnalyticsSocialAccountForce502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce503Error1(ApiV1AnalyticsSocialAccountForce503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce503Error1>.Some(value),
            default,
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsApiV1AnalyticsSocialAccountForce504Error1(ApiV1AnalyticsSocialAccountForce504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsSocialAccountForce504Error1>.Some(value),
            default);

    private static AnalyticsForceSocialAccountAnalyticsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsSocialAccountForce400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce400Error1? value) =>
        _apiV1AnalyticsSocialAccountForce400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce401Error1? value) =>
        _apiV1AnalyticsSocialAccountForce401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce403Error1? value) =>
        _apiV1AnalyticsSocialAccountForce403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce404Error1? value) =>
        _apiV1AnalyticsSocialAccountForce404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce429Error1? value) =>
        _apiV1AnalyticsSocialAccountForce429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce500Error1? value) =>
        _apiV1AnalyticsSocialAccountForce500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce502Error1? value) =>
        _apiV1AnalyticsSocialAccountForce502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce503Error1? value) =>
        _apiV1AnalyticsSocialAccountForce503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsSocialAccountForce504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce504Error1? value) =>
        _apiV1AnalyticsSocialAccountForce504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsSocialAccountForce400Error1, TResult> onApiV1AnalyticsSocialAccountForce400Error1,
        Func<ApiV1AnalyticsSocialAccountForce401Error1, TResult> onApiV1AnalyticsSocialAccountForce401Error1,
        Func<ApiV1AnalyticsSocialAccountForce403Error1, TResult> onApiV1AnalyticsSocialAccountForce403Error1,
        Func<ApiV1AnalyticsSocialAccountForce404Error1, TResult> onApiV1AnalyticsSocialAccountForce404Error1,
        Func<ApiV1AnalyticsSocialAccountForce429Error1, TResult> onApiV1AnalyticsSocialAccountForce429Error1,
        Func<ApiV1AnalyticsSocialAccountForce500Error1, TResult> onApiV1AnalyticsSocialAccountForce500Error1,
        Func<ApiV1AnalyticsSocialAccountForce502Error1, TResult> onApiV1AnalyticsSocialAccountForce502Error1,
        Func<ApiV1AnalyticsSocialAccountForce503Error1, TResult> onApiV1AnalyticsSocialAccountForce503Error1,
        Func<ApiV1AnalyticsSocialAccountForce504Error1, TResult> onApiV1AnalyticsSocialAccountForce504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsSocialAccountForce400Error1(
                out var apiV1AnalyticsSocialAccountForce400Error1Value) => onApiV1AnalyticsSocialAccountForce400Error1(
                apiV1AnalyticsSocialAccountForce400Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce401Error1(
                out var apiV1AnalyticsSocialAccountForce401Error1Value) => onApiV1AnalyticsSocialAccountForce401Error1(
                apiV1AnalyticsSocialAccountForce401Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce403Error1(
                out var apiV1AnalyticsSocialAccountForce403Error1Value) => onApiV1AnalyticsSocialAccountForce403Error1(
                apiV1AnalyticsSocialAccountForce403Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce404Error1(
                out var apiV1AnalyticsSocialAccountForce404Error1Value) => onApiV1AnalyticsSocialAccountForce404Error1(
                apiV1AnalyticsSocialAccountForce404Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce429Error1(
                out var apiV1AnalyticsSocialAccountForce429Error1Value) => onApiV1AnalyticsSocialAccountForce429Error1(
                apiV1AnalyticsSocialAccountForce429Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce500Error1(
                out var apiV1AnalyticsSocialAccountForce500Error1Value) => onApiV1AnalyticsSocialAccountForce500Error1(
                apiV1AnalyticsSocialAccountForce500Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce502Error1(
                out var apiV1AnalyticsSocialAccountForce502Error1Value) => onApiV1AnalyticsSocialAccountForce502Error1(
                apiV1AnalyticsSocialAccountForce502Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce503Error1(
                out var apiV1AnalyticsSocialAccountForce503Error1Value) => onApiV1AnalyticsSocialAccountForce503Error1(
                apiV1AnalyticsSocialAccountForce503Error1Value),
            _ when TryGetApiV1AnalyticsSocialAccountForce504Error1(
                out var apiV1AnalyticsSocialAccountForce504Error1Value) => onApiV1AnalyticsSocialAccountForce504Error1(
                apiV1AnalyticsSocialAccountForce504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(AnalyticsForceSocialAccountAnalyticsError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsSocialAccountForce400Error1> onApiV1AnalyticsSocialAccountForce400Error1,
        Action<ApiV1AnalyticsSocialAccountForce401Error1> onApiV1AnalyticsSocialAccountForce401Error1,
        Action<ApiV1AnalyticsSocialAccountForce403Error1> onApiV1AnalyticsSocialAccountForce403Error1,
        Action<ApiV1AnalyticsSocialAccountForce404Error1> onApiV1AnalyticsSocialAccountForce404Error1,
        Action<ApiV1AnalyticsSocialAccountForce429Error1> onApiV1AnalyticsSocialAccountForce429Error1,
        Action<ApiV1AnalyticsSocialAccountForce500Error1> onApiV1AnalyticsSocialAccountForce500Error1,
        Action<ApiV1AnalyticsSocialAccountForce502Error1> onApiV1AnalyticsSocialAccountForce502Error1,
        Action<ApiV1AnalyticsSocialAccountForce503Error1> onApiV1AnalyticsSocialAccountForce503Error1,
        Action<ApiV1AnalyticsSocialAccountForce504Error1> onApiV1AnalyticsSocialAccountForce504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsSocialAccountForce400Error1(
            out var apiV1AnalyticsSocialAccountForce400Error1Value)) onApiV1AnalyticsSocialAccountForce400Error1(
            apiV1AnalyticsSocialAccountForce400Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce401Error1(
            out var apiV1AnalyticsSocialAccountForce401Error1Value)) onApiV1AnalyticsSocialAccountForce401Error1(
            apiV1AnalyticsSocialAccountForce401Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce403Error1(
            out var apiV1AnalyticsSocialAccountForce403Error1Value)) onApiV1AnalyticsSocialAccountForce403Error1(
            apiV1AnalyticsSocialAccountForce403Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce404Error1(
            out var apiV1AnalyticsSocialAccountForce404Error1Value)) onApiV1AnalyticsSocialAccountForce404Error1(
            apiV1AnalyticsSocialAccountForce404Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce429Error1(
            out var apiV1AnalyticsSocialAccountForce429Error1Value)) onApiV1AnalyticsSocialAccountForce429Error1(
            apiV1AnalyticsSocialAccountForce429Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce500Error1(
            out var apiV1AnalyticsSocialAccountForce500Error1Value)) onApiV1AnalyticsSocialAccountForce500Error1(
            apiV1AnalyticsSocialAccountForce500Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce502Error1(
            out var apiV1AnalyticsSocialAccountForce502Error1Value)) onApiV1AnalyticsSocialAccountForce502Error1(
            apiV1AnalyticsSocialAccountForce502Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce503Error1(
            out var apiV1AnalyticsSocialAccountForce503Error1Value)) onApiV1AnalyticsSocialAccountForce503Error1(
            apiV1AnalyticsSocialAccountForce503Error1Value);
        else if (TryGetApiV1AnalyticsSocialAccountForce504Error1(
            out var apiV1AnalyticsSocialAccountForce504Error1Value)) onApiV1AnalyticsSocialAccountForce504Error1(
            apiV1AnalyticsSocialAccountForce504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(AnalyticsForceSocialAccountAnalyticsError)} holds no value.");
    }

    private static Task<AnalyticsForceSocialAccountAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsSocialAccountForce400Error1>().As(
                AsApiV1AnalyticsSocialAccountForce400Error1),
            401 => response.Json<ApiV1AnalyticsSocialAccountForce401Error1>().As(
                AsApiV1AnalyticsSocialAccountForce401Error1),
            403 => response.Json<ApiV1AnalyticsSocialAccountForce403Error1>().As(
                AsApiV1AnalyticsSocialAccountForce403Error1),
            404 => response.Json<ApiV1AnalyticsSocialAccountForce404Error1>().As(
                AsApiV1AnalyticsSocialAccountForce404Error1),
            429 => response.Json<ApiV1AnalyticsSocialAccountForce429Error1>().As(
                AsApiV1AnalyticsSocialAccountForce429Error1),
            500 => response.Json<ApiV1AnalyticsSocialAccountForce500Error1>().As(
                AsApiV1AnalyticsSocialAccountForce500Error1),
            502 => response.Json<ApiV1AnalyticsSocialAccountForce502Error1>().As(
                AsApiV1AnalyticsSocialAccountForce502Error1),
            503 => response.Json<ApiV1AnalyticsSocialAccountForce503Error1>().As(
                AsApiV1AnalyticsSocialAccountForce503Error1),
            504 => response.Json<ApiV1AnalyticsSocialAccountForce504Error1>().As(
                AsApiV1AnalyticsSocialAccountForce504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsForceSocialAccountAnalyticsError> Response { get; } = new(Create);
}
