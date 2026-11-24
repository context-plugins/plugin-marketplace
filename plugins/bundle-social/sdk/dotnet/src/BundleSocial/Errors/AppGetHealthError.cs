using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AppGetHealthError : ApiError
{
    private readonly Optional<ApiV1400Error1> _apiV1400Error1Value;

    private readonly Optional<ApiV1401Error1> _apiV1401Error1Value;

    private readonly Optional<ApiV1403Error1> _apiV1403Error1Value;

    private readonly Optional<ApiV1404Error1> _apiV1404Error1Value;

    private readonly Optional<ApiV1429Error1> _apiV1429Error1Value;

    private readonly Optional<ApiV1500Error1> _apiV1500Error1Value;

    private readonly Optional<ApiV1502Error1> _apiV1502Error1Value;

    private readonly Optional<ApiV1503Error1> _apiV1503Error1Value;

    private readonly Optional<ApiV1504Error1> _apiV1504Error1Value;

    private AppGetHealthError(Optional<ApiV1400Error1> apiV1400Error1Value,
        Optional<ApiV1401Error1> apiV1401Error1Value,
        Optional<ApiV1403Error1> apiV1403Error1Value,
        Optional<ApiV1404Error1> apiV1404Error1Value,
        Optional<ApiV1429Error1> apiV1429Error1Value,
        Optional<ApiV1500Error1> apiV1500Error1Value,
        Optional<ApiV1502Error1> apiV1502Error1Value,
        Optional<ApiV1503Error1> apiV1503Error1Value,
        Optional<ApiV1504Error1> apiV1504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1400Error1Value = apiV1400Error1Value;
        _apiV1401Error1Value = apiV1401Error1Value;
        _apiV1403Error1Value = apiV1403Error1Value;
        _apiV1404Error1Value = apiV1404Error1Value;
        _apiV1429Error1Value = apiV1429Error1Value;
        _apiV1500Error1Value = apiV1500Error1Value;
        _apiV1502Error1Value = apiV1502Error1Value;
        _apiV1503Error1Value = apiV1503Error1Value;
        _apiV1504Error1Value = apiV1504Error1Value;
    }

    private static AppGetHealthError AsApiV1400Error1(ApiV1400Error1 value) =>
        new(
            Optional<ApiV1400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1401Error1(ApiV1401Error1 value) =>
        new(
            default,
            Optional<ApiV1401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1403Error1(ApiV1403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1404Error1(ApiV1404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1429Error1(ApiV1429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1500Error1(ApiV1500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1502Error1(ApiV1502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1502Error1>.Some(value),
            default,
            default,
            default);

    private static AppGetHealthError AsApiV1503Error1(ApiV1503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1503Error1>.Some(value),
            default,
            default);

    private static AppGetHealthError AsApiV1504Error1(ApiV1504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1504Error1>.Some(value),
            default);

    private static AppGetHealthError AsFallback(RawError value) =>
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

    public bool TryGetApiV1400Error1([NotNullWhen(true)] out ApiV1400Error1? value) =>
        _apiV1400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1401Error1([NotNullWhen(true)] out ApiV1401Error1? value) =>
        _apiV1401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1403Error1([NotNullWhen(true)] out ApiV1403Error1? value) =>
        _apiV1403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1404Error1([NotNullWhen(true)] out ApiV1404Error1? value) =>
        _apiV1404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1429Error1([NotNullWhen(true)] out ApiV1429Error1? value) =>
        _apiV1429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1500Error1([NotNullWhen(true)] out ApiV1500Error1? value) =>
        _apiV1500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1502Error1([NotNullWhen(true)] out ApiV1502Error1? value) =>
        _apiV1502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1503Error1([NotNullWhen(true)] out ApiV1503Error1? value) =>
        _apiV1503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1504Error1([NotNullWhen(true)] out ApiV1504Error1? value) =>
        _apiV1504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1400Error1, TResult> onApiV1400Error1,
        Func<ApiV1401Error1, TResult> onApiV1401Error1,
        Func<ApiV1403Error1, TResult> onApiV1403Error1,
        Func<ApiV1404Error1, TResult> onApiV1404Error1,
        Func<ApiV1429Error1, TResult> onApiV1429Error1,
        Func<ApiV1500Error1, TResult> onApiV1500Error1,
        Func<ApiV1502Error1, TResult> onApiV1502Error1,
        Func<ApiV1503Error1, TResult> onApiV1503Error1,
        Func<ApiV1504Error1, TResult> onApiV1504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1400Error1(out var apiV1400Error1Value) => onApiV1400Error1(apiV1400Error1Value),
            _ when TryGetApiV1401Error1(out var apiV1401Error1Value) => onApiV1401Error1(apiV1401Error1Value),
            _ when TryGetApiV1403Error1(out var apiV1403Error1Value) => onApiV1403Error1(apiV1403Error1Value),
            _ when TryGetApiV1404Error1(out var apiV1404Error1Value) => onApiV1404Error1(apiV1404Error1Value),
            _ when TryGetApiV1429Error1(out var apiV1429Error1Value) => onApiV1429Error1(apiV1429Error1Value),
            _ when TryGetApiV1500Error1(out var apiV1500Error1Value) => onApiV1500Error1(apiV1500Error1Value),
            _ when TryGetApiV1502Error1(out var apiV1502Error1Value) => onApiV1502Error1(apiV1502Error1Value),
            _ when TryGetApiV1503Error1(out var apiV1503Error1Value) => onApiV1503Error1(apiV1503Error1Value),
            _ when TryGetApiV1504Error1(out var apiV1504Error1Value) => onApiV1504Error1(apiV1504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AppGetHealthError)} holds no value.")
        };

    public void Match(Action<ApiV1400Error1> onApiV1400Error1,
        Action<ApiV1401Error1> onApiV1401Error1,
        Action<ApiV1403Error1> onApiV1403Error1,
        Action<ApiV1404Error1> onApiV1404Error1,
        Action<ApiV1429Error1> onApiV1429Error1,
        Action<ApiV1500Error1> onApiV1500Error1,
        Action<ApiV1502Error1> onApiV1502Error1,
        Action<ApiV1503Error1> onApiV1503Error1,
        Action<ApiV1504Error1> onApiV1504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1400Error1(out var apiV1400Error1Value)) onApiV1400Error1(apiV1400Error1Value);
        else if (TryGetApiV1401Error1(out var apiV1401Error1Value)) onApiV1401Error1(apiV1401Error1Value);
        else if (TryGetApiV1403Error1(out var apiV1403Error1Value)) onApiV1403Error1(apiV1403Error1Value);
        else if (TryGetApiV1404Error1(out var apiV1404Error1Value)) onApiV1404Error1(apiV1404Error1Value);
        else if (TryGetApiV1429Error1(out var apiV1429Error1Value)) onApiV1429Error1(apiV1429Error1Value);
        else if (TryGetApiV1500Error1(out var apiV1500Error1Value)) onApiV1500Error1(apiV1500Error1Value);
        else if (TryGetApiV1502Error1(out var apiV1502Error1Value)) onApiV1502Error1(apiV1502Error1Value);
        else if (TryGetApiV1503Error1(out var apiV1503Error1Value)) onApiV1503Error1(apiV1503Error1Value);
        else if (TryGetApiV1504Error1(out var apiV1504Error1Value)) onApiV1504Error1(apiV1504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AppGetHealthError)} holds no value.");
    }

    private static Task<AppGetHealthError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1400Error1>().As(AsApiV1400Error1),
            401 => response.Json<ApiV1401Error1>().As(AsApiV1401Error1),
            403 => response.Json<ApiV1403Error1>().As(AsApiV1403Error1),
            404 => response.Json<ApiV1404Error1>().As(AsApiV1404Error1),
            429 => response.Json<ApiV1429Error1>().As(AsApiV1429Error1),
            500 => response.Json<ApiV1500Error1>().As(AsApiV1500Error1),
            502 => response.Json<ApiV1502Error1>().As(AsApiV1502Error1),
            503 => response.Json<ApiV1503Error1>().As(AsApiV1503Error1),
            504 => response.Json<ApiV1504Error1>().As(AsApiV1504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AppGetHealthError> Response { get; } = new(Create);
}
