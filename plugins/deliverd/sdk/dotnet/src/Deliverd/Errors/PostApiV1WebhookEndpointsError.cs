using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1WebhookEndpointsError : ApiError
{
    private readonly Optional<ApiV1WebhookEndpoints400Error1> _apiV1WebhookEndpoints400Error1Value;

    private readonly Optional<ApiV1WebhookEndpoints403Error1> _apiV1WebhookEndpoints403Error1Value;

    private PostApiV1WebhookEndpointsError(Optional<ApiV1WebhookEndpoints400Error1> apiV1WebhookEndpoints400Error1Value,
        Optional<ApiV1WebhookEndpoints403Error1> apiV1WebhookEndpoints403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1WebhookEndpoints400Error1Value = apiV1WebhookEndpoints400Error1Value;
        _apiV1WebhookEndpoints403Error1Value = apiV1WebhookEndpoints403Error1Value;
    }

    private static PostApiV1WebhookEndpointsError AsApiV1WebhookEndpoints400Error1(ApiV1WebhookEndpoints400Error1 value) =>
        new(Optional<ApiV1WebhookEndpoints400Error1>.Some(value), default, default);

    private static PostApiV1WebhookEndpointsError AsApiV1WebhookEndpoints403Error1(ApiV1WebhookEndpoints403Error1 value) =>
        new(default, Optional<ApiV1WebhookEndpoints403Error1>.Some(value), default);

    private static PostApiV1WebhookEndpointsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1WebhookEndpoints400Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints400Error1? value) =>
        _apiV1WebhookEndpoints400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value) =>
        _apiV1WebhookEndpoints403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1WebhookEndpoints400Error1, TResult> onApiV1WebhookEndpoints400Error1,
        Func<ApiV1WebhookEndpoints403Error1, TResult> onApiV1WebhookEndpoints403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1WebhookEndpoints400Error1(
                out var apiV1WebhookEndpoints400Error1Value) => onApiV1WebhookEndpoints400Error1(
                apiV1WebhookEndpoints400Error1Value),
            _ when TryGetApiV1WebhookEndpoints403Error1(
                out var apiV1WebhookEndpoints403Error1Value) => onApiV1WebhookEndpoints403Error1(
                apiV1WebhookEndpoints403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1WebhookEndpointsError)} holds no value.")
        };

    public void Match(Action<ApiV1WebhookEndpoints400Error1> onApiV1WebhookEndpoints400Error1,
        Action<ApiV1WebhookEndpoints403Error1> onApiV1WebhookEndpoints403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1WebhookEndpoints400Error1(
            out var apiV1WebhookEndpoints400Error1Value)) onApiV1WebhookEndpoints400Error1(
            apiV1WebhookEndpoints400Error1Value);
        else if (TryGetApiV1WebhookEndpoints403Error1(
            out var apiV1WebhookEndpoints403Error1Value)) onApiV1WebhookEndpoints403Error1(
            apiV1WebhookEndpoints403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1WebhookEndpointsError)} holds no value.");
    }

    private static Task<PostApiV1WebhookEndpointsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1WebhookEndpoints400Error1>().As(AsApiV1WebhookEndpoints400Error1),
            403 => response.Json<ApiV1WebhookEndpoints403Error1>().As(AsApiV1WebhookEndpoints403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1WebhookEndpointsError> Response { get; } = new(Create);
}
