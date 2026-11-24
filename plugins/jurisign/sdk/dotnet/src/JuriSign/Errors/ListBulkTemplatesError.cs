using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class ListBulkTemplatesError : ApiError
{
    private readonly Optional<MessageResponse> _messageResponseValue;

    private ListBulkTemplatesError(Optional<MessageResponse> messageResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _messageResponseValue = messageResponseValue;
    }

    private static ListBulkTemplatesError AsMessageResponse(MessageResponse value) =>
        new(Optional<MessageResponse>.Some(value), default);

    private static ListBulkTemplatesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value) =>
        _messageResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<MessageResponse, TResult> onMessageResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMessageResponse(out var messageResponseValue) => onMessageResponse(messageResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListBulkTemplatesError)} holds no value.")
        };

    public void Match(Action<MessageResponse> onMessageResponse, Action<RawError> otherwise)
    {
        if (TryGetMessageResponse(out var messageResponseValue)) onMessageResponse(messageResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListBulkTemplatesError)} holds no value.");
    }

    private static Task<ListBulkTemplatesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<MessageResponse>().As(AsMessageResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListBulkTemplatesError> Response { get; } = new(Create);
}
