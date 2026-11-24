using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadAbortMultipartUploadError : ApiError
{
    private readonly Optional<ApiV1UploadMultipartAbort400Error1> _apiV1UploadMultipartAbort400Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort401Error1> _apiV1UploadMultipartAbort401Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort403Error1> _apiV1UploadMultipartAbort403Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort404Error1> _apiV1UploadMultipartAbort404Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort429Error1> _apiV1UploadMultipartAbort429Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort500Error1> _apiV1UploadMultipartAbort500Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort502Error1> _apiV1UploadMultipartAbort502Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort503Error1> _apiV1UploadMultipartAbort503Error1Value;

    private readonly Optional<ApiV1UploadMultipartAbort504Error1> _apiV1UploadMultipartAbort504Error1Value;

    private UploadAbortMultipartUploadError(Optional<ApiV1UploadMultipartAbort400Error1> apiV1UploadMultipartAbort400Error1Value,
        Optional<ApiV1UploadMultipartAbort401Error1> apiV1UploadMultipartAbort401Error1Value,
        Optional<ApiV1UploadMultipartAbort403Error1> apiV1UploadMultipartAbort403Error1Value,
        Optional<ApiV1UploadMultipartAbort404Error1> apiV1UploadMultipartAbort404Error1Value,
        Optional<ApiV1UploadMultipartAbort429Error1> apiV1UploadMultipartAbort429Error1Value,
        Optional<ApiV1UploadMultipartAbort500Error1> apiV1UploadMultipartAbort500Error1Value,
        Optional<ApiV1UploadMultipartAbort502Error1> apiV1UploadMultipartAbort502Error1Value,
        Optional<ApiV1UploadMultipartAbort503Error1> apiV1UploadMultipartAbort503Error1Value,
        Optional<ApiV1UploadMultipartAbort504Error1> apiV1UploadMultipartAbort504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadMultipartAbort400Error1Value = apiV1UploadMultipartAbort400Error1Value;
        _apiV1UploadMultipartAbort401Error1Value = apiV1UploadMultipartAbort401Error1Value;
        _apiV1UploadMultipartAbort403Error1Value = apiV1UploadMultipartAbort403Error1Value;
        _apiV1UploadMultipartAbort404Error1Value = apiV1UploadMultipartAbort404Error1Value;
        _apiV1UploadMultipartAbort429Error1Value = apiV1UploadMultipartAbort429Error1Value;
        _apiV1UploadMultipartAbort500Error1Value = apiV1UploadMultipartAbort500Error1Value;
        _apiV1UploadMultipartAbort502Error1Value = apiV1UploadMultipartAbort502Error1Value;
        _apiV1UploadMultipartAbort503Error1Value = apiV1UploadMultipartAbort503Error1Value;
        _apiV1UploadMultipartAbort504Error1Value = apiV1UploadMultipartAbort504Error1Value;
    }

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort400Error1(ApiV1UploadMultipartAbort400Error1 value) =>
        new(
            Optional<ApiV1UploadMultipartAbort400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort401Error1(ApiV1UploadMultipartAbort401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadMultipartAbort401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort403Error1(ApiV1UploadMultipartAbort403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadMultipartAbort403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort404Error1(ApiV1UploadMultipartAbort404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort429Error1(ApiV1UploadMultipartAbort429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort500Error1(ApiV1UploadMultipartAbort500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort502Error1(ApiV1UploadMultipartAbort502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort503Error1(ApiV1UploadMultipartAbort503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort503Error1>.Some(value),
            default,
            default);

    private static UploadAbortMultipartUploadError AsApiV1UploadMultipartAbort504Error1(ApiV1UploadMultipartAbort504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartAbort504Error1>.Some(value),
            default);

    private static UploadAbortMultipartUploadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadMultipartAbort400Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort400Error1? value) =>
        _apiV1UploadMultipartAbort400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort401Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort401Error1? value) =>
        _apiV1UploadMultipartAbort401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort403Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort403Error1? value) =>
        _apiV1UploadMultipartAbort403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort404Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort404Error1? value) =>
        _apiV1UploadMultipartAbort404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort429Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort429Error1? value) =>
        _apiV1UploadMultipartAbort429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort500Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort500Error1? value) =>
        _apiV1UploadMultipartAbort500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort502Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort502Error1? value) =>
        _apiV1UploadMultipartAbort502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort503Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort503Error1? value) =>
        _apiV1UploadMultipartAbort503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartAbort504Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort504Error1? value) =>
        _apiV1UploadMultipartAbort504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadMultipartAbort400Error1, TResult> onApiV1UploadMultipartAbort400Error1,
        Func<ApiV1UploadMultipartAbort401Error1, TResult> onApiV1UploadMultipartAbort401Error1,
        Func<ApiV1UploadMultipartAbort403Error1, TResult> onApiV1UploadMultipartAbort403Error1,
        Func<ApiV1UploadMultipartAbort404Error1, TResult> onApiV1UploadMultipartAbort404Error1,
        Func<ApiV1UploadMultipartAbort429Error1, TResult> onApiV1UploadMultipartAbort429Error1,
        Func<ApiV1UploadMultipartAbort500Error1, TResult> onApiV1UploadMultipartAbort500Error1,
        Func<ApiV1UploadMultipartAbort502Error1, TResult> onApiV1UploadMultipartAbort502Error1,
        Func<ApiV1UploadMultipartAbort503Error1, TResult> onApiV1UploadMultipartAbort503Error1,
        Func<ApiV1UploadMultipartAbort504Error1, TResult> onApiV1UploadMultipartAbort504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadMultipartAbort400Error1(
                out var apiV1UploadMultipartAbort400Error1Value) => onApiV1UploadMultipartAbort400Error1(
                apiV1UploadMultipartAbort400Error1Value),
            _ when TryGetApiV1UploadMultipartAbort401Error1(
                out var apiV1UploadMultipartAbort401Error1Value) => onApiV1UploadMultipartAbort401Error1(
                apiV1UploadMultipartAbort401Error1Value),
            _ when TryGetApiV1UploadMultipartAbort403Error1(
                out var apiV1UploadMultipartAbort403Error1Value) => onApiV1UploadMultipartAbort403Error1(
                apiV1UploadMultipartAbort403Error1Value),
            _ when TryGetApiV1UploadMultipartAbort404Error1(
                out var apiV1UploadMultipartAbort404Error1Value) => onApiV1UploadMultipartAbort404Error1(
                apiV1UploadMultipartAbort404Error1Value),
            _ when TryGetApiV1UploadMultipartAbort429Error1(
                out var apiV1UploadMultipartAbort429Error1Value) => onApiV1UploadMultipartAbort429Error1(
                apiV1UploadMultipartAbort429Error1Value),
            _ when TryGetApiV1UploadMultipartAbort500Error1(
                out var apiV1UploadMultipartAbort500Error1Value) => onApiV1UploadMultipartAbort500Error1(
                apiV1UploadMultipartAbort500Error1Value),
            _ when TryGetApiV1UploadMultipartAbort502Error1(
                out var apiV1UploadMultipartAbort502Error1Value) => onApiV1UploadMultipartAbort502Error1(
                apiV1UploadMultipartAbort502Error1Value),
            _ when TryGetApiV1UploadMultipartAbort503Error1(
                out var apiV1UploadMultipartAbort503Error1Value) => onApiV1UploadMultipartAbort503Error1(
                apiV1UploadMultipartAbort503Error1Value),
            _ when TryGetApiV1UploadMultipartAbort504Error1(
                out var apiV1UploadMultipartAbort504Error1Value) => onApiV1UploadMultipartAbort504Error1(
                apiV1UploadMultipartAbort504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadAbortMultipartUploadError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadMultipartAbort400Error1> onApiV1UploadMultipartAbort400Error1,
        Action<ApiV1UploadMultipartAbort401Error1> onApiV1UploadMultipartAbort401Error1,
        Action<ApiV1UploadMultipartAbort403Error1> onApiV1UploadMultipartAbort403Error1,
        Action<ApiV1UploadMultipartAbort404Error1> onApiV1UploadMultipartAbort404Error1,
        Action<ApiV1UploadMultipartAbort429Error1> onApiV1UploadMultipartAbort429Error1,
        Action<ApiV1UploadMultipartAbort500Error1> onApiV1UploadMultipartAbort500Error1,
        Action<ApiV1UploadMultipartAbort502Error1> onApiV1UploadMultipartAbort502Error1,
        Action<ApiV1UploadMultipartAbort503Error1> onApiV1UploadMultipartAbort503Error1,
        Action<ApiV1UploadMultipartAbort504Error1> onApiV1UploadMultipartAbort504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadMultipartAbort400Error1(
            out var apiV1UploadMultipartAbort400Error1Value)) onApiV1UploadMultipartAbort400Error1(
            apiV1UploadMultipartAbort400Error1Value);
        else if (TryGetApiV1UploadMultipartAbort401Error1(
            out var apiV1UploadMultipartAbort401Error1Value)) onApiV1UploadMultipartAbort401Error1(
            apiV1UploadMultipartAbort401Error1Value);
        else if (TryGetApiV1UploadMultipartAbort403Error1(
            out var apiV1UploadMultipartAbort403Error1Value)) onApiV1UploadMultipartAbort403Error1(
            apiV1UploadMultipartAbort403Error1Value);
        else if (TryGetApiV1UploadMultipartAbort404Error1(
            out var apiV1UploadMultipartAbort404Error1Value)) onApiV1UploadMultipartAbort404Error1(
            apiV1UploadMultipartAbort404Error1Value);
        else if (TryGetApiV1UploadMultipartAbort429Error1(
            out var apiV1UploadMultipartAbort429Error1Value)) onApiV1UploadMultipartAbort429Error1(
            apiV1UploadMultipartAbort429Error1Value);
        else if (TryGetApiV1UploadMultipartAbort500Error1(
            out var apiV1UploadMultipartAbort500Error1Value)) onApiV1UploadMultipartAbort500Error1(
            apiV1UploadMultipartAbort500Error1Value);
        else if (TryGetApiV1UploadMultipartAbort502Error1(
            out var apiV1UploadMultipartAbort502Error1Value)) onApiV1UploadMultipartAbort502Error1(
            apiV1UploadMultipartAbort502Error1Value);
        else if (TryGetApiV1UploadMultipartAbort503Error1(
            out var apiV1UploadMultipartAbort503Error1Value)) onApiV1UploadMultipartAbort503Error1(
            apiV1UploadMultipartAbort503Error1Value);
        else if (TryGetApiV1UploadMultipartAbort504Error1(
            out var apiV1UploadMultipartAbort504Error1Value)) onApiV1UploadMultipartAbort504Error1(
            apiV1UploadMultipartAbort504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadAbortMultipartUploadError)} holds no value.");
    }

    private static Task<UploadAbortMultipartUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadMultipartAbort400Error1>().As(AsApiV1UploadMultipartAbort400Error1),
            401 => response.Json<ApiV1UploadMultipartAbort401Error1>().As(AsApiV1UploadMultipartAbort401Error1),
            403 => response.Json<ApiV1UploadMultipartAbort403Error1>().As(AsApiV1UploadMultipartAbort403Error1),
            404 => response.Json<ApiV1UploadMultipartAbort404Error1>().As(AsApiV1UploadMultipartAbort404Error1),
            429 => response.Json<ApiV1UploadMultipartAbort429Error1>().As(AsApiV1UploadMultipartAbort429Error1),
            500 => response.Json<ApiV1UploadMultipartAbort500Error1>().As(AsApiV1UploadMultipartAbort500Error1),
            502 => response.Json<ApiV1UploadMultipartAbort502Error1>().As(AsApiV1UploadMultipartAbort502Error1),
            503 => response.Json<ApiV1UploadMultipartAbort503Error1>().As(AsApiV1UploadMultipartAbort503Error1),
            504 => response.Json<ApiV1UploadMultipartAbort504Error1>().As(AsApiV1UploadMultipartAbort504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadAbortMultipartUploadError> Response { get; } = new(Create);
}
