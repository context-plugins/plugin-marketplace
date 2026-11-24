using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostReconnectSocialAccountError : ApiError
{
    private readonly Optional<ApiV1PostReconnectSocialAccount400Error1> _apiV1PostReconnectSocialAccount400Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount401Error1> _apiV1PostReconnectSocialAccount401Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount403Error1> _apiV1PostReconnectSocialAccount403Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount404Error1> _apiV1PostReconnectSocialAccount404Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount429Error1> _apiV1PostReconnectSocialAccount429Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount500Error1> _apiV1PostReconnectSocialAccount500Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount502Error1> _apiV1PostReconnectSocialAccount502Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount503Error1> _apiV1PostReconnectSocialAccount503Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccount504Error1> _apiV1PostReconnectSocialAccount504Error1Value;

    private PostReconnectSocialAccountError(Optional<ApiV1PostReconnectSocialAccount400Error1> apiV1PostReconnectSocialAccount400Error1Value,
        Optional<ApiV1PostReconnectSocialAccount401Error1> apiV1PostReconnectSocialAccount401Error1Value,
        Optional<ApiV1PostReconnectSocialAccount403Error1> apiV1PostReconnectSocialAccount403Error1Value,
        Optional<ApiV1PostReconnectSocialAccount404Error1> apiV1PostReconnectSocialAccount404Error1Value,
        Optional<ApiV1PostReconnectSocialAccount429Error1> apiV1PostReconnectSocialAccount429Error1Value,
        Optional<ApiV1PostReconnectSocialAccount500Error1> apiV1PostReconnectSocialAccount500Error1Value,
        Optional<ApiV1PostReconnectSocialAccount502Error1> apiV1PostReconnectSocialAccount502Error1Value,
        Optional<ApiV1PostReconnectSocialAccount503Error1> apiV1PostReconnectSocialAccount503Error1Value,
        Optional<ApiV1PostReconnectSocialAccount504Error1> apiV1PostReconnectSocialAccount504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostReconnectSocialAccount400Error1Value = apiV1PostReconnectSocialAccount400Error1Value;
        _apiV1PostReconnectSocialAccount401Error1Value = apiV1PostReconnectSocialAccount401Error1Value;
        _apiV1PostReconnectSocialAccount403Error1Value = apiV1PostReconnectSocialAccount403Error1Value;
        _apiV1PostReconnectSocialAccount404Error1Value = apiV1PostReconnectSocialAccount404Error1Value;
        _apiV1PostReconnectSocialAccount429Error1Value = apiV1PostReconnectSocialAccount429Error1Value;
        _apiV1PostReconnectSocialAccount500Error1Value = apiV1PostReconnectSocialAccount500Error1Value;
        _apiV1PostReconnectSocialAccount502Error1Value = apiV1PostReconnectSocialAccount502Error1Value;
        _apiV1PostReconnectSocialAccount503Error1Value = apiV1PostReconnectSocialAccount503Error1Value;
        _apiV1PostReconnectSocialAccount504Error1Value = apiV1PostReconnectSocialAccount504Error1Value;
    }

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount400Error1(ApiV1PostReconnectSocialAccount400Error1 value) =>
        new(
            Optional<ApiV1PostReconnectSocialAccount400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount401Error1(ApiV1PostReconnectSocialAccount401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostReconnectSocialAccount401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount403Error1(ApiV1PostReconnectSocialAccount403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount404Error1(ApiV1PostReconnectSocialAccount404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount429Error1(ApiV1PostReconnectSocialAccount429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount500Error1(ApiV1PostReconnectSocialAccount500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount502Error1(ApiV1PostReconnectSocialAccount502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount502Error1>.Some(value),
            default,
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount503Error1(ApiV1PostReconnectSocialAccount503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount503Error1>.Some(value),
            default,
            default);

    private static PostReconnectSocialAccountError AsApiV1PostReconnectSocialAccount504Error1(ApiV1PostReconnectSocialAccount504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccount504Error1>.Some(value),
            default);

    private static PostReconnectSocialAccountError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostReconnectSocialAccount400Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount400Error1? value) =>
        _apiV1PostReconnectSocialAccount400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount401Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount401Error1? value) =>
        _apiV1PostReconnectSocialAccount401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount403Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount403Error1? value) =>
        _apiV1PostReconnectSocialAccount403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount404Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount404Error1? value) =>
        _apiV1PostReconnectSocialAccount404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount429Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount429Error1? value) =>
        _apiV1PostReconnectSocialAccount429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount500Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount500Error1? value) =>
        _apiV1PostReconnectSocialAccount500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount502Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount502Error1? value) =>
        _apiV1PostReconnectSocialAccount502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount503Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount503Error1? value) =>
        _apiV1PostReconnectSocialAccount503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccount504Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount504Error1? value) =>
        _apiV1PostReconnectSocialAccount504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostReconnectSocialAccount400Error1, TResult> onApiV1PostReconnectSocialAccount400Error1,
        Func<ApiV1PostReconnectSocialAccount401Error1, TResult> onApiV1PostReconnectSocialAccount401Error1,
        Func<ApiV1PostReconnectSocialAccount403Error1, TResult> onApiV1PostReconnectSocialAccount403Error1,
        Func<ApiV1PostReconnectSocialAccount404Error1, TResult> onApiV1PostReconnectSocialAccount404Error1,
        Func<ApiV1PostReconnectSocialAccount429Error1, TResult> onApiV1PostReconnectSocialAccount429Error1,
        Func<ApiV1PostReconnectSocialAccount500Error1, TResult> onApiV1PostReconnectSocialAccount500Error1,
        Func<ApiV1PostReconnectSocialAccount502Error1, TResult> onApiV1PostReconnectSocialAccount502Error1,
        Func<ApiV1PostReconnectSocialAccount503Error1, TResult> onApiV1PostReconnectSocialAccount503Error1,
        Func<ApiV1PostReconnectSocialAccount504Error1, TResult> onApiV1PostReconnectSocialAccount504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostReconnectSocialAccount400Error1(
                out var apiV1PostReconnectSocialAccount400Error1Value) => onApiV1PostReconnectSocialAccount400Error1(
                apiV1PostReconnectSocialAccount400Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount401Error1(
                out var apiV1PostReconnectSocialAccount401Error1Value) => onApiV1PostReconnectSocialAccount401Error1(
                apiV1PostReconnectSocialAccount401Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount403Error1(
                out var apiV1PostReconnectSocialAccount403Error1Value) => onApiV1PostReconnectSocialAccount403Error1(
                apiV1PostReconnectSocialAccount403Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount404Error1(
                out var apiV1PostReconnectSocialAccount404Error1Value) => onApiV1PostReconnectSocialAccount404Error1(
                apiV1PostReconnectSocialAccount404Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount429Error1(
                out var apiV1PostReconnectSocialAccount429Error1Value) => onApiV1PostReconnectSocialAccount429Error1(
                apiV1PostReconnectSocialAccount429Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount500Error1(
                out var apiV1PostReconnectSocialAccount500Error1Value) => onApiV1PostReconnectSocialAccount500Error1(
                apiV1PostReconnectSocialAccount500Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount502Error1(
                out var apiV1PostReconnectSocialAccount502Error1Value) => onApiV1PostReconnectSocialAccount502Error1(
                apiV1PostReconnectSocialAccount502Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount503Error1(
                out var apiV1PostReconnectSocialAccount503Error1Value) => onApiV1PostReconnectSocialAccount503Error1(
                apiV1PostReconnectSocialAccount503Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccount504Error1(
                out var apiV1PostReconnectSocialAccount504Error1Value) => onApiV1PostReconnectSocialAccount504Error1(
                apiV1PostReconnectSocialAccount504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostReconnectSocialAccountError)} holds no value.")
        };

    public void Match(Action<ApiV1PostReconnectSocialAccount400Error1> onApiV1PostReconnectSocialAccount400Error1,
        Action<ApiV1PostReconnectSocialAccount401Error1> onApiV1PostReconnectSocialAccount401Error1,
        Action<ApiV1PostReconnectSocialAccount403Error1> onApiV1PostReconnectSocialAccount403Error1,
        Action<ApiV1PostReconnectSocialAccount404Error1> onApiV1PostReconnectSocialAccount404Error1,
        Action<ApiV1PostReconnectSocialAccount429Error1> onApiV1PostReconnectSocialAccount429Error1,
        Action<ApiV1PostReconnectSocialAccount500Error1> onApiV1PostReconnectSocialAccount500Error1,
        Action<ApiV1PostReconnectSocialAccount502Error1> onApiV1PostReconnectSocialAccount502Error1,
        Action<ApiV1PostReconnectSocialAccount503Error1> onApiV1PostReconnectSocialAccount503Error1,
        Action<ApiV1PostReconnectSocialAccount504Error1> onApiV1PostReconnectSocialAccount504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostReconnectSocialAccount400Error1(
            out var apiV1PostReconnectSocialAccount400Error1Value)) onApiV1PostReconnectSocialAccount400Error1(
            apiV1PostReconnectSocialAccount400Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount401Error1(
            out var apiV1PostReconnectSocialAccount401Error1Value)) onApiV1PostReconnectSocialAccount401Error1(
            apiV1PostReconnectSocialAccount401Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount403Error1(
            out var apiV1PostReconnectSocialAccount403Error1Value)) onApiV1PostReconnectSocialAccount403Error1(
            apiV1PostReconnectSocialAccount403Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount404Error1(
            out var apiV1PostReconnectSocialAccount404Error1Value)) onApiV1PostReconnectSocialAccount404Error1(
            apiV1PostReconnectSocialAccount404Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount429Error1(
            out var apiV1PostReconnectSocialAccount429Error1Value)) onApiV1PostReconnectSocialAccount429Error1(
            apiV1PostReconnectSocialAccount429Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount500Error1(
            out var apiV1PostReconnectSocialAccount500Error1Value)) onApiV1PostReconnectSocialAccount500Error1(
            apiV1PostReconnectSocialAccount500Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount502Error1(
            out var apiV1PostReconnectSocialAccount502Error1Value)) onApiV1PostReconnectSocialAccount502Error1(
            apiV1PostReconnectSocialAccount502Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount503Error1(
            out var apiV1PostReconnectSocialAccount503Error1Value)) onApiV1PostReconnectSocialAccount503Error1(
            apiV1PostReconnectSocialAccount503Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccount504Error1(
            out var apiV1PostReconnectSocialAccount504Error1Value)) onApiV1PostReconnectSocialAccount504Error1(
            apiV1PostReconnectSocialAccount504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostReconnectSocialAccountError)} holds no value.");
    }

    private static Task<PostReconnectSocialAccountError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostReconnectSocialAccount400Error1>().As(
                AsApiV1PostReconnectSocialAccount400Error1),
            401 => response.Json<ApiV1PostReconnectSocialAccount401Error1>().As(
                AsApiV1PostReconnectSocialAccount401Error1),
            403 => response.Json<ApiV1PostReconnectSocialAccount403Error1>().As(
                AsApiV1PostReconnectSocialAccount403Error1),
            404 => response.Json<ApiV1PostReconnectSocialAccount404Error1>().As(
                AsApiV1PostReconnectSocialAccount404Error1),
            429 => response.Json<ApiV1PostReconnectSocialAccount429Error1>().As(
                AsApiV1PostReconnectSocialAccount429Error1),
            500 => response.Json<ApiV1PostReconnectSocialAccount500Error1>().As(
                AsApiV1PostReconnectSocialAccount500Error1),
            502 => response.Json<ApiV1PostReconnectSocialAccount502Error1>().As(
                AsApiV1PostReconnectSocialAccount502Error1),
            503 => response.Json<ApiV1PostReconnectSocialAccount503Error1>().As(
                AsApiV1PostReconnectSocialAccount503Error1),
            504 => response.Json<ApiV1PostReconnectSocialAccount504Error1>().As(
                AsApiV1PostReconnectSocialAccount504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostReconnectSocialAccountError> Response { get; } = new(Create);
}
