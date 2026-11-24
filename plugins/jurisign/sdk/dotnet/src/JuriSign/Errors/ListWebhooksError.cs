using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class ListWebhooksError : ApiError
{
    private readonly Optional<MessageResponse> _messageResponseValue;

    private ListWebhooksError(Optional<MessageResponse> messageResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _messageResponseValue = messageResponseValue;
    }

    private static ListWebhooksError AsMessageResponse(MessageResponse value) =>
        new(Optional<MessageResponse>.Some(value), default);

    private static ListWebhooksError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value) =>
        _messageResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<MessageResponse, TResult> onMessageResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMessageResponse(out var messageResponseValue) => onMessageResponse(messageResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListWebhooksError)} holds no value.")
        };

    public void Match(Action<MessageResponse> onMessageResponse, Action<RawError> otherwise)
    {
        if (TryGetMessageResponse(out var messageResponseValue)) onMessageResponse(messageResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListWebhooksError)} holds no value.");
    }

    private static Task<ListWebhooksError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<MessageResponse>().As(AsMessageResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListWebhooksError> Response { get; } = new(Create);
}
