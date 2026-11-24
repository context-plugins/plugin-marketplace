using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountProfileRefreshError : ApiError
{
    private readonly Optional<ApiV1SocialAccountProfileRefresh400Error1> _apiV1SocialAccountProfileRefresh400Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh401Error1> _apiV1SocialAccountProfileRefresh401Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh403Error1> _apiV1SocialAccountProfileRefresh403Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh404Error1> _apiV1SocialAccountProfileRefresh404Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh429Error1> _apiV1SocialAccountProfileRefresh429Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh500Error1> _apiV1SocialAccountProfileRefresh500Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh502Error1> _apiV1SocialAccountProfileRefresh502Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh503Error1> _apiV1SocialAccountProfileRefresh503Error1Value;

    private readonly Optional<ApiV1SocialAccountProfileRefresh504Error1> _apiV1SocialAccountProfileRefresh504Error1Value;

    private SocialAccountProfileRefreshError(Optional<ApiV1SocialAccountProfileRefresh400Error1> apiV1SocialAccountProfileRefresh400Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh401Error1> apiV1SocialAccountProfileRefresh401Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh403Error1> apiV1SocialAccountProfileRefresh403Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh404Error1> apiV1SocialAccountProfileRefresh404Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh429Error1> apiV1SocialAccountProfileRefresh429Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh500Error1> apiV1SocialAccountProfileRefresh500Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh502Error1> apiV1SocialAccountProfileRefresh502Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh503Error1> apiV1SocialAccountProfileRefresh503Error1Value,
        Optional<ApiV1SocialAccountProfileRefresh504Error1> apiV1SocialAccountProfileRefresh504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountProfileRefresh400Error1Value = apiV1SocialAccountProfileRefresh400Error1Value;
        _apiV1SocialAccountProfileRefresh401Error1Value = apiV1SocialAccountProfileRefresh401Error1Value;
        _apiV1SocialAccountProfileRefresh403Error1Value = apiV1SocialAccountProfileRefresh403Error1Value;
        _apiV1SocialAccountProfileRefresh404Error1Value = apiV1SocialAccountProfileRefresh404Error1Value;
        _apiV1SocialAccountProfileRefresh429Error1Value = apiV1SocialAccountProfileRefresh429Error1Value;
        _apiV1SocialAccountProfileRefresh500Error1Value = apiV1SocialAccountProfileRefresh500Error1Value;
        _apiV1SocialAccountProfileRefresh502Error1Value = apiV1SocialAccountProfileRefresh502Error1Value;
        _apiV1SocialAccountProfileRefresh503Error1Value = apiV1SocialAccountProfileRefresh503Error1Value;
        _apiV1SocialAccountProfileRefresh504Error1Value = apiV1SocialAccountProfileRefresh504Error1Value;
    }

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh400Error1(ApiV1SocialAccountProfileRefresh400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountProfileRefresh400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh401Error1(ApiV1SocialAccountProfileRefresh401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountProfileRefresh401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh403Error1(ApiV1SocialAccountProfileRefresh403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh404Error1(ApiV1SocialAccountProfileRefresh404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh429Error1(ApiV1SocialAccountProfileRefresh429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh500Error1(ApiV1SocialAccountProfileRefresh500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh502Error1(ApiV1SocialAccountProfileRefresh502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh503Error1(ApiV1SocialAccountProfileRefresh503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh503Error1>.Some(value),
            default,
            default);

    private static SocialAccountProfileRefreshError AsApiV1SocialAccountProfileRefresh504Error1(ApiV1SocialAccountProfileRefresh504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountProfileRefresh504Error1>.Some(value),
            default);

    private static SocialAccountProfileRefreshError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountProfileRefresh400Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh400Error1? value) =>
        _apiV1SocialAccountProfileRefresh400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh401Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh401Error1? value) =>
        _apiV1SocialAccountProfileRefresh401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh403Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh403Error1? value) =>
        _apiV1SocialAccountProfileRefresh403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh404Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh404Error1? value) =>
        _apiV1SocialAccountProfileRefresh404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh429Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh429Error1? value) =>
        _apiV1SocialAccountProfileRefresh429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh500Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh500Error1? value) =>
        _apiV1SocialAccountProfileRefresh500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh502Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh502Error1? value) =>
        _apiV1SocialAccountProfileRefresh502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh503Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh503Error1? value) =>
        _apiV1SocialAccountProfileRefresh503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountProfileRefresh504Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh504Error1? value) =>
        _apiV1SocialAccountProfileRefresh504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountProfileRefresh400Error1, TResult> onApiV1SocialAccountProfileRefresh400Error1,
        Func<ApiV1SocialAccountProfileRefresh401Error1, TResult> onApiV1SocialAccountProfileRefresh401Error1,
        Func<ApiV1SocialAccountProfileRefresh403Error1, TResult> onApiV1SocialAccountProfileRefresh403Error1,
        Func<ApiV1SocialAccountProfileRefresh404Error1, TResult> onApiV1SocialAccountProfileRefresh404Error1,
        Func<ApiV1SocialAccountProfileRefresh429Error1, TResult> onApiV1SocialAccountProfileRefresh429Error1,
        Func<ApiV1SocialAccountProfileRefresh500Error1, TResult> onApiV1SocialAccountProfileRefresh500Error1,
        Func<ApiV1SocialAccountProfileRefresh502Error1, TResult> onApiV1SocialAccountProfileRefresh502Error1,
        Func<ApiV1SocialAccountProfileRefresh503Error1, TResult> onApiV1SocialAccountProfileRefresh503Error1,
        Func<ApiV1SocialAccountProfileRefresh504Error1, TResult> onApiV1SocialAccountProfileRefresh504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountProfileRefresh400Error1(
                out var apiV1SocialAccountProfileRefresh400Error1Value) => onApiV1SocialAccountProfileRefresh400Error1(
                apiV1SocialAccountProfileRefresh400Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh401Error1(
                out var apiV1SocialAccountProfileRefresh401Error1Value) => onApiV1SocialAccountProfileRefresh401Error1(
                apiV1SocialAccountProfileRefresh401Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh403Error1(
                out var apiV1SocialAccountProfileRefresh403Error1Value) => onApiV1SocialAccountProfileRefresh403Error1(
                apiV1SocialAccountProfileRefresh403Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh404Error1(
                out var apiV1SocialAccountProfileRefresh404Error1Value) => onApiV1SocialAccountProfileRefresh404Error1(
                apiV1SocialAccountProfileRefresh404Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh429Error1(
                out var apiV1SocialAccountProfileRefresh429Error1Value) => onApiV1SocialAccountProfileRefresh429Error1(
                apiV1SocialAccountProfileRefresh429Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh500Error1(
                out var apiV1SocialAccountProfileRefresh500Error1Value) => onApiV1SocialAccountProfileRefresh500Error1(
                apiV1SocialAccountProfileRefresh500Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh502Error1(
                out var apiV1SocialAccountProfileRefresh502Error1Value) => onApiV1SocialAccountProfileRefresh502Error1(
                apiV1SocialAccountProfileRefresh502Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh503Error1(
                out var apiV1SocialAccountProfileRefresh503Error1Value) => onApiV1SocialAccountProfileRefresh503Error1(
                apiV1SocialAccountProfileRefresh503Error1Value),
            _ when TryGetApiV1SocialAccountProfileRefresh504Error1(
                out var apiV1SocialAccountProfileRefresh504Error1Value) => onApiV1SocialAccountProfileRefresh504Error1(
                apiV1SocialAccountProfileRefresh504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountProfileRefreshError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountProfileRefresh400Error1> onApiV1SocialAccountProfileRefresh400Error1,
        Action<ApiV1SocialAccountProfileRefresh401Error1> onApiV1SocialAccountProfileRefresh401Error1,
        Action<ApiV1SocialAccountProfileRefresh403Error1> onApiV1SocialAccountProfileRefresh403Error1,
        Action<ApiV1SocialAccountProfileRefresh404Error1> onApiV1SocialAccountProfileRefresh404Error1,
        Action<ApiV1SocialAccountProfileRefresh429Error1> onApiV1SocialAccountProfileRefresh429Error1,
        Action<ApiV1SocialAccountProfileRefresh500Error1> onApiV1SocialAccountProfileRefresh500Error1,
        Action<ApiV1SocialAccountProfileRefresh502Error1> onApiV1SocialAccountProfileRefresh502Error1,
        Action<ApiV1SocialAccountProfileRefresh503Error1> onApiV1SocialAccountProfileRefresh503Error1,
        Action<ApiV1SocialAccountProfileRefresh504Error1> onApiV1SocialAccountProfileRefresh504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountProfileRefresh400Error1(
            out var apiV1SocialAccountProfileRefresh400Error1Value)) onApiV1SocialAccountProfileRefresh400Error1(
            apiV1SocialAccountProfileRefresh400Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh401Error1(
            out var apiV1SocialAccountProfileRefresh401Error1Value)) onApiV1SocialAccountProfileRefresh401Error1(
            apiV1SocialAccountProfileRefresh401Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh403Error1(
            out var apiV1SocialAccountProfileRefresh403Error1Value)) onApiV1SocialAccountProfileRefresh403Error1(
            apiV1SocialAccountProfileRefresh403Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh404Error1(
            out var apiV1SocialAccountProfileRefresh404Error1Value)) onApiV1SocialAccountProfileRefresh404Error1(
            apiV1SocialAccountProfileRefresh404Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh429Error1(
            out var apiV1SocialAccountProfileRefresh429Error1Value)) onApiV1SocialAccountProfileRefresh429Error1(
            apiV1SocialAccountProfileRefresh429Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh500Error1(
            out var apiV1SocialAccountProfileRefresh500Error1Value)) onApiV1SocialAccountProfileRefresh500Error1(
            apiV1SocialAccountProfileRefresh500Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh502Error1(
            out var apiV1SocialAccountProfileRefresh502Error1Value)) onApiV1SocialAccountProfileRefresh502Error1(
            apiV1SocialAccountProfileRefresh502Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh503Error1(
            out var apiV1SocialAccountProfileRefresh503Error1Value)) onApiV1SocialAccountProfileRefresh503Error1(
            apiV1SocialAccountProfileRefresh503Error1Value);
        else if (TryGetApiV1SocialAccountProfileRefresh504Error1(
            out var apiV1SocialAccountProfileRefresh504Error1Value)) onApiV1SocialAccountProfileRefresh504Error1(
            apiV1SocialAccountProfileRefresh504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountProfileRefreshError)} holds no value.");
    }

    private static Task<SocialAccountProfileRefreshError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountProfileRefresh400Error1>().As(
                AsApiV1SocialAccountProfileRefresh400Error1),
            401 => response.Json<ApiV1SocialAccountProfileRefresh401Error1>().As(
                AsApiV1SocialAccountProfileRefresh401Error1),
            403 => response.Json<ApiV1SocialAccountProfileRefresh403Error1>().As(
                AsApiV1SocialAccountProfileRefresh403Error1),
            404 => response.Json<ApiV1SocialAccountProfileRefresh404Error1>().As(
                AsApiV1SocialAccountProfileRefresh404Error1),
            429 => response.Json<ApiV1SocialAccountProfileRefresh429Error1>().As(
                AsApiV1SocialAccountProfileRefresh429Error1),
            500 => response.Json<ApiV1SocialAccountProfileRefresh500Error1>().As(
                AsApiV1SocialAccountProfileRefresh500Error1),
            502 => response.Json<ApiV1SocialAccountProfileRefresh502Error1>().As(
                AsApiV1SocialAccountProfileRefresh502Error1),
            503 => response.Json<ApiV1SocialAccountProfileRefresh503Error1>().As(
                AsApiV1SocialAccountProfileRefresh503Error1),
            504 => response.Json<ApiV1SocialAccountProfileRefresh504Error1>().As(
                AsApiV1SocialAccountProfileRefresh504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountProfileRefreshError> Response { get; } = new(Create);
}
