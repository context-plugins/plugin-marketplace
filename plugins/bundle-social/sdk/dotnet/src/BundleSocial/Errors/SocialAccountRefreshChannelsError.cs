using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountRefreshChannelsError : ApiError
{
    private readonly Optional<ApiV1SocialAccountRefreshChannels400Error1> _apiV1SocialAccountRefreshChannels400Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels401Error1> _apiV1SocialAccountRefreshChannels401Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels403Error1> _apiV1SocialAccountRefreshChannels403Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels404Error1> _apiV1SocialAccountRefreshChannels404Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels429Error1> _apiV1SocialAccountRefreshChannels429Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels500Error1> _apiV1SocialAccountRefreshChannels500Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels502Error1> _apiV1SocialAccountRefreshChannels502Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels503Error1> _apiV1SocialAccountRefreshChannels503Error1Value;

    private readonly Optional<ApiV1SocialAccountRefreshChannels504Error1> _apiV1SocialAccountRefreshChannels504Error1Value;

    private SocialAccountRefreshChannelsError(Optional<ApiV1SocialAccountRefreshChannels400Error1> apiV1SocialAccountRefreshChannels400Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels401Error1> apiV1SocialAccountRefreshChannels401Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels403Error1> apiV1SocialAccountRefreshChannels403Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels404Error1> apiV1SocialAccountRefreshChannels404Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels429Error1> apiV1SocialAccountRefreshChannels429Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels500Error1> apiV1SocialAccountRefreshChannels500Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels502Error1> apiV1SocialAccountRefreshChannels502Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels503Error1> apiV1SocialAccountRefreshChannels503Error1Value,
        Optional<ApiV1SocialAccountRefreshChannels504Error1> apiV1SocialAccountRefreshChannels504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountRefreshChannels400Error1Value = apiV1SocialAccountRefreshChannels400Error1Value;
        _apiV1SocialAccountRefreshChannels401Error1Value = apiV1SocialAccountRefreshChannels401Error1Value;
        _apiV1SocialAccountRefreshChannels403Error1Value = apiV1SocialAccountRefreshChannels403Error1Value;
        _apiV1SocialAccountRefreshChannels404Error1Value = apiV1SocialAccountRefreshChannels404Error1Value;
        _apiV1SocialAccountRefreshChannels429Error1Value = apiV1SocialAccountRefreshChannels429Error1Value;
        _apiV1SocialAccountRefreshChannels500Error1Value = apiV1SocialAccountRefreshChannels500Error1Value;
        _apiV1SocialAccountRefreshChannels502Error1Value = apiV1SocialAccountRefreshChannels502Error1Value;
        _apiV1SocialAccountRefreshChannels503Error1Value = apiV1SocialAccountRefreshChannels503Error1Value;
        _apiV1SocialAccountRefreshChannels504Error1Value = apiV1SocialAccountRefreshChannels504Error1Value;
    }

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels400Error1(ApiV1SocialAccountRefreshChannels400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountRefreshChannels400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels401Error1(ApiV1SocialAccountRefreshChannels401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountRefreshChannels401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels403Error1(ApiV1SocialAccountRefreshChannels403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels404Error1(ApiV1SocialAccountRefreshChannels404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels429Error1(ApiV1SocialAccountRefreshChannels429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels500Error1(ApiV1SocialAccountRefreshChannels500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels502Error1(ApiV1SocialAccountRefreshChannels502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels503Error1(ApiV1SocialAccountRefreshChannels503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels503Error1>.Some(value),
            default,
            default);

    private static SocialAccountRefreshChannelsError AsApiV1SocialAccountRefreshChannels504Error1(ApiV1SocialAccountRefreshChannels504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountRefreshChannels504Error1>.Some(value),
            default);

    private static SocialAccountRefreshChannelsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountRefreshChannels400Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels400Error1? value) =>
        _apiV1SocialAccountRefreshChannels400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels401Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels401Error1? value) =>
        _apiV1SocialAccountRefreshChannels401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels403Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels403Error1? value) =>
        _apiV1SocialAccountRefreshChannels403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels404Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels404Error1? value) =>
        _apiV1SocialAccountRefreshChannels404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels429Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels429Error1? value) =>
        _apiV1SocialAccountRefreshChannels429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels500Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels500Error1? value) =>
        _apiV1SocialAccountRefreshChannels500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels502Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels502Error1? value) =>
        _apiV1SocialAccountRefreshChannels502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels503Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels503Error1? value) =>
        _apiV1SocialAccountRefreshChannels503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountRefreshChannels504Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels504Error1? value) =>
        _apiV1SocialAccountRefreshChannels504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountRefreshChannels400Error1, TResult> onApiV1SocialAccountRefreshChannels400Error1,
        Func<ApiV1SocialAccountRefreshChannels401Error1, TResult> onApiV1SocialAccountRefreshChannels401Error1,
        Func<ApiV1SocialAccountRefreshChannels403Error1, TResult> onApiV1SocialAccountRefreshChannels403Error1,
        Func<ApiV1SocialAccountRefreshChannels404Error1, TResult> onApiV1SocialAccountRefreshChannels404Error1,
        Func<ApiV1SocialAccountRefreshChannels429Error1, TResult> onApiV1SocialAccountRefreshChannels429Error1,
        Func<ApiV1SocialAccountRefreshChannels500Error1, TResult> onApiV1SocialAccountRefreshChannels500Error1,
        Func<ApiV1SocialAccountRefreshChannels502Error1, TResult> onApiV1SocialAccountRefreshChannels502Error1,
        Func<ApiV1SocialAccountRefreshChannels503Error1, TResult> onApiV1SocialAccountRefreshChannels503Error1,
        Func<ApiV1SocialAccountRefreshChannels504Error1, TResult> onApiV1SocialAccountRefreshChannels504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountRefreshChannels400Error1(
                out var apiV1SocialAccountRefreshChannels400Error1Value) => onApiV1SocialAccountRefreshChannels400Error1(
                apiV1SocialAccountRefreshChannels400Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels401Error1(
                out var apiV1SocialAccountRefreshChannels401Error1Value) => onApiV1SocialAccountRefreshChannels401Error1(
                apiV1SocialAccountRefreshChannels401Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels403Error1(
                out var apiV1SocialAccountRefreshChannels403Error1Value) => onApiV1SocialAccountRefreshChannels403Error1(
                apiV1SocialAccountRefreshChannels403Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels404Error1(
                out var apiV1SocialAccountRefreshChannels404Error1Value) => onApiV1SocialAccountRefreshChannels404Error1(
                apiV1SocialAccountRefreshChannels404Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels429Error1(
                out var apiV1SocialAccountRefreshChannels429Error1Value) => onApiV1SocialAccountRefreshChannels429Error1(
                apiV1SocialAccountRefreshChannels429Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels500Error1(
                out var apiV1SocialAccountRefreshChannels500Error1Value) => onApiV1SocialAccountRefreshChannels500Error1(
                apiV1SocialAccountRefreshChannels500Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels502Error1(
                out var apiV1SocialAccountRefreshChannels502Error1Value) => onApiV1SocialAccountRefreshChannels502Error1(
                apiV1SocialAccountRefreshChannels502Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels503Error1(
                out var apiV1SocialAccountRefreshChannels503Error1Value) => onApiV1SocialAccountRefreshChannels503Error1(
                apiV1SocialAccountRefreshChannels503Error1Value),
            _ when TryGetApiV1SocialAccountRefreshChannels504Error1(
                out var apiV1SocialAccountRefreshChannels504Error1Value) => onApiV1SocialAccountRefreshChannels504Error1(
                apiV1SocialAccountRefreshChannels504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountRefreshChannelsError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountRefreshChannels400Error1> onApiV1SocialAccountRefreshChannels400Error1,
        Action<ApiV1SocialAccountRefreshChannels401Error1> onApiV1SocialAccountRefreshChannels401Error1,
        Action<ApiV1SocialAccountRefreshChannels403Error1> onApiV1SocialAccountRefreshChannels403Error1,
        Action<ApiV1SocialAccountRefreshChannels404Error1> onApiV1SocialAccountRefreshChannels404Error1,
        Action<ApiV1SocialAccountRefreshChannels429Error1> onApiV1SocialAccountRefreshChannels429Error1,
        Action<ApiV1SocialAccountRefreshChannels500Error1> onApiV1SocialAccountRefreshChannels500Error1,
        Action<ApiV1SocialAccountRefreshChannels502Error1> onApiV1SocialAccountRefreshChannels502Error1,
        Action<ApiV1SocialAccountRefreshChannels503Error1> onApiV1SocialAccountRefreshChannels503Error1,
        Action<ApiV1SocialAccountRefreshChannels504Error1> onApiV1SocialAccountRefreshChannels504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountRefreshChannels400Error1(
            out var apiV1SocialAccountRefreshChannels400Error1Value)) onApiV1SocialAccountRefreshChannels400Error1(
            apiV1SocialAccountRefreshChannels400Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels401Error1(
            out var apiV1SocialAccountRefreshChannels401Error1Value)) onApiV1SocialAccountRefreshChannels401Error1(
            apiV1SocialAccountRefreshChannels401Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels403Error1(
            out var apiV1SocialAccountRefreshChannels403Error1Value)) onApiV1SocialAccountRefreshChannels403Error1(
            apiV1SocialAccountRefreshChannels403Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels404Error1(
            out var apiV1SocialAccountRefreshChannels404Error1Value)) onApiV1SocialAccountRefreshChannels404Error1(
            apiV1SocialAccountRefreshChannels404Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels429Error1(
            out var apiV1SocialAccountRefreshChannels429Error1Value)) onApiV1SocialAccountRefreshChannels429Error1(
            apiV1SocialAccountRefreshChannels429Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels500Error1(
            out var apiV1SocialAccountRefreshChannels500Error1Value)) onApiV1SocialAccountRefreshChannels500Error1(
            apiV1SocialAccountRefreshChannels500Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels502Error1(
            out var apiV1SocialAccountRefreshChannels502Error1Value)) onApiV1SocialAccountRefreshChannels502Error1(
            apiV1SocialAccountRefreshChannels502Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels503Error1(
            out var apiV1SocialAccountRefreshChannels503Error1Value)) onApiV1SocialAccountRefreshChannels503Error1(
            apiV1SocialAccountRefreshChannels503Error1Value);
        else if (TryGetApiV1SocialAccountRefreshChannels504Error1(
            out var apiV1SocialAccountRefreshChannels504Error1Value)) onApiV1SocialAccountRefreshChannels504Error1(
            apiV1SocialAccountRefreshChannels504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountRefreshChannelsError)} holds no value.");
    }

    private static Task<SocialAccountRefreshChannelsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountRefreshChannels400Error1>().As(
                AsApiV1SocialAccountRefreshChannels400Error1),
            401 => response.Json<ApiV1SocialAccountRefreshChannels401Error1>().As(
                AsApiV1SocialAccountRefreshChannels401Error1),
            403 => response.Json<ApiV1SocialAccountRefreshChannels403Error1>().As(
                AsApiV1SocialAccountRefreshChannels403Error1),
            404 => response.Json<ApiV1SocialAccountRefreshChannels404Error1>().As(
                AsApiV1SocialAccountRefreshChannels404Error1),
            429 => response.Json<ApiV1SocialAccountRefreshChannels429Error1>().As(
                AsApiV1SocialAccountRefreshChannels429Error1),
            500 => response.Json<ApiV1SocialAccountRefreshChannels500Error1>().As(
                AsApiV1SocialAccountRefreshChannels500Error1),
            502 => response.Json<ApiV1SocialAccountRefreshChannels502Error1>().As(
                AsApiV1SocialAccountRefreshChannels502Error1),
            503 => response.Json<ApiV1SocialAccountRefreshChannels503Error1>().As(
                AsApiV1SocialAccountRefreshChannels503Error1),
            504 => response.Json<ApiV1SocialAccountRefreshChannels504Error1>().As(
                AsApiV1SocialAccountRefreshChannels504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountRefreshChannelsError> Response { get; } = new(Create);
}
