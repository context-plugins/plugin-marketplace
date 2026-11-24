using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountCopyError : ApiError
{
    private readonly Optional<ApiV1SocialAccountCopy400Error1> _apiV1SocialAccountCopy400Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy401Error1> _apiV1SocialAccountCopy401Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy403Error1> _apiV1SocialAccountCopy403Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy404Error1> _apiV1SocialAccountCopy404Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy429Error1> _apiV1SocialAccountCopy429Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy500Error1> _apiV1SocialAccountCopy500Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy502Error1> _apiV1SocialAccountCopy502Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy503Error1> _apiV1SocialAccountCopy503Error1Value;

    private readonly Optional<ApiV1SocialAccountCopy504Error1> _apiV1SocialAccountCopy504Error1Value;

    private SocialAccountCopyError(Optional<ApiV1SocialAccountCopy400Error1> apiV1SocialAccountCopy400Error1Value,
        Optional<ApiV1SocialAccountCopy401Error1> apiV1SocialAccountCopy401Error1Value,
        Optional<ApiV1SocialAccountCopy403Error1> apiV1SocialAccountCopy403Error1Value,
        Optional<ApiV1SocialAccountCopy404Error1> apiV1SocialAccountCopy404Error1Value,
        Optional<ApiV1SocialAccountCopy429Error1> apiV1SocialAccountCopy429Error1Value,
        Optional<ApiV1SocialAccountCopy500Error1> apiV1SocialAccountCopy500Error1Value,
        Optional<ApiV1SocialAccountCopy502Error1> apiV1SocialAccountCopy502Error1Value,
        Optional<ApiV1SocialAccountCopy503Error1> apiV1SocialAccountCopy503Error1Value,
        Optional<ApiV1SocialAccountCopy504Error1> apiV1SocialAccountCopy504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountCopy400Error1Value = apiV1SocialAccountCopy400Error1Value;
        _apiV1SocialAccountCopy401Error1Value = apiV1SocialAccountCopy401Error1Value;
        _apiV1SocialAccountCopy403Error1Value = apiV1SocialAccountCopy403Error1Value;
        _apiV1SocialAccountCopy404Error1Value = apiV1SocialAccountCopy404Error1Value;
        _apiV1SocialAccountCopy429Error1Value = apiV1SocialAccountCopy429Error1Value;
        _apiV1SocialAccountCopy500Error1Value = apiV1SocialAccountCopy500Error1Value;
        _apiV1SocialAccountCopy502Error1Value = apiV1SocialAccountCopy502Error1Value;
        _apiV1SocialAccountCopy503Error1Value = apiV1SocialAccountCopy503Error1Value;
        _apiV1SocialAccountCopy504Error1Value = apiV1SocialAccountCopy504Error1Value;
    }

    private static SocialAccountCopyError AsApiV1SocialAccountCopy400Error1(ApiV1SocialAccountCopy400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountCopy400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy401Error1(ApiV1SocialAccountCopy401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountCopy401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy403Error1(ApiV1SocialAccountCopy403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountCopy403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy404Error1(ApiV1SocialAccountCopy404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy429Error1(ApiV1SocialAccountCopy429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy500Error1(ApiV1SocialAccountCopy500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy502Error1(ApiV1SocialAccountCopy502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy503Error1(ApiV1SocialAccountCopy503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy503Error1>.Some(value),
            default,
            default);

    private static SocialAccountCopyError AsApiV1SocialAccountCopy504Error1(ApiV1SocialAccountCopy504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountCopy504Error1>.Some(value),
            default);

    private static SocialAccountCopyError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountCopy400Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy400Error1? value) =>
        _apiV1SocialAccountCopy400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy401Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy401Error1? value) =>
        _apiV1SocialAccountCopy401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy403Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy403Error1? value) =>
        _apiV1SocialAccountCopy403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy404Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy404Error1? value) =>
        _apiV1SocialAccountCopy404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy429Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy429Error1? value) =>
        _apiV1SocialAccountCopy429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy500Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy500Error1? value) =>
        _apiV1SocialAccountCopy500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy502Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy502Error1? value) =>
        _apiV1SocialAccountCopy502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy503Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy503Error1? value) =>
        _apiV1SocialAccountCopy503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountCopy504Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy504Error1? value) =>
        _apiV1SocialAccountCopy504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountCopy400Error1, TResult> onApiV1SocialAccountCopy400Error1,
        Func<ApiV1SocialAccountCopy401Error1, TResult> onApiV1SocialAccountCopy401Error1,
        Func<ApiV1SocialAccountCopy403Error1, TResult> onApiV1SocialAccountCopy403Error1,
        Func<ApiV1SocialAccountCopy404Error1, TResult> onApiV1SocialAccountCopy404Error1,
        Func<ApiV1SocialAccountCopy429Error1, TResult> onApiV1SocialAccountCopy429Error1,
        Func<ApiV1SocialAccountCopy500Error1, TResult> onApiV1SocialAccountCopy500Error1,
        Func<ApiV1SocialAccountCopy502Error1, TResult> onApiV1SocialAccountCopy502Error1,
        Func<ApiV1SocialAccountCopy503Error1, TResult> onApiV1SocialAccountCopy503Error1,
        Func<ApiV1SocialAccountCopy504Error1, TResult> onApiV1SocialAccountCopy504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountCopy400Error1(
                out var apiV1SocialAccountCopy400Error1Value) => onApiV1SocialAccountCopy400Error1(
                apiV1SocialAccountCopy400Error1Value),
            _ when TryGetApiV1SocialAccountCopy401Error1(
                out var apiV1SocialAccountCopy401Error1Value) => onApiV1SocialAccountCopy401Error1(
                apiV1SocialAccountCopy401Error1Value),
            _ when TryGetApiV1SocialAccountCopy403Error1(
                out var apiV1SocialAccountCopy403Error1Value) => onApiV1SocialAccountCopy403Error1(
                apiV1SocialAccountCopy403Error1Value),
            _ when TryGetApiV1SocialAccountCopy404Error1(
                out var apiV1SocialAccountCopy404Error1Value) => onApiV1SocialAccountCopy404Error1(
                apiV1SocialAccountCopy404Error1Value),
            _ when TryGetApiV1SocialAccountCopy429Error1(
                out var apiV1SocialAccountCopy429Error1Value) => onApiV1SocialAccountCopy429Error1(
                apiV1SocialAccountCopy429Error1Value),
            _ when TryGetApiV1SocialAccountCopy500Error1(
                out var apiV1SocialAccountCopy500Error1Value) => onApiV1SocialAccountCopy500Error1(
                apiV1SocialAccountCopy500Error1Value),
            _ when TryGetApiV1SocialAccountCopy502Error1(
                out var apiV1SocialAccountCopy502Error1Value) => onApiV1SocialAccountCopy502Error1(
                apiV1SocialAccountCopy502Error1Value),
            _ when TryGetApiV1SocialAccountCopy503Error1(
                out var apiV1SocialAccountCopy503Error1Value) => onApiV1SocialAccountCopy503Error1(
                apiV1SocialAccountCopy503Error1Value),
            _ when TryGetApiV1SocialAccountCopy504Error1(
                out var apiV1SocialAccountCopy504Error1Value) => onApiV1SocialAccountCopy504Error1(
                apiV1SocialAccountCopy504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountCopyError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountCopy400Error1> onApiV1SocialAccountCopy400Error1,
        Action<ApiV1SocialAccountCopy401Error1> onApiV1SocialAccountCopy401Error1,
        Action<ApiV1SocialAccountCopy403Error1> onApiV1SocialAccountCopy403Error1,
        Action<ApiV1SocialAccountCopy404Error1> onApiV1SocialAccountCopy404Error1,
        Action<ApiV1SocialAccountCopy429Error1> onApiV1SocialAccountCopy429Error1,
        Action<ApiV1SocialAccountCopy500Error1> onApiV1SocialAccountCopy500Error1,
        Action<ApiV1SocialAccountCopy502Error1> onApiV1SocialAccountCopy502Error1,
        Action<ApiV1SocialAccountCopy503Error1> onApiV1SocialAccountCopy503Error1,
        Action<ApiV1SocialAccountCopy504Error1> onApiV1SocialAccountCopy504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountCopy400Error1(
            out var apiV1SocialAccountCopy400Error1Value)) onApiV1SocialAccountCopy400Error1(
            apiV1SocialAccountCopy400Error1Value);
        else if (TryGetApiV1SocialAccountCopy401Error1(
            out var apiV1SocialAccountCopy401Error1Value)) onApiV1SocialAccountCopy401Error1(
            apiV1SocialAccountCopy401Error1Value);
        else if (TryGetApiV1SocialAccountCopy403Error1(
            out var apiV1SocialAccountCopy403Error1Value)) onApiV1SocialAccountCopy403Error1(
            apiV1SocialAccountCopy403Error1Value);
        else if (TryGetApiV1SocialAccountCopy404Error1(
            out var apiV1SocialAccountCopy404Error1Value)) onApiV1SocialAccountCopy404Error1(
            apiV1SocialAccountCopy404Error1Value);
        else if (TryGetApiV1SocialAccountCopy429Error1(
            out var apiV1SocialAccountCopy429Error1Value)) onApiV1SocialAccountCopy429Error1(
            apiV1SocialAccountCopy429Error1Value);
        else if (TryGetApiV1SocialAccountCopy500Error1(
            out var apiV1SocialAccountCopy500Error1Value)) onApiV1SocialAccountCopy500Error1(
            apiV1SocialAccountCopy500Error1Value);
        else if (TryGetApiV1SocialAccountCopy502Error1(
            out var apiV1SocialAccountCopy502Error1Value)) onApiV1SocialAccountCopy502Error1(
            apiV1SocialAccountCopy502Error1Value);
        else if (TryGetApiV1SocialAccountCopy503Error1(
            out var apiV1SocialAccountCopy503Error1Value)) onApiV1SocialAccountCopy503Error1(
            apiV1SocialAccountCopy503Error1Value);
        else if (TryGetApiV1SocialAccountCopy504Error1(
            out var apiV1SocialAccountCopy504Error1Value)) onApiV1SocialAccountCopy504Error1(
            apiV1SocialAccountCopy504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountCopyError)} holds no value.");
    }

    private static Task<SocialAccountCopyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountCopy400Error1>().As(AsApiV1SocialAccountCopy400Error1),
            401 => response.Json<ApiV1SocialAccountCopy401Error1>().As(AsApiV1SocialAccountCopy401Error1),
            403 => response.Json<ApiV1SocialAccountCopy403Error1>().As(AsApiV1SocialAccountCopy403Error1),
            404 => response.Json<ApiV1SocialAccountCopy404Error1>().As(AsApiV1SocialAccountCopy404Error1),
            429 => response.Json<ApiV1SocialAccountCopy429Error1>().As(AsApiV1SocialAccountCopy429Error1),
            500 => response.Json<ApiV1SocialAccountCopy500Error1>().As(AsApiV1SocialAccountCopy500Error1),
            502 => response.Json<ApiV1SocialAccountCopy502Error1>().As(AsApiV1SocialAccountCopy502Error1),
            503 => response.Json<ApiV1SocialAccountCopy503Error1>().As(AsApiV1SocialAccountCopy503Error1),
            504 => response.Json<ApiV1SocialAccountCopy504Error1>().As(AsApiV1SocialAccountCopy504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountCopyError> Response { get; } = new(Create);
}
