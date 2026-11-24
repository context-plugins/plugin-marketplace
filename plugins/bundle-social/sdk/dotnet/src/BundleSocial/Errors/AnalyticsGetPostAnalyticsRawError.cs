using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsGetPostAnalyticsRawError : ApiError
{
    private readonly Optional<ApiV1AnalyticsPostRaw400Error1> _apiV1AnalyticsPostRaw400Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw401Error1> _apiV1AnalyticsPostRaw401Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw403Error1> _apiV1AnalyticsPostRaw403Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw404Error1> _apiV1AnalyticsPostRaw404Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw429Error1> _apiV1AnalyticsPostRaw429Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw500Error1> _apiV1AnalyticsPostRaw500Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw502Error1> _apiV1AnalyticsPostRaw502Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw503Error1> _apiV1AnalyticsPostRaw503Error1Value;

    private readonly Optional<ApiV1AnalyticsPostRaw504Error1> _apiV1AnalyticsPostRaw504Error1Value;

    private AnalyticsGetPostAnalyticsRawError(Optional<ApiV1AnalyticsPostRaw400Error1> apiV1AnalyticsPostRaw400Error1Value,
        Optional<ApiV1AnalyticsPostRaw401Error1> apiV1AnalyticsPostRaw401Error1Value,
        Optional<ApiV1AnalyticsPostRaw403Error1> apiV1AnalyticsPostRaw403Error1Value,
        Optional<ApiV1AnalyticsPostRaw404Error1> apiV1AnalyticsPostRaw404Error1Value,
        Optional<ApiV1AnalyticsPostRaw429Error1> apiV1AnalyticsPostRaw429Error1Value,
        Optional<ApiV1AnalyticsPostRaw500Error1> apiV1AnalyticsPostRaw500Error1Value,
        Optional<ApiV1AnalyticsPostRaw502Error1> apiV1AnalyticsPostRaw502Error1Value,
        Optional<ApiV1AnalyticsPostRaw503Error1> apiV1AnalyticsPostRaw503Error1Value,
        Optional<ApiV1AnalyticsPostRaw504Error1> apiV1AnalyticsPostRaw504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsPostRaw400Error1Value = apiV1AnalyticsPostRaw400Error1Value;
        _apiV1AnalyticsPostRaw401Error1Value = apiV1AnalyticsPostRaw401Error1Value;
        _apiV1AnalyticsPostRaw403Error1Value = apiV1AnalyticsPostRaw403Error1Value;
        _apiV1AnalyticsPostRaw404Error1Value = apiV1AnalyticsPostRaw404Error1Value;
        _apiV1AnalyticsPostRaw429Error1Value = apiV1AnalyticsPostRaw429Error1Value;
        _apiV1AnalyticsPostRaw500Error1Value = apiV1AnalyticsPostRaw500Error1Value;
        _apiV1AnalyticsPostRaw502Error1Value = apiV1AnalyticsPostRaw502Error1Value;
        _apiV1AnalyticsPostRaw503Error1Value = apiV1AnalyticsPostRaw503Error1Value;
        _apiV1AnalyticsPostRaw504Error1Value = apiV1AnalyticsPostRaw504Error1Value;
    }

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw400Error1(ApiV1AnalyticsPostRaw400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsPostRaw400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw401Error1(ApiV1AnalyticsPostRaw401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsPostRaw401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw403Error1(ApiV1AnalyticsPostRaw403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw404Error1(ApiV1AnalyticsPostRaw404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw429Error1(ApiV1AnalyticsPostRaw429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw500Error1(ApiV1AnalyticsPostRaw500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw502Error1(ApiV1AnalyticsPostRaw502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw503Error1(ApiV1AnalyticsPostRaw503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw503Error1>.Some(value),
            default,
            default);

    private static AnalyticsGetPostAnalyticsRawError AsApiV1AnalyticsPostRaw504Error1(ApiV1AnalyticsPostRaw504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPostRaw504Error1>.Some(value),
            default);

    private static AnalyticsGetPostAnalyticsRawError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsPostRaw400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw400Error1? value) =>
        _apiV1AnalyticsPostRaw400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw401Error1? value) =>
        _apiV1AnalyticsPostRaw401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw403Error1? value) =>
        _apiV1AnalyticsPostRaw403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw404Error1? value) =>
        _apiV1AnalyticsPostRaw404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw429Error1? value) =>
        _apiV1AnalyticsPostRaw429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw500Error1? value) =>
        _apiV1AnalyticsPostRaw500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw502Error1? value) =>
        _apiV1AnalyticsPostRaw502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw503Error1? value) =>
        _apiV1AnalyticsPostRaw503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPostRaw504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw504Error1? value) =>
        _apiV1AnalyticsPostRaw504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsPostRaw400Error1, TResult> onApiV1AnalyticsPostRaw400Error1,
        Func<ApiV1AnalyticsPostRaw401Error1, TResult> onApiV1AnalyticsPostRaw401Error1,
        Func<ApiV1AnalyticsPostRaw403Error1, TResult> onApiV1AnalyticsPostRaw403Error1,
        Func<ApiV1AnalyticsPostRaw404Error1, TResult> onApiV1AnalyticsPostRaw404Error1,
        Func<ApiV1AnalyticsPostRaw429Error1, TResult> onApiV1AnalyticsPostRaw429Error1,
        Func<ApiV1AnalyticsPostRaw500Error1, TResult> onApiV1AnalyticsPostRaw500Error1,
        Func<ApiV1AnalyticsPostRaw502Error1, TResult> onApiV1AnalyticsPostRaw502Error1,
        Func<ApiV1AnalyticsPostRaw503Error1, TResult> onApiV1AnalyticsPostRaw503Error1,
        Func<ApiV1AnalyticsPostRaw504Error1, TResult> onApiV1AnalyticsPostRaw504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsPostRaw400Error1(
                out var apiV1AnalyticsPostRaw400Error1Value) => onApiV1AnalyticsPostRaw400Error1(
                apiV1AnalyticsPostRaw400Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw401Error1(
                out var apiV1AnalyticsPostRaw401Error1Value) => onApiV1AnalyticsPostRaw401Error1(
                apiV1AnalyticsPostRaw401Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw403Error1(
                out var apiV1AnalyticsPostRaw403Error1Value) => onApiV1AnalyticsPostRaw403Error1(
                apiV1AnalyticsPostRaw403Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw404Error1(
                out var apiV1AnalyticsPostRaw404Error1Value) => onApiV1AnalyticsPostRaw404Error1(
                apiV1AnalyticsPostRaw404Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw429Error1(
                out var apiV1AnalyticsPostRaw429Error1Value) => onApiV1AnalyticsPostRaw429Error1(
                apiV1AnalyticsPostRaw429Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw500Error1(
                out var apiV1AnalyticsPostRaw500Error1Value) => onApiV1AnalyticsPostRaw500Error1(
                apiV1AnalyticsPostRaw500Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw502Error1(
                out var apiV1AnalyticsPostRaw502Error1Value) => onApiV1AnalyticsPostRaw502Error1(
                apiV1AnalyticsPostRaw502Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw503Error1(
                out var apiV1AnalyticsPostRaw503Error1Value) => onApiV1AnalyticsPostRaw503Error1(
                apiV1AnalyticsPostRaw503Error1Value),
            _ when TryGetApiV1AnalyticsPostRaw504Error1(
                out var apiV1AnalyticsPostRaw504Error1Value) => onApiV1AnalyticsPostRaw504Error1(
                apiV1AnalyticsPostRaw504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AnalyticsGetPostAnalyticsRawError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsPostRaw400Error1> onApiV1AnalyticsPostRaw400Error1,
        Action<ApiV1AnalyticsPostRaw401Error1> onApiV1AnalyticsPostRaw401Error1,
        Action<ApiV1AnalyticsPostRaw403Error1> onApiV1AnalyticsPostRaw403Error1,
        Action<ApiV1AnalyticsPostRaw404Error1> onApiV1AnalyticsPostRaw404Error1,
        Action<ApiV1AnalyticsPostRaw429Error1> onApiV1AnalyticsPostRaw429Error1,
        Action<ApiV1AnalyticsPostRaw500Error1> onApiV1AnalyticsPostRaw500Error1,
        Action<ApiV1AnalyticsPostRaw502Error1> onApiV1AnalyticsPostRaw502Error1,
        Action<ApiV1AnalyticsPostRaw503Error1> onApiV1AnalyticsPostRaw503Error1,
        Action<ApiV1AnalyticsPostRaw504Error1> onApiV1AnalyticsPostRaw504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsPostRaw400Error1(
            out var apiV1AnalyticsPostRaw400Error1Value)) onApiV1AnalyticsPostRaw400Error1(
            apiV1AnalyticsPostRaw400Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw401Error1(
            out var apiV1AnalyticsPostRaw401Error1Value)) onApiV1AnalyticsPostRaw401Error1(
            apiV1AnalyticsPostRaw401Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw403Error1(
            out var apiV1AnalyticsPostRaw403Error1Value)) onApiV1AnalyticsPostRaw403Error1(
            apiV1AnalyticsPostRaw403Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw404Error1(
            out var apiV1AnalyticsPostRaw404Error1Value)) onApiV1AnalyticsPostRaw404Error1(
            apiV1AnalyticsPostRaw404Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw429Error1(
            out var apiV1AnalyticsPostRaw429Error1Value)) onApiV1AnalyticsPostRaw429Error1(
            apiV1AnalyticsPostRaw429Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw500Error1(
            out var apiV1AnalyticsPostRaw500Error1Value)) onApiV1AnalyticsPostRaw500Error1(
            apiV1AnalyticsPostRaw500Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw502Error1(
            out var apiV1AnalyticsPostRaw502Error1Value)) onApiV1AnalyticsPostRaw502Error1(
            apiV1AnalyticsPostRaw502Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw503Error1(
            out var apiV1AnalyticsPostRaw503Error1Value)) onApiV1AnalyticsPostRaw503Error1(
            apiV1AnalyticsPostRaw503Error1Value);
        else if (TryGetApiV1AnalyticsPostRaw504Error1(
            out var apiV1AnalyticsPostRaw504Error1Value)) onApiV1AnalyticsPostRaw504Error1(
            apiV1AnalyticsPostRaw504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AnalyticsGetPostAnalyticsRawError)} holds no value.");
    }

    private static Task<AnalyticsGetPostAnalyticsRawError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsPostRaw400Error1>().As(AsApiV1AnalyticsPostRaw400Error1),
            401 => response.Json<ApiV1AnalyticsPostRaw401Error1>().As(AsApiV1AnalyticsPostRaw401Error1),
            403 => response.Json<ApiV1AnalyticsPostRaw403Error1>().As(AsApiV1AnalyticsPostRaw403Error1),
            404 => response.Json<ApiV1AnalyticsPostRaw404Error1>().As(AsApiV1AnalyticsPostRaw404Error1),
            429 => response.Json<ApiV1AnalyticsPostRaw429Error1>().As(AsApiV1AnalyticsPostRaw429Error1),
            500 => response.Json<ApiV1AnalyticsPostRaw500Error1>().As(AsApiV1AnalyticsPostRaw500Error1),
            502 => response.Json<ApiV1AnalyticsPostRaw502Error1>().As(AsApiV1AnalyticsPostRaw502Error1),
            503 => response.Json<ApiV1AnalyticsPostRaw503Error1>().As(AsApiV1AnalyticsPostRaw503Error1),
            504 => response.Json<ApiV1AnalyticsPostRaw504Error1>().As(AsApiV1AnalyticsPostRaw504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsGetPostAnalyticsRawError> Response { get; } = new(Create);
}
