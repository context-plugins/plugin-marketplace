using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountConnectError : ApiError
{
    private readonly Optional<ApiV1SocialAccountConnect400Error1> _apiV1SocialAccountConnect400Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect401Error1> _apiV1SocialAccountConnect401Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect403Error1> _apiV1SocialAccountConnect403Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect404Error1> _apiV1SocialAccountConnect404Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect429Error1> _apiV1SocialAccountConnect429Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect500Error1> _apiV1SocialAccountConnect500Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect502Error1> _apiV1SocialAccountConnect502Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect503Error1> _apiV1SocialAccountConnect503Error1Value;

    private readonly Optional<ApiV1SocialAccountConnect504Error1> _apiV1SocialAccountConnect504Error1Value;

    private SocialAccountConnectError(Optional<ApiV1SocialAccountConnect400Error1> apiV1SocialAccountConnect400Error1Value,
        Optional<ApiV1SocialAccountConnect401Error1> apiV1SocialAccountConnect401Error1Value,
        Optional<ApiV1SocialAccountConnect403Error1> apiV1SocialAccountConnect403Error1Value,
        Optional<ApiV1SocialAccountConnect404Error1> apiV1SocialAccountConnect404Error1Value,
        Optional<ApiV1SocialAccountConnect429Error1> apiV1SocialAccountConnect429Error1Value,
        Optional<ApiV1SocialAccountConnect500Error1> apiV1SocialAccountConnect500Error1Value,
        Optional<ApiV1SocialAccountConnect502Error1> apiV1SocialAccountConnect502Error1Value,
        Optional<ApiV1SocialAccountConnect503Error1> apiV1SocialAccountConnect503Error1Value,
        Optional<ApiV1SocialAccountConnect504Error1> apiV1SocialAccountConnect504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountConnect400Error1Value = apiV1SocialAccountConnect400Error1Value;
        _apiV1SocialAccountConnect401Error1Value = apiV1SocialAccountConnect401Error1Value;
        _apiV1SocialAccountConnect403Error1Value = apiV1SocialAccountConnect403Error1Value;
        _apiV1SocialAccountConnect404Error1Value = apiV1SocialAccountConnect404Error1Value;
        _apiV1SocialAccountConnect429Error1Value = apiV1SocialAccountConnect429Error1Value;
        _apiV1SocialAccountConnect500Error1Value = apiV1SocialAccountConnect500Error1Value;
        _apiV1SocialAccountConnect502Error1Value = apiV1SocialAccountConnect502Error1Value;
        _apiV1SocialAccountConnect503Error1Value = apiV1SocialAccountConnect503Error1Value;
        _apiV1SocialAccountConnect504Error1Value = apiV1SocialAccountConnect504Error1Value;
    }

    private static SocialAccountConnectError AsApiV1SocialAccountConnect400Error1(ApiV1SocialAccountConnect400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountConnect400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect401Error1(ApiV1SocialAccountConnect401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountConnect401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect403Error1(ApiV1SocialAccountConnect403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountConnect403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect404Error1(ApiV1SocialAccountConnect404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect429Error1(ApiV1SocialAccountConnect429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect500Error1(ApiV1SocialAccountConnect500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect502Error1(ApiV1SocialAccountConnect502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect503Error1(ApiV1SocialAccountConnect503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect503Error1>.Some(value),
            default,
            default);

    private static SocialAccountConnectError AsApiV1SocialAccountConnect504Error1(ApiV1SocialAccountConnect504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountConnect504Error1>.Some(value),
            default);

    private static SocialAccountConnectError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountConnect400Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect400Error1? value) =>
        _apiV1SocialAccountConnect400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect401Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect401Error1? value) =>
        _apiV1SocialAccountConnect401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect403Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect403Error1? value) =>
        _apiV1SocialAccountConnect403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect404Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect404Error1? value) =>
        _apiV1SocialAccountConnect404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect429Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect429Error1? value) =>
        _apiV1SocialAccountConnect429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect500Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect500Error1? value) =>
        _apiV1SocialAccountConnect500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect502Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect502Error1? value) =>
        _apiV1SocialAccountConnect502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect503Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect503Error1? value) =>
        _apiV1SocialAccountConnect503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountConnect504Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect504Error1? value) =>
        _apiV1SocialAccountConnect504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountConnect400Error1, TResult> onApiV1SocialAccountConnect400Error1,
        Func<ApiV1SocialAccountConnect401Error1, TResult> onApiV1SocialAccountConnect401Error1,
        Func<ApiV1SocialAccountConnect403Error1, TResult> onApiV1SocialAccountConnect403Error1,
        Func<ApiV1SocialAccountConnect404Error1, TResult> onApiV1SocialAccountConnect404Error1,
        Func<ApiV1SocialAccountConnect429Error1, TResult> onApiV1SocialAccountConnect429Error1,
        Func<ApiV1SocialAccountConnect500Error1, TResult> onApiV1SocialAccountConnect500Error1,
        Func<ApiV1SocialAccountConnect502Error1, TResult> onApiV1SocialAccountConnect502Error1,
        Func<ApiV1SocialAccountConnect503Error1, TResult> onApiV1SocialAccountConnect503Error1,
        Func<ApiV1SocialAccountConnect504Error1, TResult> onApiV1SocialAccountConnect504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountConnect400Error1(
                out var apiV1SocialAccountConnect400Error1Value) => onApiV1SocialAccountConnect400Error1(
                apiV1SocialAccountConnect400Error1Value),
            _ when TryGetApiV1SocialAccountConnect401Error1(
                out var apiV1SocialAccountConnect401Error1Value) => onApiV1SocialAccountConnect401Error1(
                apiV1SocialAccountConnect401Error1Value),
            _ when TryGetApiV1SocialAccountConnect403Error1(
                out var apiV1SocialAccountConnect403Error1Value) => onApiV1SocialAccountConnect403Error1(
                apiV1SocialAccountConnect403Error1Value),
            _ when TryGetApiV1SocialAccountConnect404Error1(
                out var apiV1SocialAccountConnect404Error1Value) => onApiV1SocialAccountConnect404Error1(
                apiV1SocialAccountConnect404Error1Value),
            _ when TryGetApiV1SocialAccountConnect429Error1(
                out var apiV1SocialAccountConnect429Error1Value) => onApiV1SocialAccountConnect429Error1(
                apiV1SocialAccountConnect429Error1Value),
            _ when TryGetApiV1SocialAccountConnect500Error1(
                out var apiV1SocialAccountConnect500Error1Value) => onApiV1SocialAccountConnect500Error1(
                apiV1SocialAccountConnect500Error1Value),
            _ when TryGetApiV1SocialAccountConnect502Error1(
                out var apiV1SocialAccountConnect502Error1Value) => onApiV1SocialAccountConnect502Error1(
                apiV1SocialAccountConnect502Error1Value),
            _ when TryGetApiV1SocialAccountConnect503Error1(
                out var apiV1SocialAccountConnect503Error1Value) => onApiV1SocialAccountConnect503Error1(
                apiV1SocialAccountConnect503Error1Value),
            _ when TryGetApiV1SocialAccountConnect504Error1(
                out var apiV1SocialAccountConnect504Error1Value) => onApiV1SocialAccountConnect504Error1(
                apiV1SocialAccountConnect504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountConnectError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountConnect400Error1> onApiV1SocialAccountConnect400Error1,
        Action<ApiV1SocialAccountConnect401Error1> onApiV1SocialAccountConnect401Error1,
        Action<ApiV1SocialAccountConnect403Error1> onApiV1SocialAccountConnect403Error1,
        Action<ApiV1SocialAccountConnect404Error1> onApiV1SocialAccountConnect404Error1,
        Action<ApiV1SocialAccountConnect429Error1> onApiV1SocialAccountConnect429Error1,
        Action<ApiV1SocialAccountConnect500Error1> onApiV1SocialAccountConnect500Error1,
        Action<ApiV1SocialAccountConnect502Error1> onApiV1SocialAccountConnect502Error1,
        Action<ApiV1SocialAccountConnect503Error1> onApiV1SocialAccountConnect503Error1,
        Action<ApiV1SocialAccountConnect504Error1> onApiV1SocialAccountConnect504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountConnect400Error1(
            out var apiV1SocialAccountConnect400Error1Value)) onApiV1SocialAccountConnect400Error1(
            apiV1SocialAccountConnect400Error1Value);
        else if (TryGetApiV1SocialAccountConnect401Error1(
            out var apiV1SocialAccountConnect401Error1Value)) onApiV1SocialAccountConnect401Error1(
            apiV1SocialAccountConnect401Error1Value);
        else if (TryGetApiV1SocialAccountConnect403Error1(
            out var apiV1SocialAccountConnect403Error1Value)) onApiV1SocialAccountConnect403Error1(
            apiV1SocialAccountConnect403Error1Value);
        else if (TryGetApiV1SocialAccountConnect404Error1(
            out var apiV1SocialAccountConnect404Error1Value)) onApiV1SocialAccountConnect404Error1(
            apiV1SocialAccountConnect404Error1Value);
        else if (TryGetApiV1SocialAccountConnect429Error1(
            out var apiV1SocialAccountConnect429Error1Value)) onApiV1SocialAccountConnect429Error1(
            apiV1SocialAccountConnect429Error1Value);
        else if (TryGetApiV1SocialAccountConnect500Error1(
            out var apiV1SocialAccountConnect500Error1Value)) onApiV1SocialAccountConnect500Error1(
            apiV1SocialAccountConnect500Error1Value);
        else if (TryGetApiV1SocialAccountConnect502Error1(
            out var apiV1SocialAccountConnect502Error1Value)) onApiV1SocialAccountConnect502Error1(
            apiV1SocialAccountConnect502Error1Value);
        else if (TryGetApiV1SocialAccountConnect503Error1(
            out var apiV1SocialAccountConnect503Error1Value)) onApiV1SocialAccountConnect503Error1(
            apiV1SocialAccountConnect503Error1Value);
        else if (TryGetApiV1SocialAccountConnect504Error1(
            out var apiV1SocialAccountConnect504Error1Value)) onApiV1SocialAccountConnect504Error1(
            apiV1SocialAccountConnect504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountConnectError)} holds no value.");
    }

    private static Task<SocialAccountConnectError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountConnect400Error1>().As(AsApiV1SocialAccountConnect400Error1),
            401 => response.Json<ApiV1SocialAccountConnect401Error1>().As(AsApiV1SocialAccountConnect401Error1),
            403 => response.Json<ApiV1SocialAccountConnect403Error1>().As(AsApiV1SocialAccountConnect403Error1),
            404 => response.Json<ApiV1SocialAccountConnect404Error1>().As(AsApiV1SocialAccountConnect404Error1),
            429 => response.Json<ApiV1SocialAccountConnect429Error1>().As(AsApiV1SocialAccountConnect429Error1),
            500 => response.Json<ApiV1SocialAccountConnect500Error1>().As(AsApiV1SocialAccountConnect500Error1),
            502 => response.Json<ApiV1SocialAccountConnect502Error1>().As(AsApiV1SocialAccountConnect502Error1),
            503 => response.Json<ApiV1SocialAccountConnect503Error1>().As(AsApiV1SocialAccountConnect503Error1),
            504 => response.Json<ApiV1SocialAccountConnect504Error1>().As(AsApiV1SocialAccountConnect504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountConnectError> Response { get; } = new(Create);
}
