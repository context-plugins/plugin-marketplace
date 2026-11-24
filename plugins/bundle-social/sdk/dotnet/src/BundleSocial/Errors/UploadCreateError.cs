using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadCreateError : ApiError
{
    private readonly Optional<ApiV1Upload400Error1> _apiV1Upload400Error1Value;

    private readonly Optional<ApiV1Upload401Error1> _apiV1Upload401Error1Value;

    private readonly Optional<ApiV1Upload403Error1> _apiV1Upload403Error1Value;

    private readonly Optional<ApiV1Upload404Error1> _apiV1Upload404Error1Value;

    private readonly Optional<ApiV1Upload429Error1> _apiV1Upload429Error1Value;

    private readonly Optional<ApiV1Upload500Error1> _apiV1Upload500Error1Value;

    private readonly Optional<ApiV1Upload502Error1> _apiV1Upload502Error1Value;

    private readonly Optional<ApiV1Upload503Error1> _apiV1Upload503Error1Value;

    private readonly Optional<ApiV1Upload504Error1> _apiV1Upload504Error1Value;

    private UploadCreateError(Optional<ApiV1Upload400Error1> apiV1Upload400Error1Value,
        Optional<ApiV1Upload401Error1> apiV1Upload401Error1Value,
        Optional<ApiV1Upload403Error1> apiV1Upload403Error1Value,
        Optional<ApiV1Upload404Error1> apiV1Upload404Error1Value,
        Optional<ApiV1Upload429Error1> apiV1Upload429Error1Value,
        Optional<ApiV1Upload500Error1> apiV1Upload500Error1Value,
        Optional<ApiV1Upload502Error1> apiV1Upload502Error1Value,
        Optional<ApiV1Upload503Error1> apiV1Upload503Error1Value,
        Optional<ApiV1Upload504Error1> apiV1Upload504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Upload400Error1Value = apiV1Upload400Error1Value;
        _apiV1Upload401Error1Value = apiV1Upload401Error1Value;
        _apiV1Upload403Error1Value = apiV1Upload403Error1Value;
        _apiV1Upload404Error1Value = apiV1Upload404Error1Value;
        _apiV1Upload429Error1Value = apiV1Upload429Error1Value;
        _apiV1Upload500Error1Value = apiV1Upload500Error1Value;
        _apiV1Upload502Error1Value = apiV1Upload502Error1Value;
        _apiV1Upload503Error1Value = apiV1Upload503Error1Value;
        _apiV1Upload504Error1Value = apiV1Upload504Error1Value;
    }

    private static UploadCreateError AsApiV1Upload400Error1(ApiV1Upload400Error1 value) =>
        new(
            Optional<ApiV1Upload400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload401Error1(ApiV1Upload401Error1 value) =>
        new(
            default,
            Optional<ApiV1Upload401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload403Error1(ApiV1Upload403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Upload403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload404Error1(ApiV1Upload404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Upload404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload429Error1(ApiV1Upload429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Upload429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload500Error1(ApiV1Upload500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Upload500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload502Error1(ApiV1Upload502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Upload502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadCreateError AsApiV1Upload503Error1(ApiV1Upload503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Upload503Error1>.Some(value),
            default,
            default);

    private static UploadCreateError AsApiV1Upload504Error1(ApiV1Upload504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Upload504Error1>.Some(value),
            default);

    private static UploadCreateError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value) =>
        _apiV1Upload400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value) =>
        _apiV1Upload401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value) =>
        _apiV1Upload403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value) =>
        _apiV1Upload404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value) =>
        _apiV1Upload429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value) =>
        _apiV1Upload500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value) =>
        _apiV1Upload502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value) =>
        _apiV1Upload503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value) =>
        _apiV1Upload504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Upload400Error1, TResult> onApiV1Upload400Error1,
        Func<ApiV1Upload401Error1, TResult> onApiV1Upload401Error1,
        Func<ApiV1Upload403Error1, TResult> onApiV1Upload403Error1,
        Func<ApiV1Upload404Error1, TResult> onApiV1Upload404Error1,
        Func<ApiV1Upload429Error1, TResult> onApiV1Upload429Error1,
        Func<ApiV1Upload500Error1, TResult> onApiV1Upload500Error1,
        Func<ApiV1Upload502Error1, TResult> onApiV1Upload502Error1,
        Func<ApiV1Upload503Error1, TResult> onApiV1Upload503Error1,
        Func<ApiV1Upload504Error1, TResult> onApiV1Upload504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Upload400Error1(out var apiV1Upload400Error1Value) => onApiV1Upload400Error1(
                apiV1Upload400Error1Value),
            _ when TryGetApiV1Upload401Error1(out var apiV1Upload401Error1Value) => onApiV1Upload401Error1(
                apiV1Upload401Error1Value),
            _ when TryGetApiV1Upload403Error1(out var apiV1Upload403Error1Value) => onApiV1Upload403Error1(
                apiV1Upload403Error1Value),
            _ when TryGetApiV1Upload404Error1(out var apiV1Upload404Error1Value) => onApiV1Upload404Error1(
                apiV1Upload404Error1Value),
            _ when TryGetApiV1Upload429Error1(out var apiV1Upload429Error1Value) => onApiV1Upload429Error1(
                apiV1Upload429Error1Value),
            _ when TryGetApiV1Upload500Error1(out var apiV1Upload500Error1Value) => onApiV1Upload500Error1(
                apiV1Upload500Error1Value),
            _ when TryGetApiV1Upload502Error1(out var apiV1Upload502Error1Value) => onApiV1Upload502Error1(
                apiV1Upload502Error1Value),
            _ when TryGetApiV1Upload503Error1(out var apiV1Upload503Error1Value) => onApiV1Upload503Error1(
                apiV1Upload503Error1Value),
            _ when TryGetApiV1Upload504Error1(out var apiV1Upload504Error1Value) => onApiV1Upload504Error1(
                apiV1Upload504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadCreateError)} holds no value.")
        };

    public void Match(Action<ApiV1Upload400Error1> onApiV1Upload400Error1,
        Action<ApiV1Upload401Error1> onApiV1Upload401Error1,
        Action<ApiV1Upload403Error1> onApiV1Upload403Error1,
        Action<ApiV1Upload404Error1> onApiV1Upload404Error1,
        Action<ApiV1Upload429Error1> onApiV1Upload429Error1,
        Action<ApiV1Upload500Error1> onApiV1Upload500Error1,
        Action<ApiV1Upload502Error1> onApiV1Upload502Error1,
        Action<ApiV1Upload503Error1> onApiV1Upload503Error1,
        Action<ApiV1Upload504Error1> onApiV1Upload504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Upload400Error1(out var apiV1Upload400Error1Value)) onApiV1Upload400Error1(
            apiV1Upload400Error1Value);
        else if (TryGetApiV1Upload401Error1(out var apiV1Upload401Error1Value)) onApiV1Upload401Error1(
            apiV1Upload401Error1Value);
        else if (TryGetApiV1Upload403Error1(out var apiV1Upload403Error1Value)) onApiV1Upload403Error1(
            apiV1Upload403Error1Value);
        else if (TryGetApiV1Upload404Error1(out var apiV1Upload404Error1Value)) onApiV1Upload404Error1(
            apiV1Upload404Error1Value);
        else if (TryGetApiV1Upload429Error1(out var apiV1Upload429Error1Value)) onApiV1Upload429Error1(
            apiV1Upload429Error1Value);
        else if (TryGetApiV1Upload500Error1(out var apiV1Upload500Error1Value)) onApiV1Upload500Error1(
            apiV1Upload500Error1Value);
        else if (TryGetApiV1Upload502Error1(out var apiV1Upload502Error1Value)) onApiV1Upload502Error1(
            apiV1Upload502Error1Value);
        else if (TryGetApiV1Upload503Error1(out var apiV1Upload503Error1Value)) onApiV1Upload503Error1(
            apiV1Upload503Error1Value);
        else if (TryGetApiV1Upload504Error1(out var apiV1Upload504Error1Value)) onApiV1Upload504Error1(
            apiV1Upload504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadCreateError)} holds no value.");
    }

    private static Task<UploadCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Upload400Error1>().As(AsApiV1Upload400Error1),
            401 => response.Json<ApiV1Upload401Error1>().As(AsApiV1Upload401Error1),
            403 => response.Json<ApiV1Upload403Error1>().As(AsApiV1Upload403Error1),
            404 => response.Json<ApiV1Upload404Error1>().As(AsApiV1Upload404Error1),
            429 => response.Json<ApiV1Upload429Error1>().As(AsApiV1Upload429Error1),
            500 => response.Json<ApiV1Upload500Error1>().As(AsApiV1Upload500Error1),
            502 => response.Json<ApiV1Upload502Error1>().As(AsApiV1Upload502Error1),
            503 => response.Json<ApiV1Upload503Error1>().As(AsApiV1Upload503Error1),
            504 => response.Json<ApiV1Upload504Error1>().As(AsApiV1Upload504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadCreateError> Response { get; } = new(Create);
}
