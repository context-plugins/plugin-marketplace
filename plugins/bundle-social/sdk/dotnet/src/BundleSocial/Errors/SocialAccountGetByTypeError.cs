using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountGetByTypeError : ApiError
{
    private readonly Optional<ApiV1SocialAccountByType400Error1> _apiV1SocialAccountByType400Error1Value;

    private readonly Optional<ApiV1SocialAccountByType401Error1> _apiV1SocialAccountByType401Error1Value;

    private readonly Optional<ApiV1SocialAccountByType403Error1> _apiV1SocialAccountByType403Error1Value;

    private readonly Optional<ApiV1SocialAccountByType404Error1> _apiV1SocialAccountByType404Error1Value;

    private readonly Optional<ApiV1SocialAccountByType429Error1> _apiV1SocialAccountByType429Error1Value;

    private readonly Optional<ApiV1SocialAccountByType500Error1> _apiV1SocialAccountByType500Error1Value;

    private readonly Optional<ApiV1SocialAccountByType502Error1> _apiV1SocialAccountByType502Error1Value;

    private readonly Optional<ApiV1SocialAccountByType503Error1> _apiV1SocialAccountByType503Error1Value;

    private readonly Optional<ApiV1SocialAccountByType504Error1> _apiV1SocialAccountByType504Error1Value;

    private SocialAccountGetByTypeError(Optional<ApiV1SocialAccountByType400Error1> apiV1SocialAccountByType400Error1Value,
        Optional<ApiV1SocialAccountByType401Error1> apiV1SocialAccountByType401Error1Value,
        Optional<ApiV1SocialAccountByType403Error1> apiV1SocialAccountByType403Error1Value,
        Optional<ApiV1SocialAccountByType404Error1> apiV1SocialAccountByType404Error1Value,
        Optional<ApiV1SocialAccountByType429Error1> apiV1SocialAccountByType429Error1Value,
        Optional<ApiV1SocialAccountByType500Error1> apiV1SocialAccountByType500Error1Value,
        Optional<ApiV1SocialAccountByType502Error1> apiV1SocialAccountByType502Error1Value,
        Optional<ApiV1SocialAccountByType503Error1> apiV1SocialAccountByType503Error1Value,
        Optional<ApiV1SocialAccountByType504Error1> apiV1SocialAccountByType504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountByType400Error1Value = apiV1SocialAccountByType400Error1Value;
        _apiV1SocialAccountByType401Error1Value = apiV1SocialAccountByType401Error1Value;
        _apiV1SocialAccountByType403Error1Value = apiV1SocialAccountByType403Error1Value;
        _apiV1SocialAccountByType404Error1Value = apiV1SocialAccountByType404Error1Value;
        _apiV1SocialAccountByType429Error1Value = apiV1SocialAccountByType429Error1Value;
        _apiV1SocialAccountByType500Error1Value = apiV1SocialAccountByType500Error1Value;
        _apiV1SocialAccountByType502Error1Value = apiV1SocialAccountByType502Error1Value;
        _apiV1SocialAccountByType503Error1Value = apiV1SocialAccountByType503Error1Value;
        _apiV1SocialAccountByType504Error1Value = apiV1SocialAccountByType504Error1Value;
    }

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType400Error1(ApiV1SocialAccountByType400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountByType400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType401Error1(ApiV1SocialAccountByType401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountByType401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType403Error1(ApiV1SocialAccountByType403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountByType403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType404Error1(ApiV1SocialAccountByType404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType429Error1(ApiV1SocialAccountByType429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType500Error1(ApiV1SocialAccountByType500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType502Error1(ApiV1SocialAccountByType502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType503Error1(ApiV1SocialAccountByType503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType503Error1>.Some(value),
            default,
            default);

    private static SocialAccountGetByTypeError AsApiV1SocialAccountByType504Error1(ApiV1SocialAccountByType504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountByType504Error1>.Some(value),
            default);

    private static SocialAccountGetByTypeError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountByType400Error1([NotNullWhen(true)] out ApiV1SocialAccountByType400Error1? value) =>
        _apiV1SocialAccountByType400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType401Error1([NotNullWhen(true)] out ApiV1SocialAccountByType401Error1? value) =>
        _apiV1SocialAccountByType401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType403Error1([NotNullWhen(true)] out ApiV1SocialAccountByType403Error1? value) =>
        _apiV1SocialAccountByType403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType404Error1([NotNullWhen(true)] out ApiV1SocialAccountByType404Error1? value) =>
        _apiV1SocialAccountByType404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType429Error1([NotNullWhen(true)] out ApiV1SocialAccountByType429Error1? value) =>
        _apiV1SocialAccountByType429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType500Error1([NotNullWhen(true)] out ApiV1SocialAccountByType500Error1? value) =>
        _apiV1SocialAccountByType500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType502Error1([NotNullWhen(true)] out ApiV1SocialAccountByType502Error1? value) =>
        _apiV1SocialAccountByType502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType503Error1([NotNullWhen(true)] out ApiV1SocialAccountByType503Error1? value) =>
        _apiV1SocialAccountByType503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountByType504Error1([NotNullWhen(true)] out ApiV1SocialAccountByType504Error1? value) =>
        _apiV1SocialAccountByType504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountByType400Error1, TResult> onApiV1SocialAccountByType400Error1,
        Func<ApiV1SocialAccountByType401Error1, TResult> onApiV1SocialAccountByType401Error1,
        Func<ApiV1SocialAccountByType403Error1, TResult> onApiV1SocialAccountByType403Error1,
        Func<ApiV1SocialAccountByType404Error1, TResult> onApiV1SocialAccountByType404Error1,
        Func<ApiV1SocialAccountByType429Error1, TResult> onApiV1SocialAccountByType429Error1,
        Func<ApiV1SocialAccountByType500Error1, TResult> onApiV1SocialAccountByType500Error1,
        Func<ApiV1SocialAccountByType502Error1, TResult> onApiV1SocialAccountByType502Error1,
        Func<ApiV1SocialAccountByType503Error1, TResult> onApiV1SocialAccountByType503Error1,
        Func<ApiV1SocialAccountByType504Error1, TResult> onApiV1SocialAccountByType504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountByType400Error1(
                out var apiV1SocialAccountByType400Error1Value) => onApiV1SocialAccountByType400Error1(
                apiV1SocialAccountByType400Error1Value),
            _ when TryGetApiV1SocialAccountByType401Error1(
                out var apiV1SocialAccountByType401Error1Value) => onApiV1SocialAccountByType401Error1(
                apiV1SocialAccountByType401Error1Value),
            _ when TryGetApiV1SocialAccountByType403Error1(
                out var apiV1SocialAccountByType403Error1Value) => onApiV1SocialAccountByType403Error1(
                apiV1SocialAccountByType403Error1Value),
            _ when TryGetApiV1SocialAccountByType404Error1(
                out var apiV1SocialAccountByType404Error1Value) => onApiV1SocialAccountByType404Error1(
                apiV1SocialAccountByType404Error1Value),
            _ when TryGetApiV1SocialAccountByType429Error1(
                out var apiV1SocialAccountByType429Error1Value) => onApiV1SocialAccountByType429Error1(
                apiV1SocialAccountByType429Error1Value),
            _ when TryGetApiV1SocialAccountByType500Error1(
                out var apiV1SocialAccountByType500Error1Value) => onApiV1SocialAccountByType500Error1(
                apiV1SocialAccountByType500Error1Value),
            _ when TryGetApiV1SocialAccountByType502Error1(
                out var apiV1SocialAccountByType502Error1Value) => onApiV1SocialAccountByType502Error1(
                apiV1SocialAccountByType502Error1Value),
            _ when TryGetApiV1SocialAccountByType503Error1(
                out var apiV1SocialAccountByType503Error1Value) => onApiV1SocialAccountByType503Error1(
                apiV1SocialAccountByType503Error1Value),
            _ when TryGetApiV1SocialAccountByType504Error1(
                out var apiV1SocialAccountByType504Error1Value) => onApiV1SocialAccountByType504Error1(
                apiV1SocialAccountByType504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountGetByTypeError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountByType400Error1> onApiV1SocialAccountByType400Error1,
        Action<ApiV1SocialAccountByType401Error1> onApiV1SocialAccountByType401Error1,
        Action<ApiV1SocialAccountByType403Error1> onApiV1SocialAccountByType403Error1,
        Action<ApiV1SocialAccountByType404Error1> onApiV1SocialAccountByType404Error1,
        Action<ApiV1SocialAccountByType429Error1> onApiV1SocialAccountByType429Error1,
        Action<ApiV1SocialAccountByType500Error1> onApiV1SocialAccountByType500Error1,
        Action<ApiV1SocialAccountByType502Error1> onApiV1SocialAccountByType502Error1,
        Action<ApiV1SocialAccountByType503Error1> onApiV1SocialAccountByType503Error1,
        Action<ApiV1SocialAccountByType504Error1> onApiV1SocialAccountByType504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountByType400Error1(
            out var apiV1SocialAccountByType400Error1Value)) onApiV1SocialAccountByType400Error1(
            apiV1SocialAccountByType400Error1Value);
        else if (TryGetApiV1SocialAccountByType401Error1(
            out var apiV1SocialAccountByType401Error1Value)) onApiV1SocialAccountByType401Error1(
            apiV1SocialAccountByType401Error1Value);
        else if (TryGetApiV1SocialAccountByType403Error1(
            out var apiV1SocialAccountByType403Error1Value)) onApiV1SocialAccountByType403Error1(
            apiV1SocialAccountByType403Error1Value);
        else if (TryGetApiV1SocialAccountByType404Error1(
            out var apiV1SocialAccountByType404Error1Value)) onApiV1SocialAccountByType404Error1(
            apiV1SocialAccountByType404Error1Value);
        else if (TryGetApiV1SocialAccountByType429Error1(
            out var apiV1SocialAccountByType429Error1Value)) onApiV1SocialAccountByType429Error1(
            apiV1SocialAccountByType429Error1Value);
        else if (TryGetApiV1SocialAccountByType500Error1(
            out var apiV1SocialAccountByType500Error1Value)) onApiV1SocialAccountByType500Error1(
            apiV1SocialAccountByType500Error1Value);
        else if (TryGetApiV1SocialAccountByType502Error1(
            out var apiV1SocialAccountByType502Error1Value)) onApiV1SocialAccountByType502Error1(
            apiV1SocialAccountByType502Error1Value);
        else if (TryGetApiV1SocialAccountByType503Error1(
            out var apiV1SocialAccountByType503Error1Value)) onApiV1SocialAccountByType503Error1(
            apiV1SocialAccountByType503Error1Value);
        else if (TryGetApiV1SocialAccountByType504Error1(
            out var apiV1SocialAccountByType504Error1Value)) onApiV1SocialAccountByType504Error1(
            apiV1SocialAccountByType504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountGetByTypeError)} holds no value.");
    }

    private static Task<SocialAccountGetByTypeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountByType400Error1>().As(AsApiV1SocialAccountByType400Error1),
            401 => response.Json<ApiV1SocialAccountByType401Error1>().As(AsApiV1SocialAccountByType401Error1),
            403 => response.Json<ApiV1SocialAccountByType403Error1>().As(AsApiV1SocialAccountByType403Error1),
            404 => response.Json<ApiV1SocialAccountByType404Error1>().As(AsApiV1SocialAccountByType404Error1),
            429 => response.Json<ApiV1SocialAccountByType429Error1>().As(AsApiV1SocialAccountByType429Error1),
            500 => response.Json<ApiV1SocialAccountByType500Error1>().As(AsApiV1SocialAccountByType500Error1),
            502 => response.Json<ApiV1SocialAccountByType502Error1>().As(AsApiV1SocialAccountByType502Error1),
            503 => response.Json<ApiV1SocialAccountByType503Error1>().As(AsApiV1SocialAccountByType503Error1),
            504 => response.Json<ApiV1SocialAccountByType504Error1>().As(AsApiV1SocialAccountByType504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountGetByTypeError> Response { get; } = new(Create);
}
