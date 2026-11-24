using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadCreateFromUrlError : ApiError
{
    private readonly Optional<ApiV1UploadFromUrl400Error1> _apiV1UploadFromUrl400Error1Value;

    private readonly Optional<ApiV1UploadFromUrl401Error1> _apiV1UploadFromUrl401Error1Value;

    private readonly Optional<ApiV1UploadFromUrl403Error1> _apiV1UploadFromUrl403Error1Value;

    private readonly Optional<ApiV1UploadFromUrl404Error1> _apiV1UploadFromUrl404Error1Value;

    private readonly Optional<ApiV1UploadFromUrl429Error1> _apiV1UploadFromUrl429Error1Value;

    private readonly Optional<ApiV1UploadFromUrl500Error1> _apiV1UploadFromUrl500Error1Value;

    private readonly Optional<ApiV1UploadFromUrl502Error1> _apiV1UploadFromUrl502Error1Value;

    private readonly Optional<ApiV1UploadFromUrl503Error1> _apiV1UploadFromUrl503Error1Value;

    private readonly Optional<ApiV1UploadFromUrl504Error1> _apiV1UploadFromUrl504Error1Value;

    private UploadCreateFromUrlError(Optional<ApiV1UploadFromUrl400Error1> apiV1UploadFromUrl400Error1Value,
        Optional<ApiV1UploadFromUrl401Error1> apiV1UploadFromUrl401Error1Value,
        Optional<ApiV1UploadFromUrl403Error1> apiV1UploadFromUrl403Error1Value,
        Optional<ApiV1UploadFromUrl404Error1> apiV1UploadFromUrl404Error1Value,
        Optional<ApiV1UploadFromUrl429Error1> apiV1UploadFromUrl429Error1Value,
        Optional<ApiV1UploadFromUrl500Error1> apiV1UploadFromUrl500Error1Value,
        Optional<ApiV1UploadFromUrl502Error1> apiV1UploadFromUrl502Error1Value,
        Optional<ApiV1UploadFromUrl503Error1> apiV1UploadFromUrl503Error1Value,
        Optional<ApiV1UploadFromUrl504Error1> apiV1UploadFromUrl504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadFromUrl400Error1Value = apiV1UploadFromUrl400Error1Value;
        _apiV1UploadFromUrl401Error1Value = apiV1UploadFromUrl401Error1Value;
        _apiV1UploadFromUrl403Error1Value = apiV1UploadFromUrl403Error1Value;
        _apiV1UploadFromUrl404Error1Value = apiV1UploadFromUrl404Error1Value;
        _apiV1UploadFromUrl429Error1Value = apiV1UploadFromUrl429Error1Value;
        _apiV1UploadFromUrl500Error1Value = apiV1UploadFromUrl500Error1Value;
        _apiV1UploadFromUrl502Error1Value = apiV1UploadFromUrl502Error1Value;
        _apiV1UploadFromUrl503Error1Value = apiV1UploadFromUrl503Error1Value;
        _apiV1UploadFromUrl504Error1Value = apiV1UploadFromUrl504Error1Value;
    }

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl400Error1(ApiV1UploadFromUrl400Error1 value) =>
        new(
            Optional<ApiV1UploadFromUrl400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl401Error1(ApiV1UploadFromUrl401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadFromUrl401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl403Error1(ApiV1UploadFromUrl403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadFromUrl403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl404Error1(ApiV1UploadFromUrl404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl429Error1(ApiV1UploadFromUrl429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl500Error1(ApiV1UploadFromUrl500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl502Error1(ApiV1UploadFromUrl502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl503Error1(ApiV1UploadFromUrl503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl503Error1>.Some(value),
            default,
            default);

    private static UploadCreateFromUrlError AsApiV1UploadFromUrl504Error1(ApiV1UploadFromUrl504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFromUrl504Error1>.Some(value),
            default);

    private static UploadCreateFromUrlError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadFromUrl400Error1([NotNullWhen(true)] out ApiV1UploadFromUrl400Error1? value) =>
        _apiV1UploadFromUrl400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl401Error1([NotNullWhen(true)] out ApiV1UploadFromUrl401Error1? value) =>
        _apiV1UploadFromUrl401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl403Error1([NotNullWhen(true)] out ApiV1UploadFromUrl403Error1? value) =>
        _apiV1UploadFromUrl403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl404Error1([NotNullWhen(true)] out ApiV1UploadFromUrl404Error1? value) =>
        _apiV1UploadFromUrl404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl429Error1([NotNullWhen(true)] out ApiV1UploadFromUrl429Error1? value) =>
        _apiV1UploadFromUrl429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl500Error1([NotNullWhen(true)] out ApiV1UploadFromUrl500Error1? value) =>
        _apiV1UploadFromUrl500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl502Error1([NotNullWhen(true)] out ApiV1UploadFromUrl502Error1? value) =>
        _apiV1UploadFromUrl502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl503Error1([NotNullWhen(true)] out ApiV1UploadFromUrl503Error1? value) =>
        _apiV1UploadFromUrl503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFromUrl504Error1([NotNullWhen(true)] out ApiV1UploadFromUrl504Error1? value) =>
        _apiV1UploadFromUrl504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadFromUrl400Error1, TResult> onApiV1UploadFromUrl400Error1,
        Func<ApiV1UploadFromUrl401Error1, TResult> onApiV1UploadFromUrl401Error1,
        Func<ApiV1UploadFromUrl403Error1, TResult> onApiV1UploadFromUrl403Error1,
        Func<ApiV1UploadFromUrl404Error1, TResult> onApiV1UploadFromUrl404Error1,
        Func<ApiV1UploadFromUrl429Error1, TResult> onApiV1UploadFromUrl429Error1,
        Func<ApiV1UploadFromUrl500Error1, TResult> onApiV1UploadFromUrl500Error1,
        Func<ApiV1UploadFromUrl502Error1, TResult> onApiV1UploadFromUrl502Error1,
        Func<ApiV1UploadFromUrl503Error1, TResult> onApiV1UploadFromUrl503Error1,
        Func<ApiV1UploadFromUrl504Error1, TResult> onApiV1UploadFromUrl504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadFromUrl400Error1(
                out var apiV1UploadFromUrl400Error1Value) => onApiV1UploadFromUrl400Error1(
                apiV1UploadFromUrl400Error1Value),
            _ when TryGetApiV1UploadFromUrl401Error1(
                out var apiV1UploadFromUrl401Error1Value) => onApiV1UploadFromUrl401Error1(
                apiV1UploadFromUrl401Error1Value),
            _ when TryGetApiV1UploadFromUrl403Error1(
                out var apiV1UploadFromUrl403Error1Value) => onApiV1UploadFromUrl403Error1(
                apiV1UploadFromUrl403Error1Value),
            _ when TryGetApiV1UploadFromUrl404Error1(
                out var apiV1UploadFromUrl404Error1Value) => onApiV1UploadFromUrl404Error1(
                apiV1UploadFromUrl404Error1Value),
            _ when TryGetApiV1UploadFromUrl429Error1(
                out var apiV1UploadFromUrl429Error1Value) => onApiV1UploadFromUrl429Error1(
                apiV1UploadFromUrl429Error1Value),
            _ when TryGetApiV1UploadFromUrl500Error1(
                out var apiV1UploadFromUrl500Error1Value) => onApiV1UploadFromUrl500Error1(
                apiV1UploadFromUrl500Error1Value),
            _ when TryGetApiV1UploadFromUrl502Error1(
                out var apiV1UploadFromUrl502Error1Value) => onApiV1UploadFromUrl502Error1(
                apiV1UploadFromUrl502Error1Value),
            _ when TryGetApiV1UploadFromUrl503Error1(
                out var apiV1UploadFromUrl503Error1Value) => onApiV1UploadFromUrl503Error1(
                apiV1UploadFromUrl503Error1Value),
            _ when TryGetApiV1UploadFromUrl504Error1(
                out var apiV1UploadFromUrl504Error1Value) => onApiV1UploadFromUrl504Error1(
                apiV1UploadFromUrl504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadCreateFromUrlError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadFromUrl400Error1> onApiV1UploadFromUrl400Error1,
        Action<ApiV1UploadFromUrl401Error1> onApiV1UploadFromUrl401Error1,
        Action<ApiV1UploadFromUrl403Error1> onApiV1UploadFromUrl403Error1,
        Action<ApiV1UploadFromUrl404Error1> onApiV1UploadFromUrl404Error1,
        Action<ApiV1UploadFromUrl429Error1> onApiV1UploadFromUrl429Error1,
        Action<ApiV1UploadFromUrl500Error1> onApiV1UploadFromUrl500Error1,
        Action<ApiV1UploadFromUrl502Error1> onApiV1UploadFromUrl502Error1,
        Action<ApiV1UploadFromUrl503Error1> onApiV1UploadFromUrl503Error1,
        Action<ApiV1UploadFromUrl504Error1> onApiV1UploadFromUrl504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadFromUrl400Error1(out var apiV1UploadFromUrl400Error1Value)) onApiV1UploadFromUrl400Error1(
            apiV1UploadFromUrl400Error1Value);
        else if (TryGetApiV1UploadFromUrl401Error1(
            out var apiV1UploadFromUrl401Error1Value)) onApiV1UploadFromUrl401Error1(apiV1UploadFromUrl401Error1Value);
        else if (TryGetApiV1UploadFromUrl403Error1(
            out var apiV1UploadFromUrl403Error1Value)) onApiV1UploadFromUrl403Error1(apiV1UploadFromUrl403Error1Value);
        else if (TryGetApiV1UploadFromUrl404Error1(
            out var apiV1UploadFromUrl404Error1Value)) onApiV1UploadFromUrl404Error1(apiV1UploadFromUrl404Error1Value);
        else if (TryGetApiV1UploadFromUrl429Error1(
            out var apiV1UploadFromUrl429Error1Value)) onApiV1UploadFromUrl429Error1(apiV1UploadFromUrl429Error1Value);
        else if (TryGetApiV1UploadFromUrl500Error1(
            out var apiV1UploadFromUrl500Error1Value)) onApiV1UploadFromUrl500Error1(apiV1UploadFromUrl500Error1Value);
        else if (TryGetApiV1UploadFromUrl502Error1(
            out var apiV1UploadFromUrl502Error1Value)) onApiV1UploadFromUrl502Error1(apiV1UploadFromUrl502Error1Value);
        else if (TryGetApiV1UploadFromUrl503Error1(
            out var apiV1UploadFromUrl503Error1Value)) onApiV1UploadFromUrl503Error1(apiV1UploadFromUrl503Error1Value);
        else if (TryGetApiV1UploadFromUrl504Error1(
            out var apiV1UploadFromUrl504Error1Value)) onApiV1UploadFromUrl504Error1(apiV1UploadFromUrl504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadCreateFromUrlError)} holds no value.");
    }

    private static Task<UploadCreateFromUrlError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadFromUrl400Error1>().As(AsApiV1UploadFromUrl400Error1),
            401 => response.Json<ApiV1UploadFromUrl401Error1>().As(AsApiV1UploadFromUrl401Error1),
            403 => response.Json<ApiV1UploadFromUrl403Error1>().As(AsApiV1UploadFromUrl403Error1),
            404 => response.Json<ApiV1UploadFromUrl404Error1>().As(AsApiV1UploadFromUrl404Error1),
            429 => response.Json<ApiV1UploadFromUrl429Error1>().As(AsApiV1UploadFromUrl429Error1),
            500 => response.Json<ApiV1UploadFromUrl500Error1>().As(AsApiV1UploadFromUrl500Error1),
            502 => response.Json<ApiV1UploadFromUrl502Error1>().As(AsApiV1UploadFromUrl502Error1),
            503 => response.Json<ApiV1UploadFromUrl503Error1>().As(AsApiV1UploadFromUrl503Error1),
            504 => response.Json<ApiV1UploadFromUrl504Error1>().As(AsApiV1UploadFromUrl504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadCreateFromUrlError> Response { get; } = new(Create);
}
