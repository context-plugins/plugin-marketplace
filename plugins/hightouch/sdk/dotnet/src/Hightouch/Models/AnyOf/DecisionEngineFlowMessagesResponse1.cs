using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowMessagesResponse1Converter))]
public record DecisionEngineFlowMessagesResponse1
{
    private readonly Optional<DecisionEngineFlowMessagesResponse> _decisionEngineFlowMessagesResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowMessagesResponse1(Optional<DecisionEngineFlowMessagesResponse> decisionEngineFlowMessagesResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineFlowMessagesResponseValue = decisionEngineFlowMessagesResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowMessagesResponse1 DecisionEngineFlowMessagesResponse(DecisionEngineFlowMessagesResponse value) =>
        new(Optional<DecisionEngineFlowMessagesResponse>.Some(value), default, default, default);

    public static DecisionEngineFlowMessagesResponse1 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowMessagesResponse1 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowMessagesResponse1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineFlowMessagesResponse([NotNullWhen(true)] out DecisionEngineFlowMessagesResponse? value) =>
        _decisionEngineFlowMessagesResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowMessagesResponse1(DecisionEngineFlowMessagesResponse value) =>
        DecisionEngineFlowMessagesResponse(value);

    public static implicit operator DecisionEngineFlowMessagesResponse1(ValidateErrorJson value) =>
        ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowMessagesResponse1(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineFlowMessagesResponse, TResult> onDecisionEngineFlowMessagesResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineFlowMessagesResponse(
                out var decisionEngineFlowMessagesResponseValue) => onDecisionEngineFlowMessagesResponse(
                decisionEngineFlowMessagesResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse1)} holds no value.")
        };

    public void Match(Action<DecisionEngineFlowMessagesResponse> onDecisionEngineFlowMessagesResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineFlowMessagesResponse(
            out var decisionEngineFlowMessagesResponseValue)) onDecisionEngineFlowMessagesResponse(
            decisionEngineFlowMessagesResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse1)} holds no value.");
    }
}

file sealed class DecisionEngineFlowMessagesResponse1Converter : JsonConverter<DecisionEngineFlowMessagesResponse1>
{
    public override DecisionEngineFlowMessagesResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineFlowMessagesResponse>(
            root,
            options,
            out var decisionEngineFlowMessagesResponseValue))
        {
            return DecisionEngineFlowMessagesResponse1.DecisionEngineFlowMessagesResponse(
                decisionEngineFlowMessagesResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowMessagesResponse1.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowMessagesResponse1.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowMessagesResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowMessagesResponse1 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineFlowMessagesResponse(out var decisionEngineFlowMessagesResponseValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineFlowMessagesResponseValue, options);
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
                $"{nameof(DecisionEngineFlowMessagesResponse1)} contains no valid value to serialize.");
        }
    }
}
