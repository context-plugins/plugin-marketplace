using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostRetryError : ApiError
{
    private readonly Optional<ApiV1PostRetry400Error1> _apiV1PostRetry400Error1Value;

    private readonly Optional<ApiV1PostRetry401Error1> _apiV1PostRetry401Error1Value;

    private readonly Optional<ApiV1PostRetry403Error1> _apiV1PostRetry403Error1Value;

    private readonly Optional<ApiV1PostRetry404Error1> _apiV1PostRetry404Error1Value;

    private readonly Optional<ApiV1PostRetry429Error1> _apiV1PostRetry429Error1Value;

    private readonly Optional<ApiV1PostRetry500Error1> _apiV1PostRetry500Error1Value;

    private readonly Optional<ApiV1PostRetry502Error1> _apiV1PostRetry502Error1Value;

    private readonly Optional<ApiV1PostRetry503Error1> _apiV1PostRetry503Error1Value;

    private readonly Optional<ApiV1PostRetry504Error1> _apiV1PostRetry504Error1Value;

    private PostRetryError(Optional<ApiV1PostRetry400Error1> apiV1PostRetry400Error1Value,
        Optional<ApiV1PostRetry401Error1> apiV1PostRetry401Error1Value,
        Optional<ApiV1PostRetry403Error1> apiV1PostRetry403Error1Value,
        Optional<ApiV1PostRetry404Error1> apiV1PostRetry404Error1Value,
        Optional<ApiV1PostRetry429Error1> apiV1PostRetry429Error1Value,
        Optional<ApiV1PostRetry500Error1> apiV1PostRetry500Error1Value,
        Optional<ApiV1PostRetry502Error1> apiV1PostRetry502Error1Value,
        Optional<ApiV1PostRetry503Error1> apiV1PostRetry503Error1Value,
        Optional<ApiV1PostRetry504Error1> apiV1PostRetry504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostRetry400Error1Value = apiV1PostRetry400Error1Value;
        _apiV1PostRetry401Error1Value = apiV1PostRetry401Error1Value;
        _apiV1PostRetry403Error1Value = apiV1PostRetry403Error1Value;
        _apiV1PostRetry404Error1Value = apiV1PostRetry404Error1Value;
        _apiV1PostRetry429Error1Value = apiV1PostRetry429Error1Value;
        _apiV1PostRetry500Error1Value = apiV1PostRetry500Error1Value;
        _apiV1PostRetry502Error1Value = apiV1PostRetry502Error1Value;
        _apiV1PostRetry503Error1Value = apiV1PostRetry503Error1Value;
        _apiV1PostRetry504Error1Value = apiV1PostRetry504Error1Value;
    }

    private static PostRetryError AsApiV1PostRetry400Error1(ApiV1PostRetry400Error1 value) =>
        new(
            Optional<ApiV1PostRetry400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry401Error1(ApiV1PostRetry401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostRetry401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry403Error1(ApiV1PostRetry403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostRetry403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry404Error1(ApiV1PostRetry404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostRetry404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry429Error1(ApiV1PostRetry429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostRetry429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry500Error1(ApiV1PostRetry500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostRetry500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry502Error1(ApiV1PostRetry502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostRetry502Error1>.Some(value),
            default,
            default,
            default);

    private static PostRetryError AsApiV1PostRetry503Error1(ApiV1PostRetry503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostRetry503Error1>.Some(value),
            default,
            default);

    private static PostRetryError AsApiV1PostRetry504Error1(ApiV1PostRetry504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostRetry504Error1>.Some(value),
            default);

    private static PostRetryError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostRetry400Error1([NotNullWhen(true)] out ApiV1PostRetry400Error1? value) =>
        _apiV1PostRetry400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry401Error1([NotNullWhen(true)] out ApiV1PostRetry401Error1? value) =>
        _apiV1PostRetry401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry403Error1([NotNullWhen(true)] out ApiV1PostRetry403Error1? value) =>
        _apiV1PostRetry403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry404Error1([NotNullWhen(true)] out ApiV1PostRetry404Error1? value) =>
        _apiV1PostRetry404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry429Error1([NotNullWhen(true)] out ApiV1PostRetry429Error1? value) =>
        _apiV1PostRetry429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry500Error1([NotNullWhen(true)] out ApiV1PostRetry500Error1? value) =>
        _apiV1PostRetry500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry502Error1([NotNullWhen(true)] out ApiV1PostRetry502Error1? value) =>
        _apiV1PostRetry502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry503Error1([NotNullWhen(true)] out ApiV1PostRetry503Error1? value) =>
        _apiV1PostRetry503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostRetry504Error1([NotNullWhen(true)] out ApiV1PostRetry504Error1? value) =>
        _apiV1PostRetry504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostRetry400Error1, TResult> onApiV1PostRetry400Error1,
        Func<ApiV1PostRetry401Error1, TResult> onApiV1PostRetry401Error1,
        Func<ApiV1PostRetry403Error1, TResult> onApiV1PostRetry403Error1,
        Func<ApiV1PostRetry404Error1, TResult> onApiV1PostRetry404Error1,
        Func<ApiV1PostRetry429Error1, TResult> onApiV1PostRetry429Error1,
        Func<ApiV1PostRetry500Error1, TResult> onApiV1PostRetry500Error1,
        Func<ApiV1PostRetry502Error1, TResult> onApiV1PostRetry502Error1,
        Func<ApiV1PostRetry503Error1, TResult> onApiV1PostRetry503Error1,
        Func<ApiV1PostRetry504Error1, TResult> onApiV1PostRetry504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostRetry400Error1(out var apiV1PostRetry400Error1Value) => onApiV1PostRetry400Error1(
                apiV1PostRetry400Error1Value),
            _ when TryGetApiV1PostRetry401Error1(out var apiV1PostRetry401Error1Value) => onApiV1PostRetry401Error1(
                apiV1PostRetry401Error1Value),
            _ when TryGetApiV1PostRetry403Error1(out var apiV1PostRetry403Error1Value) => onApiV1PostRetry403Error1(
                apiV1PostRetry403Error1Value),
            _ when TryGetApiV1PostRetry404Error1(out var apiV1PostRetry404Error1Value) => onApiV1PostRetry404Error1(
                apiV1PostRetry404Error1Value),
            _ when TryGetApiV1PostRetry429Error1(out var apiV1PostRetry429Error1Value) => onApiV1PostRetry429Error1(
                apiV1PostRetry429Error1Value),
            _ when TryGetApiV1PostRetry500Error1(out var apiV1PostRetry500Error1Value) => onApiV1PostRetry500Error1(
                apiV1PostRetry500Error1Value),
            _ when TryGetApiV1PostRetry502Error1(out var apiV1PostRetry502Error1Value) => onApiV1PostRetry502Error1(
                apiV1PostRetry502Error1Value),
            _ when TryGetApiV1PostRetry503Error1(out var apiV1PostRetry503Error1Value) => onApiV1PostRetry503Error1(
                apiV1PostRetry503Error1Value),
            _ when TryGetApiV1PostRetry504Error1(out var apiV1PostRetry504Error1Value) => onApiV1PostRetry504Error1(
                apiV1PostRetry504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostRetryError)} holds no value.")
        };

    public void Match(Action<ApiV1PostRetry400Error1> onApiV1PostRetry400Error1,
        Action<ApiV1PostRetry401Error1> onApiV1PostRetry401Error1,
        Action<ApiV1PostRetry403Error1> onApiV1PostRetry403Error1,
        Action<ApiV1PostRetry404Error1> onApiV1PostRetry404Error1,
        Action<ApiV1PostRetry429Error1> onApiV1PostRetry429Error1,
        Action<ApiV1PostRetry500Error1> onApiV1PostRetry500Error1,
        Action<ApiV1PostRetry502Error1> onApiV1PostRetry502Error1,
        Action<ApiV1PostRetry503Error1> onApiV1PostRetry503Error1,
        Action<ApiV1PostRetry504Error1> onApiV1PostRetry504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostRetry400Error1(out var apiV1PostRetry400Error1Value)) onApiV1PostRetry400Error1(
            apiV1PostRetry400Error1Value);
        else if (TryGetApiV1PostRetry401Error1(out var apiV1PostRetry401Error1Value)) onApiV1PostRetry401Error1(
            apiV1PostRetry401Error1Value);
        else if (TryGetApiV1PostRetry403Error1(out var apiV1PostRetry403Error1Value)) onApiV1PostRetry403Error1(
            apiV1PostRetry403Error1Value);
        else if (TryGetApiV1PostRetry404Error1(out var apiV1PostRetry404Error1Value)) onApiV1PostRetry404Error1(
            apiV1PostRetry404Error1Value);
        else if (TryGetApiV1PostRetry429Error1(out var apiV1PostRetry429Error1Value)) onApiV1PostRetry429Error1(
            apiV1PostRetry429Error1Value);
        else if (TryGetApiV1PostRetry500Error1(out var apiV1PostRetry500Error1Value)) onApiV1PostRetry500Error1(
            apiV1PostRetry500Error1Value);
        else if (TryGetApiV1PostRetry502Error1(out var apiV1PostRetry502Error1Value)) onApiV1PostRetry502Error1(
            apiV1PostRetry502Error1Value);
        else if (TryGetApiV1PostRetry503Error1(out var apiV1PostRetry503Error1Value)) onApiV1PostRetry503Error1(
            apiV1PostRetry503Error1Value);
        else if (TryGetApiV1PostRetry504Error1(out var apiV1PostRetry504Error1Value)) onApiV1PostRetry504Error1(
            apiV1PostRetry504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostRetryError)} holds no value.");
    }

    private static Task<PostRetryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostRetry400Error1>().As(AsApiV1PostRetry400Error1),
            401 => response.Json<ApiV1PostRetry401Error1>().As(AsApiV1PostRetry401Error1),
            403 => response.Json<ApiV1PostRetry403Error1>().As(AsApiV1PostRetry403Error1),
            404 => response.Json<ApiV1PostRetry404Error1>().As(AsApiV1PostRetry404Error1),
            429 => response.Json<ApiV1PostRetry429Error1>().As(AsApiV1PostRetry429Error1),
            500 => response.Json<ApiV1PostRetry500Error1>().As(AsApiV1PostRetry500Error1),
            502 => response.Json<ApiV1PostRetry502Error1>().As(AsApiV1PostRetry502Error1),
            503 => response.Json<ApiV1PostRetry503Error1>().As(AsApiV1PostRetry503Error1),
            504 => response.Json<ApiV1PostRetry504Error1>().As(AsApiV1PostRetry504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostRetryError> Response { get; } = new(Create);
}
