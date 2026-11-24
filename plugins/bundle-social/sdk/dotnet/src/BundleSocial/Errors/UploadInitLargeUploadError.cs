using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadInitLargeUploadError : ApiError
{
    private readonly Optional<ApiV1UploadInit400Error1> _apiV1UploadInit400Error1Value;

    private readonly Optional<ApiV1UploadInit401Error1> _apiV1UploadInit401Error1Value;

    private readonly Optional<ApiV1UploadInit403Error1> _apiV1UploadInit403Error1Value;

    private readonly Optional<ApiV1UploadInit404Error1> _apiV1UploadInit404Error1Value;

    private readonly Optional<ApiV1UploadInit429Error1> _apiV1UploadInit429Error1Value;

    private readonly Optional<ApiV1UploadInit500Error1> _apiV1UploadInit500Error1Value;

    private readonly Optional<ApiV1UploadInit502Error1> _apiV1UploadInit502Error1Value;

    private readonly Optional<ApiV1UploadInit503Error1> _apiV1UploadInit503Error1Value;

    private readonly Optional<ApiV1UploadInit504Error1> _apiV1UploadInit504Error1Value;

    private UploadInitLargeUploadError(Optional<ApiV1UploadInit400Error1> apiV1UploadInit400Error1Value,
        Optional<ApiV1UploadInit401Error1> apiV1UploadInit401Error1Value,
        Optional<ApiV1UploadInit403Error1> apiV1UploadInit403Error1Value,
        Optional<ApiV1UploadInit404Error1> apiV1UploadInit404Error1Value,
        Optional<ApiV1UploadInit429Error1> apiV1UploadInit429Error1Value,
        Optional<ApiV1UploadInit500Error1> apiV1UploadInit500Error1Value,
        Optional<ApiV1UploadInit502Error1> apiV1UploadInit502Error1Value,
        Optional<ApiV1UploadInit503Error1> apiV1UploadInit503Error1Value,
        Optional<ApiV1UploadInit504Error1> apiV1UploadInit504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadInit400Error1Value = apiV1UploadInit400Error1Value;
        _apiV1UploadInit401Error1Value = apiV1UploadInit401Error1Value;
        _apiV1UploadInit403Error1Value = apiV1UploadInit403Error1Value;
        _apiV1UploadInit404Error1Value = apiV1UploadInit404Error1Value;
        _apiV1UploadInit429Error1Value = apiV1UploadInit429Error1Value;
        _apiV1UploadInit500Error1Value = apiV1UploadInit500Error1Value;
        _apiV1UploadInit502Error1Value = apiV1UploadInit502Error1Value;
        _apiV1UploadInit503Error1Value = apiV1UploadInit503Error1Value;
        _apiV1UploadInit504Error1Value = apiV1UploadInit504Error1Value;
    }

    private static UploadInitLargeUploadError AsApiV1UploadInit400Error1(ApiV1UploadInit400Error1 value) =>
        new(
            Optional<ApiV1UploadInit400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit401Error1(ApiV1UploadInit401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadInit401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit403Error1(ApiV1UploadInit403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadInit403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit404Error1(ApiV1UploadInit404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadInit404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit429Error1(ApiV1UploadInit429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadInit429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit500Error1(ApiV1UploadInit500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadInit500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit502Error1(ApiV1UploadInit502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadInit502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit503Error1(ApiV1UploadInit503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadInit503Error1>.Some(value),
            default,
            default);

    private static UploadInitLargeUploadError AsApiV1UploadInit504Error1(ApiV1UploadInit504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadInit504Error1>.Some(value),
            default);

    private static UploadInitLargeUploadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadInit400Error1([NotNullWhen(true)] out ApiV1UploadInit400Error1? value) =>
        _apiV1UploadInit400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit401Error1([NotNullWhen(true)] out ApiV1UploadInit401Error1? value) =>
        _apiV1UploadInit401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit403Error1([NotNullWhen(true)] out ApiV1UploadInit403Error1? value) =>
        _apiV1UploadInit403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit404Error1([NotNullWhen(true)] out ApiV1UploadInit404Error1? value) =>
        _apiV1UploadInit404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit429Error1([NotNullWhen(true)] out ApiV1UploadInit429Error1? value) =>
        _apiV1UploadInit429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit500Error1([NotNullWhen(true)] out ApiV1UploadInit500Error1? value) =>
        _apiV1UploadInit500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit502Error1([NotNullWhen(true)] out ApiV1UploadInit502Error1? value) =>
        _apiV1UploadInit502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit503Error1([NotNullWhen(true)] out ApiV1UploadInit503Error1? value) =>
        _apiV1UploadInit503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadInit504Error1([NotNullWhen(true)] out ApiV1UploadInit504Error1? value) =>
        _apiV1UploadInit504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadInit400Error1, TResult> onApiV1UploadInit400Error1,
        Func<ApiV1UploadInit401Error1, TResult> onApiV1UploadInit401Error1,
        Func<ApiV1UploadInit403Error1, TResult> onApiV1UploadInit403Error1,
        Func<ApiV1UploadInit404Error1, TResult> onApiV1UploadInit404Error1,
        Func<ApiV1UploadInit429Error1, TResult> onApiV1UploadInit429Error1,
        Func<ApiV1UploadInit500Error1, TResult> onApiV1UploadInit500Error1,
        Func<ApiV1UploadInit502Error1, TResult> onApiV1UploadInit502Error1,
        Func<ApiV1UploadInit503Error1, TResult> onApiV1UploadInit503Error1,
        Func<ApiV1UploadInit504Error1, TResult> onApiV1UploadInit504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadInit400Error1(out var apiV1UploadInit400Error1Value) => onApiV1UploadInit400Error1(
                apiV1UploadInit400Error1Value),
            _ when TryGetApiV1UploadInit401Error1(out var apiV1UploadInit401Error1Value) => onApiV1UploadInit401Error1(
                apiV1UploadInit401Error1Value),
            _ when TryGetApiV1UploadInit403Error1(out var apiV1UploadInit403Error1Value) => onApiV1UploadInit403Error1(
                apiV1UploadInit403Error1Value),
            _ when TryGetApiV1UploadInit404Error1(out var apiV1UploadInit404Error1Value) => onApiV1UploadInit404Error1(
                apiV1UploadInit404Error1Value),
            _ when TryGetApiV1UploadInit429Error1(out var apiV1UploadInit429Error1Value) => onApiV1UploadInit429Error1(
                apiV1UploadInit429Error1Value),
            _ when TryGetApiV1UploadInit500Error1(out var apiV1UploadInit500Error1Value) => onApiV1UploadInit500Error1(
                apiV1UploadInit500Error1Value),
            _ when TryGetApiV1UploadInit502Error1(out var apiV1UploadInit502Error1Value) => onApiV1UploadInit502Error1(
                apiV1UploadInit502Error1Value),
            _ when TryGetApiV1UploadInit503Error1(out var apiV1UploadInit503Error1Value) => onApiV1UploadInit503Error1(
                apiV1UploadInit503Error1Value),
            _ when TryGetApiV1UploadInit504Error1(out var apiV1UploadInit504Error1Value) => onApiV1UploadInit504Error1(
                apiV1UploadInit504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadInitLargeUploadError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadInit400Error1> onApiV1UploadInit400Error1,
        Action<ApiV1UploadInit401Error1> onApiV1UploadInit401Error1,
        Action<ApiV1UploadInit403Error1> onApiV1UploadInit403Error1,
        Action<ApiV1UploadInit404Error1> onApiV1UploadInit404Error1,
        Action<ApiV1UploadInit429Error1> onApiV1UploadInit429Error1,
        Action<ApiV1UploadInit500Error1> onApiV1UploadInit500Error1,
        Action<ApiV1UploadInit502Error1> onApiV1UploadInit502Error1,
        Action<ApiV1UploadInit503Error1> onApiV1UploadInit503Error1,
        Action<ApiV1UploadInit504Error1> onApiV1UploadInit504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadInit400Error1(out var apiV1UploadInit400Error1Value)) onApiV1UploadInit400Error1(
            apiV1UploadInit400Error1Value);
        else if (TryGetApiV1UploadInit401Error1(out var apiV1UploadInit401Error1Value)) onApiV1UploadInit401Error1(
            apiV1UploadInit401Error1Value);
        else if (TryGetApiV1UploadInit403Error1(out var apiV1UploadInit403Error1Value)) onApiV1UploadInit403Error1(
            apiV1UploadInit403Error1Value);
        else if (TryGetApiV1UploadInit404Error1(out var apiV1UploadInit404Error1Value)) onApiV1UploadInit404Error1(
            apiV1UploadInit404Error1Value);
        else if (TryGetApiV1UploadInit429Error1(out var apiV1UploadInit429Error1Value)) onApiV1UploadInit429Error1(
            apiV1UploadInit429Error1Value);
        else if (TryGetApiV1UploadInit500Error1(out var apiV1UploadInit500Error1Value)) onApiV1UploadInit500Error1(
            apiV1UploadInit500Error1Value);
        else if (TryGetApiV1UploadInit502Error1(out var apiV1UploadInit502Error1Value)) onApiV1UploadInit502Error1(
            apiV1UploadInit502Error1Value);
        else if (TryGetApiV1UploadInit503Error1(out var apiV1UploadInit503Error1Value)) onApiV1UploadInit503Error1(
            apiV1UploadInit503Error1Value);
        else if (TryGetApiV1UploadInit504Error1(out var apiV1UploadInit504Error1Value)) onApiV1UploadInit504Error1(
            apiV1UploadInit504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadInitLargeUploadError)} holds no value.");
    }

    private static Task<UploadInitLargeUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadInit400Error1>().As(AsApiV1UploadInit400Error1),
            401 => response.Json<ApiV1UploadInit401Error1>().As(AsApiV1UploadInit401Error1),
            403 => response.Json<ApiV1UploadInit403Error1>().As(AsApiV1UploadInit403Error1),
            404 => response.Json<ApiV1UploadInit404Error1>().As(AsApiV1UploadInit404Error1),
            429 => response.Json<ApiV1UploadInit429Error1>().As(AsApiV1UploadInit429Error1),
            500 => response.Json<ApiV1UploadInit500Error1>().As(AsApiV1UploadInit500Error1),
            502 => response.Json<ApiV1UploadInit502Error1>().As(AsApiV1UploadInit502Error1),
            503 => response.Json<ApiV1UploadInit503Error1>().As(AsApiV1UploadInit503Error1),
            504 => response.Json<ApiV1UploadInit504Error1>().As(AsApiV1UploadInit504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadInitLargeUploadError> Response { get; } = new(Create);
}
