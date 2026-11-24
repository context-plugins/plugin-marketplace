using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountSetChannelError : ApiError
{
    private readonly Optional<ApiV1SocialAccountSetChannel400Error1> _apiV1SocialAccountSetChannel400Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel401Error1> _apiV1SocialAccountSetChannel401Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel403Error1> _apiV1SocialAccountSetChannel403Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel404Error1> _apiV1SocialAccountSetChannel404Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel429Error1> _apiV1SocialAccountSetChannel429Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel500Error1> _apiV1SocialAccountSetChannel500Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel502Error1> _apiV1SocialAccountSetChannel502Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel503Error1> _apiV1SocialAccountSetChannel503Error1Value;

    private readonly Optional<ApiV1SocialAccountSetChannel504Error1> _apiV1SocialAccountSetChannel504Error1Value;

    private SocialAccountSetChannelError(Optional<ApiV1SocialAccountSetChannel400Error1> apiV1SocialAccountSetChannel400Error1Value,
        Optional<ApiV1SocialAccountSetChannel401Error1> apiV1SocialAccountSetChannel401Error1Value,
        Optional<ApiV1SocialAccountSetChannel403Error1> apiV1SocialAccountSetChannel403Error1Value,
        Optional<ApiV1SocialAccountSetChannel404Error1> apiV1SocialAccountSetChannel404Error1Value,
        Optional<ApiV1SocialAccountSetChannel429Error1> apiV1SocialAccountSetChannel429Error1Value,
        Optional<ApiV1SocialAccountSetChannel500Error1> apiV1SocialAccountSetChannel500Error1Value,
        Optional<ApiV1SocialAccountSetChannel502Error1> apiV1SocialAccountSetChannel502Error1Value,
        Optional<ApiV1SocialAccountSetChannel503Error1> apiV1SocialAccountSetChannel503Error1Value,
        Optional<ApiV1SocialAccountSetChannel504Error1> apiV1SocialAccountSetChannel504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountSetChannel400Error1Value = apiV1SocialAccountSetChannel400Error1Value;
        _apiV1SocialAccountSetChannel401Error1Value = apiV1SocialAccountSetChannel401Error1Value;
        _apiV1SocialAccountSetChannel403Error1Value = apiV1SocialAccountSetChannel403Error1Value;
        _apiV1SocialAccountSetChannel404Error1Value = apiV1SocialAccountSetChannel404Error1Value;
        _apiV1SocialAccountSetChannel429Error1Value = apiV1SocialAccountSetChannel429Error1Value;
        _apiV1SocialAccountSetChannel500Error1Value = apiV1SocialAccountSetChannel500Error1Value;
        _apiV1SocialAccountSetChannel502Error1Value = apiV1SocialAccountSetChannel502Error1Value;
        _apiV1SocialAccountSetChannel503Error1Value = apiV1SocialAccountSetChannel503Error1Value;
        _apiV1SocialAccountSetChannel504Error1Value = apiV1SocialAccountSetChannel504Error1Value;
    }

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel400Error1(ApiV1SocialAccountSetChannel400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountSetChannel400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel401Error1(ApiV1SocialAccountSetChannel401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountSetChannel401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel403Error1(ApiV1SocialAccountSetChannel403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel404Error1(ApiV1SocialAccountSetChannel404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel429Error1(ApiV1SocialAccountSetChannel429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel500Error1(ApiV1SocialAccountSetChannel500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel502Error1(ApiV1SocialAccountSetChannel502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel503Error1(ApiV1SocialAccountSetChannel503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel503Error1>.Some(value),
            default,
            default);

    private static SocialAccountSetChannelError AsApiV1SocialAccountSetChannel504Error1(ApiV1SocialAccountSetChannel504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountSetChannel504Error1>.Some(value),
            default);

    private static SocialAccountSetChannelError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountSetChannel400Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel400Error1? value) =>
        _apiV1SocialAccountSetChannel400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel401Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel401Error1? value) =>
        _apiV1SocialAccountSetChannel401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel403Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel403Error1? value) =>
        _apiV1SocialAccountSetChannel403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel404Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel404Error1? value) =>
        _apiV1SocialAccountSetChannel404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel429Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel429Error1? value) =>
        _apiV1SocialAccountSetChannel429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel500Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel500Error1? value) =>
        _apiV1SocialAccountSetChannel500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel502Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel502Error1? value) =>
        _apiV1SocialAccountSetChannel502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel503Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel503Error1? value) =>
        _apiV1SocialAccountSetChannel503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountSetChannel504Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel504Error1? value) =>
        _apiV1SocialAccountSetChannel504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountSetChannel400Error1, TResult> onApiV1SocialAccountSetChannel400Error1,
        Func<ApiV1SocialAccountSetChannel401Error1, TResult> onApiV1SocialAccountSetChannel401Error1,
        Func<ApiV1SocialAccountSetChannel403Error1, TResult> onApiV1SocialAccountSetChannel403Error1,
        Func<ApiV1SocialAccountSetChannel404Error1, TResult> onApiV1SocialAccountSetChannel404Error1,
        Func<ApiV1SocialAccountSetChannel429Error1, TResult> onApiV1SocialAccountSetChannel429Error1,
        Func<ApiV1SocialAccountSetChannel500Error1, TResult> onApiV1SocialAccountSetChannel500Error1,
        Func<ApiV1SocialAccountSetChannel502Error1, TResult> onApiV1SocialAccountSetChannel502Error1,
        Func<ApiV1SocialAccountSetChannel503Error1, TResult> onApiV1SocialAccountSetChannel503Error1,
        Func<ApiV1SocialAccountSetChannel504Error1, TResult> onApiV1SocialAccountSetChannel504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountSetChannel400Error1(
                out var apiV1SocialAccountSetChannel400Error1Value) => onApiV1SocialAccountSetChannel400Error1(
                apiV1SocialAccountSetChannel400Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel401Error1(
                out var apiV1SocialAccountSetChannel401Error1Value) => onApiV1SocialAccountSetChannel401Error1(
                apiV1SocialAccountSetChannel401Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel403Error1(
                out var apiV1SocialAccountSetChannel403Error1Value) => onApiV1SocialAccountSetChannel403Error1(
                apiV1SocialAccountSetChannel403Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel404Error1(
                out var apiV1SocialAccountSetChannel404Error1Value) => onApiV1SocialAccountSetChannel404Error1(
                apiV1SocialAccountSetChannel404Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel429Error1(
                out var apiV1SocialAccountSetChannel429Error1Value) => onApiV1SocialAccountSetChannel429Error1(
                apiV1SocialAccountSetChannel429Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel500Error1(
                out var apiV1SocialAccountSetChannel500Error1Value) => onApiV1SocialAccountSetChannel500Error1(
                apiV1SocialAccountSetChannel500Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel502Error1(
                out var apiV1SocialAccountSetChannel502Error1Value) => onApiV1SocialAccountSetChannel502Error1(
                apiV1SocialAccountSetChannel502Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel503Error1(
                out var apiV1SocialAccountSetChannel503Error1Value) => onApiV1SocialAccountSetChannel503Error1(
                apiV1SocialAccountSetChannel503Error1Value),
            _ when TryGetApiV1SocialAccountSetChannel504Error1(
                out var apiV1SocialAccountSetChannel504Error1Value) => onApiV1SocialAccountSetChannel504Error1(
                apiV1SocialAccountSetChannel504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountSetChannelError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountSetChannel400Error1> onApiV1SocialAccountSetChannel400Error1,
        Action<ApiV1SocialAccountSetChannel401Error1> onApiV1SocialAccountSetChannel401Error1,
        Action<ApiV1SocialAccountSetChannel403Error1> onApiV1SocialAccountSetChannel403Error1,
        Action<ApiV1SocialAccountSetChannel404Error1> onApiV1SocialAccountSetChannel404Error1,
        Action<ApiV1SocialAccountSetChannel429Error1> onApiV1SocialAccountSetChannel429Error1,
        Action<ApiV1SocialAccountSetChannel500Error1> onApiV1SocialAccountSetChannel500Error1,
        Action<ApiV1SocialAccountSetChannel502Error1> onApiV1SocialAccountSetChannel502Error1,
        Action<ApiV1SocialAccountSetChannel503Error1> onApiV1SocialAccountSetChannel503Error1,
        Action<ApiV1SocialAccountSetChannel504Error1> onApiV1SocialAccountSetChannel504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountSetChannel400Error1(
            out var apiV1SocialAccountSetChannel400Error1Value)) onApiV1SocialAccountSetChannel400Error1(
            apiV1SocialAccountSetChannel400Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel401Error1(
            out var apiV1SocialAccountSetChannel401Error1Value)) onApiV1SocialAccountSetChannel401Error1(
            apiV1SocialAccountSetChannel401Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel403Error1(
            out var apiV1SocialAccountSetChannel403Error1Value)) onApiV1SocialAccountSetChannel403Error1(
            apiV1SocialAccountSetChannel403Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel404Error1(
            out var apiV1SocialAccountSetChannel404Error1Value)) onApiV1SocialAccountSetChannel404Error1(
            apiV1SocialAccountSetChannel404Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel429Error1(
            out var apiV1SocialAccountSetChannel429Error1Value)) onApiV1SocialAccountSetChannel429Error1(
            apiV1SocialAccountSetChannel429Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel500Error1(
            out var apiV1SocialAccountSetChannel500Error1Value)) onApiV1SocialAccountSetChannel500Error1(
            apiV1SocialAccountSetChannel500Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel502Error1(
            out var apiV1SocialAccountSetChannel502Error1Value)) onApiV1SocialAccountSetChannel502Error1(
            apiV1SocialAccountSetChannel502Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel503Error1(
            out var apiV1SocialAccountSetChannel503Error1Value)) onApiV1SocialAccountSetChannel503Error1(
            apiV1SocialAccountSetChannel503Error1Value);
        else if (TryGetApiV1SocialAccountSetChannel504Error1(
            out var apiV1SocialAccountSetChannel504Error1Value)) onApiV1SocialAccountSetChannel504Error1(
            apiV1SocialAccountSetChannel504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountSetChannelError)} holds no value.");
    }

    private static Task<SocialAccountSetChannelError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountSetChannel400Error1>().As(AsApiV1SocialAccountSetChannel400Error1),
            401 => response.Json<ApiV1SocialAccountSetChannel401Error1>().As(AsApiV1SocialAccountSetChannel401Error1),
            403 => response.Json<ApiV1SocialAccountSetChannel403Error1>().As(AsApiV1SocialAccountSetChannel403Error1),
            404 => response.Json<ApiV1SocialAccountSetChannel404Error1>().As(AsApiV1SocialAccountSetChannel404Error1),
            429 => response.Json<ApiV1SocialAccountSetChannel429Error1>().As(AsApiV1SocialAccountSetChannel429Error1),
            500 => response.Json<ApiV1SocialAccountSetChannel500Error1>().As(AsApiV1SocialAccountSetChannel500Error1),
            502 => response.Json<ApiV1SocialAccountSetChannel502Error1>().As(AsApiV1SocialAccountSetChannel502Error1),
            503 => response.Json<ApiV1SocialAccountSetChannel503Error1>().As(AsApiV1SocialAccountSetChannel503Error1),
            504 => response.Json<ApiV1SocialAccountSetChannel504Error1>().As(AsApiV1SocialAccountSetChannel504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountSetChannelError> Response { get; } = new(Create);
}
