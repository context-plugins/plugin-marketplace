using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountUnsetChannelError : ApiError
{
    private readonly Optional<ApiV1SocialAccountUnsetChannel400Error1> _apiV1SocialAccountUnsetChannel400Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel401Error1> _apiV1SocialAccountUnsetChannel401Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel403Error1> _apiV1SocialAccountUnsetChannel403Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel404Error1> _apiV1SocialAccountUnsetChannel404Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel429Error1> _apiV1SocialAccountUnsetChannel429Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel500Error1> _apiV1SocialAccountUnsetChannel500Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel502Error1> _apiV1SocialAccountUnsetChannel502Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel503Error1> _apiV1SocialAccountUnsetChannel503Error1Value;

    private readonly Optional<ApiV1SocialAccountUnsetChannel504Error1> _apiV1SocialAccountUnsetChannel504Error1Value;

    private SocialAccountUnsetChannelError(Optional<ApiV1SocialAccountUnsetChannel400Error1> apiV1SocialAccountUnsetChannel400Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel401Error1> apiV1SocialAccountUnsetChannel401Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel403Error1> apiV1SocialAccountUnsetChannel403Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel404Error1> apiV1SocialAccountUnsetChannel404Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel429Error1> apiV1SocialAccountUnsetChannel429Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel500Error1> apiV1SocialAccountUnsetChannel500Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel502Error1> apiV1SocialAccountUnsetChannel502Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel503Error1> apiV1SocialAccountUnsetChannel503Error1Value,
        Optional<ApiV1SocialAccountUnsetChannel504Error1> apiV1SocialAccountUnsetChannel504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountUnsetChannel400Error1Value = apiV1SocialAccountUnsetChannel400Error1Value;
        _apiV1SocialAccountUnsetChannel401Error1Value = apiV1SocialAccountUnsetChannel401Error1Value;
        _apiV1SocialAccountUnsetChannel403Error1Value = apiV1SocialAccountUnsetChannel403Error1Value;
        _apiV1SocialAccountUnsetChannel404Error1Value = apiV1SocialAccountUnsetChannel404Error1Value;
        _apiV1SocialAccountUnsetChannel429Error1Value = apiV1SocialAccountUnsetChannel429Error1Value;
        _apiV1SocialAccountUnsetChannel500Error1Value = apiV1SocialAccountUnsetChannel500Error1Value;
        _apiV1SocialAccountUnsetChannel502Error1Value = apiV1SocialAccountUnsetChannel502Error1Value;
        _apiV1SocialAccountUnsetChannel503Error1Value = apiV1SocialAccountUnsetChannel503Error1Value;
        _apiV1SocialAccountUnsetChannel504Error1Value = apiV1SocialAccountUnsetChannel504Error1Value;
    }

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel400Error1(ApiV1SocialAccountUnsetChannel400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountUnsetChannel400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel401Error1(ApiV1SocialAccountUnsetChannel401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountUnsetChannel401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel403Error1(ApiV1SocialAccountUnsetChannel403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel404Error1(ApiV1SocialAccountUnsetChannel404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel429Error1(ApiV1SocialAccountUnsetChannel429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel500Error1(ApiV1SocialAccountUnsetChannel500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel502Error1(ApiV1SocialAccountUnsetChannel502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel503Error1(ApiV1SocialAccountUnsetChannel503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel503Error1>.Some(value),
            default,
            default);

    private static SocialAccountUnsetChannelError AsApiV1SocialAccountUnsetChannel504Error1(ApiV1SocialAccountUnsetChannel504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountUnsetChannel504Error1>.Some(value),
            default);

    private static SocialAccountUnsetChannelError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountUnsetChannel400Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel400Error1? value) =>
        _apiV1SocialAccountUnsetChannel400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel401Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel401Error1? value) =>
        _apiV1SocialAccountUnsetChannel401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel403Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel403Error1? value) =>
        _apiV1SocialAccountUnsetChannel403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel404Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel404Error1? value) =>
        _apiV1SocialAccountUnsetChannel404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel429Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel429Error1? value) =>
        _apiV1SocialAccountUnsetChannel429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel500Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel500Error1? value) =>
        _apiV1SocialAccountUnsetChannel500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel502Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel502Error1? value) =>
        _apiV1SocialAccountUnsetChannel502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel503Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel503Error1? value) =>
        _apiV1SocialAccountUnsetChannel503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountUnsetChannel504Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel504Error1? value) =>
        _apiV1SocialAccountUnsetChannel504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountUnsetChannel400Error1, TResult> onApiV1SocialAccountUnsetChannel400Error1,
        Func<ApiV1SocialAccountUnsetChannel401Error1, TResult> onApiV1SocialAccountUnsetChannel401Error1,
        Func<ApiV1SocialAccountUnsetChannel403Error1, TResult> onApiV1SocialAccountUnsetChannel403Error1,
        Func<ApiV1SocialAccountUnsetChannel404Error1, TResult> onApiV1SocialAccountUnsetChannel404Error1,
        Func<ApiV1SocialAccountUnsetChannel429Error1, TResult> onApiV1SocialAccountUnsetChannel429Error1,
        Func<ApiV1SocialAccountUnsetChannel500Error1, TResult> onApiV1SocialAccountUnsetChannel500Error1,
        Func<ApiV1SocialAccountUnsetChannel502Error1, TResult> onApiV1SocialAccountUnsetChannel502Error1,
        Func<ApiV1SocialAccountUnsetChannel503Error1, TResult> onApiV1SocialAccountUnsetChannel503Error1,
        Func<ApiV1SocialAccountUnsetChannel504Error1, TResult> onApiV1SocialAccountUnsetChannel504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountUnsetChannel400Error1(
                out var apiV1SocialAccountUnsetChannel400Error1Value) => onApiV1SocialAccountUnsetChannel400Error1(
                apiV1SocialAccountUnsetChannel400Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel401Error1(
                out var apiV1SocialAccountUnsetChannel401Error1Value) => onApiV1SocialAccountUnsetChannel401Error1(
                apiV1SocialAccountUnsetChannel401Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel403Error1(
                out var apiV1SocialAccountUnsetChannel403Error1Value) => onApiV1SocialAccountUnsetChannel403Error1(
                apiV1SocialAccountUnsetChannel403Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel404Error1(
                out var apiV1SocialAccountUnsetChannel404Error1Value) => onApiV1SocialAccountUnsetChannel404Error1(
                apiV1SocialAccountUnsetChannel404Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel429Error1(
                out var apiV1SocialAccountUnsetChannel429Error1Value) => onApiV1SocialAccountUnsetChannel429Error1(
                apiV1SocialAccountUnsetChannel429Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel500Error1(
                out var apiV1SocialAccountUnsetChannel500Error1Value) => onApiV1SocialAccountUnsetChannel500Error1(
                apiV1SocialAccountUnsetChannel500Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel502Error1(
                out var apiV1SocialAccountUnsetChannel502Error1Value) => onApiV1SocialAccountUnsetChannel502Error1(
                apiV1SocialAccountUnsetChannel502Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel503Error1(
                out var apiV1SocialAccountUnsetChannel503Error1Value) => onApiV1SocialAccountUnsetChannel503Error1(
                apiV1SocialAccountUnsetChannel503Error1Value),
            _ when TryGetApiV1SocialAccountUnsetChannel504Error1(
                out var apiV1SocialAccountUnsetChannel504Error1Value) => onApiV1SocialAccountUnsetChannel504Error1(
                apiV1SocialAccountUnsetChannel504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountUnsetChannelError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountUnsetChannel400Error1> onApiV1SocialAccountUnsetChannel400Error1,
        Action<ApiV1SocialAccountUnsetChannel401Error1> onApiV1SocialAccountUnsetChannel401Error1,
        Action<ApiV1SocialAccountUnsetChannel403Error1> onApiV1SocialAccountUnsetChannel403Error1,
        Action<ApiV1SocialAccountUnsetChannel404Error1> onApiV1SocialAccountUnsetChannel404Error1,
        Action<ApiV1SocialAccountUnsetChannel429Error1> onApiV1SocialAccountUnsetChannel429Error1,
        Action<ApiV1SocialAccountUnsetChannel500Error1> onApiV1SocialAccountUnsetChannel500Error1,
        Action<ApiV1SocialAccountUnsetChannel502Error1> onApiV1SocialAccountUnsetChannel502Error1,
        Action<ApiV1SocialAccountUnsetChannel503Error1> onApiV1SocialAccountUnsetChannel503Error1,
        Action<ApiV1SocialAccountUnsetChannel504Error1> onApiV1SocialAccountUnsetChannel504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountUnsetChannel400Error1(
            out var apiV1SocialAccountUnsetChannel400Error1Value)) onApiV1SocialAccountUnsetChannel400Error1(
            apiV1SocialAccountUnsetChannel400Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel401Error1(
            out var apiV1SocialAccountUnsetChannel401Error1Value)) onApiV1SocialAccountUnsetChannel401Error1(
            apiV1SocialAccountUnsetChannel401Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel403Error1(
            out var apiV1SocialAccountUnsetChannel403Error1Value)) onApiV1SocialAccountUnsetChannel403Error1(
            apiV1SocialAccountUnsetChannel403Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel404Error1(
            out var apiV1SocialAccountUnsetChannel404Error1Value)) onApiV1SocialAccountUnsetChannel404Error1(
            apiV1SocialAccountUnsetChannel404Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel429Error1(
            out var apiV1SocialAccountUnsetChannel429Error1Value)) onApiV1SocialAccountUnsetChannel429Error1(
            apiV1SocialAccountUnsetChannel429Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel500Error1(
            out var apiV1SocialAccountUnsetChannel500Error1Value)) onApiV1SocialAccountUnsetChannel500Error1(
            apiV1SocialAccountUnsetChannel500Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel502Error1(
            out var apiV1SocialAccountUnsetChannel502Error1Value)) onApiV1SocialAccountUnsetChannel502Error1(
            apiV1SocialAccountUnsetChannel502Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel503Error1(
            out var apiV1SocialAccountUnsetChannel503Error1Value)) onApiV1SocialAccountUnsetChannel503Error1(
            apiV1SocialAccountUnsetChannel503Error1Value);
        else if (TryGetApiV1SocialAccountUnsetChannel504Error1(
            out var apiV1SocialAccountUnsetChannel504Error1Value)) onApiV1SocialAccountUnsetChannel504Error1(
            apiV1SocialAccountUnsetChannel504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountUnsetChannelError)} holds no value.");
    }

    private static Task<SocialAccountUnsetChannelError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountUnsetChannel400Error1>().As(
                AsApiV1SocialAccountUnsetChannel400Error1),
            401 => response.Json<ApiV1SocialAccountUnsetChannel401Error1>().As(
                AsApiV1SocialAccountUnsetChannel401Error1),
            403 => response.Json<ApiV1SocialAccountUnsetChannel403Error1>().As(
                AsApiV1SocialAccountUnsetChannel403Error1),
            404 => response.Json<ApiV1SocialAccountUnsetChannel404Error1>().As(
                AsApiV1SocialAccountUnsetChannel404Error1),
            429 => response.Json<ApiV1SocialAccountUnsetChannel429Error1>().As(
                AsApiV1SocialAccountUnsetChannel429Error1),
            500 => response.Json<ApiV1SocialAccountUnsetChannel500Error1>().As(
                AsApiV1SocialAccountUnsetChannel500Error1),
            502 => response.Json<ApiV1SocialAccountUnsetChannel502Error1>().As(
                AsApiV1SocialAccountUnsetChannel502Error1),
            503 => response.Json<ApiV1SocialAccountUnsetChannel503Error1>().As(
                AsApiV1SocialAccountUnsetChannel503Error1),
            504 => response.Json<ApiV1SocialAccountUnsetChannel504Error1>().As(
                AsApiV1SocialAccountUnsetChannel504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountUnsetChannelError> Response { get; } = new(Create);
}
