using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;

namespace Postscript.Errors;

public sealed class UpdateWebhookSubscriptionError : ApiError
{
    private readonly Optional<object> _anonymousObjectValue;

    private UpdateWebhookSubscriptionError(Optional<object> anonymousObjectValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _anonymousObjectValue = anonymousObjectValue;
    }

    private static UpdateWebhookSubscriptionError AsAnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    private static UpdateWebhookSubscriptionError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateWebhookSubscriptionError)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<RawError> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateWebhookSubscriptionError)} holds no value.");
    }

    private static Task<UpdateWebhookSubscriptionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<object>().As(AsAnonymousObject),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateWebhookSubscriptionError> Response { get; } = new(Create);
}
