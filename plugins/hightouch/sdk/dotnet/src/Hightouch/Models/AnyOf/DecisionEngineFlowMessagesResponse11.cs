using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowMessagesResponse11Converter))]
public record DecisionEngineFlowMessagesResponse11
{
    private readonly Optional<DecisionEngineMessage> _decisionEngineMessageValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowMessagesResponse11(Optional<DecisionEngineMessage> decisionEngineMessageValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineMessageValue = decisionEngineMessageValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowMessagesResponse11 DecisionEngineMessage(DecisionEngineMessage value) =>
        new(Optional<DecisionEngineMessage>.Some(value), default, default, default);

    public static DecisionEngineFlowMessagesResponse11 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowMessagesResponse11 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowMessagesResponse11 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineMessage([NotNullWhen(true)] out DecisionEngineMessage? value) =>
        _decisionEngineMessageValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowMessagesResponse11(DecisionEngineMessage value) =>
        DecisionEngineMessage(value);

    public static implicit operator DecisionEngineFlowMessagesResponse11(ValidateErrorJson value) =>
        ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowMessagesResponse11(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineMessage, TResult> onDecisionEngineMessage,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineMessage(out var decisionEngineMessageValue) => onDecisionEngineMessage(
                decisionEngineMessageValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse11)} holds no value.")
        };

    public void Match(Action<DecisionEngineMessage> onDecisionEngineMessage,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineMessage(out var decisionEngineMessageValue)) onDecisionEngineMessage(
            decisionEngineMessageValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse11)} holds no value.");
    }
}

file sealed class DecisionEngineFlowMessagesResponse11Converter : JsonConverter<DecisionEngineFlowMessagesResponse11>
{
    public override DecisionEngineFlowMessagesResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineMessage>(root, options, out var decisionEngineMessageValue))
        {
            return DecisionEngineFlowMessagesResponse11.DecisionEngineMessage(decisionEngineMessageValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowMessagesResponse11.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowMessagesResponse11.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowMessagesResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowMessagesResponse11 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineMessage(out var decisionEngineMessageValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineMessageValue, options);
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
                $"{nameof(DecisionEngineFlowMessagesResponse11)} contains no valid value to serialize.");
        }
    }
}
