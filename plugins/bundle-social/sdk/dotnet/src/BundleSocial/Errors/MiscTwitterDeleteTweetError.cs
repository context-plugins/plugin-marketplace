using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTwitterDeleteTweetError : ApiError
{
    private readonly Optional<ApiV1MiscTwitterTweet400Error1> _apiV1MiscTwitterTweet400Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet401Error1> _apiV1MiscTwitterTweet401Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet403Error1> _apiV1MiscTwitterTweet403Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet404Error1> _apiV1MiscTwitterTweet404Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet429Error1> _apiV1MiscTwitterTweet429Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet500Error1> _apiV1MiscTwitterTweet500Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet502Error1> _apiV1MiscTwitterTweet502Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet503Error1> _apiV1MiscTwitterTweet503Error1Value;

    private readonly Optional<ApiV1MiscTwitterTweet504Error1> _apiV1MiscTwitterTweet504Error1Value;

    private MiscTwitterDeleteTweetError(Optional<ApiV1MiscTwitterTweet400Error1> apiV1MiscTwitterTweet400Error1Value,
        Optional<ApiV1MiscTwitterTweet401Error1> apiV1MiscTwitterTweet401Error1Value,
        Optional<ApiV1MiscTwitterTweet403Error1> apiV1MiscTwitterTweet403Error1Value,
        Optional<ApiV1MiscTwitterTweet404Error1> apiV1MiscTwitterTweet404Error1Value,
        Optional<ApiV1MiscTwitterTweet429Error1> apiV1MiscTwitterTweet429Error1Value,
        Optional<ApiV1MiscTwitterTweet500Error1> apiV1MiscTwitterTweet500Error1Value,
        Optional<ApiV1MiscTwitterTweet502Error1> apiV1MiscTwitterTweet502Error1Value,
        Optional<ApiV1MiscTwitterTweet503Error1> apiV1MiscTwitterTweet503Error1Value,
        Optional<ApiV1MiscTwitterTweet504Error1> apiV1MiscTwitterTweet504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTwitterTweet400Error1Value = apiV1MiscTwitterTweet400Error1Value;
        _apiV1MiscTwitterTweet401Error1Value = apiV1MiscTwitterTweet401Error1Value;
        _apiV1MiscTwitterTweet403Error1Value = apiV1MiscTwitterTweet403Error1Value;
        _apiV1MiscTwitterTweet404Error1Value = apiV1MiscTwitterTweet404Error1Value;
        _apiV1MiscTwitterTweet429Error1Value = apiV1MiscTwitterTweet429Error1Value;
        _apiV1MiscTwitterTweet500Error1Value = apiV1MiscTwitterTweet500Error1Value;
        _apiV1MiscTwitterTweet502Error1Value = apiV1MiscTwitterTweet502Error1Value;
        _apiV1MiscTwitterTweet503Error1Value = apiV1MiscTwitterTweet503Error1Value;
        _apiV1MiscTwitterTweet504Error1Value = apiV1MiscTwitterTweet504Error1Value;
    }

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet400Error1(ApiV1MiscTwitterTweet400Error1 value) =>
        new(
            Optional<ApiV1MiscTwitterTweet400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet401Error1(ApiV1MiscTwitterTweet401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTwitterTweet401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet403Error1(ApiV1MiscTwitterTweet403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTwitterTweet403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet404Error1(ApiV1MiscTwitterTweet404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet429Error1(ApiV1MiscTwitterTweet429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet500Error1(ApiV1MiscTwitterTweet500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet502Error1(ApiV1MiscTwitterTweet502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet503Error1(ApiV1MiscTwitterTweet503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet503Error1>.Some(value),
            default,
            default);

    private static MiscTwitterDeleteTweetError AsApiV1MiscTwitterTweet504Error1(ApiV1MiscTwitterTweet504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterTweet504Error1>.Some(value),
            default);

    private static MiscTwitterDeleteTweetError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTwitterTweet400Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet400Error1? value) =>
        _apiV1MiscTwitterTweet400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet401Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet401Error1? value) =>
        _apiV1MiscTwitterTweet401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet403Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet403Error1? value) =>
        _apiV1MiscTwitterTweet403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet404Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet404Error1? value) =>
        _apiV1MiscTwitterTweet404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet429Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet429Error1? value) =>
        _apiV1MiscTwitterTweet429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet500Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet500Error1? value) =>
        _apiV1MiscTwitterTweet500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet502Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet502Error1? value) =>
        _apiV1MiscTwitterTweet502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet503Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet503Error1? value) =>
        _apiV1MiscTwitterTweet503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterTweet504Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet504Error1? value) =>
        _apiV1MiscTwitterTweet504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTwitterTweet400Error1, TResult> onApiV1MiscTwitterTweet400Error1,
        Func<ApiV1MiscTwitterTweet401Error1, TResult> onApiV1MiscTwitterTweet401Error1,
        Func<ApiV1MiscTwitterTweet403Error1, TResult> onApiV1MiscTwitterTweet403Error1,
        Func<ApiV1MiscTwitterTweet404Error1, TResult> onApiV1MiscTwitterTweet404Error1,
        Func<ApiV1MiscTwitterTweet429Error1, TResult> onApiV1MiscTwitterTweet429Error1,
        Func<ApiV1MiscTwitterTweet500Error1, TResult> onApiV1MiscTwitterTweet500Error1,
        Func<ApiV1MiscTwitterTweet502Error1, TResult> onApiV1MiscTwitterTweet502Error1,
        Func<ApiV1MiscTwitterTweet503Error1, TResult> onApiV1MiscTwitterTweet503Error1,
        Func<ApiV1MiscTwitterTweet504Error1, TResult> onApiV1MiscTwitterTweet504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTwitterTweet400Error1(
                out var apiV1MiscTwitterTweet400Error1Value) => onApiV1MiscTwitterTweet400Error1(
                apiV1MiscTwitterTweet400Error1Value),
            _ when TryGetApiV1MiscTwitterTweet401Error1(
                out var apiV1MiscTwitterTweet401Error1Value) => onApiV1MiscTwitterTweet401Error1(
                apiV1MiscTwitterTweet401Error1Value),
            _ when TryGetApiV1MiscTwitterTweet403Error1(
                out var apiV1MiscTwitterTweet403Error1Value) => onApiV1MiscTwitterTweet403Error1(
                apiV1MiscTwitterTweet403Error1Value),
            _ when TryGetApiV1MiscTwitterTweet404Error1(
                out var apiV1MiscTwitterTweet404Error1Value) => onApiV1MiscTwitterTweet404Error1(
                apiV1MiscTwitterTweet404Error1Value),
            _ when TryGetApiV1MiscTwitterTweet429Error1(
                out var apiV1MiscTwitterTweet429Error1Value) => onApiV1MiscTwitterTweet429Error1(
                apiV1MiscTwitterTweet429Error1Value),
            _ when TryGetApiV1MiscTwitterTweet500Error1(
                out var apiV1MiscTwitterTweet500Error1Value) => onApiV1MiscTwitterTweet500Error1(
                apiV1MiscTwitterTweet500Error1Value),
            _ when TryGetApiV1MiscTwitterTweet502Error1(
                out var apiV1MiscTwitterTweet502Error1Value) => onApiV1MiscTwitterTweet502Error1(
                apiV1MiscTwitterTweet502Error1Value),
            _ when TryGetApiV1MiscTwitterTweet503Error1(
                out var apiV1MiscTwitterTweet503Error1Value) => onApiV1MiscTwitterTweet503Error1(
                apiV1MiscTwitterTweet503Error1Value),
            _ when TryGetApiV1MiscTwitterTweet504Error1(
                out var apiV1MiscTwitterTweet504Error1Value) => onApiV1MiscTwitterTweet504Error1(
                apiV1MiscTwitterTweet504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTwitterDeleteTweetError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTwitterTweet400Error1> onApiV1MiscTwitterTweet400Error1,
        Action<ApiV1MiscTwitterTweet401Error1> onApiV1MiscTwitterTweet401Error1,
        Action<ApiV1MiscTwitterTweet403Error1> onApiV1MiscTwitterTweet403Error1,
        Action<ApiV1MiscTwitterTweet404Error1> onApiV1MiscTwitterTweet404Error1,
        Action<ApiV1MiscTwitterTweet429Error1> onApiV1MiscTwitterTweet429Error1,
        Action<ApiV1MiscTwitterTweet500Error1> onApiV1MiscTwitterTweet500Error1,
        Action<ApiV1MiscTwitterTweet502Error1> onApiV1MiscTwitterTweet502Error1,
        Action<ApiV1MiscTwitterTweet503Error1> onApiV1MiscTwitterTweet503Error1,
        Action<ApiV1MiscTwitterTweet504Error1> onApiV1MiscTwitterTweet504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTwitterTweet400Error1(
            out var apiV1MiscTwitterTweet400Error1Value)) onApiV1MiscTwitterTweet400Error1(
            apiV1MiscTwitterTweet400Error1Value);
        else if (TryGetApiV1MiscTwitterTweet401Error1(
            out var apiV1MiscTwitterTweet401Error1Value)) onApiV1MiscTwitterTweet401Error1(
            apiV1MiscTwitterTweet401Error1Value);
        else if (TryGetApiV1MiscTwitterTweet403Error1(
            out var apiV1MiscTwitterTweet403Error1Value)) onApiV1MiscTwitterTweet403Error1(
            apiV1MiscTwitterTweet403Error1Value);
        else if (TryGetApiV1MiscTwitterTweet404Error1(
            out var apiV1MiscTwitterTweet404Error1Value)) onApiV1MiscTwitterTweet404Error1(
            apiV1MiscTwitterTweet404Error1Value);
        else if (TryGetApiV1MiscTwitterTweet429Error1(
            out var apiV1MiscTwitterTweet429Error1Value)) onApiV1MiscTwitterTweet429Error1(
            apiV1MiscTwitterTweet429Error1Value);
        else if (TryGetApiV1MiscTwitterTweet500Error1(
            out var apiV1MiscTwitterTweet500Error1Value)) onApiV1MiscTwitterTweet500Error1(
            apiV1MiscTwitterTweet500Error1Value);
        else if (TryGetApiV1MiscTwitterTweet502Error1(
            out var apiV1MiscTwitterTweet502Error1Value)) onApiV1MiscTwitterTweet502Error1(
            apiV1MiscTwitterTweet502Error1Value);
        else if (TryGetApiV1MiscTwitterTweet503Error1(
            out var apiV1MiscTwitterTweet503Error1Value)) onApiV1MiscTwitterTweet503Error1(
            apiV1MiscTwitterTweet503Error1Value);
        else if (TryGetApiV1MiscTwitterTweet504Error1(
            out var apiV1MiscTwitterTweet504Error1Value)) onApiV1MiscTwitterTweet504Error1(
            apiV1MiscTwitterTweet504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTwitterDeleteTweetError)} holds no value.");
    }

    private static Task<MiscTwitterDeleteTweetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTwitterTweet400Error1>().As(AsApiV1MiscTwitterTweet400Error1),
            401 => response.Json<ApiV1MiscTwitterTweet401Error1>().As(AsApiV1MiscTwitterTweet401Error1),
            403 => response.Json<ApiV1MiscTwitterTweet403Error1>().As(AsApiV1MiscTwitterTweet403Error1),
            404 => response.Json<ApiV1MiscTwitterTweet404Error1>().As(AsApiV1MiscTwitterTweet404Error1),
            429 => response.Json<ApiV1MiscTwitterTweet429Error1>().As(AsApiV1MiscTwitterTweet429Error1),
            500 => response.Json<ApiV1MiscTwitterTweet500Error1>().As(AsApiV1MiscTwitterTweet500Error1),
            502 => response.Json<ApiV1MiscTwitterTweet502Error1>().As(AsApiV1MiscTwitterTweet502Error1),
            503 => response.Json<ApiV1MiscTwitterTweet503Error1>().As(AsApiV1MiscTwitterTweet503Error1),
            504 => response.Json<ApiV1MiscTwitterTweet504Error1>().As(AsApiV1MiscTwitterTweet504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTwitterDeleteTweetError> Response { get; } = new(Create);
}
