using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsForcePostAnalyticsError : ApiError
{
    private readonly Optional<ApiV1AnalyticsPostForce400Error1> _apiV1AnalyticsPostForce400Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce401Error1> _apiV1AnalyticsPostForce401Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce403Error1> _apiV1AnalyticsPostForce403Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce404Error1> _apiV1AnalyticsPostForce404Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce429Error1> _apiV1AnalyticsPostForce429Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce500Error1> _apiV1AnalyticsPostForce500Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce502Error1> _apiV1AnalyticsPostForce502Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce503Error1> _apiV1AnalyticsPostForce503Error1Value;

    private readonly Optional<ApiV1AnalyticsPostForce504Error1> _apiV1AnalyticsPostForce504Error1Value;

    private AnalyticsForcePostAnalyticsError(Optional<ApiV1AnalyticsPostForce400Error1> apiV1AnalyticsPostForce400Error1Value,
        Optional<ApiV1AnalyticsPostForce401Error1> apiV1AnalyticsPostForce401Error1Value,
        Optional<ApiV1AnalyticsPostForce403Error1> apiV1AnalyticsPostForce403Error1Value,
        Optional<ApiV1AnalyticsPostForce404Error1> apiV1AnalyticsPostForce404Error1Value,
        Optional<ApiV1AnalyticsPostForce429Error1> apiV1AnalyticsPostForce429Error1Value,
        Optional<ApiV1AnalyticsPostForce500Error1> apiV1AnalyticsPostForce500Error1Value,
        Optional<ApiV1AnalyticsPostForce502Error1> apiV1AnalyticsPostForce502Error1Value,
        Optional<ApiV1AnalyticsPostForce503Error1> apiV1AnalyticsPostForce503Error1Value,
        Optional<ApiV1AnalyticsPostForce504Error1> apiV1AnalyticsPostForce504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsPostForce400Error1Value = apiV1AnalyticsPostForce400Error1Value;
        _apiV1AnalyticsPostForce401Error1Value = apiV1AnalyticsPostForce401Error1Value;
        _apiV1AnalyticsPostForce403Error1Value = apiV1AnalyticsPostForce403Error1Value;
        _apiV1AnalyticsPostForce404Error1Value = apiV1AnalyticsPostForce404Error1Value;
        _apiV1AnalyticsPostForce429Error1Value = apiV1AnalyticsPostForce429Error1Value;
        _apiV1AnalyticsPostForce500Error1Value = apiV1AnalyticsPostForce500Error1Value;
        _apiV1AnalyticsPostForce502Error1Value = apiV1AnalyticsPostForce502Error1Value;
        _apiV1AnalyticsPostForce503Error1Value = apiV1AnalyticsPostForce503Error1Value;
        _apiV1AnalyticsPostForce504Error1Value = apiV1AnalyticsPostForce504Error1Value;
    }

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce400Error1(ApiV1AnalyticsPostForce400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsPostForce400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce401Error1(ApiV1AnalyticsPostForce401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsPostForce401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce403Error1(ApiV1AnalyticsPostForce403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsPostForce403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce404Error1(ApiV1AnalyticsPostForce404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce429Error1(ApiV1AnalyticsPostForce429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce500Error1(ApiV1AnalyticsPostForce500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce502Error1(ApiV1AnalyticsPostForce502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce503Error1(ApiV1AnalyticsPostForce503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce503Error1>.Some(value),
            default,
            default);

    private static AnalyticsForcePostAnalyticsError AsApiV1AnalyticsPostForce504Error1(ApiV1AnalyticsPostForce504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostForce504Error1>.Some(value),
            default);

    private static AnalyticsForcePostAnalyticsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsPostForce400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce400Error1? value) =>
        _apiV1AnalyticsPostForce400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce401Error1? value) =>
        _apiV1AnalyticsPostForce401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce403Error1? value) =>
        _apiV1AnalyticsPostForce403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce404Error1? value) =>
        _apiV1AnalyticsPostForce404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce429Error1? value) =>
        _apiV1AnalyticsPostForce429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce500Error1? value) =>
        _apiV1AnalyticsPostForce500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce502Error1? value) =>
        _apiV1AnalyticsPostForce502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce503Error1? value) =>
        _apiV1AnalyticsPostForce503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostForce504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce504Error1? value) =>
        _apiV1AnalyticsPostForce504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsPostForce400Error1, TResult> onApiV1AnalyticsPostForce400Error1,
        Func<ApiV1AnalyticsPostForce401Error1, TResult> onApiV1AnalyticsPostForce401Error1,
        Func<ApiV1AnalyticsPostForce403Error1, TResult> onApiV1AnalyticsPostForce403Error1,
        Func<ApiV1AnalyticsPostForce404Error1, TResult> onApiV1AnalyticsPostForce404Error1,
        Func<ApiV1AnalyticsPostForce429Error1, TResult> onApiV1AnalyticsPostForce429Error1,
        Func<ApiV1AnalyticsPostForce500Error1, TResult> onApiV1AnalyticsPostForce500Error1,
        Func<ApiV1AnalyticsPostForce502Error1, TResult> onApiV1AnalyticsPostForce502Error1,
        Func<ApiV1AnalyticsPostForce503Error1, TResult> onApiV1AnalyticsPostForce503Error1,
        Func<ApiV1AnalyticsPostForce504Error1, TResult> onApiV1AnalyticsPostForce504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsPostForce400Error1(
                out var apiV1AnalyticsPostForce400Error1Value) => onApiV1AnalyticsPostForce400Error1(
                apiV1AnalyticsPostForce400Error1Value),
            _ when TryGetApiV1AnalyticsPostForce401Error1(
                out var apiV1AnalyticsPostForce401Error1Value) => onApiV1AnalyticsPostForce401Error1(
                apiV1AnalyticsPostForce401Error1Value),
            _ when TryGetApiV1AnalyticsPostForce403Error1(
                out var apiV1AnalyticsPostForce403Error1Value) => onApiV1AnalyticsPostForce403Error1(
                apiV1AnalyticsPostForce403Error1Value),
            _ when TryGetApiV1AnalyticsPostForce404Error1(
                out var apiV1AnalyticsPostForce404Error1Value) => onApiV1AnalyticsPostForce404Error1(
                apiV1AnalyticsPostForce404Error1Value),
            _ when TryGetApiV1AnalyticsPostForce429Error1(
                out var apiV1AnalyticsPostForce429Error1Value) => onApiV1AnalyticsPostForce429Error1(
                apiV1AnalyticsPostForce429Error1Value),
            _ when TryGetApiV1AnalyticsPostForce500Error1(
                out var apiV1AnalyticsPostForce500Error1Value) => onApiV1AnalyticsPostForce500Error1(
                apiV1AnalyticsPostForce500Error1Value),
            _ when TryGetApiV1AnalyticsPostForce502Error1(
                out var apiV1AnalyticsPostForce502Error1Value) => onApiV1AnalyticsPostForce502Error1(
                apiV1AnalyticsPostForce502Error1Value),
            _ when TryGetApiV1AnalyticsPostForce503Error1(
                out var apiV1AnalyticsPostForce503Error1Value) => onApiV1AnalyticsPostForce503Error1(
                apiV1AnalyticsPostForce503Error1Value),
            _ when TryGetApiV1AnalyticsPostForce504Error1(
                out var apiV1AnalyticsPostForce504Error1Value) => onApiV1AnalyticsPostForce504Error1(
                apiV1AnalyticsPostForce504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AnalyticsForcePostAnalyticsError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsPostForce400Error1> onApiV1AnalyticsPostForce400Error1,
        Action<ApiV1AnalyticsPostForce401Error1> onApiV1AnalyticsPostForce401Error1,
        Action<ApiV1AnalyticsPostForce403Error1> onApiV1AnalyticsPostForce403Error1,
        Action<ApiV1AnalyticsPostForce404Error1> onApiV1AnalyticsPostForce404Error1,
        Action<ApiV1AnalyticsPostForce429Error1> onApiV1AnalyticsPostForce429Error1,
        Action<ApiV1AnalyticsPostForce500Error1> onApiV1AnalyticsPostForce500Error1,
        Action<ApiV1AnalyticsPostForce502Error1> onApiV1AnalyticsPostForce502Error1,
        Action<ApiV1AnalyticsPostForce503Error1> onApiV1AnalyticsPostForce503Error1,
        Action<ApiV1AnalyticsPostForce504Error1> onApiV1AnalyticsPostForce504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsPostForce400Error1(
            out var apiV1AnalyticsPostForce400Error1Value)) onApiV1AnalyticsPostForce400Error1(
            apiV1AnalyticsPostForce400Error1Value);
        else if (TryGetApiV1AnalyticsPostForce401Error1(
            out var apiV1AnalyticsPostForce401Error1Value)) onApiV1AnalyticsPostForce401Error1(
            apiV1AnalyticsPostForce401Error1Value);
        else if (TryGetApiV1AnalyticsPostForce403Error1(
            out var apiV1AnalyticsPostForce403Error1Value)) onApiV1AnalyticsPostForce403Error1(
            apiV1AnalyticsPostForce403Error1Value);
        else if (TryGetApiV1AnalyticsPostForce404Error1(
            out var apiV1AnalyticsPostForce404Error1Value)) onApiV1AnalyticsPostForce404Error1(
            apiV1AnalyticsPostForce404Error1Value);
        else if (TryGetApiV1AnalyticsPostForce429Error1(
            out var apiV1AnalyticsPostForce429Error1Value)) onApiV1AnalyticsPostForce429Error1(
            apiV1AnalyticsPostForce429Error1Value);
        else if (TryGetApiV1AnalyticsPostForce500Error1(
            out var apiV1AnalyticsPostForce500Error1Value)) onApiV1AnalyticsPostForce500Error1(
            apiV1AnalyticsPostForce500Error1Value);
        else if (TryGetApiV1AnalyticsPostForce502Error1(
            out var apiV1AnalyticsPostForce502Error1Value)) onApiV1AnalyticsPostForce502Error1(
            apiV1AnalyticsPostForce502Error1Value);
        else if (TryGetApiV1AnalyticsPostForce503Error1(
            out var apiV1AnalyticsPostForce503Error1Value)) onApiV1AnalyticsPostForce503Error1(
            apiV1AnalyticsPostForce503Error1Value);
        else if (TryGetApiV1AnalyticsPostForce504Error1(
            out var apiV1AnalyticsPostForce504Error1Value)) onApiV1AnalyticsPostForce504Error1(
            apiV1AnalyticsPostForce504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AnalyticsForcePostAnalyticsError)} holds no value.");
    }

    private static Task<AnalyticsForcePostAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsPostForce400Error1>().As(AsApiV1AnalyticsPostForce400Error1),
            401 => response.Json<ApiV1AnalyticsPostForce401Error1>().As(AsApiV1AnalyticsPostForce401Error1),
            403 => response.Json<ApiV1AnalyticsPostForce403Error1>().As(AsApiV1AnalyticsPostForce403Error1),
            404 => response.Json<ApiV1AnalyticsPostForce404Error1>().As(AsApiV1AnalyticsPostForce404Error1),
            429 => response.Json<ApiV1AnalyticsPostForce429Error1>().As(AsApiV1AnalyticsPostForce429Error1),
            500 => response.Json<ApiV1AnalyticsPostForce500Error1>().As(AsApiV1AnalyticsPostForce500Error1),
            502 => response.Json<ApiV1AnalyticsPostForce502Error1>().As(AsApiV1AnalyticsPostForce502Error1),
            503 => response.Json<ApiV1AnalyticsPostForce503Error1>().As(AsApiV1AnalyticsPostForce503Error1),
            504 => response.Json<ApiV1AnalyticsPostForce504Error1>().As(AsApiV1AnalyticsPostForce504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsForcePostAnalyticsError> Response { get; } = new(Create);
}
