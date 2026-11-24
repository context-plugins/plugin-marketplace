using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CommentRetryError : ApiError
{
    private readonly Optional<ApiV1CommentRetry400Error1> _apiV1CommentRetry400Error1Value;

    private readonly Optional<ApiV1CommentRetry401Error1> _apiV1CommentRetry401Error1Value;

    private readonly Optional<ApiV1CommentRetry403Error1> _apiV1CommentRetry403Error1Value;

    private readonly Optional<ApiV1CommentRetry404Error1> _apiV1CommentRetry404Error1Value;

    private readonly Optional<ApiV1CommentRetry429Error1> _apiV1CommentRetry429Error1Value;

    private readonly Optional<ApiV1CommentRetry500Error1> _apiV1CommentRetry500Error1Value;

    private readonly Optional<ApiV1CommentRetry502Error1> _apiV1CommentRetry502Error1Value;

    private readonly Optional<ApiV1CommentRetry503Error1> _apiV1CommentRetry503Error1Value;

    private readonly Optional<ApiV1CommentRetry504Error1> _apiV1CommentRetry504Error1Value;

    private CommentRetryError(Optional<ApiV1CommentRetry400Error1> apiV1CommentRetry400Error1Value,
        Optional<ApiV1CommentRetry401Error1> apiV1CommentRetry401Error1Value,
        Optional<ApiV1CommentRetry403Error1> apiV1CommentRetry403Error1Value,
        Optional<ApiV1CommentRetry404Error1> apiV1CommentRetry404Error1Value,
        Optional<ApiV1CommentRetry429Error1> apiV1CommentRetry429Error1Value,
        Optional<ApiV1CommentRetry500Error1> apiV1CommentRetry500Error1Value,
        Optional<ApiV1CommentRetry502Error1> apiV1CommentRetry502Error1Value,
        Optional<ApiV1CommentRetry503Error1> apiV1CommentRetry503Error1Value,
        Optional<ApiV1CommentRetry504Error1> apiV1CommentRetry504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CommentRetry400Error1Value = apiV1CommentRetry400Error1Value;
        _apiV1CommentRetry401Error1Value = apiV1CommentRetry401Error1Value;
        _apiV1CommentRetry403Error1Value = apiV1CommentRetry403Error1Value;
        _apiV1CommentRetry404Error1Value = apiV1CommentRetry404Error1Value;
        _apiV1CommentRetry429Error1Value = apiV1CommentRetry429Error1Value;
        _apiV1CommentRetry500Error1Value = apiV1CommentRetry500Error1Value;
        _apiV1CommentRetry502Error1Value = apiV1CommentRetry502Error1Value;
        _apiV1CommentRetry503Error1Value = apiV1CommentRetry503Error1Value;
        _apiV1CommentRetry504Error1Value = apiV1CommentRetry504Error1Value;
    }

    private static CommentRetryError AsApiV1CommentRetry400Error1(ApiV1CommentRetry400Error1 value) =>
        new(
            Optional<ApiV1CommentRetry400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry401Error1(ApiV1CommentRetry401Error1 value) =>
        new(
            default,
            Optional<ApiV1CommentRetry401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry403Error1(ApiV1CommentRetry403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1CommentRetry403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry404Error1(ApiV1CommentRetry404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1CommentRetry404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry429Error1(ApiV1CommentRetry429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentRetry429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry500Error1(ApiV1CommentRetry500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentRetry500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry502Error1(ApiV1CommentRetry502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentRetry502Error1>.Some(value),
            default,
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry503Error1(ApiV1CommentRetry503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentRetry503Error1>.Some(value),
            default,
            default);

    private static CommentRetryError AsApiV1CommentRetry504Error1(ApiV1CommentRetry504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentRetry504Error1>.Some(value),
            default);

    private static CommentRetryError AsFallback(RawError value) =>
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

    public bool TryGetApiV1CommentRetry400Error1([NotNullWhen(true)] out ApiV1CommentRetry400Error1? value) =>
        _apiV1CommentRetry400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry401Error1([NotNullWhen(true)] out ApiV1CommentRetry401Error1? value) =>
        _apiV1CommentRetry401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry403Error1([NotNullWhen(true)] out ApiV1CommentRetry403Error1? value) =>
        _apiV1CommentRetry403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry404Error1([NotNullWhen(true)] out ApiV1CommentRetry404Error1? value) =>
        _apiV1CommentRetry404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry429Error1([NotNullWhen(true)] out ApiV1CommentRetry429Error1? value) =>
        _apiV1CommentRetry429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry500Error1([NotNullWhen(true)] out ApiV1CommentRetry500Error1? value) =>
        _apiV1CommentRetry500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry502Error1([NotNullWhen(true)] out ApiV1CommentRetry502Error1? value) =>
        _apiV1CommentRetry502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry503Error1([NotNullWhen(true)] out ApiV1CommentRetry503Error1? value) =>
        _apiV1CommentRetry503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentRetry504Error1([NotNullWhen(true)] out ApiV1CommentRetry504Error1? value) =>
        _apiV1CommentRetry504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CommentRetry400Error1, TResult> onApiV1CommentRetry400Error1,
        Func<ApiV1CommentRetry401Error1, TResult> onApiV1CommentRetry401Error1,
        Func<ApiV1CommentRetry403Error1, TResult> onApiV1CommentRetry403Error1,
        Func<ApiV1CommentRetry404Error1, TResult> onApiV1CommentRetry404Error1,
        Func<ApiV1CommentRetry429Error1, TResult> onApiV1CommentRetry429Error1,
        Func<ApiV1CommentRetry500Error1, TResult> onApiV1CommentRetry500Error1,
        Func<ApiV1CommentRetry502Error1, TResult> onApiV1CommentRetry502Error1,
        Func<ApiV1CommentRetry503Error1, TResult> onApiV1CommentRetry503Error1,
        Func<ApiV1CommentRetry504Error1, TResult> onApiV1CommentRetry504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CommentRetry400Error1(
                out var apiV1CommentRetry400Error1Value) => onApiV1CommentRetry400Error1(
                apiV1CommentRetry400Error1Value),
            _ when TryGetApiV1CommentRetry401Error1(
                out var apiV1CommentRetry401Error1Value) => onApiV1CommentRetry401Error1(
                apiV1CommentRetry401Error1Value),
            _ when TryGetApiV1CommentRetry403Error1(
                out var apiV1CommentRetry403Error1Value) => onApiV1CommentRetry403Error1(
                apiV1CommentRetry403Error1Value),
            _ when TryGetApiV1CommentRetry404Error1(
                out var apiV1CommentRetry404Error1Value) => onApiV1CommentRetry404Error1(
                apiV1CommentRetry404Error1Value),
            _ when TryGetApiV1CommentRetry429Error1(
                out var apiV1CommentRetry429Error1Value) => onApiV1CommentRetry429Error1(
                apiV1CommentRetry429Error1Value),
            _ when TryGetApiV1CommentRetry500Error1(
                out var apiV1CommentRetry500Error1Value) => onApiV1CommentRetry500Error1(
                apiV1CommentRetry500Error1Value),
            _ when TryGetApiV1CommentRetry502Error1(
                out var apiV1CommentRetry502Error1Value) => onApiV1CommentRetry502Error1(
                apiV1CommentRetry502Error1Value),
            _ when TryGetApiV1CommentRetry503Error1(
                out var apiV1CommentRetry503Error1Value) => onApiV1CommentRetry503Error1(
                apiV1CommentRetry503Error1Value),
            _ when TryGetApiV1CommentRetry504Error1(
                out var apiV1CommentRetry504Error1Value) => onApiV1CommentRetry504Error1(
                apiV1CommentRetry504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CommentRetryError)} holds no value.")
        };

    public void Match(Action<ApiV1CommentRetry400Error1> onApiV1CommentRetry400Error1,
        Action<ApiV1CommentRetry401Error1> onApiV1CommentRetry401Error1,
        Action<ApiV1CommentRetry403Error1> onApiV1CommentRetry403Error1,
        Action<ApiV1CommentRetry404Error1> onApiV1CommentRetry404Error1,
        Action<ApiV1CommentRetry429Error1> onApiV1CommentRetry429Error1,
        Action<ApiV1CommentRetry500Error1> onApiV1CommentRetry500Error1,
        Action<ApiV1CommentRetry502Error1> onApiV1CommentRetry502Error1,
        Action<ApiV1CommentRetry503Error1> onApiV1CommentRetry503Error1,
        Action<ApiV1CommentRetry504Error1> onApiV1CommentRetry504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CommentRetry400Error1(out var apiV1CommentRetry400Error1Value)) onApiV1CommentRetry400Error1(
            apiV1CommentRetry400Error1Value);
        else if (TryGetApiV1CommentRetry401Error1(
            out var apiV1CommentRetry401Error1Value)) onApiV1CommentRetry401Error1(apiV1CommentRetry401Error1Value);
        else if (TryGetApiV1CommentRetry403Error1(
            out var apiV1CommentRetry403Error1Value)) onApiV1CommentRetry403Error1(apiV1CommentRetry403Error1Value);
        else if (TryGetApiV1CommentRetry404Error1(
            out var apiV1CommentRetry404Error1Value)) onApiV1CommentRetry404Error1(apiV1CommentRetry404Error1Value);
        else if (TryGetApiV1CommentRetry429Error1(
            out var apiV1CommentRetry429Error1Value)) onApiV1CommentRetry429Error1(apiV1CommentRetry429Error1Value);
        else if (TryGetApiV1CommentRetry500Error1(
            out var apiV1CommentRetry500Error1Value)) onApiV1CommentRetry500Error1(apiV1CommentRetry500Error1Value);
        else if (TryGetApiV1CommentRetry502Error1(
            out var apiV1CommentRetry502Error1Value)) onApiV1CommentRetry502Error1(apiV1CommentRetry502Error1Value);
        else if (TryGetApiV1CommentRetry503Error1(
            out var apiV1CommentRetry503Error1Value)) onApiV1CommentRetry503Error1(apiV1CommentRetry503Error1Value);
        else if (TryGetApiV1CommentRetry504Error1(
            out var apiV1CommentRetry504Error1Value)) onApiV1CommentRetry504Error1(apiV1CommentRetry504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CommentRetryError)} holds no value.");
    }

    private static Task<CommentRetryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1CommentRetry400Error1>().As(AsApiV1CommentRetry400Error1),
            401 => response.Json<ApiV1CommentRetry401Error1>().As(AsApiV1CommentRetry401Error1),
            403 => response.Json<ApiV1CommentRetry403Error1>().As(AsApiV1CommentRetry403Error1),
            404 => response.Json<ApiV1CommentRetry404Error1>().As(AsApiV1CommentRetry404Error1),
            429 => response.Json<ApiV1CommentRetry429Error1>().As(AsApiV1CommentRetry429Error1),
            500 => response.Json<ApiV1CommentRetry500Error1>().As(AsApiV1CommentRetry500Error1),
            502 => response.Json<ApiV1CommentRetry502Error1>().As(AsApiV1CommentRetry502Error1),
            503 => response.Json<ApiV1CommentRetry503Error1>().As(AsApiV1CommentRetry503Error1),
            504 => response.Json<ApiV1CommentRetry504Error1>().As(AsApiV1CommentRetry504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CommentRetryError> Response { get; } = new(Create);
}
