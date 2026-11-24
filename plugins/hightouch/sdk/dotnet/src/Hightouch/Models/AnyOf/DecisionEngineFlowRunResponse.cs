using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowRunResponseConverter))]
public record DecisionEngineFlowRunResponse
{
    private readonly Optional<DecisionEngineRunResponse> _decisionEngineRunResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowRunResponse(Optional<DecisionEngineRunResponse> decisionEngineRunResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineRunResponseValue = decisionEngineRunResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowRunResponse DecisionEngineRunResponse(DecisionEngineRunResponse value) =>
        new(Optional<DecisionEngineRunResponse>.Some(value), default, default, default);

    public static DecisionEngineFlowRunResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowRunResponse InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowRunResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineRunResponse([NotNullWhen(true)] out DecisionEngineRunResponse? value) =>
        _decisionEngineRunResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowRunResponse(DecisionEngineRunResponse value) =>
        DecisionEngineRunResponse(value);

    public static implicit operator DecisionEngineFlowRunResponse(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowRunResponse(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineRunResponse, TResult> onDecisionEngineRunResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineRunResponse(
                out var decisionEngineRunResponseValue) => onDecisionEngineRunResponse(decisionEngineRunResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowRunResponse)} holds no value.")
        };

    public void Match(Action<DecisionEngineRunResponse> onDecisionEngineRunResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineRunResponse(out var decisionEngineRunResponseValue)) onDecisionEngineRunResponse(
            decisionEngineRunResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowRunResponse)} holds no value.");
    }
}

file sealed class DecisionEngineFlowRunResponseConverter : JsonConverter<DecisionEngineFlowRunResponse>
{
    public override DecisionEngineFlowRunResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineRunResponse>(
            root,
            options,
            out var decisionEngineRunResponseValue))
        {
            return DecisionEngineFlowRunResponse.DecisionEngineRunResponse(decisionEngineRunResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowRunResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowRunResponse.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowRunResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowRunResponse value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineRunResponse(out var decisionEngineRunResponseValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineRunResponseValue, options);
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
            throw new JsonException($"{nameof(DecisionEngineFlowRunResponse)} contains no valid value to serialize.");
        }
    }
}
