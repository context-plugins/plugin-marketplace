using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountEnableMessagingError : ApiError
{
    private readonly Optional<ApiV1SocialAccountMessagingEnable400Error1> _apiV1SocialAccountMessagingEnable400Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable401Error1> _apiV1SocialAccountMessagingEnable401Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable403Error1> _apiV1SocialAccountMessagingEnable403Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable404Error1> _apiV1SocialAccountMessagingEnable404Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable429Error1> _apiV1SocialAccountMessagingEnable429Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable500Error1> _apiV1SocialAccountMessagingEnable500Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable502Error1> _apiV1SocialAccountMessagingEnable502Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable503Error1> _apiV1SocialAccountMessagingEnable503Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingEnable504Error1> _apiV1SocialAccountMessagingEnable504Error1Value;

    private SocialAccountEnableMessagingError(Optional<ApiV1SocialAccountMessagingEnable400Error1> apiV1SocialAccountMessagingEnable400Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable401Error1> apiV1SocialAccountMessagingEnable401Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable403Error1> apiV1SocialAccountMessagingEnable403Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable404Error1> apiV1SocialAccountMessagingEnable404Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable429Error1> apiV1SocialAccountMessagingEnable429Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable500Error1> apiV1SocialAccountMessagingEnable500Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable502Error1> apiV1SocialAccountMessagingEnable502Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable503Error1> apiV1SocialAccountMessagingEnable503Error1Value,
        Optional<ApiV1SocialAccountMessagingEnable504Error1> apiV1SocialAccountMessagingEnable504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountMessagingEnable400Error1Value = apiV1SocialAccountMessagingEnable400Error1Value;
        _apiV1SocialAccountMessagingEnable401Error1Value = apiV1SocialAccountMessagingEnable401Error1Value;
        _apiV1SocialAccountMessagingEnable403Error1Value = apiV1SocialAccountMessagingEnable403Error1Value;
        _apiV1SocialAccountMessagingEnable404Error1Value = apiV1SocialAccountMessagingEnable404Error1Value;
        _apiV1SocialAccountMessagingEnable429Error1Value = apiV1SocialAccountMessagingEnable429Error1Value;
        _apiV1SocialAccountMessagingEnable500Error1Value = apiV1SocialAccountMessagingEnable500Error1Value;
        _apiV1SocialAccountMessagingEnable502Error1Value = apiV1SocialAccountMessagingEnable502Error1Value;
        _apiV1SocialAccountMessagingEnable503Error1Value = apiV1SocialAccountMessagingEnable503Error1Value;
        _apiV1SocialAccountMessagingEnable504Error1Value = apiV1SocialAccountMessagingEnable504Error1Value;
    }

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable400Error1(ApiV1SocialAccountMessagingEnable400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountMessagingEnable400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable401Error1(ApiV1SocialAccountMessagingEnable401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountMessagingEnable401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable403Error1(ApiV1SocialAccountMessagingEnable403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable404Error1(ApiV1SocialAccountMessagingEnable404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable429Error1(ApiV1SocialAccountMessagingEnable429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable500Error1(ApiV1SocialAccountMessagingEnable500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable502Error1(ApiV1SocialAccountMessagingEnable502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable503Error1(ApiV1SocialAccountMessagingEnable503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable503Error1>.Some(value),
            default,
            default);

    private static SocialAccountEnableMessagingError AsApiV1SocialAccountMessagingEnable504Error1(ApiV1SocialAccountMessagingEnable504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingEnable504Error1>.Some(value),
            default);

    private static SocialAccountEnableMessagingError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountMessagingEnable400Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable400Error1? value) =>
        _apiV1SocialAccountMessagingEnable400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable401Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable401Error1? value) =>
        _apiV1SocialAccountMessagingEnable401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable403Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable403Error1? value) =>
        _apiV1SocialAccountMessagingEnable403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable404Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable404Error1? value) =>
        _apiV1SocialAccountMessagingEnable404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable429Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable429Error1? value) =>
        _apiV1SocialAccountMessagingEnable429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable500Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable500Error1? value) =>
        _apiV1SocialAccountMessagingEnable500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable502Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable502Error1? value) =>
        _apiV1SocialAccountMessagingEnable502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable503Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable503Error1? value) =>
        _apiV1SocialAccountMessagingEnable503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingEnable504Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable504Error1? value) =>
        _apiV1SocialAccountMessagingEnable504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountMessagingEnable400Error1, TResult> onApiV1SocialAccountMessagingEnable400Error1,
        Func<ApiV1SocialAccountMessagingEnable401Error1, TResult> onApiV1SocialAccountMessagingEnable401Error1,
        Func<ApiV1SocialAccountMessagingEnable403Error1, TResult> onApiV1SocialAccountMessagingEnable403Error1,
        Func<ApiV1SocialAccountMessagingEnable404Error1, TResult> onApiV1SocialAccountMessagingEnable404Error1,
        Func<ApiV1SocialAccountMessagingEnable429Error1, TResult> onApiV1SocialAccountMessagingEnable429Error1,
        Func<ApiV1SocialAccountMessagingEnable500Error1, TResult> onApiV1SocialAccountMessagingEnable500Error1,
        Func<ApiV1SocialAccountMessagingEnable502Error1, TResult> onApiV1SocialAccountMessagingEnable502Error1,
        Func<ApiV1SocialAccountMessagingEnable503Error1, TResult> onApiV1SocialAccountMessagingEnable503Error1,
        Func<ApiV1SocialAccountMessagingEnable504Error1, TResult> onApiV1SocialAccountMessagingEnable504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountMessagingEnable400Error1(
                out var apiV1SocialAccountMessagingEnable400Error1Value) => onApiV1SocialAccountMessagingEnable400Error1(
                apiV1SocialAccountMessagingEnable400Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable401Error1(
                out var apiV1SocialAccountMessagingEnable401Error1Value) => onApiV1SocialAccountMessagingEnable401Error1(
                apiV1SocialAccountMessagingEnable401Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable403Error1(
                out var apiV1SocialAccountMessagingEnable403Error1Value) => onApiV1SocialAccountMessagingEnable403Error1(
                apiV1SocialAccountMessagingEnable403Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable404Error1(
                out var apiV1SocialAccountMessagingEnable404Error1Value) => onApiV1SocialAccountMessagingEnable404Error1(
                apiV1SocialAccountMessagingEnable404Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable429Error1(
                out var apiV1SocialAccountMessagingEnable429Error1Value) => onApiV1SocialAccountMessagingEnable429Error1(
                apiV1SocialAccountMessagingEnable429Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable500Error1(
                out var apiV1SocialAccountMessagingEnable500Error1Value) => onApiV1SocialAccountMessagingEnable500Error1(
                apiV1SocialAccountMessagingEnable500Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable502Error1(
                out var apiV1SocialAccountMessagingEnable502Error1Value) => onApiV1SocialAccountMessagingEnable502Error1(
                apiV1SocialAccountMessagingEnable502Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable503Error1(
                out var apiV1SocialAccountMessagingEnable503Error1Value) => onApiV1SocialAccountMessagingEnable503Error1(
                apiV1SocialAccountMessagingEnable503Error1Value),
            _ when TryGetApiV1SocialAccountMessagingEnable504Error1(
                out var apiV1SocialAccountMessagingEnable504Error1Value) => onApiV1SocialAccountMessagingEnable504Error1(
                apiV1SocialAccountMessagingEnable504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountEnableMessagingError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountMessagingEnable400Error1> onApiV1SocialAccountMessagingEnable400Error1,
        Action<ApiV1SocialAccountMessagingEnable401Error1> onApiV1SocialAccountMessagingEnable401Error1,
        Action<ApiV1SocialAccountMessagingEnable403Error1> onApiV1SocialAccountMessagingEnable403Error1,
        Action<ApiV1SocialAccountMessagingEnable404Error1> onApiV1SocialAccountMessagingEnable404Error1,
        Action<ApiV1SocialAccountMessagingEnable429Error1> onApiV1SocialAccountMessagingEnable429Error1,
        Action<ApiV1SocialAccountMessagingEnable500Error1> onApiV1SocialAccountMessagingEnable500Error1,
        Action<ApiV1SocialAccountMessagingEnable502Error1> onApiV1SocialAccountMessagingEnable502Error1,
        Action<ApiV1SocialAccountMessagingEnable503Error1> onApiV1SocialAccountMessagingEnable503Error1,
        Action<ApiV1SocialAccountMessagingEnable504Error1> onApiV1SocialAccountMessagingEnable504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountMessagingEnable400Error1(
            out var apiV1SocialAccountMessagingEnable400Error1Value)) onApiV1SocialAccountMessagingEnable400Error1(
            apiV1SocialAccountMessagingEnable400Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable401Error1(
            out var apiV1SocialAccountMessagingEnable401Error1Value)) onApiV1SocialAccountMessagingEnable401Error1(
            apiV1SocialAccountMessagingEnable401Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable403Error1(
            out var apiV1SocialAccountMessagingEnable403Error1Value)) onApiV1SocialAccountMessagingEnable403Error1(
            apiV1SocialAccountMessagingEnable403Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable404Error1(
            out var apiV1SocialAccountMessagingEnable404Error1Value)) onApiV1SocialAccountMessagingEnable404Error1(
            apiV1SocialAccountMessagingEnable404Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable429Error1(
            out var apiV1SocialAccountMessagingEnable429Error1Value)) onApiV1SocialAccountMessagingEnable429Error1(
            apiV1SocialAccountMessagingEnable429Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable500Error1(
            out var apiV1SocialAccountMessagingEnable500Error1Value)) onApiV1SocialAccountMessagingEnable500Error1(
            apiV1SocialAccountMessagingEnable500Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable502Error1(
            out var apiV1SocialAccountMessagingEnable502Error1Value)) onApiV1SocialAccountMessagingEnable502Error1(
            apiV1SocialAccountMessagingEnable502Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable503Error1(
            out var apiV1SocialAccountMessagingEnable503Error1Value)) onApiV1SocialAccountMessagingEnable503Error1(
            apiV1SocialAccountMessagingEnable503Error1Value);
        else if (TryGetApiV1SocialAccountMessagingEnable504Error1(
            out var apiV1SocialAccountMessagingEnable504Error1Value)) onApiV1SocialAccountMessagingEnable504Error1(
            apiV1SocialAccountMessagingEnable504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountEnableMessagingError)} holds no value.");
    }

    private static Task<SocialAccountEnableMessagingError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountMessagingEnable400Error1>().As(
                AsApiV1SocialAccountMessagingEnable400Error1),
            401 => response.Json<ApiV1SocialAccountMessagingEnable401Error1>().As(
                AsApiV1SocialAccountMessagingEnable401Error1),
            403 => response.Json<ApiV1SocialAccountMessagingEnable403Error1>().As(
                AsApiV1SocialAccountMessagingEnable403Error1),
            404 => response.Json<ApiV1SocialAccountMessagingEnable404Error1>().As(
                AsApiV1SocialAccountMessagingEnable404Error1),
            429 => response.Json<ApiV1SocialAccountMessagingEnable429Error1>().As(
                AsApiV1SocialAccountMessagingEnable429Error1),
            500 => response.Json<ApiV1SocialAccountMessagingEnable500Error1>().As(
                AsApiV1SocialAccountMessagingEnable500Error1),
            502 => response.Json<ApiV1SocialAccountMessagingEnable502Error1>().As(
                AsApiV1SocialAccountMessagingEnable502Error1),
            503 => response.Json<ApiV1SocialAccountMessagingEnable503Error1>().As(
                AsApiV1SocialAccountMessagingEnable503Error1),
            504 => response.Json<ApiV1SocialAccountMessagingEnable504Error1>().As(
                AsApiV1SocialAccountMessagingEnable504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountEnableMessagingError> Response { get; } = new(Create);
}
