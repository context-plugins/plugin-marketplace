using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscInstagramSearchAudioError : ApiError
{
    private readonly Optional<ApiV1MiscInstagramAudio400Error1> _apiV1MiscInstagramAudio400Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio401Error1> _apiV1MiscInstagramAudio401Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio403Error1> _apiV1MiscInstagramAudio403Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio404Error1> _apiV1MiscInstagramAudio404Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio429Error1> _apiV1MiscInstagramAudio429Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio500Error1> _apiV1MiscInstagramAudio500Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio502Error1> _apiV1MiscInstagramAudio502Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio503Error1> _apiV1MiscInstagramAudio503Error1Value;

    private readonly Optional<ApiV1MiscInstagramAudio504Error1> _apiV1MiscInstagramAudio504Error1Value;

    private MiscInstagramSearchAudioError(Optional<ApiV1MiscInstagramAudio400Error1> apiV1MiscInstagramAudio400Error1Value,
        Optional<ApiV1MiscInstagramAudio401Error1> apiV1MiscInstagramAudio401Error1Value,
        Optional<ApiV1MiscInstagramAudio403Error1> apiV1MiscInstagramAudio403Error1Value,
        Optional<ApiV1MiscInstagramAudio404Error1> apiV1MiscInstagramAudio404Error1Value,
        Optional<ApiV1MiscInstagramAudio429Error1> apiV1MiscInstagramAudio429Error1Value,
        Optional<ApiV1MiscInstagramAudio500Error1> apiV1MiscInstagramAudio500Error1Value,
        Optional<ApiV1MiscInstagramAudio502Error1> apiV1MiscInstagramAudio502Error1Value,
        Optional<ApiV1MiscInstagramAudio503Error1> apiV1MiscInstagramAudio503Error1Value,
        Optional<ApiV1MiscInstagramAudio504Error1> apiV1MiscInstagramAudio504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscInstagramAudio400Error1Value = apiV1MiscInstagramAudio400Error1Value;
        _apiV1MiscInstagramAudio401Error1Value = apiV1MiscInstagramAudio401Error1Value;
        _apiV1MiscInstagramAudio403Error1Value = apiV1MiscInstagramAudio403Error1Value;
        _apiV1MiscInstagramAudio404Error1Value = apiV1MiscInstagramAudio404Error1Value;
        _apiV1MiscInstagramAudio429Error1Value = apiV1MiscInstagramAudio429Error1Value;
        _apiV1MiscInstagramAudio500Error1Value = apiV1MiscInstagramAudio500Error1Value;
        _apiV1MiscInstagramAudio502Error1Value = apiV1MiscInstagramAudio502Error1Value;
        _apiV1MiscInstagramAudio503Error1Value = apiV1MiscInstagramAudio503Error1Value;
        _apiV1MiscInstagramAudio504Error1Value = apiV1MiscInstagramAudio504Error1Value;
    }

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio400Error1(ApiV1MiscInstagramAudio400Error1 value) =>
        new(
            Optional<ApiV1MiscInstagramAudio400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio401Error1(ApiV1MiscInstagramAudio401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscInstagramAudio401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio403Error1(ApiV1MiscInstagramAudio403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscInstagramAudio403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio404Error1(ApiV1MiscInstagramAudio404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio429Error1(ApiV1MiscInstagramAudio429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio500Error1(ApiV1MiscInstagramAudio500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio502Error1(ApiV1MiscInstagramAudio502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio503Error1(ApiV1MiscInstagramAudio503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio503Error1>.Some(value),
            default,
            default);

    private static MiscInstagramSearchAudioError AsApiV1MiscInstagramAudio504Error1(ApiV1MiscInstagramAudio504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramAudio504Error1>.Some(value),
            default);

    private static MiscInstagramSearchAudioError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscInstagramAudio400Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio400Error1? value) =>
        _apiV1MiscInstagramAudio400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio401Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio401Error1? value) =>
        _apiV1MiscInstagramAudio401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio403Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio403Error1? value) =>
        _apiV1MiscInstagramAudio403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio404Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio404Error1? value) =>
        _apiV1MiscInstagramAudio404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio429Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio429Error1? value) =>
        _apiV1MiscInstagramAudio429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio500Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio500Error1? value) =>
        _apiV1MiscInstagramAudio500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio502Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio502Error1? value) =>
        _apiV1MiscInstagramAudio502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio503Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio503Error1? value) =>
        _apiV1MiscInstagramAudio503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramAudio504Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio504Error1? value) =>
        _apiV1MiscInstagramAudio504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscInstagramAudio400Error1, TResult> onApiV1MiscInstagramAudio400Error1,
        Func<ApiV1MiscInstagramAudio401Error1, TResult> onApiV1MiscInstagramAudio401Error1,
        Func<ApiV1MiscInstagramAudio403Error1, TResult> onApiV1MiscInstagramAudio403Error1,
        Func<ApiV1MiscInstagramAudio404Error1, TResult> onApiV1MiscInstagramAudio404Error1,
        Func<ApiV1MiscInstagramAudio429Error1, TResult> onApiV1MiscInstagramAudio429Error1,
        Func<ApiV1MiscInstagramAudio500Error1, TResult> onApiV1MiscInstagramAudio500Error1,
        Func<ApiV1MiscInstagramAudio502Error1, TResult> onApiV1MiscInstagramAudio502Error1,
        Func<ApiV1MiscInstagramAudio503Error1, TResult> onApiV1MiscInstagramAudio503Error1,
        Func<ApiV1MiscInstagramAudio504Error1, TResult> onApiV1MiscInstagramAudio504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscInstagramAudio400Error1(
                out var apiV1MiscInstagramAudio400Error1Value) => onApiV1MiscInstagramAudio400Error1(
                apiV1MiscInstagramAudio400Error1Value),
            _ when TryGetApiV1MiscInstagramAudio401Error1(
                out var apiV1MiscInstagramAudio401Error1Value) => onApiV1MiscInstagramAudio401Error1(
                apiV1MiscInstagramAudio401Error1Value),
            _ when TryGetApiV1MiscInstagramAudio403Error1(
                out var apiV1MiscInstagramAudio403Error1Value) => onApiV1MiscInstagramAudio403Error1(
                apiV1MiscInstagramAudio403Error1Value),
            _ when TryGetApiV1MiscInstagramAudio404Error1(
                out var apiV1MiscInstagramAudio404Error1Value) => onApiV1MiscInstagramAudio404Error1(
                apiV1MiscInstagramAudio404Error1Value),
            _ when TryGetApiV1MiscInstagramAudio429Error1(
                out var apiV1MiscInstagramAudio429Error1Value) => onApiV1MiscInstagramAudio429Error1(
                apiV1MiscInstagramAudio429Error1Value),
            _ when TryGetApiV1MiscInstagramAudio500Error1(
                out var apiV1MiscInstagramAudio500Error1Value) => onApiV1MiscInstagramAudio500Error1(
                apiV1MiscInstagramAudio500Error1Value),
            _ when TryGetApiV1MiscInstagramAudio502Error1(
                out var apiV1MiscInstagramAudio502Error1Value) => onApiV1MiscInstagramAudio502Error1(
                apiV1MiscInstagramAudio502Error1Value),
            _ when TryGetApiV1MiscInstagramAudio503Error1(
                out var apiV1MiscInstagramAudio503Error1Value) => onApiV1MiscInstagramAudio503Error1(
                apiV1MiscInstagramAudio503Error1Value),
            _ when TryGetApiV1MiscInstagramAudio504Error1(
                out var apiV1MiscInstagramAudio504Error1Value) => onApiV1MiscInstagramAudio504Error1(
                apiV1MiscInstagramAudio504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscInstagramSearchAudioError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscInstagramAudio400Error1> onApiV1MiscInstagramAudio400Error1,
        Action<ApiV1MiscInstagramAudio401Error1> onApiV1MiscInstagramAudio401Error1,
        Action<ApiV1MiscInstagramAudio403Error1> onApiV1MiscInstagramAudio403Error1,
        Action<ApiV1MiscInstagramAudio404Error1> onApiV1MiscInstagramAudio404Error1,
        Action<ApiV1MiscInstagramAudio429Error1> onApiV1MiscInstagramAudio429Error1,
        Action<ApiV1MiscInstagramAudio500Error1> onApiV1MiscInstagramAudio500Error1,
        Action<ApiV1MiscInstagramAudio502Error1> onApiV1MiscInstagramAudio502Error1,
        Action<ApiV1MiscInstagramAudio503Error1> onApiV1MiscInstagramAudio503Error1,
        Action<ApiV1MiscInstagramAudio504Error1> onApiV1MiscInstagramAudio504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscInstagramAudio400Error1(
            out var apiV1MiscInstagramAudio400Error1Value)) onApiV1MiscInstagramAudio400Error1(
            apiV1MiscInstagramAudio400Error1Value);
        else if (TryGetApiV1MiscInstagramAudio401Error1(
            out var apiV1MiscInstagramAudio401Error1Value)) onApiV1MiscInstagramAudio401Error1(
            apiV1MiscInstagramAudio401Error1Value);
        else if (TryGetApiV1MiscInstagramAudio403Error1(
            out var apiV1MiscInstagramAudio403Error1Value)) onApiV1MiscInstagramAudio403Error1(
            apiV1MiscInstagramAudio403Error1Value);
        else if (TryGetApiV1MiscInstagramAudio404Error1(
            out var apiV1MiscInstagramAudio404Error1Value)) onApiV1MiscInstagramAudio404Error1(
            apiV1MiscInstagramAudio404Error1Value);
        else if (TryGetApiV1MiscInstagramAudio429Error1(
            out var apiV1MiscInstagramAudio429Error1Value)) onApiV1MiscInstagramAudio429Error1(
            apiV1MiscInstagramAudio429Error1Value);
        else if (TryGetApiV1MiscInstagramAudio500Error1(
            out var apiV1MiscInstagramAudio500Error1Value)) onApiV1MiscInstagramAudio500Error1(
            apiV1MiscInstagramAudio500Error1Value);
        else if (TryGetApiV1MiscInstagramAudio502Error1(
            out var apiV1MiscInstagramAudio502Error1Value)) onApiV1MiscInstagramAudio502Error1(
            apiV1MiscInstagramAudio502Error1Value);
        else if (TryGetApiV1MiscInstagramAudio503Error1(
            out var apiV1MiscInstagramAudio503Error1Value)) onApiV1MiscInstagramAudio503Error1(
            apiV1MiscInstagramAudio503Error1Value);
        else if (TryGetApiV1MiscInstagramAudio504Error1(
            out var apiV1MiscInstagramAudio504Error1Value)) onApiV1MiscInstagramAudio504Error1(
            apiV1MiscInstagramAudio504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscInstagramSearchAudioError)} holds no value.");
    }

    private static Task<MiscInstagramSearchAudioError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscInstagramAudio400Error1>().As(AsApiV1MiscInstagramAudio400Error1),
            401 => response.Json<ApiV1MiscInstagramAudio401Error1>().As(AsApiV1MiscInstagramAudio401Error1),
            403 => response.Json<ApiV1MiscInstagramAudio403Error1>().As(AsApiV1MiscInstagramAudio403Error1),
            404 => response.Json<ApiV1MiscInstagramAudio404Error1>().As(AsApiV1MiscInstagramAudio404Error1),
            429 => response.Json<ApiV1MiscInstagramAudio429Error1>().As(AsApiV1MiscInstagramAudio429Error1),
            500 => response.Json<ApiV1MiscInstagramAudio500Error1>().As(AsApiV1MiscInstagramAudio500Error1),
            502 => response.Json<ApiV1MiscInstagramAudio502Error1>().As(AsApiV1MiscInstagramAudio502Error1),
            503 => response.Json<ApiV1MiscInstagramAudio503Error1>().As(AsApiV1MiscInstagramAudio503Error1),
            504 => response.Json<ApiV1MiscInstagramAudio504Error1>().As(AsApiV1MiscInstagramAudio504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscInstagramSearchAudioError> Response { get; } = new(Create);
}
