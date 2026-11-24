using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTiktokGetCommercialMusicTrendingListError : ApiError
{
    private readonly Optional<ApiV1MiscTiktokCmlTrendingList400Error1> _apiV1MiscTiktokCmlTrendingList400Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList401Error1> _apiV1MiscTiktokCmlTrendingList401Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList403Error1> _apiV1MiscTiktokCmlTrendingList403Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList404Error1> _apiV1MiscTiktokCmlTrendingList404Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList429Error1> _apiV1MiscTiktokCmlTrendingList429Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList500Error1> _apiV1MiscTiktokCmlTrendingList500Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList502Error1> _apiV1MiscTiktokCmlTrendingList502Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList503Error1> _apiV1MiscTiktokCmlTrendingList503Error1Value;

    private readonly Optional<ApiV1MiscTiktokCmlTrendingList504Error1> _apiV1MiscTiktokCmlTrendingList504Error1Value;

    private MiscTiktokGetCommercialMusicTrendingListError(Optional<ApiV1MiscTiktokCmlTrendingList400Error1> apiV1MiscTiktokCmlTrendingList400Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList401Error1> apiV1MiscTiktokCmlTrendingList401Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList403Error1> apiV1MiscTiktokCmlTrendingList403Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList404Error1> apiV1MiscTiktokCmlTrendingList404Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList429Error1> apiV1MiscTiktokCmlTrendingList429Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList500Error1> apiV1MiscTiktokCmlTrendingList500Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList502Error1> apiV1MiscTiktokCmlTrendingList502Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList503Error1> apiV1MiscTiktokCmlTrendingList503Error1Value,
        Optional<ApiV1MiscTiktokCmlTrendingList504Error1> apiV1MiscTiktokCmlTrendingList504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTiktokCmlTrendingList400Error1Value = apiV1MiscTiktokCmlTrendingList400Error1Value;
        _apiV1MiscTiktokCmlTrendingList401Error1Value = apiV1MiscTiktokCmlTrendingList401Error1Value;
        _apiV1MiscTiktokCmlTrendingList403Error1Value = apiV1MiscTiktokCmlTrendingList403Error1Value;
        _apiV1MiscTiktokCmlTrendingList404Error1Value = apiV1MiscTiktokCmlTrendingList404Error1Value;
        _apiV1MiscTiktokCmlTrendingList429Error1Value = apiV1MiscTiktokCmlTrendingList429Error1Value;
        _apiV1MiscTiktokCmlTrendingList500Error1Value = apiV1MiscTiktokCmlTrendingList500Error1Value;
        _apiV1MiscTiktokCmlTrendingList502Error1Value = apiV1MiscTiktokCmlTrendingList502Error1Value;
        _apiV1MiscTiktokCmlTrendingList503Error1Value = apiV1MiscTiktokCmlTrendingList503Error1Value;
        _apiV1MiscTiktokCmlTrendingList504Error1Value = apiV1MiscTiktokCmlTrendingList504Error1Value;
    }

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList400Error1(ApiV1MiscTiktokCmlTrendingList400Error1 value) =>
        new(
            Optional<ApiV1MiscTiktokCmlTrendingList400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList401Error1(ApiV1MiscTiktokCmlTrendingList401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList403Error1(ApiV1MiscTiktokCmlTrendingList403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList404Error1(ApiV1MiscTiktokCmlTrendingList404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList429Error1(ApiV1MiscTiktokCmlTrendingList429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList500Error1(ApiV1MiscTiktokCmlTrendingList500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList502Error1(ApiV1MiscTiktokCmlTrendingList502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList503Error1(ApiV1MiscTiktokCmlTrendingList503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList503Error1>.Some(value),
            default,
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsApiV1MiscTiktokCmlTrendingList504Error1(ApiV1MiscTiktokCmlTrendingList504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokCmlTrendingList504Error1>.Some(value),
            default);

    private static MiscTiktokGetCommercialMusicTrendingListError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTiktokCmlTrendingList400Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList400Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList401Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList401Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList403Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList403Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList404Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList404Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList429Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList429Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList500Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList500Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList502Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList502Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList503Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList503Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokCmlTrendingList504Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList504Error1? value) =>
        _apiV1MiscTiktokCmlTrendingList504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTiktokCmlTrendingList400Error1, TResult> onApiV1MiscTiktokCmlTrendingList400Error1,
        Func<ApiV1MiscTiktokCmlTrendingList401Error1, TResult> onApiV1MiscTiktokCmlTrendingList401Error1,
        Func<ApiV1MiscTiktokCmlTrendingList403Error1, TResult> onApiV1MiscTiktokCmlTrendingList403Error1,
        Func<ApiV1MiscTiktokCmlTrendingList404Error1, TResult> onApiV1MiscTiktokCmlTrendingList404Error1,
        Func<ApiV1MiscTiktokCmlTrendingList429Error1, TResult> onApiV1MiscTiktokCmlTrendingList429Error1,
        Func<ApiV1MiscTiktokCmlTrendingList500Error1, TResult> onApiV1MiscTiktokCmlTrendingList500Error1,
        Func<ApiV1MiscTiktokCmlTrendingList502Error1, TResult> onApiV1MiscTiktokCmlTrendingList502Error1,
        Func<ApiV1MiscTiktokCmlTrendingList503Error1, TResult> onApiV1MiscTiktokCmlTrendingList503Error1,
        Func<ApiV1MiscTiktokCmlTrendingList504Error1, TResult> onApiV1MiscTiktokCmlTrendingList504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTiktokCmlTrendingList400Error1(
                out var apiV1MiscTiktokCmlTrendingList400Error1Value) => onApiV1MiscTiktokCmlTrendingList400Error1(
                apiV1MiscTiktokCmlTrendingList400Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList401Error1(
                out var apiV1MiscTiktokCmlTrendingList401Error1Value) => onApiV1MiscTiktokCmlTrendingList401Error1(
                apiV1MiscTiktokCmlTrendingList401Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList403Error1(
                out var apiV1MiscTiktokCmlTrendingList403Error1Value) => onApiV1MiscTiktokCmlTrendingList403Error1(
                apiV1MiscTiktokCmlTrendingList403Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList404Error1(
                out var apiV1MiscTiktokCmlTrendingList404Error1Value) => onApiV1MiscTiktokCmlTrendingList404Error1(
                apiV1MiscTiktokCmlTrendingList404Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList429Error1(
                out var apiV1MiscTiktokCmlTrendingList429Error1Value) => onApiV1MiscTiktokCmlTrendingList429Error1(
                apiV1MiscTiktokCmlTrendingList429Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList500Error1(
                out var apiV1MiscTiktokCmlTrendingList500Error1Value) => onApiV1MiscTiktokCmlTrendingList500Error1(
                apiV1MiscTiktokCmlTrendingList500Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList502Error1(
                out var apiV1MiscTiktokCmlTrendingList502Error1Value) => onApiV1MiscTiktokCmlTrendingList502Error1(
                apiV1MiscTiktokCmlTrendingList502Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList503Error1(
                out var apiV1MiscTiktokCmlTrendingList503Error1Value) => onApiV1MiscTiktokCmlTrendingList503Error1(
                apiV1MiscTiktokCmlTrendingList503Error1Value),
            _ when TryGetApiV1MiscTiktokCmlTrendingList504Error1(
                out var apiV1MiscTiktokCmlTrendingList504Error1Value) => onApiV1MiscTiktokCmlTrendingList504Error1(
                apiV1MiscTiktokCmlTrendingList504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscTiktokGetCommercialMusicTrendingListError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTiktokCmlTrendingList400Error1> onApiV1MiscTiktokCmlTrendingList400Error1,
        Action<ApiV1MiscTiktokCmlTrendingList401Error1> onApiV1MiscTiktokCmlTrendingList401Error1,
        Action<ApiV1MiscTiktokCmlTrendingList403Error1> onApiV1MiscTiktokCmlTrendingList403Error1,
        Action<ApiV1MiscTiktokCmlTrendingList404Error1> onApiV1MiscTiktokCmlTrendingList404Error1,
        Action<ApiV1MiscTiktokCmlTrendingList429Error1> onApiV1MiscTiktokCmlTrendingList429Error1,
        Action<ApiV1MiscTiktokCmlTrendingList500Error1> onApiV1MiscTiktokCmlTrendingList500Error1,
        Action<ApiV1MiscTiktokCmlTrendingList502Error1> onApiV1MiscTiktokCmlTrendingList502Error1,
        Action<ApiV1MiscTiktokCmlTrendingList503Error1> onApiV1MiscTiktokCmlTrendingList503Error1,
        Action<ApiV1MiscTiktokCmlTrendingList504Error1> onApiV1MiscTiktokCmlTrendingList504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTiktokCmlTrendingList400Error1(
            out var apiV1MiscTiktokCmlTrendingList400Error1Value)) onApiV1MiscTiktokCmlTrendingList400Error1(
            apiV1MiscTiktokCmlTrendingList400Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList401Error1(
            out var apiV1MiscTiktokCmlTrendingList401Error1Value)) onApiV1MiscTiktokCmlTrendingList401Error1(
            apiV1MiscTiktokCmlTrendingList401Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList403Error1(
            out var apiV1MiscTiktokCmlTrendingList403Error1Value)) onApiV1MiscTiktokCmlTrendingList403Error1(
            apiV1MiscTiktokCmlTrendingList403Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList404Error1(
            out var apiV1MiscTiktokCmlTrendingList404Error1Value)) onApiV1MiscTiktokCmlTrendingList404Error1(
            apiV1MiscTiktokCmlTrendingList404Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList429Error1(
            out var apiV1MiscTiktokCmlTrendingList429Error1Value)) onApiV1MiscTiktokCmlTrendingList429Error1(
            apiV1MiscTiktokCmlTrendingList429Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList500Error1(
            out var apiV1MiscTiktokCmlTrendingList500Error1Value)) onApiV1MiscTiktokCmlTrendingList500Error1(
            apiV1MiscTiktokCmlTrendingList500Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList502Error1(
            out var apiV1MiscTiktokCmlTrendingList502Error1Value)) onApiV1MiscTiktokCmlTrendingList502Error1(
            apiV1MiscTiktokCmlTrendingList502Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList503Error1(
            out var apiV1MiscTiktokCmlTrendingList503Error1Value)) onApiV1MiscTiktokCmlTrendingList503Error1(
            apiV1MiscTiktokCmlTrendingList503Error1Value);
        else if (TryGetApiV1MiscTiktokCmlTrendingList504Error1(
            out var apiV1MiscTiktokCmlTrendingList504Error1Value)) onApiV1MiscTiktokCmlTrendingList504Error1(
            apiV1MiscTiktokCmlTrendingList504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscTiktokGetCommercialMusicTrendingListError)} holds no value.");
    }

    private static Task<MiscTiktokGetCommercialMusicTrendingListError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTiktokCmlTrendingList400Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList400Error1),
            401 => response.Json<ApiV1MiscTiktokCmlTrendingList401Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList401Error1),
            403 => response.Json<ApiV1MiscTiktokCmlTrendingList403Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList403Error1),
            404 => response.Json<ApiV1MiscTiktokCmlTrendingList404Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList404Error1),
            429 => response.Json<ApiV1MiscTiktokCmlTrendingList429Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList429Error1),
            500 => response.Json<ApiV1MiscTiktokCmlTrendingList500Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList500Error1),
            502 => response.Json<ApiV1MiscTiktokCmlTrendingList502Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList502Error1),
            503 => response.Json<ApiV1MiscTiktokCmlTrendingList503Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList503Error1),
            504 => response.Json<ApiV1MiscTiktokCmlTrendingList504Error1>().As(
                AsApiV1MiscTiktokCmlTrendingList504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTiktokGetCommercialMusicTrendingListError> Response { get; } = new(Create);
}
