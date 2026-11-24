using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeSetThumbnailError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubeThumbnail400Error1> _apiV1MiscYoutubeThumbnail400Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail401Error1> _apiV1MiscYoutubeThumbnail401Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail403Error1> _apiV1MiscYoutubeThumbnail403Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail404Error1> _apiV1MiscYoutubeThumbnail404Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail429Error1> _apiV1MiscYoutubeThumbnail429Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail500Error1> _apiV1MiscYoutubeThumbnail500Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail502Error1> _apiV1MiscYoutubeThumbnail502Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail503Error1> _apiV1MiscYoutubeThumbnail503Error1Value;

    private readonly Optional<ApiV1MiscYoutubeThumbnail504Error1> _apiV1MiscYoutubeThumbnail504Error1Value;

    private MiscYoutubeSetThumbnailError(Optional<ApiV1MiscYoutubeThumbnail400Error1> apiV1MiscYoutubeThumbnail400Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail401Error1> apiV1MiscYoutubeThumbnail401Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail403Error1> apiV1MiscYoutubeThumbnail403Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail404Error1> apiV1MiscYoutubeThumbnail404Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail429Error1> apiV1MiscYoutubeThumbnail429Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail500Error1> apiV1MiscYoutubeThumbnail500Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail502Error1> apiV1MiscYoutubeThumbnail502Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail503Error1> apiV1MiscYoutubeThumbnail503Error1Value,
        Optional<ApiV1MiscYoutubeThumbnail504Error1> apiV1MiscYoutubeThumbnail504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubeThumbnail400Error1Value = apiV1MiscYoutubeThumbnail400Error1Value;
        _apiV1MiscYoutubeThumbnail401Error1Value = apiV1MiscYoutubeThumbnail401Error1Value;
        _apiV1MiscYoutubeThumbnail403Error1Value = apiV1MiscYoutubeThumbnail403Error1Value;
        _apiV1MiscYoutubeThumbnail404Error1Value = apiV1MiscYoutubeThumbnail404Error1Value;
        _apiV1MiscYoutubeThumbnail429Error1Value = apiV1MiscYoutubeThumbnail429Error1Value;
        _apiV1MiscYoutubeThumbnail500Error1Value = apiV1MiscYoutubeThumbnail500Error1Value;
        _apiV1MiscYoutubeThumbnail502Error1Value = apiV1MiscYoutubeThumbnail502Error1Value;
        _apiV1MiscYoutubeThumbnail503Error1Value = apiV1MiscYoutubeThumbnail503Error1Value;
        _apiV1MiscYoutubeThumbnail504Error1Value = apiV1MiscYoutubeThumbnail504Error1Value;
    }

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail400Error1(ApiV1MiscYoutubeThumbnail400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubeThumbnail400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail401Error1(ApiV1MiscYoutubeThumbnail401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubeThumbnail401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail403Error1(ApiV1MiscYoutubeThumbnail403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail404Error1(ApiV1MiscYoutubeThumbnail404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail429Error1(ApiV1MiscYoutubeThumbnail429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail500Error1(ApiV1MiscYoutubeThumbnail500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail502Error1(ApiV1MiscYoutubeThumbnail502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail503Error1(ApiV1MiscYoutubeThumbnail503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeSetThumbnailError AsApiV1MiscYoutubeThumbnail504Error1(ApiV1MiscYoutubeThumbnail504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeThumbnail504Error1>.Some(value),
            default);

    private static MiscYoutubeSetThumbnailError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubeThumbnail400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail400Error1? value) =>
        _apiV1MiscYoutubeThumbnail400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail401Error1? value) =>
        _apiV1MiscYoutubeThumbnail401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail403Error1? value) =>
        _apiV1MiscYoutubeThumbnail403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail404Error1? value) =>
        _apiV1MiscYoutubeThumbnail404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail429Error1? value) =>
        _apiV1MiscYoutubeThumbnail429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail500Error1? value) =>
        _apiV1MiscYoutubeThumbnail500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail502Error1? value) =>
        _apiV1MiscYoutubeThumbnail502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail503Error1? value) =>
        _apiV1MiscYoutubeThumbnail503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeThumbnail504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail504Error1? value) =>
        _apiV1MiscYoutubeThumbnail504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubeThumbnail400Error1, TResult> onApiV1MiscYoutubeThumbnail400Error1,
        Func<ApiV1MiscYoutubeThumbnail401Error1, TResult> onApiV1MiscYoutubeThumbnail401Error1,
        Func<ApiV1MiscYoutubeThumbnail403Error1, TResult> onApiV1MiscYoutubeThumbnail403Error1,
        Func<ApiV1MiscYoutubeThumbnail404Error1, TResult> onApiV1MiscYoutubeThumbnail404Error1,
        Func<ApiV1MiscYoutubeThumbnail429Error1, TResult> onApiV1MiscYoutubeThumbnail429Error1,
        Func<ApiV1MiscYoutubeThumbnail500Error1, TResult> onApiV1MiscYoutubeThumbnail500Error1,
        Func<ApiV1MiscYoutubeThumbnail502Error1, TResult> onApiV1MiscYoutubeThumbnail502Error1,
        Func<ApiV1MiscYoutubeThumbnail503Error1, TResult> onApiV1MiscYoutubeThumbnail503Error1,
        Func<ApiV1MiscYoutubeThumbnail504Error1, TResult> onApiV1MiscYoutubeThumbnail504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubeThumbnail400Error1(
                out var apiV1MiscYoutubeThumbnail400Error1Value) => onApiV1MiscYoutubeThumbnail400Error1(
                apiV1MiscYoutubeThumbnail400Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail401Error1(
                out var apiV1MiscYoutubeThumbnail401Error1Value) => onApiV1MiscYoutubeThumbnail401Error1(
                apiV1MiscYoutubeThumbnail401Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail403Error1(
                out var apiV1MiscYoutubeThumbnail403Error1Value) => onApiV1MiscYoutubeThumbnail403Error1(
                apiV1MiscYoutubeThumbnail403Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail404Error1(
                out var apiV1MiscYoutubeThumbnail404Error1Value) => onApiV1MiscYoutubeThumbnail404Error1(
                apiV1MiscYoutubeThumbnail404Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail429Error1(
                out var apiV1MiscYoutubeThumbnail429Error1Value) => onApiV1MiscYoutubeThumbnail429Error1(
                apiV1MiscYoutubeThumbnail429Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail500Error1(
                out var apiV1MiscYoutubeThumbnail500Error1Value) => onApiV1MiscYoutubeThumbnail500Error1(
                apiV1MiscYoutubeThumbnail500Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail502Error1(
                out var apiV1MiscYoutubeThumbnail502Error1Value) => onApiV1MiscYoutubeThumbnail502Error1(
                apiV1MiscYoutubeThumbnail502Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail503Error1(
                out var apiV1MiscYoutubeThumbnail503Error1Value) => onApiV1MiscYoutubeThumbnail503Error1(
                apiV1MiscYoutubeThumbnail503Error1Value),
            _ when TryGetApiV1MiscYoutubeThumbnail504Error1(
                out var apiV1MiscYoutubeThumbnail504Error1Value) => onApiV1MiscYoutubeThumbnail504Error1(
                apiV1MiscYoutubeThumbnail504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeSetThumbnailError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubeThumbnail400Error1> onApiV1MiscYoutubeThumbnail400Error1,
        Action<ApiV1MiscYoutubeThumbnail401Error1> onApiV1MiscYoutubeThumbnail401Error1,
        Action<ApiV1MiscYoutubeThumbnail403Error1> onApiV1MiscYoutubeThumbnail403Error1,
        Action<ApiV1MiscYoutubeThumbnail404Error1> onApiV1MiscYoutubeThumbnail404Error1,
        Action<ApiV1MiscYoutubeThumbnail429Error1> onApiV1MiscYoutubeThumbnail429Error1,
        Action<ApiV1MiscYoutubeThumbnail500Error1> onApiV1MiscYoutubeThumbnail500Error1,
        Action<ApiV1MiscYoutubeThumbnail502Error1> onApiV1MiscYoutubeThumbnail502Error1,
        Action<ApiV1MiscYoutubeThumbnail503Error1> onApiV1MiscYoutubeThumbnail503Error1,
        Action<ApiV1MiscYoutubeThumbnail504Error1> onApiV1MiscYoutubeThumbnail504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubeThumbnail400Error1(
            out var apiV1MiscYoutubeThumbnail400Error1Value)) onApiV1MiscYoutubeThumbnail400Error1(
            apiV1MiscYoutubeThumbnail400Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail401Error1(
            out var apiV1MiscYoutubeThumbnail401Error1Value)) onApiV1MiscYoutubeThumbnail401Error1(
            apiV1MiscYoutubeThumbnail401Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail403Error1(
            out var apiV1MiscYoutubeThumbnail403Error1Value)) onApiV1MiscYoutubeThumbnail403Error1(
            apiV1MiscYoutubeThumbnail403Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail404Error1(
            out var apiV1MiscYoutubeThumbnail404Error1Value)) onApiV1MiscYoutubeThumbnail404Error1(
            apiV1MiscYoutubeThumbnail404Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail429Error1(
            out var apiV1MiscYoutubeThumbnail429Error1Value)) onApiV1MiscYoutubeThumbnail429Error1(
            apiV1MiscYoutubeThumbnail429Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail500Error1(
            out var apiV1MiscYoutubeThumbnail500Error1Value)) onApiV1MiscYoutubeThumbnail500Error1(
            apiV1MiscYoutubeThumbnail500Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail502Error1(
            out var apiV1MiscYoutubeThumbnail502Error1Value)) onApiV1MiscYoutubeThumbnail502Error1(
            apiV1MiscYoutubeThumbnail502Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail503Error1(
            out var apiV1MiscYoutubeThumbnail503Error1Value)) onApiV1MiscYoutubeThumbnail503Error1(
            apiV1MiscYoutubeThumbnail503Error1Value);
        else if (TryGetApiV1MiscYoutubeThumbnail504Error1(
            out var apiV1MiscYoutubeThumbnail504Error1Value)) onApiV1MiscYoutubeThumbnail504Error1(
            apiV1MiscYoutubeThumbnail504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeSetThumbnailError)} holds no value.");
    }

    private static Task<MiscYoutubeSetThumbnailError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubeThumbnail400Error1>().As(AsApiV1MiscYoutubeThumbnail400Error1),
            401 => response.Json<ApiV1MiscYoutubeThumbnail401Error1>().As(AsApiV1MiscYoutubeThumbnail401Error1),
            403 => response.Json<ApiV1MiscYoutubeThumbnail403Error1>().As(AsApiV1MiscYoutubeThumbnail403Error1),
            404 => response.Json<ApiV1MiscYoutubeThumbnail404Error1>().As(AsApiV1MiscYoutubeThumbnail404Error1),
            429 => response.Json<ApiV1MiscYoutubeThumbnail429Error1>().As(AsApiV1MiscYoutubeThumbnail429Error1),
            500 => response.Json<ApiV1MiscYoutubeThumbnail500Error1>().As(AsApiV1MiscYoutubeThumbnail500Error1),
            502 => response.Json<ApiV1MiscYoutubeThumbnail502Error1>().As(AsApiV1MiscYoutubeThumbnail502Error1),
            503 => response.Json<ApiV1MiscYoutubeThumbnail503Error1>().As(AsApiV1MiscYoutubeThumbnail503Error1),
            504 => response.Json<ApiV1MiscYoutubeThumbnail504Error1>().As(AsApiV1MiscYoutubeThumbnail504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeSetThumbnailError> Response { get; } = new(Create);
}
