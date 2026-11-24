using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(StopReason1Converter))]
public record StopReason1
{
    private readonly Optional<StopReason> _stopReasonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private StopReason1(Optional<StopReason> stopReasonValue, Optional<UnknownArm> unknownValue)
    {
        _stopReasonValue = stopReasonValue;
        _unknownValue = unknownValue;
    }

    public static StopReason1 StopReason(StopReason value) => new(Optional<StopReason>.Some(value), default);

    internal static StopReason1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStopReason([NotNullWhen(true)] out StopReason? value) => _stopReasonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator StopReason1(StopReason value) => StopReason(value);

    public TResult Match<TResult>(Func<StopReason, TResult> onStopReason, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStopReason(out var stopReasonValue) => onStopReason(stopReasonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(StopReason1)} holds no value.")
        };

    public void Match(Action<StopReason> onStopReason, Action<JsonElement> otherwise)
    {
        if (TryGetStopReason(out var stopReasonValue)) onStopReason(stopReasonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(StopReason1)} holds no value.");
    }
}

file sealed class StopReason1Converter : JsonConverter<StopReason1>
{
    public override StopReason1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<StopReason>(root, options, out var stopReasonValue))
        {
            return StopReason1.StopReason(stopReasonValue);
        }
        return StopReason1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, StopReason1 value, JsonSerializerOptions options)
    {
        if (value.TryGetStopReason(out var stopReasonValue))
        {
            JsonSerializer.Serialize(writer, stopReasonValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(StopReason1)} contains no valid value to serialize.");
        }
    }
}
