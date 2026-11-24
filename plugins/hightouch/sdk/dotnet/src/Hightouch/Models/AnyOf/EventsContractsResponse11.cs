using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(EventsContractsResponse11Converter))]
public record EventsContractsResponse11
{
    private readonly Optional<EventContractUpdate> _eventContractUpdateValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventsContractsResponse11(Optional<EventContractUpdate> eventContractUpdateValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _eventContractUpdateValue = eventContractUpdateValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static EventsContractsResponse11 EventContractUpdate(EventContractUpdate value) =>
        new(Optional<EventContractUpdate>.Some(value), default, default, default);

    public static EventsContractsResponse11 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static EventsContractsResponse11 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static EventsContractsResponse11 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEventContractUpdate([NotNullWhen(true)] out EventContractUpdate? value) =>
        _eventContractUpdateValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventsContractsResponse11(EventContractUpdate value) => EventContractUpdate(value);

    public static implicit operator EventsContractsResponse11(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator EventsContractsResponse11(InternalServerError value) => InternalServerError(value);

    public TResult Match<TResult>(Func<EventContractUpdate, TResult> onEventContractUpdate,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEventContractUpdate(out var eventContractUpdateValue) => onEventContractUpdate(
                eventContractUpdateValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventsContractsResponse11)} holds no value.")
        };

    public void Match(Action<EventContractUpdate> onEventContractUpdate,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetEventContractUpdate(out var eventContractUpdateValue)) onEventContractUpdate(
            eventContractUpdateValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventsContractsResponse11)} holds no value.");
    }
}

file sealed class EventsContractsResponse11Converter : JsonConverter<EventsContractsResponse11>
{
    public override EventsContractsResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EventContractUpdate>(root, options, out var eventContractUpdateValue))
        {
            return EventsContractsResponse11.EventContractUpdate(eventContractUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return EventsContractsResponse11.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return EventsContractsResponse11.InternalServerError(internalServerErrorValue);
        }
        return EventsContractsResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EventsContractsResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetEventContractUpdate(out var eventContractUpdateValue))
        {
            JsonSerializer.Serialize(writer, eventContractUpdateValue, options);
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
            throw new JsonException($"{nameof(EventsContractsResponse11)} contains no valid value to serialize.");
        }
    }
}
