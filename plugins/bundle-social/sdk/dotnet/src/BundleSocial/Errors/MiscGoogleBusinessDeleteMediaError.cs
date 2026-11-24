using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessDeleteMediaError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessMedia400Error1> _apiV1MiscGoogleBusinessMedia400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia401Error1> _apiV1MiscGoogleBusinessMedia401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia403Error1> _apiV1MiscGoogleBusinessMedia403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia404Error1> _apiV1MiscGoogleBusinessMedia404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia429Error1> _apiV1MiscGoogleBusinessMedia429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia500Error1> _apiV1MiscGoogleBusinessMedia500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia502Error1> _apiV1MiscGoogleBusinessMedia502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia503Error1> _apiV1MiscGoogleBusinessMedia503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessMedia504Error1> _apiV1MiscGoogleBusinessMedia504Error1Value;

    private MiscGoogleBusinessDeleteMediaError(Optional<ApiV1MiscGoogleBusinessMedia400Error1> apiV1MiscGoogleBusinessMedia400Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia401Error1> apiV1MiscGoogleBusinessMedia401Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia403Error1> apiV1MiscGoogleBusinessMedia403Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia404Error1> apiV1MiscGoogleBusinessMedia404Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia429Error1> apiV1MiscGoogleBusinessMedia429Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia500Error1> apiV1MiscGoogleBusinessMedia500Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia502Error1> apiV1MiscGoogleBusinessMedia502Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia503Error1> apiV1MiscGoogleBusinessMedia503Error1Value,
        Optional<ApiV1MiscGoogleBusinessMedia504Error1> apiV1MiscGoogleBusinessMedia504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessMedia400Error1Value = apiV1MiscGoogleBusinessMedia400Error1Value;
        _apiV1MiscGoogleBusinessMedia401Error1Value = apiV1MiscGoogleBusinessMedia401Error1Value;
        _apiV1MiscGoogleBusinessMedia403Error1Value = apiV1MiscGoogleBusinessMedia403Error1Value;
        _apiV1MiscGoogleBusinessMedia404Error1Value = apiV1MiscGoogleBusinessMedia404Error1Value;
        _apiV1MiscGoogleBusinessMedia429Error1Value = apiV1MiscGoogleBusinessMedia429Error1Value;
        _apiV1MiscGoogleBusinessMedia500Error1Value = apiV1MiscGoogleBusinessMedia500Error1Value;
        _apiV1MiscGoogleBusinessMedia502Error1Value = apiV1MiscGoogleBusinessMedia502Error1Value;
        _apiV1MiscGoogleBusinessMedia503Error1Value = apiV1MiscGoogleBusinessMedia503Error1Value;
        _apiV1MiscGoogleBusinessMedia504Error1Value = apiV1MiscGoogleBusinessMedia504Error1Value;
    }

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia400Error1(ApiV1MiscGoogleBusinessMedia400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessMedia400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia401Error1(ApiV1MiscGoogleBusinessMedia401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessMedia401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia403Error1(ApiV1MiscGoogleBusinessMedia403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia404Error1(ApiV1MiscGoogleBusinessMedia404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia429Error1(ApiV1MiscGoogleBusinessMedia429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia500Error1(ApiV1MiscGoogleBusinessMedia500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia502Error1(ApiV1MiscGoogleBusinessMedia502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia503Error1(ApiV1MiscGoogleBusinessMedia503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessDeleteMediaError AsApiV1MiscGoogleBusinessMedia504Error1(ApiV1MiscGoogleBusinessMedia504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessMedia504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessDeleteMediaError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessMedia400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia400Error1? value) =>
        _apiV1MiscGoogleBusinessMedia400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia401Error1? value) =>
        _apiV1MiscGoogleBusinessMedia401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia403Error1? value) =>
        _apiV1MiscGoogleBusinessMedia403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia404Error1? value) =>
        _apiV1MiscGoogleBusinessMedia404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia429Error1? value) =>
        _apiV1MiscGoogleBusinessMedia429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia500Error1? value) =>
        _apiV1MiscGoogleBusinessMedia500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia502Error1? value) =>
        _apiV1MiscGoogleBusinessMedia502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia503Error1? value) =>
        _apiV1MiscGoogleBusinessMedia503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessMedia504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia504Error1? value) =>
        _apiV1MiscGoogleBusinessMedia504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessMedia400Error1, TResult> onApiV1MiscGoogleBusinessMedia400Error1,
        Func<ApiV1MiscGoogleBusinessMedia401Error1, TResult> onApiV1MiscGoogleBusinessMedia401Error1,
        Func<ApiV1MiscGoogleBusinessMedia403Error1, TResult> onApiV1MiscGoogleBusinessMedia403Error1,
        Func<ApiV1MiscGoogleBusinessMedia404Error1, TResult> onApiV1MiscGoogleBusinessMedia404Error1,
        Func<ApiV1MiscGoogleBusinessMedia429Error1, TResult> onApiV1MiscGoogleBusinessMedia429Error1,
        Func<ApiV1MiscGoogleBusinessMedia500Error1, TResult> onApiV1MiscGoogleBusinessMedia500Error1,
        Func<ApiV1MiscGoogleBusinessMedia502Error1, TResult> onApiV1MiscGoogleBusinessMedia502Error1,
        Func<ApiV1MiscGoogleBusinessMedia503Error1, TResult> onApiV1MiscGoogleBusinessMedia503Error1,
        Func<ApiV1MiscGoogleBusinessMedia504Error1, TResult> onApiV1MiscGoogleBusinessMedia504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessMedia400Error1(
                out var apiV1MiscGoogleBusinessMedia400Error1Value) => onApiV1MiscGoogleBusinessMedia400Error1(
                apiV1MiscGoogleBusinessMedia400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia401Error1(
                out var apiV1MiscGoogleBusinessMedia401Error1Value) => onApiV1MiscGoogleBusinessMedia401Error1(
                apiV1MiscGoogleBusinessMedia401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia403Error1(
                out var apiV1MiscGoogleBusinessMedia403Error1Value) => onApiV1MiscGoogleBusinessMedia403Error1(
                apiV1MiscGoogleBusinessMedia403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia404Error1(
                out var apiV1MiscGoogleBusinessMedia404Error1Value) => onApiV1MiscGoogleBusinessMedia404Error1(
                apiV1MiscGoogleBusinessMedia404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia429Error1(
                out var apiV1MiscGoogleBusinessMedia429Error1Value) => onApiV1MiscGoogleBusinessMedia429Error1(
                apiV1MiscGoogleBusinessMedia429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia500Error1(
                out var apiV1MiscGoogleBusinessMedia500Error1Value) => onApiV1MiscGoogleBusinessMedia500Error1(
                apiV1MiscGoogleBusinessMedia500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia502Error1(
                out var apiV1MiscGoogleBusinessMedia502Error1Value) => onApiV1MiscGoogleBusinessMedia502Error1(
                apiV1MiscGoogleBusinessMedia502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia503Error1(
                out var apiV1MiscGoogleBusinessMedia503Error1Value) => onApiV1MiscGoogleBusinessMedia503Error1(
                apiV1MiscGoogleBusinessMedia503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessMedia504Error1(
                out var apiV1MiscGoogleBusinessMedia504Error1Value) => onApiV1MiscGoogleBusinessMedia504Error1(
                apiV1MiscGoogleBusinessMedia504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessDeleteMediaError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessMedia400Error1> onApiV1MiscGoogleBusinessMedia400Error1,
        Action<ApiV1MiscGoogleBusinessMedia401Error1> onApiV1MiscGoogleBusinessMedia401Error1,
        Action<ApiV1MiscGoogleBusinessMedia403Error1> onApiV1MiscGoogleBusinessMedia403Error1,
        Action<ApiV1MiscGoogleBusinessMedia404Error1> onApiV1MiscGoogleBusinessMedia404Error1,
        Action<ApiV1MiscGoogleBusinessMedia429Error1> onApiV1MiscGoogleBusinessMedia429Error1,
        Action<ApiV1MiscGoogleBusinessMedia500Error1> onApiV1MiscGoogleBusinessMedia500Error1,
        Action<ApiV1MiscGoogleBusinessMedia502Error1> onApiV1MiscGoogleBusinessMedia502Error1,
        Action<ApiV1MiscGoogleBusinessMedia503Error1> onApiV1MiscGoogleBusinessMedia503Error1,
        Action<ApiV1MiscGoogleBusinessMedia504Error1> onApiV1MiscGoogleBusinessMedia504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessMedia400Error1(
            out var apiV1MiscGoogleBusinessMedia400Error1Value)) onApiV1MiscGoogleBusinessMedia400Error1(
            apiV1MiscGoogleBusinessMedia400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia401Error1(
            out var apiV1MiscGoogleBusinessMedia401Error1Value)) onApiV1MiscGoogleBusinessMedia401Error1(
            apiV1MiscGoogleBusinessMedia401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia403Error1(
            out var apiV1MiscGoogleBusinessMedia403Error1Value)) onApiV1MiscGoogleBusinessMedia403Error1(
            apiV1MiscGoogleBusinessMedia403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia404Error1(
            out var apiV1MiscGoogleBusinessMedia404Error1Value)) onApiV1MiscGoogleBusinessMedia404Error1(
            apiV1MiscGoogleBusinessMedia404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia429Error1(
            out var apiV1MiscGoogleBusinessMedia429Error1Value)) onApiV1MiscGoogleBusinessMedia429Error1(
            apiV1MiscGoogleBusinessMedia429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia500Error1(
            out var apiV1MiscGoogleBusinessMedia500Error1Value)) onApiV1MiscGoogleBusinessMedia500Error1(
            apiV1MiscGoogleBusinessMedia500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia502Error1(
            out var apiV1MiscGoogleBusinessMedia502Error1Value)) onApiV1MiscGoogleBusinessMedia502Error1(
            apiV1MiscGoogleBusinessMedia502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia503Error1(
            out var apiV1MiscGoogleBusinessMedia503Error1Value)) onApiV1MiscGoogleBusinessMedia503Error1(
            apiV1MiscGoogleBusinessMedia503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessMedia504Error1(
            out var apiV1MiscGoogleBusinessMedia504Error1Value)) onApiV1MiscGoogleBusinessMedia504Error1(
            apiV1MiscGoogleBusinessMedia504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessDeleteMediaError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessDeleteMediaError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessMedia400Error1>().As(AsApiV1MiscGoogleBusinessMedia400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessMedia401Error1>().As(AsApiV1MiscGoogleBusinessMedia401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessMedia403Error1>().As(AsApiV1MiscGoogleBusinessMedia403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessMedia404Error1>().As(AsApiV1MiscGoogleBusinessMedia404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessMedia429Error1>().As(AsApiV1MiscGoogleBusinessMedia429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessMedia500Error1>().As(AsApiV1MiscGoogleBusinessMedia500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessMedia502Error1>().As(AsApiV1MiscGoogleBusinessMedia502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessMedia503Error1>().As(AsApiV1MiscGoogleBusinessMedia503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessMedia504Error1>().As(AsApiV1MiscGoogleBusinessMedia504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessDeleteMediaError> Response { get; } = new(Create);
}
