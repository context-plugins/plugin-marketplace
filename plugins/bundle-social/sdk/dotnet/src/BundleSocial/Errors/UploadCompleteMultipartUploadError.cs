using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadCompleteMultipartUploadError : ApiError
{
    private readonly Optional<ApiV1UploadMultipartComplete400Error1> _apiV1UploadMultipartComplete400Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete401Error1> _apiV1UploadMultipartComplete401Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete403Error1> _apiV1UploadMultipartComplete403Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete404Error1> _apiV1UploadMultipartComplete404Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete429Error1> _apiV1UploadMultipartComplete429Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete500Error1> _apiV1UploadMultipartComplete500Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete502Error1> _apiV1UploadMultipartComplete502Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete503Error1> _apiV1UploadMultipartComplete503Error1Value;

    private readonly Optional<ApiV1UploadMultipartComplete504Error1> _apiV1UploadMultipartComplete504Error1Value;

    private UploadCompleteMultipartUploadError(Optional<ApiV1UploadMultipartComplete400Error1> apiV1UploadMultipartComplete400Error1Value,
        Optional<ApiV1UploadMultipartComplete401Error1> apiV1UploadMultipartComplete401Error1Value,
        Optional<ApiV1UploadMultipartComplete403Error1> apiV1UploadMultipartComplete403Error1Value,
        Optional<ApiV1UploadMultipartComplete404Error1> apiV1UploadMultipartComplete404Error1Value,
        Optional<ApiV1UploadMultipartComplete429Error1> apiV1UploadMultipartComplete429Error1Value,
        Optional<ApiV1UploadMultipartComplete500Error1> apiV1UploadMultipartComplete500Error1Value,
        Optional<ApiV1UploadMultipartComplete502Error1> apiV1UploadMultipartComplete502Error1Value,
        Optional<ApiV1UploadMultipartComplete503Error1> apiV1UploadMultipartComplete503Error1Value,
        Optional<ApiV1UploadMultipartComplete504Error1> apiV1UploadMultipartComplete504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadMultipartComplete400Error1Value = apiV1UploadMultipartComplete400Error1Value;
        _apiV1UploadMultipartComplete401Error1Value = apiV1UploadMultipartComplete401Error1Value;
        _apiV1UploadMultipartComplete403Error1Value = apiV1UploadMultipartComplete403Error1Value;
        _apiV1UploadMultipartComplete404Error1Value = apiV1UploadMultipartComplete404Error1Value;
        _apiV1UploadMultipartComplete429Error1Value = apiV1UploadMultipartComplete429Error1Value;
        _apiV1UploadMultipartComplete500Error1Value = apiV1UploadMultipartComplete500Error1Value;
        _apiV1UploadMultipartComplete502Error1Value = apiV1UploadMultipartComplete502Error1Value;
        _apiV1UploadMultipartComplete503Error1Value = apiV1UploadMultipartComplete503Error1Value;
        _apiV1UploadMultipartComplete504Error1Value = apiV1UploadMultipartComplete504Error1Value;
    }

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete400Error1(ApiV1UploadMultipartComplete400Error1 value) =>
        new(
            Optional<ApiV1UploadMultipartComplete400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete401Error1(ApiV1UploadMultipartComplete401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadMultipartComplete401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete403Error1(ApiV1UploadMultipartComplete403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadMultipartComplete403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete404Error1(ApiV1UploadMultipartComplete404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete429Error1(ApiV1UploadMultipartComplete429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete500Error1(ApiV1UploadMultipartComplete500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete502Error1(ApiV1UploadMultipartComplete502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete503Error1(ApiV1UploadMultipartComplete503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete503Error1>.Some(value),
            default,
            default);

    private static UploadCompleteMultipartUploadError AsApiV1UploadMultipartComplete504Error1(ApiV1UploadMultipartComplete504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartComplete504Error1>.Some(value),
            default);

    private static UploadCompleteMultipartUploadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadMultipartComplete400Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete400Error1? value) =>
        _apiV1UploadMultipartComplete400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete401Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete401Error1? value) =>
        _apiV1UploadMultipartComplete401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete403Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete403Error1? value) =>
        _apiV1UploadMultipartComplete403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete404Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete404Error1? value) =>
        _apiV1UploadMultipartComplete404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete429Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete429Error1? value) =>
        _apiV1UploadMultipartComplete429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete500Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete500Error1? value) =>
        _apiV1UploadMultipartComplete500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete502Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete502Error1? value) =>
        _apiV1UploadMultipartComplete502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete503Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete503Error1? value) =>
        _apiV1UploadMultipartComplete503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartComplete504Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete504Error1? value) =>
        _apiV1UploadMultipartComplete504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadMultipartComplete400Error1, TResult> onApiV1UploadMultipartComplete400Error1,
        Func<ApiV1UploadMultipartComplete401Error1, TResult> onApiV1UploadMultipartComplete401Error1,
        Func<ApiV1UploadMultipartComplete403Error1, TResult> onApiV1UploadMultipartComplete403Error1,
        Func<ApiV1UploadMultipartComplete404Error1, TResult> onApiV1UploadMultipartComplete404Error1,
        Func<ApiV1UploadMultipartComplete429Error1, TResult> onApiV1UploadMultipartComplete429Error1,
        Func<ApiV1UploadMultipartComplete500Error1, TResult> onApiV1UploadMultipartComplete500Error1,
        Func<ApiV1UploadMultipartComplete502Error1, TResult> onApiV1UploadMultipartComplete502Error1,
        Func<ApiV1UploadMultipartComplete503Error1, TResult> onApiV1UploadMultipartComplete503Error1,
        Func<ApiV1UploadMultipartComplete504Error1, TResult> onApiV1UploadMultipartComplete504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadMultipartComplete400Error1(
                out var apiV1UploadMultipartComplete400Error1Value) => onApiV1UploadMultipartComplete400Error1(
                apiV1UploadMultipartComplete400Error1Value),
            _ when TryGetApiV1UploadMultipartComplete401Error1(
                out var apiV1UploadMultipartComplete401Error1Value) => onApiV1UploadMultipartComplete401Error1(
                apiV1UploadMultipartComplete401Error1Value),
            _ when TryGetApiV1UploadMultipartComplete403Error1(
                out var apiV1UploadMultipartComplete403Error1Value) => onApiV1UploadMultipartComplete403Error1(
                apiV1UploadMultipartComplete403Error1Value),
            _ when TryGetApiV1UploadMultipartComplete404Error1(
                out var apiV1UploadMultipartComplete404Error1Value) => onApiV1UploadMultipartComplete404Error1(
                apiV1UploadMultipartComplete404Error1Value),
            _ when TryGetApiV1UploadMultipartComplete429Error1(
                out var apiV1UploadMultipartComplete429Error1Value) => onApiV1UploadMultipartComplete429Error1(
                apiV1UploadMultipartComplete429Error1Value),
            _ when TryGetApiV1UploadMultipartComplete500Error1(
                out var apiV1UploadMultipartComplete500Error1Value) => onApiV1UploadMultipartComplete500Error1(
                apiV1UploadMultipartComplete500Error1Value),
            _ when TryGetApiV1UploadMultipartComplete502Error1(
                out var apiV1UploadMultipartComplete502Error1Value) => onApiV1UploadMultipartComplete502Error1(
                apiV1UploadMultipartComplete502Error1Value),
            _ when TryGetApiV1UploadMultipartComplete503Error1(
                out var apiV1UploadMultipartComplete503Error1Value) => onApiV1UploadMultipartComplete503Error1(
                apiV1UploadMultipartComplete503Error1Value),
            _ when TryGetApiV1UploadMultipartComplete504Error1(
                out var apiV1UploadMultipartComplete504Error1Value) => onApiV1UploadMultipartComplete504Error1(
                apiV1UploadMultipartComplete504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadCompleteMultipartUploadError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadMultipartComplete400Error1> onApiV1UploadMultipartComplete400Error1,
        Action<ApiV1UploadMultipartComplete401Error1> onApiV1UploadMultipartComplete401Error1,
        Action<ApiV1UploadMultipartComplete403Error1> onApiV1UploadMultipartComplete403Error1,
        Action<ApiV1UploadMultipartComplete404Error1> onApiV1UploadMultipartComplete404Error1,
        Action<ApiV1UploadMultipartComplete429Error1> onApiV1UploadMultipartComplete429Error1,
        Action<ApiV1UploadMultipartComplete500Error1> onApiV1UploadMultipartComplete500Error1,
        Action<ApiV1UploadMultipartComplete502Error1> onApiV1UploadMultipartComplete502Error1,
        Action<ApiV1UploadMultipartComplete503Error1> onApiV1UploadMultipartComplete503Error1,
        Action<ApiV1UploadMultipartComplete504Error1> onApiV1UploadMultipartComplete504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadMultipartComplete400Error1(
            out var apiV1UploadMultipartComplete400Error1Value)) onApiV1UploadMultipartComplete400Error1(
            apiV1UploadMultipartComplete400Error1Value);
        else if (TryGetApiV1UploadMultipartComplete401Error1(
            out var apiV1UploadMultipartComplete401Error1Value)) onApiV1UploadMultipartComplete401Error1(
            apiV1UploadMultipartComplete401Error1Value);
        else if (TryGetApiV1UploadMultipartComplete403Error1(
            out var apiV1UploadMultipartComplete403Error1Value)) onApiV1UploadMultipartComplete403Error1(
            apiV1UploadMultipartComplete403Error1Value);
        else if (TryGetApiV1UploadMultipartComplete404Error1(
            out var apiV1UploadMultipartComplete404Error1Value)) onApiV1UploadMultipartComplete404Error1(
            apiV1UploadMultipartComplete404Error1Value);
        else if (TryGetApiV1UploadMultipartComplete429Error1(
            out var apiV1UploadMultipartComplete429Error1Value)) onApiV1UploadMultipartComplete429Error1(
            apiV1UploadMultipartComplete429Error1Value);
        else if (TryGetApiV1UploadMultipartComplete500Error1(
            out var apiV1UploadMultipartComplete500Error1Value)) onApiV1UploadMultipartComplete500Error1(
            apiV1UploadMultipartComplete500Error1Value);
        else if (TryGetApiV1UploadMultipartComplete502Error1(
            out var apiV1UploadMultipartComplete502Error1Value)) onApiV1UploadMultipartComplete502Error1(
            apiV1UploadMultipartComplete502Error1Value);
        else if (TryGetApiV1UploadMultipartComplete503Error1(
            out var apiV1UploadMultipartComplete503Error1Value)) onApiV1UploadMultipartComplete503Error1(
            apiV1UploadMultipartComplete503Error1Value);
        else if (TryGetApiV1UploadMultipartComplete504Error1(
            out var apiV1UploadMultipartComplete504Error1Value)) onApiV1UploadMultipartComplete504Error1(
            apiV1UploadMultipartComplete504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadCompleteMultipartUploadError)} holds no value.");
    }

    private static Task<UploadCompleteMultipartUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadMultipartComplete400Error1>().As(AsApiV1UploadMultipartComplete400Error1),
            401 => response.Json<ApiV1UploadMultipartComplete401Error1>().As(AsApiV1UploadMultipartComplete401Error1),
            403 => response.Json<ApiV1UploadMultipartComplete403Error1>().As(AsApiV1UploadMultipartComplete403Error1),
            404 => response.Json<ApiV1UploadMultipartComplete404Error1>().As(AsApiV1UploadMultipartComplete404Error1),
            429 => response.Json<ApiV1UploadMultipartComplete429Error1>().As(AsApiV1UploadMultipartComplete429Error1),
            500 => response.Json<ApiV1UploadMultipartComplete500Error1>().As(AsApiV1UploadMultipartComplete500Error1),
            502 => response.Json<ApiV1UploadMultipartComplete502Error1>().As(AsApiV1UploadMultipartComplete502Error1),
            503 => response.Json<ApiV1UploadMultipartComplete503Error1>().As(AsApiV1UploadMultipartComplete503Error1),
            504 => response.Json<ApiV1UploadMultipartComplete504Error1>().As(AsApiV1UploadMultipartComplete504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadCompleteMultipartUploadError> Response { get; } = new(Create);
}
