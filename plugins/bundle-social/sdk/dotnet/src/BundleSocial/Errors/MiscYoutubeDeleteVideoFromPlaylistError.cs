using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeDeleteVideoFromPlaylistError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubePlaylistItems400Error1> _apiV1MiscYoutubePlaylistItems400Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems401Error1> _apiV1MiscYoutubePlaylistItems401Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems403Error1> _apiV1MiscYoutubePlaylistItems403Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems404Error1> _apiV1MiscYoutubePlaylistItems404Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems429Error1> _apiV1MiscYoutubePlaylistItems429Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems500Error1> _apiV1MiscYoutubePlaylistItems500Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems502Error1> _apiV1MiscYoutubePlaylistItems502Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems503Error1> _apiV1MiscYoutubePlaylistItems503Error1Value;

    private readonly Optional<ApiV1MiscYoutubePlaylistItems504Error1> _apiV1MiscYoutubePlaylistItems504Error1Value;

    private MiscYoutubeDeleteVideoFromPlaylistError(Optional<ApiV1MiscYoutubePlaylistItems400Error1> apiV1MiscYoutubePlaylistItems400Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems401Error1> apiV1MiscYoutubePlaylistItems401Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems403Error1> apiV1MiscYoutubePlaylistItems403Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems404Error1> apiV1MiscYoutubePlaylistItems404Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems429Error1> apiV1MiscYoutubePlaylistItems429Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems500Error1> apiV1MiscYoutubePlaylistItems500Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems502Error1> apiV1MiscYoutubePlaylistItems502Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems503Error1> apiV1MiscYoutubePlaylistItems503Error1Value,
        Optional<ApiV1MiscYoutubePlaylistItems504Error1> apiV1MiscYoutubePlaylistItems504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubePlaylistItems400Error1Value = apiV1MiscYoutubePlaylistItems400Error1Value;
        _apiV1MiscYoutubePlaylistItems401Error1Value = apiV1MiscYoutubePlaylistItems401Error1Value;
        _apiV1MiscYoutubePlaylistItems403Error1Value = apiV1MiscYoutubePlaylistItems403Error1Value;
        _apiV1MiscYoutubePlaylistItems404Error1Value = apiV1MiscYoutubePlaylistItems404Error1Value;
        _apiV1MiscYoutubePlaylistItems429Error1Value = apiV1MiscYoutubePlaylistItems429Error1Value;
        _apiV1MiscYoutubePlaylistItems500Error1Value = apiV1MiscYoutubePlaylistItems500Error1Value;
        _apiV1MiscYoutubePlaylistItems502Error1Value = apiV1MiscYoutubePlaylistItems502Error1Value;
        _apiV1MiscYoutubePlaylistItems503Error1Value = apiV1MiscYoutubePlaylistItems503Error1Value;
        _apiV1MiscYoutubePlaylistItems504Error1Value = apiV1MiscYoutubePlaylistItems504Error1Value;
    }

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems400Error1(ApiV1MiscYoutubePlaylistItems400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubePlaylistItems400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems401Error1(ApiV1MiscYoutubePlaylistItems401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubePlaylistItems401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems403Error1(ApiV1MiscYoutubePlaylistItems403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems404Error1(ApiV1MiscYoutubePlaylistItems404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems429Error1(ApiV1MiscYoutubePlaylistItems429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems500Error1(ApiV1MiscYoutubePlaylistItems500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems502Error1(ApiV1MiscYoutubePlaylistItems502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems503Error1(ApiV1MiscYoutubePlaylistItems503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsApiV1MiscYoutubePlaylistItems504Error1(ApiV1MiscYoutubePlaylistItems504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubePlaylistItems504Error1>.Some(value),
            default);

    private static MiscYoutubeDeleteVideoFromPlaylistError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubePlaylistItems400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems400Error1? value) =>
        _apiV1MiscYoutubePlaylistItems400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems401Error1? value) =>
        _apiV1MiscYoutubePlaylistItems401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems403Error1? value) =>
        _apiV1MiscYoutubePlaylistItems403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems404Error1? value) =>
        _apiV1MiscYoutubePlaylistItems404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems429Error1? value) =>
        _apiV1MiscYoutubePlaylistItems429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems500Error1? value) =>
        _apiV1MiscYoutubePlaylistItems500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems502Error1? value) =>
        _apiV1MiscYoutubePlaylistItems502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems503Error1? value) =>
        _apiV1MiscYoutubePlaylistItems503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubePlaylistItems504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems504Error1? value) =>
        _apiV1MiscYoutubePlaylistItems504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubePlaylistItems400Error1, TResult> onApiV1MiscYoutubePlaylistItems400Error1,
        Func<ApiV1MiscYoutubePlaylistItems401Error1, TResult> onApiV1MiscYoutubePlaylistItems401Error1,
        Func<ApiV1MiscYoutubePlaylistItems403Error1, TResult> onApiV1MiscYoutubePlaylistItems403Error1,
        Func<ApiV1MiscYoutubePlaylistItems404Error1, TResult> onApiV1MiscYoutubePlaylistItems404Error1,
        Func<ApiV1MiscYoutubePlaylistItems429Error1, TResult> onApiV1MiscYoutubePlaylistItems429Error1,
        Func<ApiV1MiscYoutubePlaylistItems500Error1, TResult> onApiV1MiscYoutubePlaylistItems500Error1,
        Func<ApiV1MiscYoutubePlaylistItems502Error1, TResult> onApiV1MiscYoutubePlaylistItems502Error1,
        Func<ApiV1MiscYoutubePlaylistItems503Error1, TResult> onApiV1MiscYoutubePlaylistItems503Error1,
        Func<ApiV1MiscYoutubePlaylistItems504Error1, TResult> onApiV1MiscYoutubePlaylistItems504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubePlaylistItems400Error1(
                out var apiV1MiscYoutubePlaylistItems400Error1Value) => onApiV1MiscYoutubePlaylistItems400Error1(
                apiV1MiscYoutubePlaylistItems400Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems401Error1(
                out var apiV1MiscYoutubePlaylistItems401Error1Value) => onApiV1MiscYoutubePlaylistItems401Error1(
                apiV1MiscYoutubePlaylistItems401Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems403Error1(
                out var apiV1MiscYoutubePlaylistItems403Error1Value) => onApiV1MiscYoutubePlaylistItems403Error1(
                apiV1MiscYoutubePlaylistItems403Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems404Error1(
                out var apiV1MiscYoutubePlaylistItems404Error1Value) => onApiV1MiscYoutubePlaylistItems404Error1(
                apiV1MiscYoutubePlaylistItems404Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems429Error1(
                out var apiV1MiscYoutubePlaylistItems429Error1Value) => onApiV1MiscYoutubePlaylistItems429Error1(
                apiV1MiscYoutubePlaylistItems429Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems500Error1(
                out var apiV1MiscYoutubePlaylistItems500Error1Value) => onApiV1MiscYoutubePlaylistItems500Error1(
                apiV1MiscYoutubePlaylistItems500Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems502Error1(
                out var apiV1MiscYoutubePlaylistItems502Error1Value) => onApiV1MiscYoutubePlaylistItems502Error1(
                apiV1MiscYoutubePlaylistItems502Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems503Error1(
                out var apiV1MiscYoutubePlaylistItems503Error1Value) => onApiV1MiscYoutubePlaylistItems503Error1(
                apiV1MiscYoutubePlaylistItems503Error1Value),
            _ when TryGetApiV1MiscYoutubePlaylistItems504Error1(
                out var apiV1MiscYoutubePlaylistItems504Error1Value) => onApiV1MiscYoutubePlaylistItems504Error1(
                apiV1MiscYoutubePlaylistItems504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscYoutubeDeleteVideoFromPlaylistError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubePlaylistItems400Error1> onApiV1MiscYoutubePlaylistItems400Error1,
        Action<ApiV1MiscYoutubePlaylistItems401Error1> onApiV1MiscYoutubePlaylistItems401Error1,
        Action<ApiV1MiscYoutubePlaylistItems403Error1> onApiV1MiscYoutubePlaylistItems403Error1,
        Action<ApiV1MiscYoutubePlaylistItems404Error1> onApiV1MiscYoutubePlaylistItems404Error1,
        Action<ApiV1MiscYoutubePlaylistItems429Error1> onApiV1MiscYoutubePlaylistItems429Error1,
        Action<ApiV1MiscYoutubePlaylistItems500Error1> onApiV1MiscYoutubePlaylistItems500Error1,
        Action<ApiV1MiscYoutubePlaylistItems502Error1> onApiV1MiscYoutubePlaylistItems502Error1,
        Action<ApiV1MiscYoutubePlaylistItems503Error1> onApiV1MiscYoutubePlaylistItems503Error1,
        Action<ApiV1MiscYoutubePlaylistItems504Error1> onApiV1MiscYoutubePlaylistItems504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubePlaylistItems400Error1(
            out var apiV1MiscYoutubePlaylistItems400Error1Value)) onApiV1MiscYoutubePlaylistItems400Error1(
            apiV1MiscYoutubePlaylistItems400Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems401Error1(
            out var apiV1MiscYoutubePlaylistItems401Error1Value)) onApiV1MiscYoutubePlaylistItems401Error1(
            apiV1MiscYoutubePlaylistItems401Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems403Error1(
            out var apiV1MiscYoutubePlaylistItems403Error1Value)) onApiV1MiscYoutubePlaylistItems403Error1(
            apiV1MiscYoutubePlaylistItems403Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems404Error1(
            out var apiV1MiscYoutubePlaylistItems404Error1Value)) onApiV1MiscYoutubePlaylistItems404Error1(
            apiV1MiscYoutubePlaylistItems404Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems429Error1(
            out var apiV1MiscYoutubePlaylistItems429Error1Value)) onApiV1MiscYoutubePlaylistItems429Error1(
            apiV1MiscYoutubePlaylistItems429Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems500Error1(
            out var apiV1MiscYoutubePlaylistItems500Error1Value)) onApiV1MiscYoutubePlaylistItems500Error1(
            apiV1MiscYoutubePlaylistItems500Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems502Error1(
            out var apiV1MiscYoutubePlaylistItems502Error1Value)) onApiV1MiscYoutubePlaylistItems502Error1(
            apiV1MiscYoutubePlaylistItems502Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems503Error1(
            out var apiV1MiscYoutubePlaylistItems503Error1Value)) onApiV1MiscYoutubePlaylistItems503Error1(
            apiV1MiscYoutubePlaylistItems503Error1Value);
        else if (TryGetApiV1MiscYoutubePlaylistItems504Error1(
            out var apiV1MiscYoutubePlaylistItems504Error1Value)) onApiV1MiscYoutubePlaylistItems504Error1(
            apiV1MiscYoutubePlaylistItems504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeDeleteVideoFromPlaylistError)} holds no value.");
    }

    private static Task<MiscYoutubeDeleteVideoFromPlaylistError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubePlaylistItems400Error1>().As(AsApiV1MiscYoutubePlaylistItems400Error1),
            401 => response.Json<ApiV1MiscYoutubePlaylistItems401Error1>().As(AsApiV1MiscYoutubePlaylistItems401Error1),
            403 => response.Json<ApiV1MiscYoutubePlaylistItems403Error1>().As(AsApiV1MiscYoutubePlaylistItems403Error1),
            404 => response.Json<ApiV1MiscYoutubePlaylistItems404Error1>().As(AsApiV1MiscYoutubePlaylistItems404Error1),
            429 => response.Json<ApiV1MiscYoutubePlaylistItems429Error1>().As(AsApiV1MiscYoutubePlaylistItems429Error1),
            500 => response.Json<ApiV1MiscYoutubePlaylistItems500Error1>().As(AsApiV1MiscYoutubePlaylistItems500Error1),
            502 => response.Json<ApiV1MiscYoutubePlaylistItems502Error1>().As(AsApiV1MiscYoutubePlaylistItems502Error1),
            503 => response.Json<ApiV1MiscYoutubePlaylistItems503Error1>().As(AsApiV1MiscYoutubePlaylistItems503Error1),
            504 => response.Json<ApiV1MiscYoutubePlaylistItems504Error1>().As(AsApiV1MiscYoutubePlaylistItems504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeDeleteVideoFromPlaylistError> Response { get; } = new(Create);
}
