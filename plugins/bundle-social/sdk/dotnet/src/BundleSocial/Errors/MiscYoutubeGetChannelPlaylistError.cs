using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeGetChannelPlaylistError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubePlaylist400Error1> _apiV1MiscYoutubePlaylist400Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist401Error1> _apiV1MiscYoutubePlaylist401Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist403Error1> _apiV1MiscYoutubePlaylist403Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist404Error1> _apiV1MiscYoutubePlaylist404Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist429Error1> _apiV1MiscYoutubePlaylist429Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist500Error1> _apiV1MiscYoutubePlaylist500Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist502Error1> _apiV1MiscYoutubePlaylist502Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist503Error1> _apiV1MiscYoutubePlaylist503Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylist504Error1> _apiV1MiscYoutubePlaylist504Error1Value;

    private MiscYoutubeGetChannelPlaylistError(Optional<ApiV1MiscYoutubePlaylist400Error1> apiV1MiscYoutubePlaylist400Error1Value,
        Optional<ApiV1MiscYoutubePlaylist401Error1> apiV1MiscYoutubePlaylist401Error1Value,
        Optional<ApiV1MiscYoutubePlaylist403Error1> apiV1MiscYoutubePlaylist403Error1Value,
        Optional<ApiV1MiscYoutubePlaylist404Error1> apiV1MiscYoutubePlaylist404Error1Value,
        Optional<ApiV1MiscYoutubePlaylist429Error1> apiV1MiscYoutubePlaylist429Error1Value,
        Optional<ApiV1MiscYoutubePlaylist500Error1> apiV1MiscYoutubePlaylist500Error1Value,
        Optional<ApiV1MiscYoutubePlaylist502Error1> apiV1MiscYoutubePlaylist502Error1Value,
        Optional<ApiV1MiscYoutubePlaylist503Error1> apiV1MiscYoutubePlaylist503Error1Value,
        Optional<ApiV1MiscYoutubePlaylist504Error1> apiV1MiscYoutubePlaylist504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubePlaylist400Error1Value = apiV1MiscYoutubePlaylist400Error1Value;
        _apiV1MiscYoutubePlaylist401Error1Value = apiV1MiscYoutubePlaylist401Error1Value;
        _apiV1MiscYoutubePlaylist403Error1Value = apiV1MiscYoutubePlaylist403Error1Value;
        _apiV1MiscYoutubePlaylist404Error1Value = apiV1MiscYoutubePlaylist404Error1Value;
        _apiV1MiscYoutubePlaylist429Error1Value = apiV1MiscYoutubePlaylist429Error1Value;
        _apiV1MiscYoutubePlaylist500Error1Value = apiV1MiscYoutubePlaylist500Error1Value;
        _apiV1MiscYoutubePlaylist502Error1Value = apiV1MiscYoutubePlaylist502Error1Value;
        _apiV1MiscYoutubePlaylist503Error1Value = apiV1MiscYoutubePlaylist503Error1Value;
        _apiV1MiscYoutubePlaylist504Error1Value = apiV1MiscYoutubePlaylist504Error1Value;
    }

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist400Error1(ApiV1MiscYoutubePlaylist400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubePlaylist400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist401Error1(ApiV1MiscYoutubePlaylist401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubePlaylist401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist403Error1(ApiV1MiscYoutubePlaylist403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist404Error1(ApiV1MiscYoutubePlaylist404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist429Error1(ApiV1MiscYoutubePlaylist429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist500Error1(ApiV1MiscYoutubePlaylist500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist502Error1(ApiV1MiscYoutubePlaylist502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist503Error1(ApiV1MiscYoutubePlaylist503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeGetChannelPlaylistError AsApiV1MiscYoutubePlaylist504Error1(ApiV1MiscYoutubePlaylist504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylist504Error1>.Some(value),
            default);

    private static MiscYoutubeGetChannelPlaylistError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubePlaylist400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist400Error1? value) =>
        _apiV1MiscYoutubePlaylist400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist401Error1? value) =>
        _apiV1MiscYoutubePlaylist401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist403Error1? value) =>
        _apiV1MiscYoutubePlaylist403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist404Error1? value) =>
        _apiV1MiscYoutubePlaylist404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist429Error1? value) =>
        _apiV1MiscYoutubePlaylist429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist500Error1? value) =>
        _apiV1MiscYoutubePlaylist500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist502Error1? value) =>
        _apiV1MiscYoutubePlaylist502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist503Error1? value) =>
        _apiV1MiscYoutubePlaylist503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylist504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist504Error1? value) =>
        _apiV1MiscYoutubePlaylist504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubePlaylist400Error1, TResult> onApiV1MiscYoutubePlaylist400Error1,
        Func<ApiV1MiscYoutubePlaylist401Error1, TResult> onApiV1MiscYoutubePlaylist401Error1,
        Func<ApiV1MiscYoutubePlaylist403Error1, TResult> onApiV1MiscYoutubePlaylist403Error1,
        Func<ApiV1MiscYoutubePlaylist404Error1, TResult> onApiV1MiscYoutubePlaylist404Error1,
        Func<ApiV1MiscYoutubePlaylist429Error1, TResult> onApiV1MiscYoutubePlaylist429Error1,
        Func<ApiV1MiscYoutubePlaylist500Error1, TResult> onApiV1MiscYoutubePlaylist500Error1,
        Func<ApiV1MiscYoutubePlaylist502Error1, TResult> onApiV1MiscYoutubePlaylist502Error1,
        Func<ApiV1MiscYoutubePlaylist503Error1, TResult> onApiV1MiscYoutubePlaylist503Error1,
        Func<ApiV1MiscYoutubePlaylist504Error1, TResult> onApiV1MiscYoutubePlaylist504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubePlaylist400Error1(
                out var apiV1MiscYoutubePlaylist400Error1Value) => onApiV1MiscYoutubePlaylist400Error1(
                apiV1MiscYoutubePlaylist400Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist401Error1(
                out var apiV1MiscYoutubePlaylist401Error1Value) => onApiV1MiscYoutubePlaylist401Error1(
                apiV1MiscYoutubePlaylist401Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist403Error1(
                out var apiV1MiscYoutubePlaylist403Error1Value) => onApiV1MiscYoutubePlaylist403Error1(
                apiV1MiscYoutubePlaylist403Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist404Error1(
                out var apiV1MiscYoutubePlaylist404Error1Value) => onApiV1MiscYoutubePlaylist404Error1(
                apiV1MiscYoutubePlaylist404Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist429Error1(
                out var apiV1MiscYoutubePlaylist429Error1Value) => onApiV1MiscYoutubePlaylist429Error1(
                apiV1MiscYoutubePlaylist429Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist500Error1(
                out var apiV1MiscYoutubePlaylist500Error1Value) => onApiV1MiscYoutubePlaylist500Error1(
                apiV1MiscYoutubePlaylist500Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist502Error1(
                out var apiV1MiscYoutubePlaylist502Error1Value) => onApiV1MiscYoutubePlaylist502Error1(
                apiV1MiscYoutubePlaylist502Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist503Error1(
                out var apiV1MiscYoutubePlaylist503Error1Value) => onApiV1MiscYoutubePlaylist503Error1(
                apiV1MiscYoutubePlaylist503Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylist504Error1(
                out var apiV1MiscYoutubePlaylist504Error1Value) => onApiV1MiscYoutubePlaylist504Error1(
                apiV1MiscYoutubePlaylist504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeGetChannelPlaylistError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubePlaylist400Error1> onApiV1MiscYoutubePlaylist400Error1,
        Action<ApiV1MiscYoutubePlaylist401Error1> onApiV1MiscYoutubePlaylist401Error1,
        Action<ApiV1MiscYoutubePlaylist403Error1> onApiV1MiscYoutubePlaylist403Error1,
        Action<ApiV1MiscYoutubePlaylist404Error1> onApiV1MiscYoutubePlaylist404Error1,
        Action<ApiV1MiscYoutubePlaylist429Error1> onApiV1MiscYoutubePlaylist429Error1,
        Action<ApiV1MiscYoutubePlaylist500Error1> onApiV1MiscYoutubePlaylist500Error1,
        Action<ApiV1MiscYoutubePlaylist502Error1> onApiV1MiscYoutubePlaylist502Error1,
        Action<ApiV1MiscYoutubePlaylist503Error1> onApiV1MiscYoutubePlaylist503Error1,
        Action<ApiV1MiscYoutubePlaylist504Error1> onApiV1MiscYoutubePlaylist504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubePlaylist400Error1(
            out var apiV1MiscYoutubePlaylist400Error1Value)) onApiV1MiscYoutubePlaylist400Error1(
            apiV1MiscYoutubePlaylist400Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist401Error1(
            out var apiV1MiscYoutubePlaylist401Error1Value)) onApiV1MiscYoutubePlaylist401Error1(
            apiV1MiscYoutubePlaylist401Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist403Error1(
            out var apiV1MiscYoutubePlaylist403Error1Value)) onApiV1MiscYoutubePlaylist403Error1(
            apiV1MiscYoutubePlaylist403Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist404Error1(
            out var apiV1MiscYoutubePlaylist404Error1Value)) onApiV1MiscYoutubePlaylist404Error1(
            apiV1MiscYoutubePlaylist404Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist429Error1(
            out var apiV1MiscYoutubePlaylist429Error1Value)) onApiV1MiscYoutubePlaylist429Error1(
            apiV1MiscYoutubePlaylist429Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist500Error1(
            out var apiV1MiscYoutubePlaylist500Error1Value)) onApiV1MiscYoutubePlaylist500Error1(
            apiV1MiscYoutubePlaylist500Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist502Error1(
            out var apiV1MiscYoutubePlaylist502Error1Value)) onApiV1MiscYoutubePlaylist502Error1(
            apiV1MiscYoutubePlaylist502Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist503Error1(
            out var apiV1MiscYoutubePlaylist503Error1Value)) onApiV1MiscYoutubePlaylist503Error1(
            apiV1MiscYoutubePlaylist503Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylist504Error1(
            out var apiV1MiscYoutubePlaylist504Error1Value)) onApiV1MiscYoutubePlaylist504Error1(
            apiV1MiscYoutubePlaylist504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeGetChannelPlaylistError)} holds no value.");
    }

    private static Task<MiscYoutubeGetChannelPlaylistError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubePlaylist400Error1>().As(AsApiV1MiscYoutubePlaylist400Error1),
            401 => response.Json<ApiV1MiscYoutubePlaylist401Error1>().As(AsApiV1MiscYoutubePlaylist401Error1),
            403 => response.Json<ApiV1MiscYoutubePlaylist403Error1>().As(AsApiV1MiscYoutubePlaylist403Error1),
            404 => response.Json<ApiV1MiscYoutubePlaylist404Error1>().As(AsApiV1MiscYoutubePlaylist404Error1),
            429 => response.Json<ApiV1MiscYoutubePlaylist429Error1>().As(AsApiV1MiscYoutubePlaylist429Error1),
            500 => response.Json<ApiV1MiscYoutubePlaylist500Error1>().As(AsApiV1MiscYoutubePlaylist500Error1),
            502 => response.Json<ApiV1MiscYoutubePlaylist502Error1>().As(AsApiV1MiscYoutubePlaylist502Error1),
            503 => response.Json<ApiV1MiscYoutubePlaylist503Error1>().As(AsApiV1MiscYoutubePlaylist503Error1),
            504 => response.Json<ApiV1MiscYoutubePlaylist504Error1>().As(AsApiV1MiscYoutubePlaylist504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeGetChannelPlaylistError> Response { get; } = new(Create);
}
