using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(EventsDomainsResponse1Converter))]
public record EventsDomainsResponse1
{
    private readonly Optional<EventDomain> _eventDomainValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventsDomainsResponse1(Optional<EventDomain> eventDomainValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _eventDomainValue = eventDomainValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static EventsDomainsResponse1 EventDomain(EventDomain value) =>
        new(Optional<EventDomain>.Some(value), default, default, default);

    public static EventsDomainsResponse1 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static EventsDomainsResponse1 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static EventsDomainsResponse1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEventDomain([NotNullWhen(true)] out EventDomain? value) =>
        _eventDomainValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventsDomainsResponse1(EventDomain value) => EventDomain(value);

    public static implicit operator EventsDomainsResponse1(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator EventsDomainsResponse1(InternalServerError value) => InternalServerError(value);

    public TResult Match<TResult>(Func<EventDomain, TResult> onEventDomain,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEventDomain(out var eventDomainValue) => onEventDomain(eventDomainValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventsDomainsResponse1)} holds no value.")
        };

    public void Match(Action<EventDomain> onEventDomain,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetEventDomain(out var eventDomainValue)) onEventDomain(eventDomainValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventsDomainsResponse1)} holds no value.");
    }
}

file sealed class EventsDomainsResponse1Converter : JsonConverter<EventsDomainsResponse1>
{
    public override EventsDomainsResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EventDomain>(root, options, out var eventDomainValue))
        {
            return EventsDomainsResponse1.EventDomain(eventDomainValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return EventsDomainsResponse1.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return EventsDomainsResponse1.InternalServerError(internalServerErrorValue);
        }
        return EventsDomainsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EventsDomainsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetEventDomain(out var eventDomainValue))
        {
            JsonSerializer.Serialize(writer, eventDomainValue, options);
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
            throw new JsonException($"{nameof(EventsDomainsResponse1)} contains no valid value to serialize.");
        }
    }
}
