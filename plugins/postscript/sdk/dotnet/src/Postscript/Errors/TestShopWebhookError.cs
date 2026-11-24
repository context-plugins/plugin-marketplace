using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class TestShopWebhookError : ApiError
{
    private readonly Optional<ApiV2WebhooksTest400Error1> _apiV2WebhooksTest400Error1Value;

    private TestShopWebhookError(Optional<ApiV2WebhooksTest400Error1> apiV2WebhooksTest400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2WebhooksTest400Error1Value = apiV2WebhooksTest400Error1Value;
    }

    private static TestShopWebhookError AsApiV2WebhooksTest400Error1(ApiV2WebhooksTest400Error1 value) =>
        new(Optional<ApiV2WebhooksTest400Error1>.Some(value), default);

    private static TestShopWebhookError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2WebhooksTest400Error1([NotNullWhen(true)] out ApiV2WebhooksTest400Error1? value) =>
        _apiV2WebhooksTest400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2WebhooksTest400Error1, TResult> onApiV2WebhooksTest400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2WebhooksTest400Error1(
                out var apiV2WebhooksTest400Error1Value) => onApiV2WebhooksTest400Error1(
                apiV2WebhooksTest400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TestShopWebhookError)} holds no value.")
        };

    public void Match(Action<ApiV2WebhooksTest400Error1> onApiV2WebhooksTest400Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2WebhooksTest400Error1(out var apiV2WebhooksTest400Error1Value)) onApiV2WebhooksTest400Error1(
            apiV2WebhooksTest400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TestShopWebhookError)} holds no value.");
    }

    private static Task<TestShopWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV2WebhooksTest400Error1>().As(AsApiV2WebhooksTest400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TestShopWebhookError> Response { get; } = new(Create);
}
