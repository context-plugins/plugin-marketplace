using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models.OneOf;

[JsonConverter(typeof(EventsResponseConverter))]
public record EventsResponse
{
    private readonly Optional<ClickEvent> _clickEventValue;

    private readonly Optional<LeadEvent> _leadEventValue;

    private readonly Optional<SaleEvent> _saleEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventsResponse(Optional<ClickEvent> clickEventValue,
        Optional<LeadEvent> leadEventValue,
        Optional<SaleEvent> saleEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _clickEventValue = clickEventValue;
        _leadEventValue = leadEventValue;
        _saleEventValue = saleEventValue;
        _unknownValue = unknownValue;
    }

    public static EventsResponse ClickEvent(ClickEvent value) =>
        new(Optional<ClickEvent>.Some(value), default, default, default);

    public static EventsResponse LeadEvent(LeadEvent value) =>
        new(default, Optional<LeadEvent>.Some(value), default, default);

    public static EventsResponse SaleEvent(SaleEvent value) =>
        new(default, default, Optional<SaleEvent>.Some(value), default);

    internal static EventsResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetClickEvent([NotNullWhen(true)] out ClickEvent? value) => _clickEventValue.TryGetValue(out value);

    public bool TryGetLeadEvent([NotNullWhen(true)] out LeadEvent? value) => _leadEventValue.TryGetValue(out value);

    public bool TryGetSaleEvent([NotNullWhen(true)] out SaleEvent? value) => _saleEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventsResponse(ClickEvent value) => ClickEvent(value);

    public static implicit operator EventsResponse(LeadEvent value) => LeadEvent(value);

    public static implicit operator EventsResponse(SaleEvent value) => SaleEvent(value);

    public TResult Match<TResult>(Func<ClickEvent, TResult> onClickEvent,
        Func<LeadEvent, TResult> onLeadEvent,
        Func<SaleEvent, TResult> onSaleEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetClickEvent(out var clickEventValue) => onClickEvent(clickEventValue),
            _ when TryGetLeadEvent(out var leadEventValue) => onLeadEvent(leadEventValue),
            _ when TryGetSaleEvent(out var saleEventValue) => onSaleEvent(saleEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventsResponse)} holds no value.")
        };

    public void Match(Action<ClickEvent> onClickEvent,
        Action<LeadEvent> onLeadEvent,
        Action<SaleEvent> onSaleEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetClickEvent(out var clickEventValue)) onClickEvent(clickEventValue);
        else if (TryGetLeadEvent(out var leadEventValue)) onLeadEvent(leadEventValue);
        else if (TryGetSaleEvent(out var saleEventValue)) onSaleEvent(saleEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventsResponse)} holds no value.");
    }
}

file sealed class EventsResponseConverter : JsonConverter<EventsResponse>
{
    public override EventsResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("event", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'event' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "click" => EventsResponse.ClickEvent(root.Deserialize<ClickEvent>(options)!),
            "lead" => EventsResponse.LeadEvent(root.Deserialize<LeadEvent>(options)!),
            "sale" => EventsResponse.SaleEvent(root.Deserialize<SaleEvent>(options)!),
            _ => EventsResponse.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, EventsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetClickEvent(out var clickEventValue))
        {
            JsonSerializer.Serialize(writer, clickEventValue, options);
        }
        else if (value.TryGetLeadEvent(out var leadEventValue))
        {
            JsonSerializer.Serialize(writer, leadEventValue, options);
        }
        else if (value.TryGetSaleEvent(out var saleEventValue))
        {
            JsonSerializer.Serialize(writer, saleEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EventsResponse)} contains no valid value to serialize.");
        }
    }
}
