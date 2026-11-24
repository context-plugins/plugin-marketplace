using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowMessagesCloneResponseConverter))]
public record DecisionEngineFlowMessagesCloneResponse
{
    private readonly Optional<DecisionEngineMessage> _decisionEngineMessageValue;

    private readonly Optional<DecisionEngineErrorResponse> _decisionEngineErrorResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowMessagesCloneResponse(Optional<DecisionEngineMessage> decisionEngineMessageValue,
        Optional<DecisionEngineErrorResponse> decisionEngineErrorResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineMessageValue = decisionEngineMessageValue;
        _decisionEngineErrorResponseValue = decisionEngineErrorResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowMessagesCloneResponse DecisionEngineMessage(DecisionEngineMessage value) =>
        new(Optional<DecisionEngineMessage>.Some(value), default, default, default, default);

    public static DecisionEngineFlowMessagesCloneResponse DecisionEngineErrorResponse(DecisionEngineErrorResponse value) =>
        new(default, Optional<DecisionEngineErrorResponse>.Some(value), default, default, default);

    public static DecisionEngineFlowMessagesCloneResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowMessagesCloneResponse InternalServerError(InternalServerError value) =>
        new(default, default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowMessagesCloneResponse Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineMessage([NotNullWhen(true)] out DecisionEngineMessage? value) =>
        _decisionEngineMessageValue.TryGetValue(out value);

    public bool TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value) =>
        _decisionEngineErrorResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse(DecisionEngineMessage value) =>
        DecisionEngineMessage(value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse(DecisionEngineErrorResponse value) =>
        DecisionEngineErrorResponse(value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse(ValidateErrorJson value) =>
        ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineMessage, TResult> onDecisionEngineMessage,
        Func<DecisionEngineErrorResponse, TResult> onDecisionEngineErrorResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineMessage(out var decisionEngineMessageValue) => onDecisionEngineMessage(
                decisionEngineMessageValue),
            _ when TryGetDecisionEngineErrorResponse(
                out var decisionEngineErrorResponseValue) => onDecisionEngineErrorResponse(
                decisionEngineErrorResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(DecisionEngineFlowMessagesCloneResponse)} holds no value.")
        };

    public void Match(Action<DecisionEngineMessage> onDecisionEngineMessage,
        Action<DecisionEngineErrorResponse> onDecisionEngineErrorResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineMessage(out var decisionEngineMessageValue)) onDecisionEngineMessage(
            decisionEngineMessageValue);
        else if (TryGetDecisionEngineErrorResponse(
            out var decisionEngineErrorResponseValue)) onDecisionEngineErrorResponse(decisionEngineErrorResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesCloneResponse)} holds no value.");
    }
}

file sealed class DecisionEngineFlowMessagesCloneResponseConverter : JsonConverter<DecisionEngineFlowMessagesCloneResponse>
{
    public override DecisionEngineFlowMessagesCloneResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineMessage>(root, options, out var decisionEngineMessageValue))
        {
            return DecisionEngineFlowMessagesCloneResponse.DecisionEngineMessage(decisionEngineMessageValue);
        }
        if (JsonSerializer.TryDeserialize<DecisionEngineErrorResponse>(
            root,
            options,
            out var decisionEngineErrorResponseValue))
        {
            return DecisionEngineFlowMessagesCloneResponse.DecisionEngineErrorResponse(
                decisionEngineErrorResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowMessagesCloneResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowMessagesCloneResponse.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowMessagesCloneResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowMessagesCloneResponse value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineMessage(out var decisionEngineMessageValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineMessageValue, options);
        }
        else if (value.TryGetDecisionEngineErrorResponse(out var decisionEngineErrorResponseValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineErrorResponseValue, options);
        }
        else if (value.TryGetValidateErrorJson(out var validateErrorJsonValue))
        {
            JsonSerializer.Serialize(writer, validateErrorJsonValue, options);
        }
        else if (value.TryGetInternalServerError(out var internalServerErrorValue))
        {
            JsonSerializer.Serialize(writer, internalServerErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(DecisionEngineFlowMessagesCloneResponse)} contains no valid value to serialize.");
        }
    }
}
