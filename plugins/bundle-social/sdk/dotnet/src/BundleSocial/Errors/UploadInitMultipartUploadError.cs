using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadInitMultipartUploadError : ApiError
{
    private readonly Optional<ApiV1UploadMultipartInit400Error1> _apiV1UploadMultipartInit400Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit401Error1> _apiV1UploadMultipartInit401Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit403Error1> _apiV1UploadMultipartInit403Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit404Error1> _apiV1UploadMultipartInit404Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit429Error1> _apiV1UploadMultipartInit429Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit500Error1> _apiV1UploadMultipartInit500Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit502Error1> _apiV1UploadMultipartInit502Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit503Error1> _apiV1UploadMultipartInit503Error1Value;

    private readonly Optional<ApiV1UploadMultipartInit504Error1> _apiV1UploadMultipartInit504Error1Value;

    private UploadInitMultipartUploadError(Optional<ApiV1UploadMultipartInit400Error1> apiV1UploadMultipartInit400Error1Value,
        Optional<ApiV1UploadMultipartInit401Error1> apiV1UploadMultipartInit401Error1Value,
        Optional<ApiV1UploadMultipartInit403Error1> apiV1UploadMultipartInit403Error1Value,
        Optional<ApiV1UploadMultipartInit404Error1> apiV1UploadMultipartInit404Error1Value,
        Optional<ApiV1UploadMultipartInit429Error1> apiV1UploadMultipartInit429Error1Value,
        Optional<ApiV1UploadMultipartInit500Error1> apiV1UploadMultipartInit500Error1Value,
        Optional<ApiV1UploadMultipartInit502Error1> apiV1UploadMultipartInit502Error1Value,
        Optional<ApiV1UploadMultipartInit503Error1> apiV1UploadMultipartInit503Error1Value,
        Optional<ApiV1UploadMultipartInit504Error1> apiV1UploadMultipartInit504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadMultipartInit400Error1Value = apiV1UploadMultipartInit400Error1Value;
        _apiV1UploadMultipartInit401Error1Value = apiV1UploadMultipartInit401Error1Value;
        _apiV1UploadMultipartInit403Error1Value = apiV1UploadMultipartInit403Error1Value;
        _apiV1UploadMultipartInit404Error1Value = apiV1UploadMultipartInit404Error1Value;
        _apiV1UploadMultipartInit429Error1Value = apiV1UploadMultipartInit429Error1Value;
        _apiV1UploadMultipartInit500Error1Value = apiV1UploadMultipartInit500Error1Value;
        _apiV1UploadMultipartInit502Error1Value = apiV1UploadMultipartInit502Error1Value;
        _apiV1UploadMultipartInit503Error1Value = apiV1UploadMultipartInit503Error1Value;
        _apiV1UploadMultipartInit504Error1Value = apiV1UploadMultipartInit504Error1Value;
    }

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit400Error1(ApiV1UploadMultipartInit400Error1 value) =>
        new(
            Optional<ApiV1UploadMultipartInit400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit401Error1(ApiV1UploadMultipartInit401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadMultipartInit401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit403Error1(ApiV1UploadMultipartInit403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadMultipartInit403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit404Error1(ApiV1UploadMultipartInit404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit429Error1(ApiV1UploadMultipartInit429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit500Error1(ApiV1UploadMultipartInit500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit502Error1(ApiV1UploadMultipartInit502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit503Error1(ApiV1UploadMultipartInit503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit503Error1>.Some(value),
            default,
            default);

    private static UploadInitMultipartUploadError AsApiV1UploadMultipartInit504Error1(ApiV1UploadMultipartInit504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartInit504Error1>.Some(value),
            default);

    private static UploadInitMultipartUploadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadMultipartInit400Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit400Error1? value) =>
        _apiV1UploadMultipartInit400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit401Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit401Error1? value) =>
        _apiV1UploadMultipartInit401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit403Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit403Error1? value) =>
        _apiV1UploadMultipartInit403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit404Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit404Error1? value) =>
        _apiV1UploadMultipartInit404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit429Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit429Error1? value) =>
        _apiV1UploadMultipartInit429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit500Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit500Error1? value) =>
        _apiV1UploadMultipartInit500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit502Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit502Error1? value) =>
        _apiV1UploadMultipartInit502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit503Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit503Error1? value) =>
        _apiV1UploadMultipartInit503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartInit504Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit504Error1? value) =>
        _apiV1UploadMultipartInit504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadMultipartInit400Error1, TResult> onApiV1UploadMultipartInit400Error1,
        Func<ApiV1UploadMultipartInit401Error1, TResult> onApiV1UploadMultipartInit401Error1,
        Func<ApiV1UploadMultipartInit403Error1, TResult> onApiV1UploadMultipartInit403Error1,
        Func<ApiV1UploadMultipartInit404Error1, TResult> onApiV1UploadMultipartInit404Error1,
        Func<ApiV1UploadMultipartInit429Error1, TResult> onApiV1UploadMultipartInit429Error1,
        Func<ApiV1UploadMultipartInit500Error1, TResult> onApiV1UploadMultipartInit500Error1,
        Func<ApiV1UploadMultipartInit502Error1, TResult> onApiV1UploadMultipartInit502Error1,
        Func<ApiV1UploadMultipartInit503Error1, TResult> onApiV1UploadMultipartInit503Error1,
        Func<ApiV1UploadMultipartInit504Error1, TResult> onApiV1UploadMultipartInit504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadMultipartInit400Error1(
                out var apiV1UploadMultipartInit400Error1Value) => onApiV1UploadMultipartInit400Error1(
                apiV1UploadMultipartInit400Error1Value),
            _ when TryGetApiV1UploadMultipartInit401Error1(
                out var apiV1UploadMultipartInit401Error1Value) => onApiV1UploadMultipartInit401Error1(
                apiV1UploadMultipartInit401Error1Value),
            _ when TryGetApiV1UploadMultipartInit403Error1(
                out var apiV1UploadMultipartInit403Error1Value) => onApiV1UploadMultipartInit403Error1(
                apiV1UploadMultipartInit403Error1Value),
            _ when TryGetApiV1UploadMultipartInit404Error1(
                out var apiV1UploadMultipartInit404Error1Value) => onApiV1UploadMultipartInit404Error1(
                apiV1UploadMultipartInit404Error1Value),
            _ when TryGetApiV1UploadMultipartInit429Error1(
                out var apiV1UploadMultipartInit429Error1Value) => onApiV1UploadMultipartInit429Error1(
                apiV1UploadMultipartInit429Error1Value),
            _ when TryGetApiV1UploadMultipartInit500Error1(
                out var apiV1UploadMultipartInit500Error1Value) => onApiV1UploadMultipartInit500Error1(
                apiV1UploadMultipartInit500Error1Value),
            _ when TryGetApiV1UploadMultipartInit502Error1(
                out var apiV1UploadMultipartInit502Error1Value) => onApiV1UploadMultipartInit502Error1(
                apiV1UploadMultipartInit502Error1Value),
            _ when TryGetApiV1UploadMultipartInit503Error1(
                out var apiV1UploadMultipartInit503Error1Value) => onApiV1UploadMultipartInit503Error1(
                apiV1UploadMultipartInit503Error1Value),
            _ when TryGetApiV1UploadMultipartInit504Error1(
                out var apiV1UploadMultipartInit504Error1Value) => onApiV1UploadMultipartInit504Error1(
                apiV1UploadMultipartInit504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadInitMultipartUploadError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadMultipartInit400Error1> onApiV1UploadMultipartInit400Error1,
        Action<ApiV1UploadMultipartInit401Error1> onApiV1UploadMultipartInit401Error1,
        Action<ApiV1UploadMultipartInit403Error1> onApiV1UploadMultipartInit403Error1,
        Action<ApiV1UploadMultipartInit404Error1> onApiV1UploadMultipartInit404Error1,
        Action<ApiV1UploadMultipartInit429Error1> onApiV1UploadMultipartInit429Error1,
        Action<ApiV1UploadMultipartInit500Error1> onApiV1UploadMultipartInit500Error1,
        Action<ApiV1UploadMultipartInit502Error1> onApiV1UploadMultipartInit502Error1,
        Action<ApiV1UploadMultipartInit503Error1> onApiV1UploadMultipartInit503Error1,
        Action<ApiV1UploadMultipartInit504Error1> onApiV1UploadMultipartInit504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadMultipartInit400Error1(
            out var apiV1UploadMultipartInit400Error1Value)) onApiV1UploadMultipartInit400Error1(
            apiV1UploadMultipartInit400Error1Value);
        else if (TryGetApiV1UploadMultipartInit401Error1(
            out var apiV1UploadMultipartInit401Error1Value)) onApiV1UploadMultipartInit401Error1(
            apiV1UploadMultipartInit401Error1Value);
        else if (TryGetApiV1UploadMultipartInit403Error1(
            out var apiV1UploadMultipartInit403Error1Value)) onApiV1UploadMultipartInit403Error1(
            apiV1UploadMultipartInit403Error1Value);
        else if (TryGetApiV1UploadMultipartInit404Error1(
            out var apiV1UploadMultipartInit404Error1Value)) onApiV1UploadMultipartInit404Error1(
            apiV1UploadMultipartInit404Error1Value);
        else if (TryGetApiV1UploadMultipartInit429Error1(
            out var apiV1UploadMultipartInit429Error1Value)) onApiV1UploadMultipartInit429Error1(
            apiV1UploadMultipartInit429Error1Value);
        else if (TryGetApiV1UploadMultipartInit500Error1(
            out var apiV1UploadMultipartInit500Error1Value)) onApiV1UploadMultipartInit500Error1(
            apiV1UploadMultipartInit500Error1Value);
        else if (TryGetApiV1UploadMultipartInit502Error1(
            out var apiV1UploadMultipartInit502Error1Value)) onApiV1UploadMultipartInit502Error1(
            apiV1UploadMultipartInit502Error1Value);
        else if (TryGetApiV1UploadMultipartInit503Error1(
            out var apiV1UploadMultipartInit503Error1Value)) onApiV1UploadMultipartInit503Error1(
            apiV1UploadMultipartInit503Error1Value);
        else if (TryGetApiV1UploadMultipartInit504Error1(
            out var apiV1UploadMultipartInit504Error1Value)) onApiV1UploadMultipartInit504Error1(
            apiV1UploadMultipartInit504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadInitMultipartUploadError)} holds no value.");
    }

    private static Task<UploadInitMultipartUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadMultipartInit400Error1>().As(AsApiV1UploadMultipartInit400Error1),
            401 => response.Json<ApiV1UploadMultipartInit401Error1>().As(AsApiV1UploadMultipartInit401Error1),
            403 => response.Json<ApiV1UploadMultipartInit403Error1>().As(AsApiV1UploadMultipartInit403Error1),
            404 => response.Json<ApiV1UploadMultipartInit404Error1>().As(AsApiV1UploadMultipartInit404Error1),
            429 => response.Json<ApiV1UploadMultipartInit429Error1>().As(AsApiV1UploadMultipartInit429Error1),
            500 => response.Json<ApiV1UploadMultipartInit500Error1>().As(AsApiV1UploadMultipartInit500Error1),
            502 => response.Json<ApiV1UploadMultipartInit502Error1>().As(AsApiV1UploadMultipartInit502Error1),
            503 => response.Json<ApiV1UploadMultipartInit503Error1>().As(AsApiV1UploadMultipartInit503Error1),
            504 => response.Json<ApiV1UploadMultipartInit504Error1>().As(AsApiV1UploadMultipartInit504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadInitMultipartUploadError> Response { get; } = new(Create);
}
