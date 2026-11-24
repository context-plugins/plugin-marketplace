using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowsResponse1Converter))]
public record DecisionEngineFlowsResponse1
{
    private readonly Optional<DecisionEngineFlowsResponse> _decisionEngineFlowsResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowsResponse1(Optional<DecisionEngineFlowsResponse> decisionEngineFlowsResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineFlowsResponseValue = decisionEngineFlowsResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowsResponse1 DecisionEngineFlowsResponse(DecisionEngineFlowsResponse value) =>
        new(Optional<DecisionEngineFlowsResponse>.Some(value), default, default, default);

    public static DecisionEngineFlowsResponse1 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowsResponse1 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowsResponse1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineFlowsResponse([NotNullWhen(true)] out DecisionEngineFlowsResponse? value) =>
        _decisionEngineFlowsResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowsResponse1(DecisionEngineFlowsResponse value) =>
        DecisionEngineFlowsResponse(value);

    public static implicit operator DecisionEngineFlowsResponse1(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowsResponse1(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineFlowsResponse, TResult> onDecisionEngineFlowsResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineFlowsResponse(
                out var decisionEngineFlowsResponseValue) => onDecisionEngineFlowsResponse(
                decisionEngineFlowsResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowsResponse1)} holds no value.")
        };

    public void Match(Action<DecisionEngineFlowsResponse> onDecisionEngineFlowsResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineFlowsResponse(out var decisionEngineFlowsResponseValue)) onDecisionEngineFlowsResponse(
            decisionEngineFlowsResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowsResponse1)} holds no value.");
    }
}

file sealed class DecisionEngineFlowsResponse1Converter : JsonConverter<DecisionEngineFlowsResponse1>
{
    public override DecisionEngineFlowsResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineFlowsResponse>(
            root,
            options,
            out var decisionEngineFlowsResponseValue))
        {
            return DecisionEngineFlowsResponse1.DecisionEngineFlowsResponse(decisionEngineFlowsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowsResponse1.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowsResponse1.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DecisionEngineFlowsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineFlowsResponse(out var decisionEngineFlowsResponseValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineFlowsResponseValue, options);
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
            throw new JsonException($"{nameof(DecisionEngineFlowsResponse1)} contains no valid value to serialize.");
        }
    }
}
