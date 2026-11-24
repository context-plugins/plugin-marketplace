using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostImportRetryImportError : ApiError
{
    private readonly Optional<ApiV1PostHistoryImportRetry400Error1> _apiV1PostHistoryImportRetry400Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry401Error1> _apiV1PostHistoryImportRetry401Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry403Error1> _apiV1PostHistoryImportRetry403Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry404Error1> _apiV1PostHistoryImportRetry404Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry429Error1> _apiV1PostHistoryImportRetry429Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry500Error1> _apiV1PostHistoryImportRetry500Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry502Error1> _apiV1PostHistoryImportRetry502Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry503Error1> _apiV1PostHistoryImportRetry503Error1Value;

    private readonly Optional<ApiV1PostHistoryImportRetry504Error1> _apiV1PostHistoryImportRetry504Error1Value;

    private PostImportRetryImportError(Optional<ApiV1PostHistoryImportRetry400Error1> apiV1PostHistoryImportRetry400Error1Value,
        Optional<ApiV1PostHistoryImportRetry401Error1> apiV1PostHistoryImportRetry401Error1Value,
        Optional<ApiV1PostHistoryImportRetry403Error1> apiV1PostHistoryImportRetry403Error1Value,
        Optional<ApiV1PostHistoryImportRetry404Error1> apiV1PostHistoryImportRetry404Error1Value,
        Optional<ApiV1PostHistoryImportRetry429Error1> apiV1PostHistoryImportRetry429Error1Value,
        Optional<ApiV1PostHistoryImportRetry500Error1> apiV1PostHistoryImportRetry500Error1Value,
        Optional<ApiV1PostHistoryImportRetry502Error1> apiV1PostHistoryImportRetry502Error1Value,
        Optional<ApiV1PostHistoryImportRetry503Error1> apiV1PostHistoryImportRetry503Error1Value,
        Optional<ApiV1PostHistoryImportRetry504Error1> apiV1PostHistoryImportRetry504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostHistoryImportRetry400Error1Value = apiV1PostHistoryImportRetry400Error1Value;
        _apiV1PostHistoryImportRetry401Error1Value = apiV1PostHistoryImportRetry401Error1Value;
        _apiV1PostHistoryImportRetry403Error1Value = apiV1PostHistoryImportRetry403Error1Value;
        _apiV1PostHistoryImportRetry404Error1Value = apiV1PostHistoryImportRetry404Error1Value;
        _apiV1PostHistoryImportRetry429Error1Value = apiV1PostHistoryImportRetry429Error1Value;
        _apiV1PostHistoryImportRetry500Error1Value = apiV1PostHistoryImportRetry500Error1Value;
        _apiV1PostHistoryImportRetry502Error1Value = apiV1PostHistoryImportRetry502Error1Value;
        _apiV1PostHistoryImportRetry503Error1Value = apiV1PostHistoryImportRetry503Error1Value;
        _apiV1PostHistoryImportRetry504Error1Value = apiV1PostHistoryImportRetry504Error1Value;
    }

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry400Error1(ApiV1PostHistoryImportRetry400Error1 value) =>
        new(
            Optional<ApiV1PostHistoryImportRetry400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry401Error1(ApiV1PostHistoryImportRetry401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostHistoryImportRetry401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry403Error1(ApiV1PostHistoryImportRetry403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry404Error1(ApiV1PostHistoryImportRetry404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry429Error1(ApiV1PostHistoryImportRetry429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry500Error1(ApiV1PostHistoryImportRetry500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry502Error1(ApiV1PostHistoryImportRetry502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry502Error1>.Some(value),
            default,
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry503Error1(ApiV1PostHistoryImportRetry503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry503Error1>.Some(value),
            default,
            default);

    private static PostImportRetryImportError AsApiV1PostHistoryImportRetry504Error1(ApiV1PostHistoryImportRetry504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportRetry504Error1>.Some(value),
            default);

    private static PostImportRetryImportError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostHistoryImportRetry400Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry400Error1? value) =>
        _apiV1PostHistoryImportRetry400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry401Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry401Error1? value) =>
        _apiV1PostHistoryImportRetry401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry403Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry403Error1? value) =>
        _apiV1PostHistoryImportRetry403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry404Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry404Error1? value) =>
        _apiV1PostHistoryImportRetry404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry429Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry429Error1? value) =>
        _apiV1PostHistoryImportRetry429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry500Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry500Error1? value) =>
        _apiV1PostHistoryImportRetry500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry502Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry502Error1? value) =>
        _apiV1PostHistoryImportRetry502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry503Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry503Error1? value) =>
        _apiV1PostHistoryImportRetry503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportRetry504Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry504Error1? value) =>
        _apiV1PostHistoryImportRetry504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostHistoryImportRetry400Error1, TResult> onApiV1PostHistoryImportRetry400Error1,
        Func<ApiV1PostHistoryImportRetry401Error1, TResult> onApiV1PostHistoryImportRetry401Error1,
        Func<ApiV1PostHistoryImportRetry403Error1, TResult> onApiV1PostHistoryImportRetry403Error1,
        Func<ApiV1PostHistoryImportRetry404Error1, TResult> onApiV1PostHistoryImportRetry404Error1,
        Func<ApiV1PostHistoryImportRetry429Error1, TResult> onApiV1PostHistoryImportRetry429Error1,
        Func<ApiV1PostHistoryImportRetry500Error1, TResult> onApiV1PostHistoryImportRetry500Error1,
        Func<ApiV1PostHistoryImportRetry502Error1, TResult> onApiV1PostHistoryImportRetry502Error1,
        Func<ApiV1PostHistoryImportRetry503Error1, TResult> onApiV1PostHistoryImportRetry503Error1,
        Func<ApiV1PostHistoryImportRetry504Error1, TResult> onApiV1PostHistoryImportRetry504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostHistoryImportRetry400Error1(
                out var apiV1PostHistoryImportRetry400Error1Value) => onApiV1PostHistoryImportRetry400Error1(
                apiV1PostHistoryImportRetry400Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry401Error1(
                out var apiV1PostHistoryImportRetry401Error1Value) => onApiV1PostHistoryImportRetry401Error1(
                apiV1PostHistoryImportRetry401Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry403Error1(
                out var apiV1PostHistoryImportRetry403Error1Value) => onApiV1PostHistoryImportRetry403Error1(
                apiV1PostHistoryImportRetry403Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry404Error1(
                out var apiV1PostHistoryImportRetry404Error1Value) => onApiV1PostHistoryImportRetry404Error1(
                apiV1PostHistoryImportRetry404Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry429Error1(
                out var apiV1PostHistoryImportRetry429Error1Value) => onApiV1PostHistoryImportRetry429Error1(
                apiV1PostHistoryImportRetry429Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry500Error1(
                out var apiV1PostHistoryImportRetry500Error1Value) => onApiV1PostHistoryImportRetry500Error1(
                apiV1PostHistoryImportRetry500Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry502Error1(
                out var apiV1PostHistoryImportRetry502Error1Value) => onApiV1PostHistoryImportRetry502Error1(
                apiV1PostHistoryImportRetry502Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry503Error1(
                out var apiV1PostHistoryImportRetry503Error1Value) => onApiV1PostHistoryImportRetry503Error1(
                apiV1PostHistoryImportRetry503Error1Value),
            _ when TryGetApiV1PostHistoryImportRetry504Error1(
                out var apiV1PostHistoryImportRetry504Error1Value) => onApiV1PostHistoryImportRetry504Error1(
                apiV1PostHistoryImportRetry504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostImportRetryImportError)} holds no value.")
        };

    public void Match(Action<ApiV1PostHistoryImportRetry400Error1> onApiV1PostHistoryImportRetry400Error1,
        Action<ApiV1PostHistoryImportRetry401Error1> onApiV1PostHistoryImportRetry401Error1,
        Action<ApiV1PostHistoryImportRetry403Error1> onApiV1PostHistoryImportRetry403Error1,
        Action<ApiV1PostHistoryImportRetry404Error1> onApiV1PostHistoryImportRetry404Error1,
        Action<ApiV1PostHistoryImportRetry429Error1> onApiV1PostHistoryImportRetry429Error1,
        Action<ApiV1PostHistoryImportRetry500Error1> onApiV1PostHistoryImportRetry500Error1,
        Action<ApiV1PostHistoryImportRetry502Error1> onApiV1PostHistoryImportRetry502Error1,
        Action<ApiV1PostHistoryImportRetry503Error1> onApiV1PostHistoryImportRetry503Error1,
        Action<ApiV1PostHistoryImportRetry504Error1> onApiV1PostHistoryImportRetry504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostHistoryImportRetry400Error1(
            out var apiV1PostHistoryImportRetry400Error1Value)) onApiV1PostHistoryImportRetry400Error1(
            apiV1PostHistoryImportRetry400Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry401Error1(
            out var apiV1PostHistoryImportRetry401Error1Value)) onApiV1PostHistoryImportRetry401Error1(
            apiV1PostHistoryImportRetry401Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry403Error1(
            out var apiV1PostHistoryImportRetry403Error1Value)) onApiV1PostHistoryImportRetry403Error1(
            apiV1PostHistoryImportRetry403Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry404Error1(
            out var apiV1PostHistoryImportRetry404Error1Value)) onApiV1PostHistoryImportRetry404Error1(
            apiV1PostHistoryImportRetry404Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry429Error1(
            out var apiV1PostHistoryImportRetry429Error1Value)) onApiV1PostHistoryImportRetry429Error1(
            apiV1PostHistoryImportRetry429Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry500Error1(
            out var apiV1PostHistoryImportRetry500Error1Value)) onApiV1PostHistoryImportRetry500Error1(
            apiV1PostHistoryImportRetry500Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry502Error1(
            out var apiV1PostHistoryImportRetry502Error1Value)) onApiV1PostHistoryImportRetry502Error1(
            apiV1PostHistoryImportRetry502Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry503Error1(
            out var apiV1PostHistoryImportRetry503Error1Value)) onApiV1PostHistoryImportRetry503Error1(
            apiV1PostHistoryImportRetry503Error1Value);
        else if (TryGetApiV1PostHistoryImportRetry504Error1(
            out var apiV1PostHistoryImportRetry504Error1Value)) onApiV1PostHistoryImportRetry504Error1(
            apiV1PostHistoryImportRetry504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostImportRetryImportError)} holds no value.");
    }

    private static Task<PostImportRetryImportError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostHistoryImportRetry400Error1>().As(AsApiV1PostHistoryImportRetry400Error1),
            401 => response.Json<ApiV1PostHistoryImportRetry401Error1>().As(AsApiV1PostHistoryImportRetry401Error1),
            403 => response.Json<ApiV1PostHistoryImportRetry403Error1>().As(AsApiV1PostHistoryImportRetry403Error1),
            404 => response.Json<ApiV1PostHistoryImportRetry404Error1>().As(AsApiV1PostHistoryImportRetry404Error1),
            429 => response.Json<ApiV1PostHistoryImportRetry429Error1>().As(AsApiV1PostHistoryImportRetry429Error1),
            500 => response.Json<ApiV1PostHistoryImportRetry500Error1>().As(AsApiV1PostHistoryImportRetry500Error1),
            502 => response.Json<ApiV1PostHistoryImportRetry502Error1>().As(AsApiV1PostHistoryImportRetry502Error1),
            503 => response.Json<ApiV1PostHistoryImportRetry503Error1>().As(AsApiV1PostHistoryImportRetry503Error1),
            504 => response.Json<ApiV1PostHistoryImportRetry504Error1>().As(AsApiV1PostHistoryImportRetry504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostImportRetryImportError> Response { get; } = new(Create);
}
