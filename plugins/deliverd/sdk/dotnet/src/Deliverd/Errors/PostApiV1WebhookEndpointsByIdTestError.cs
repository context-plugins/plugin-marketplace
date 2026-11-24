using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1WebhookEndpointsByIdTestError : ApiError
{
    private readonly Optional<ApiV1WebhookEndpointsTest400Error1> _apiV1WebhookEndpointsTest400Error1Value;

    private readonly Optional<ApiV1WebhookEndpointsTest403Error1> _apiV1WebhookEndpointsTest403Error1Value;

    private readonly Optional<ApiV1WebhookEndpointsTest404Error1> _apiV1WebhookEndpointsTest404Error1Value;

    private PostApiV1WebhookEndpointsByIdTestError(Optional<ApiV1WebhookEndpointsTest400Error1> apiV1WebhookEndpointsTest400Error1Value,
        Optional<ApiV1WebhookEndpointsTest403Error1> apiV1WebhookEndpointsTest403Error1Value,
        Optional<ApiV1WebhookEndpointsTest404Error1> apiV1WebhookEndpointsTest404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1WebhookEndpointsTest400Error1Value = apiV1WebhookEndpointsTest400Error1Value;
        _apiV1WebhookEndpointsTest403Error1Value = apiV1WebhookEndpointsTest403Error1Value;
        _apiV1WebhookEndpointsTest404Error1Value = apiV1WebhookEndpointsTest404Error1Value;
    }

    private static PostApiV1WebhookEndpointsByIdTestError AsApiV1WebhookEndpointsTest400Error1(ApiV1WebhookEndpointsTest400Error1 value) =>
        new(Optional<ApiV1WebhookEndpointsTest400Error1>.Some(value), default, default, default);

    private static PostApiV1WebhookEndpointsByIdTestError AsApiV1WebhookEndpointsTest403Error1(ApiV1WebhookEndpointsTest403Error1 value) =>
        new(default, Optional<ApiV1WebhookEndpointsTest403Error1>.Some(value), default, default);

    private static PostApiV1WebhookEndpointsByIdTestError AsApiV1WebhookEndpointsTest404Error1(ApiV1WebhookEndpointsTest404Error1 value) =>
        new(default, default, Optional<ApiV1WebhookEndpointsTest404Error1>.Some(value), default);

    private static PostApiV1WebhookEndpointsByIdTestError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1WebhookEndpointsTest400Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest400Error1? value) =>
        _apiV1WebhookEndpointsTest400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1WebhookEndpointsTest403Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest403Error1? value) =>
        _apiV1WebhookEndpointsTest403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1WebhookEndpointsTest404Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest404Error1? value) =>
        _apiV1WebhookEndpointsTest404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1WebhookEndpointsTest400Error1, TResult> onApiV1WebhookEndpointsTest400Error1,
        Func<ApiV1WebhookEndpointsTest403Error1, TResult> onApiV1WebhookEndpointsTest403Error1,
        Func<ApiV1WebhookEndpointsTest404Error1, TResult> onApiV1WebhookEndpointsTest404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1WebhookEndpointsTest400Error1(
                out var apiV1WebhookEndpointsTest400Error1Value) => onApiV1WebhookEndpointsTest400Error1(
                apiV1WebhookEndpointsTest400Error1Value),
            _ when TryGetApiV1WebhookEndpointsTest403Error1(
                out var apiV1WebhookEndpointsTest403Error1Value) => onApiV1WebhookEndpointsTest403Error1(
                apiV1WebhookEndpointsTest403Error1Value),
            _ when TryGetApiV1WebhookEndpointsTest404Error1(
                out var apiV1WebhookEndpointsTest404Error1Value) => onApiV1WebhookEndpointsTest404Error1(
                apiV1WebhookEndpointsTest404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostApiV1WebhookEndpointsByIdTestError)} holds no value.")
        };

    public void Match(Action<ApiV1WebhookEndpointsTest400Error1> onApiV1WebhookEndpointsTest400Error1,
        Action<ApiV1WebhookEndpointsTest403Error1> onApiV1WebhookEndpointsTest403Error1,
        Action<ApiV1WebhookEndpointsTest404Error1> onApiV1WebhookEndpointsTest404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1WebhookEndpointsTest400Error1(
            out var apiV1WebhookEndpointsTest400Error1Value)) onApiV1WebhookEndpointsTest400Error1(
            apiV1WebhookEndpointsTest400Error1Value);
        else if (TryGetApiV1WebhookEndpointsTest403Error1(
            out var apiV1WebhookEndpointsTest403Error1Value)) onApiV1WebhookEndpointsTest403Error1(
            apiV1WebhookEndpointsTest403Error1Value);
        else if (TryGetApiV1WebhookEndpointsTest404Error1(
            out var apiV1WebhookEndpointsTest404Error1Value)) onApiV1WebhookEndpointsTest404Error1(
            apiV1WebhookEndpointsTest404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1WebhookEndpointsByIdTestError)} holds no value.");
    }

    private static Task<PostApiV1WebhookEndpointsByIdTestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1WebhookEndpointsTest400Error1>().As(AsApiV1WebhookEndpointsTest400Error1),
            403 => response.Json<ApiV1WebhookEndpointsTest403Error1>().As(AsApiV1WebhookEndpointsTest403Error1),
            404 => response.Json<ApiV1WebhookEndpointsTest404Error1>().As(AsApiV1WebhookEndpointsTest404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1WebhookEndpointsByIdTestError> Response { get; } = new(Create);
}
