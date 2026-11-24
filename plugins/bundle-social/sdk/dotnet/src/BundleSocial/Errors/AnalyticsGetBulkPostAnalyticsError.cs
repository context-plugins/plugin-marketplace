using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsGetBulkPostAnalyticsError : ApiError
{
    private readonly Optional<ApiV1AnalyticsPostBulk400Error1> _apiV1AnalyticsPostBulk400Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk401Error1> _apiV1AnalyticsPostBulk401Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk403Error1> _apiV1AnalyticsPostBulk403Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk404Error1> _apiV1AnalyticsPostBulk404Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk429Error1> _apiV1AnalyticsPostBulk429Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk500Error1> _apiV1AnalyticsPostBulk500Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk502Error1> _apiV1AnalyticsPostBulk502Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk503Error1> _apiV1AnalyticsPostBulk503Error1Value;

    private readonly Optional<ApiV1AnalyticsPostBulk504Error1> _apiV1AnalyticsPostBulk504Error1Value;

    private AnalyticsGetBulkPostAnalyticsError(Optional<ApiV1AnalyticsPostBulk400Error1> apiV1AnalyticsPostBulk400Error1Value,
        Optional<ApiV1AnalyticsPostBulk401Error1> apiV1AnalyticsPostBulk401Error1Value,
        Optional<ApiV1AnalyticsPostBulk403Error1> apiV1AnalyticsPostBulk403Error1Value,
        Optional<ApiV1AnalyticsPostBulk404Error1> apiV1AnalyticsPostBulk404Error1Value,
        Optional<ApiV1AnalyticsPostBulk429Error1> apiV1AnalyticsPostBulk429Error1Value,
        Optional<ApiV1AnalyticsPostBulk500Error1> apiV1AnalyticsPostBulk500Error1Value,
        Optional<ApiV1AnalyticsPostBulk502Error1> apiV1AnalyticsPostBulk502Error1Value,
        Optional<ApiV1AnalyticsPostBulk503Error1> apiV1AnalyticsPostBulk503Error1Value,
        Optional<ApiV1AnalyticsPostBulk504Error1> apiV1AnalyticsPostBulk504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsPostBulk400Error1Value = apiV1AnalyticsPostBulk400Error1Value;
        _apiV1AnalyticsPostBulk401Error1Value = apiV1AnalyticsPostBulk401Error1Value;
        _apiV1AnalyticsPostBulk403Error1Value = apiV1AnalyticsPostBulk403Error1Value;
        _apiV1AnalyticsPostBulk404Error1Value = apiV1AnalyticsPostBulk404Error1Value;
        _apiV1AnalyticsPostBulk429Error1Value = apiV1AnalyticsPostBulk429Error1Value;
        _apiV1AnalyticsPostBulk500Error1Value = apiV1AnalyticsPostBulk500Error1Value;
        _apiV1AnalyticsPostBulk502Error1Value = apiV1AnalyticsPostBulk502Error1Value;
        _apiV1AnalyticsPostBulk503Error1Value = apiV1AnalyticsPostBulk503Error1Value;
        _apiV1AnalyticsPostBulk504Error1Value = apiV1AnalyticsPostBulk504Error1Value;
    }

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk400Error1(ApiV1AnalyticsPostBulk400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsPostBulk400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk401Error1(ApiV1AnalyticsPostBulk401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsPostBulk401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk403Error1(ApiV1AnalyticsPostBulk403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk404Error1(ApiV1AnalyticsPostBulk404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk429Error1(ApiV1AnalyticsPostBulk429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk500Error1(ApiV1AnalyticsPostBulk500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk502Error1(ApiV1AnalyticsPostBulk502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk503Error1(ApiV1AnalyticsPostBulk503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk503Error1>.Some(value),
            default,
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsApiV1AnalyticsPostBulk504Error1(ApiV1AnalyticsPostBulk504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostBulk504Error1>.Some(value),
            default);

    private static AnalyticsGetBulkPostAnalyticsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsPostBulk400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk400Error1? value) =>
        _apiV1AnalyticsPostBulk400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk401Error1? value) =>
        _apiV1AnalyticsPostBulk401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk403Error1? value) =>
        _apiV1AnalyticsPostBulk403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk404Error1? value) =>
        _apiV1AnalyticsPostBulk404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk429Error1? value) =>
        _apiV1AnalyticsPostBulk429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk500Error1? value) =>
        _apiV1AnalyticsPostBulk500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk502Error1? value) =>
        _apiV1AnalyticsPostBulk502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk503Error1? value) =>
        _apiV1AnalyticsPostBulk503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostBulk504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk504Error1? value) =>
        _apiV1AnalyticsPostBulk504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsPostBulk400Error1, TResult> onApiV1AnalyticsPostBulk400Error1,
        Func<ApiV1AnalyticsPostBulk401Error1, TResult> onApiV1AnalyticsPostBulk401Error1,
        Func<ApiV1AnalyticsPostBulk403Error1, TResult> onApiV1AnalyticsPostBulk403Error1,
        Func<ApiV1AnalyticsPostBulk404Error1, TResult> onApiV1AnalyticsPostBulk404Error1,
        Func<ApiV1AnalyticsPostBulk429Error1, TResult> onApiV1AnalyticsPostBulk429Error1,
        Func<ApiV1AnalyticsPostBulk500Error1, TResult> onApiV1AnalyticsPostBulk500Error1,
        Func<ApiV1AnalyticsPostBulk502Error1, TResult> onApiV1AnalyticsPostBulk502Error1,
        Func<ApiV1AnalyticsPostBulk503Error1, TResult> onApiV1AnalyticsPostBulk503Error1,
        Func<ApiV1AnalyticsPostBulk504Error1, TResult> onApiV1AnalyticsPostBulk504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsPostBulk400Error1(
                out var apiV1AnalyticsPostBulk400Error1Value) => onApiV1AnalyticsPostBulk400Error1(
                apiV1AnalyticsPostBulk400Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk401Error1(
                out var apiV1AnalyticsPostBulk401Error1Value) => onApiV1AnalyticsPostBulk401Error1(
                apiV1AnalyticsPostBulk401Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk403Error1(
                out var apiV1AnalyticsPostBulk403Error1Value) => onApiV1AnalyticsPostBulk403Error1(
                apiV1AnalyticsPostBulk403Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk404Error1(
                out var apiV1AnalyticsPostBulk404Error1Value) => onApiV1AnalyticsPostBulk404Error1(
                apiV1AnalyticsPostBulk404Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk429Error1(
                out var apiV1AnalyticsPostBulk429Error1Value) => onApiV1AnalyticsPostBulk429Error1(
                apiV1AnalyticsPostBulk429Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk500Error1(
                out var apiV1AnalyticsPostBulk500Error1Value) => onApiV1AnalyticsPostBulk500Error1(
                apiV1AnalyticsPostBulk500Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk502Error1(
                out var apiV1AnalyticsPostBulk502Error1Value) => onApiV1AnalyticsPostBulk502Error1(
                apiV1AnalyticsPostBulk502Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk503Error1(
                out var apiV1AnalyticsPostBulk503Error1Value) => onApiV1AnalyticsPostBulk503Error1(
                apiV1AnalyticsPostBulk503Error1Value),
            _ when TryGetApiV1AnalyticsPostBulk504Error1(
                out var apiV1AnalyticsPostBulk504Error1Value) => onApiV1AnalyticsPostBulk504Error1(
                apiV1AnalyticsPostBulk504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AnalyticsGetBulkPostAnalyticsError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsPostBulk400Error1> onApiV1AnalyticsPostBulk400Error1,
        Action<ApiV1AnalyticsPostBulk401Error1> onApiV1AnalyticsPostBulk401Error1,
        Action<ApiV1AnalyticsPostBulk403Error1> onApiV1AnalyticsPostBulk403Error1,
        Action<ApiV1AnalyticsPostBulk404Error1> onApiV1AnalyticsPostBulk404Error1,
        Action<ApiV1AnalyticsPostBulk429Error1> onApiV1AnalyticsPostBulk429Error1,
        Action<ApiV1AnalyticsPostBulk500Error1> onApiV1AnalyticsPostBulk500Error1,
        Action<ApiV1AnalyticsPostBulk502Error1> onApiV1AnalyticsPostBulk502Error1,
        Action<ApiV1AnalyticsPostBulk503Error1> onApiV1AnalyticsPostBulk503Error1,
        Action<ApiV1AnalyticsPostBulk504Error1> onApiV1AnalyticsPostBulk504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsPostBulk400Error1(
            out var apiV1AnalyticsPostBulk400Error1Value)) onApiV1AnalyticsPostBulk400Error1(
            apiV1AnalyticsPostBulk400Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk401Error1(
            out var apiV1AnalyticsPostBulk401Error1Value)) onApiV1AnalyticsPostBulk401Error1(
            apiV1AnalyticsPostBulk401Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk403Error1(
            out var apiV1AnalyticsPostBulk403Error1Value)) onApiV1AnalyticsPostBulk403Error1(
            apiV1AnalyticsPostBulk403Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk404Error1(
            out var apiV1AnalyticsPostBulk404Error1Value)) onApiV1AnalyticsPostBulk404Error1(
            apiV1AnalyticsPostBulk404Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk429Error1(
            out var apiV1AnalyticsPostBulk429Error1Value)) onApiV1AnalyticsPostBulk429Error1(
            apiV1AnalyticsPostBulk429Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk500Error1(
            out var apiV1AnalyticsPostBulk500Error1Value)) onApiV1AnalyticsPostBulk500Error1(
            apiV1AnalyticsPostBulk500Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk502Error1(
            out var apiV1AnalyticsPostBulk502Error1Value)) onApiV1AnalyticsPostBulk502Error1(
            apiV1AnalyticsPostBulk502Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk503Error1(
            out var apiV1AnalyticsPostBulk503Error1Value)) onApiV1AnalyticsPostBulk503Error1(
            apiV1AnalyticsPostBulk503Error1Value);
        else if (TryGetApiV1AnalyticsPostBulk504Error1(
            out var apiV1AnalyticsPostBulk504Error1Value)) onApiV1AnalyticsPostBulk504Error1(
            apiV1AnalyticsPostBulk504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AnalyticsGetBulkPostAnalyticsError)} holds no value.");
    }

    private static Task<AnalyticsGetBulkPostAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsPostBulk400Error1>().As(AsApiV1AnalyticsPostBulk400Error1),
            401 => response.Json<ApiV1AnalyticsPostBulk401Error1>().As(AsApiV1AnalyticsPostBulk401Error1),
            403 => response.Json<ApiV1AnalyticsPostBulk403Error1>().As(AsApiV1AnalyticsPostBulk403Error1),
            404 => response.Json<ApiV1AnalyticsPostBulk404Error1>().As(AsApiV1AnalyticsPostBulk404Error1),
            429 => response.Json<ApiV1AnalyticsPostBulk429Error1>().As(AsApiV1AnalyticsPostBulk429Error1),
            500 => response.Json<ApiV1AnalyticsPostBulk500Error1>().As(AsApiV1AnalyticsPostBulk500Error1),
            502 => response.Json<ApiV1AnalyticsPostBulk502Error1>().As(AsApiV1AnalyticsPostBulk502Error1),
            503 => response.Json<ApiV1AnalyticsPostBulk503Error1>().As(AsApiV1AnalyticsPostBulk503Error1),
            504 => response.Json<ApiV1AnalyticsPostBulk504Error1>().As(AsApiV1AnalyticsPostBulk504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsGetBulkPostAnalyticsError> Response { get; } = new(Create);
}
