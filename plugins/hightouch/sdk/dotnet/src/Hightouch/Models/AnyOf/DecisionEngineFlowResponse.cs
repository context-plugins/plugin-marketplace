using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowResponseConverter))]
public record DecisionEngineFlowResponse
{
    private readonly Optional<DecisionEngineFlow> _decisionEngineFlowValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowResponse(Optional<DecisionEngineFlow> decisionEngineFlowValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineFlowValue = decisionEngineFlowValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowResponse DecisionEngineFlow(DecisionEngineFlow value) =>
        new(Optional<DecisionEngineFlow>.Some(value), default, default, default);

    public static DecisionEngineFlowResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowResponse InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineFlow([NotNullWhen(true)] out DecisionEngineFlow? value) =>
        _decisionEngineFlowValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowResponse(DecisionEngineFlow value) => DecisionEngineFlow(value);

    public static implicit operator DecisionEngineFlowResponse(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowResponse(InternalServerError value) => InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineFlow, TResult> onDecisionEngineFlow,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineFlow(out var decisionEngineFlowValue) => onDecisionEngineFlow(
                decisionEngineFlowValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowResponse)} holds no value.")
        };

    public void Match(Action<DecisionEngineFlow> onDecisionEngineFlow,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineFlow(out var decisionEngineFlowValue)) onDecisionEngineFlow(decisionEngineFlowValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowResponse)} holds no value.");
    }
}

file sealed class DecisionEngineFlowResponseConverter : JsonConverter<DecisionEngineFlowResponse>
{
    public override DecisionEngineFlowResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineFlow>(root, options, out var decisionEngineFlowValue))
        {
            return DecisionEngineFlowResponse.DecisionEngineFlow(decisionEngineFlowValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowResponse.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DecisionEngineFlowResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineFlow(out var decisionEngineFlowValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineFlowValue, options);
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
            throw new JsonException($"{nameof(DecisionEngineFlowResponse)} contains no valid value to serialize.");
        }
    }
}
