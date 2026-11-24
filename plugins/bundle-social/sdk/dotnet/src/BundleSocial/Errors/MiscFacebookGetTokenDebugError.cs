using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookGetTokenDebugError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookTokenDebug400Error1> _apiV1MiscFacebookTokenDebug400Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug401Error1> _apiV1MiscFacebookTokenDebug401Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug403Error1> _apiV1MiscFacebookTokenDebug403Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug404Error1> _apiV1MiscFacebookTokenDebug404Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug429Error1> _apiV1MiscFacebookTokenDebug429Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug500Error1> _apiV1MiscFacebookTokenDebug500Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug502Error1> _apiV1MiscFacebookTokenDebug502Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug503Error1> _apiV1MiscFacebookTokenDebug503Error1Value;

    private readonly Optional<ApiV1MiscFacebookTokenDebug504Error1> _apiV1MiscFacebookTokenDebug504Error1Value;

    private MiscFacebookGetTokenDebugError(Optional<ApiV1MiscFacebookTokenDebug400Error1> apiV1MiscFacebookTokenDebug400Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug401Error1> apiV1MiscFacebookTokenDebug401Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug403Error1> apiV1MiscFacebookTokenDebug403Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug404Error1> apiV1MiscFacebookTokenDebug404Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug429Error1> apiV1MiscFacebookTokenDebug429Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug500Error1> apiV1MiscFacebookTokenDebug500Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug502Error1> apiV1MiscFacebookTokenDebug502Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug503Error1> apiV1MiscFacebookTokenDebug503Error1Value,
        Optional<ApiV1MiscFacebookTokenDebug504Error1> apiV1MiscFacebookTokenDebug504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookTokenDebug400Error1Value = apiV1MiscFacebookTokenDebug400Error1Value;
        _apiV1MiscFacebookTokenDebug401Error1Value = apiV1MiscFacebookTokenDebug401Error1Value;
        _apiV1MiscFacebookTokenDebug403Error1Value = apiV1MiscFacebookTokenDebug403Error1Value;
        _apiV1MiscFacebookTokenDebug404Error1Value = apiV1MiscFacebookTokenDebug404Error1Value;
        _apiV1MiscFacebookTokenDebug429Error1Value = apiV1MiscFacebookTokenDebug429Error1Value;
        _apiV1MiscFacebookTokenDebug500Error1Value = apiV1MiscFacebookTokenDebug500Error1Value;
        _apiV1MiscFacebookTokenDebug502Error1Value = apiV1MiscFacebookTokenDebug502Error1Value;
        _apiV1MiscFacebookTokenDebug503Error1Value = apiV1MiscFacebookTokenDebug503Error1Value;
        _apiV1MiscFacebookTokenDebug504Error1Value = apiV1MiscFacebookTokenDebug504Error1Value;
    }

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug400Error1(ApiV1MiscFacebookTokenDebug400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookTokenDebug400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug401Error1(ApiV1MiscFacebookTokenDebug401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookTokenDebug401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug403Error1(ApiV1MiscFacebookTokenDebug403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug404Error1(ApiV1MiscFacebookTokenDebug404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug429Error1(ApiV1MiscFacebookTokenDebug429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug500Error1(ApiV1MiscFacebookTokenDebug500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug502Error1(ApiV1MiscFacebookTokenDebug502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug503Error1(ApiV1MiscFacebookTokenDebug503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookGetTokenDebugError AsApiV1MiscFacebookTokenDebug504Error1(ApiV1MiscFacebookTokenDebug504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTokenDebug504Error1>.Some(value),
            default);

    private static MiscFacebookGetTokenDebugError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookTokenDebug400Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug400Error1? value) =>
        _apiV1MiscFacebookTokenDebug400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug401Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug401Error1? value) =>
        _apiV1MiscFacebookTokenDebug401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug403Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug403Error1? value) =>
        _apiV1MiscFacebookTokenDebug403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug404Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug404Error1? value) =>
        _apiV1MiscFacebookTokenDebug404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug429Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug429Error1? value) =>
        _apiV1MiscFacebookTokenDebug429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug500Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug500Error1? value) =>
        _apiV1MiscFacebookTokenDebug500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug502Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug502Error1? value) =>
        _apiV1MiscFacebookTokenDebug502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug503Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug503Error1? value) =>
        _apiV1MiscFacebookTokenDebug503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTokenDebug504Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug504Error1? value) =>
        _apiV1MiscFacebookTokenDebug504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookTokenDebug400Error1, TResult> onApiV1MiscFacebookTokenDebug400Error1,
        Func<ApiV1MiscFacebookTokenDebug401Error1, TResult> onApiV1MiscFacebookTokenDebug401Error1,
        Func<ApiV1MiscFacebookTokenDebug403Error1, TResult> onApiV1MiscFacebookTokenDebug403Error1,
        Func<ApiV1MiscFacebookTokenDebug404Error1, TResult> onApiV1MiscFacebookTokenDebug404Error1,
        Func<ApiV1MiscFacebookTokenDebug429Error1, TResult> onApiV1MiscFacebookTokenDebug429Error1,
        Func<ApiV1MiscFacebookTokenDebug500Error1, TResult> onApiV1MiscFacebookTokenDebug500Error1,
        Func<ApiV1MiscFacebookTokenDebug502Error1, TResult> onApiV1MiscFacebookTokenDebug502Error1,
        Func<ApiV1MiscFacebookTokenDebug503Error1, TResult> onApiV1MiscFacebookTokenDebug503Error1,
        Func<ApiV1MiscFacebookTokenDebug504Error1, TResult> onApiV1MiscFacebookTokenDebug504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookTokenDebug400Error1(
                out var apiV1MiscFacebookTokenDebug400Error1Value) => onApiV1MiscFacebookTokenDebug400Error1(
                apiV1MiscFacebookTokenDebug400Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug401Error1(
                out var apiV1MiscFacebookTokenDebug401Error1Value) => onApiV1MiscFacebookTokenDebug401Error1(
                apiV1MiscFacebookTokenDebug401Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug403Error1(
                out var apiV1MiscFacebookTokenDebug403Error1Value) => onApiV1MiscFacebookTokenDebug403Error1(
                apiV1MiscFacebookTokenDebug403Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug404Error1(
                out var apiV1MiscFacebookTokenDebug404Error1Value) => onApiV1MiscFacebookTokenDebug404Error1(
                apiV1MiscFacebookTokenDebug404Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug429Error1(
                out var apiV1MiscFacebookTokenDebug429Error1Value) => onApiV1MiscFacebookTokenDebug429Error1(
                apiV1MiscFacebookTokenDebug429Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug500Error1(
                out var apiV1MiscFacebookTokenDebug500Error1Value) => onApiV1MiscFacebookTokenDebug500Error1(
                apiV1MiscFacebookTokenDebug500Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug502Error1(
                out var apiV1MiscFacebookTokenDebug502Error1Value) => onApiV1MiscFacebookTokenDebug502Error1(
                apiV1MiscFacebookTokenDebug502Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug503Error1(
                out var apiV1MiscFacebookTokenDebug503Error1Value) => onApiV1MiscFacebookTokenDebug503Error1(
                apiV1MiscFacebookTokenDebug503Error1Value),
            _ when TryGetApiV1MiscFacebookTokenDebug504Error1(
                out var apiV1MiscFacebookTokenDebug504Error1Value) => onApiV1MiscFacebookTokenDebug504Error1(
                apiV1MiscFacebookTokenDebug504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookGetTokenDebugError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookTokenDebug400Error1> onApiV1MiscFacebookTokenDebug400Error1,
        Action<ApiV1MiscFacebookTokenDebug401Error1> onApiV1MiscFacebookTokenDebug401Error1,
        Action<ApiV1MiscFacebookTokenDebug403Error1> onApiV1MiscFacebookTokenDebug403Error1,
        Action<ApiV1MiscFacebookTokenDebug404Error1> onApiV1MiscFacebookTokenDebug404Error1,
        Action<ApiV1MiscFacebookTokenDebug429Error1> onApiV1MiscFacebookTokenDebug429Error1,
        Action<ApiV1MiscFacebookTokenDebug500Error1> onApiV1MiscFacebookTokenDebug500Error1,
        Action<ApiV1MiscFacebookTokenDebug502Error1> onApiV1MiscFacebookTokenDebug502Error1,
        Action<ApiV1MiscFacebookTokenDebug503Error1> onApiV1MiscFacebookTokenDebug503Error1,
        Action<ApiV1MiscFacebookTokenDebug504Error1> onApiV1MiscFacebookTokenDebug504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookTokenDebug400Error1(
            out var apiV1MiscFacebookTokenDebug400Error1Value)) onApiV1MiscFacebookTokenDebug400Error1(
            apiV1MiscFacebookTokenDebug400Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug401Error1(
            out var apiV1MiscFacebookTokenDebug401Error1Value)) onApiV1MiscFacebookTokenDebug401Error1(
            apiV1MiscFacebookTokenDebug401Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug403Error1(
            out var apiV1MiscFacebookTokenDebug403Error1Value)) onApiV1MiscFacebookTokenDebug403Error1(
            apiV1MiscFacebookTokenDebug403Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug404Error1(
            out var apiV1MiscFacebookTokenDebug404Error1Value)) onApiV1MiscFacebookTokenDebug404Error1(
            apiV1MiscFacebookTokenDebug404Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug429Error1(
            out var apiV1MiscFacebookTokenDebug429Error1Value)) onApiV1MiscFacebookTokenDebug429Error1(
            apiV1MiscFacebookTokenDebug429Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug500Error1(
            out var apiV1MiscFacebookTokenDebug500Error1Value)) onApiV1MiscFacebookTokenDebug500Error1(
            apiV1MiscFacebookTokenDebug500Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug502Error1(
            out var apiV1MiscFacebookTokenDebug502Error1Value)) onApiV1MiscFacebookTokenDebug502Error1(
            apiV1MiscFacebookTokenDebug502Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug503Error1(
            out var apiV1MiscFacebookTokenDebug503Error1Value)) onApiV1MiscFacebookTokenDebug503Error1(
            apiV1MiscFacebookTokenDebug503Error1Value);
        else if (TryGetApiV1MiscFacebookTokenDebug504Error1(
            out var apiV1MiscFacebookTokenDebug504Error1Value)) onApiV1MiscFacebookTokenDebug504Error1(
            apiV1MiscFacebookTokenDebug504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookGetTokenDebugError)} holds no value.");
    }

    private static Task<MiscFacebookGetTokenDebugError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookTokenDebug400Error1>().As(AsApiV1MiscFacebookTokenDebug400Error1),
            401 => response.Json<ApiV1MiscFacebookTokenDebug401Error1>().As(AsApiV1MiscFacebookTokenDebug401Error1),
            403 => response.Json<ApiV1MiscFacebookTokenDebug403Error1>().As(AsApiV1MiscFacebookTokenDebug403Error1),
            404 => response.Json<ApiV1MiscFacebookTokenDebug404Error1>().As(AsApiV1MiscFacebookTokenDebug404Error1),
            429 => response.Json<ApiV1MiscFacebookTokenDebug429Error1>().As(AsApiV1MiscFacebookTokenDebug429Error1),
            500 => response.Json<ApiV1MiscFacebookTokenDebug500Error1>().As(AsApiV1MiscFacebookTokenDebug500Error1),
            502 => response.Json<ApiV1MiscFacebookTokenDebug502Error1>().As(AsApiV1MiscFacebookTokenDebug502Error1),
            503 => response.Json<ApiV1MiscFacebookTokenDebug503Error1>().As(AsApiV1MiscFacebookTokenDebug503Error1),
            504 => response.Json<ApiV1MiscFacebookTokenDebug504Error1>().As(AsApiV1MiscFacebookTokenDebug504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookGetTokenDebugError> Response { get; } = new(Create);
}
