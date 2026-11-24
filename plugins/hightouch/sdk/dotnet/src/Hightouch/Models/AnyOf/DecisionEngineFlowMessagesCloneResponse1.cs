using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowMessagesCloneResponse1Converter))]
public record DecisionEngineFlowMessagesCloneResponse1
{
    private readonly Optional<DecisionEngineErrorResponse> _decisionEngineErrorResponseValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowMessagesCloneResponse1(Optional<DecisionEngineErrorResponse> decisionEngineErrorResponseValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _decisionEngineErrorResponseValue = decisionEngineErrorResponseValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowMessagesCloneResponse1 DecisionEngineErrorResponse(DecisionEngineErrorResponse value) =>
        new(Optional<DecisionEngineErrorResponse>.Some(value), default, default);

    public static DecisionEngineFlowMessagesCloneResponse1 InternalServerError(InternalServerError value) =>
        new(default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowMessagesCloneResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value) =>
        _decisionEngineErrorResponseValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse1(DecisionEngineErrorResponse value) =>
        DecisionEngineErrorResponse(value);

    public static implicit operator DecisionEngineFlowMessagesCloneResponse1(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<DecisionEngineErrorResponse, TResult> onDecisionEngineErrorResponse,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineErrorResponse(
                out var decisionEngineErrorResponseValue) => onDecisionEngineErrorResponse(
                decisionEngineErrorResponseValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(DecisionEngineFlowMessagesCloneResponse1)} holds no value.")
        };

    public void Match(Action<DecisionEngineErrorResponse> onDecisionEngineErrorResponse,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetDecisionEngineErrorResponse(out var decisionEngineErrorResponseValue)) onDecisionEngineErrorResponse(
            decisionEngineErrorResponseValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesCloneResponse1)} holds no value.");
    }
}

file sealed class DecisionEngineFlowMessagesCloneResponse1Converter : JsonConverter<DecisionEngineFlowMessagesCloneResponse1>
{
    public override DecisionEngineFlowMessagesCloneResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DecisionEngineErrorResponse>(
            root,
            options,
            out var decisionEngineErrorResponseValue))
        {
            return DecisionEngineFlowMessagesCloneResponse1.DecisionEngineErrorResponse(
                decisionEngineErrorResponseValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowMessagesCloneResponse1.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowMessagesCloneResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowMessagesCloneResponse1 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDecisionEngineErrorResponse(out var decisionEngineErrorResponseValue))
        {
            JsonSerializer.Serialize(writer, decisionEngineErrorResponseValue, options);
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
                $"{nameof(DecisionEngineFlowMessagesCloneResponse1)} contains no valid value to serialize.");
        }
    }
}
