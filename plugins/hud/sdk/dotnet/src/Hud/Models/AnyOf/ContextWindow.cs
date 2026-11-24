using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ContextWindowConverter))]
public record ContextWindow
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ContextWindow(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static ContextWindow Int(int value) => new(Optional<int>.Some(value), default);

    internal static ContextWindow Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ContextWindow(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ContextWindow)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ContextWindow)} holds no value.");
    }
}

file sealed class ContextWindowConverter : JsonConverter<ContextWindow>
{
    public override ContextWindow Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return ContextWindow.Int(intValue);
            }
        }
        return ContextWindow.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ContextWindow value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ContextWindow)} contains no valid value to serialize.");
        }
    }
}
