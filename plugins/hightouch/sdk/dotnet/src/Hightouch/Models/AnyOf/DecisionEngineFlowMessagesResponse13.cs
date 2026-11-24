using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(DecisionEngineFlowMessagesResponse13Converter))]
public record DecisionEngineFlowMessagesResponse13
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<DecisionEngineErrorResponse> _decisionEngineErrorResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DecisionEngineFlowMessagesResponse13(Optional<object> anonymousObjectValue,
        Optional<DecisionEngineErrorResponse> decisionEngineErrorResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _decisionEngineErrorResponseValue = decisionEngineErrorResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static DecisionEngineFlowMessagesResponse13 AnonymousObject(object value) =>
        new(Optional<object>.Some(value), default, default, default, default);

    public static DecisionEngineFlowMessagesResponse13 DecisionEngineErrorResponse(DecisionEngineErrorResponse value) =>
        new(default, Optional<DecisionEngineErrorResponse>.Some(value), default, default, default);

    public static DecisionEngineFlowMessagesResponse13 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static DecisionEngineFlowMessagesResponse13 InternalServerError(InternalServerError value) =>
        new(default, default, default, Optional<InternalServerError>.Some(value), default);

    internal static DecisionEngineFlowMessagesResponse13 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value) =>
        _decisionEngineErrorResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DecisionEngineFlowMessagesResponse13(DecisionEngineErrorResponse value) =>
        DecisionEngineErrorResponse(value);

    public static implicit operator DecisionEngineFlowMessagesResponse13(ValidateErrorJson value) =>
        ValidateErrorJson(value);

    public static implicit operator DecisionEngineFlowMessagesResponse13(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject,
        Func<DecisionEngineErrorResponse, TResult> onDecisionEngineErrorResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetDecisionEngineErrorResponse(
                out var decisionEngineErrorResponseValue) => onDecisionEngineErrorResponse(
                decisionEngineErrorResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse13)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject,
        Action<DecisionEngineErrorResponse> onDecisionEngineErrorResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetDecisionEngineErrorResponse(
            out var decisionEngineErrorResponseValue)) onDecisionEngineErrorResponse(decisionEngineErrorResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DecisionEngineFlowMessagesResponse13)} holds no value.");
    }
}

file sealed class DecisionEngineFlowMessagesResponse13Converter : JsonConverter<DecisionEngineFlowMessagesResponse13>
{
    public override DecisionEngineFlowMessagesResponse13 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return DecisionEngineFlowMessagesResponse13.AnonymousObject(anonymousObjectValue);
        }
        if (JsonSerializer.TryDeserialize<DecisionEngineErrorResponse>(
            root,
            options,
            out var decisionEngineErrorResponseValue))
        {
            return DecisionEngineFlowMessagesResponse13.DecisionEngineErrorResponse(decisionEngineErrorResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return DecisionEngineFlowMessagesResponse13.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return DecisionEngineFlowMessagesResponse13.InternalServerError(internalServerErrorValue);
        }
        return DecisionEngineFlowMessagesResponse13.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        DecisionEngineFlowMessagesResponse13 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
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
                $"{nameof(DecisionEngineFlowMessagesResponse13)} contains no valid value to serialize.");
        }
    }
}
