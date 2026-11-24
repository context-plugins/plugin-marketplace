using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class CreateWebhookError : ApiError
{
    private readonly Optional<MessageResponse> _messageResponseValue;

    private readonly Optional<ValidationError1> _validationError1Value;

    private CreateWebhookError(Optional<MessageResponse> messageResponseValue,
        Optional<ValidationError1> validationError1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _messageResponseValue = messageResponseValue;
        _validationError1Value = validationError1Value;
    }

    private static CreateWebhookError AsMessageResponse(MessageResponse value) =>
        new(Optional<MessageResponse>.Some(value), default, default);

    private static CreateWebhookError AsValidationError1(ValidationError1 value) =>
        new(default, Optional<ValidationError1>.Some(value), default);

    private static CreateWebhookError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value) =>
        _messageResponseValue.TryGetValue(out value);

    public bool TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value) =>
        _validationError1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<MessageResponse, TResult> onMessageResponse,
        Func<ValidationError1, TResult> onValidationError1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMessageResponse(out var messageResponseValue) => onMessageResponse(messageResponseValue),
            _ when TryGetValidationError1(out var validationError1Value) => onValidationError1(validationError1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateWebhookError)} holds no value.")
        };

    public void Match(Action<MessageResponse> onMessageResponse,
        Action<ValidationError1> onValidationError1,
        Action<RawError> otherwise)
    {
        if (TryGetMessageResponse(out var messageResponseValue)) onMessageResponse(messageResponseValue);
        else if (TryGetValidationError1(out var validationError1Value)) onValidationError1(validationError1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateWebhookError)} holds no value.");
    }

    private static Task<CreateWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<MessageResponse>().As(AsMessageResponse),
            422 => response.Json<ValidationError1>().As(AsValidationError1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateWebhookError> Response { get; } = new(Create);
}
