using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Format1Converter))]
public record Format1
{
    private readonly Optional<Format> _formatValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Format1(Optional<Format> formatValue, Optional<UnknownArm> unknownValue)
    {
        _formatValue = formatValue;
        _unknownValue = unknownValue;
    }

    public static Format1 Format(Format value) => new(Optional<Format>.Some(value), default);

    internal static Format1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFormat([NotNullWhen(true)] out Format? value) => _formatValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Format1(Format value) => Format(value);

    public TResult Match<TResult>(Func<Format, TResult> onFormat, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFormat(out var formatValue) => onFormat(formatValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Format1)} holds no value.")
        };

    public void Match(Action<Format> onFormat, Action<JsonElement> otherwise)
    {
        if (TryGetFormat(out var formatValue)) onFormat(formatValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Format1)} holds no value.");
    }
}

file sealed class Format1Converter : JsonConverter<Format1>
{
    public override Format1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Format>(root, options, out var formatValue))
        {
            return Format1.Format(formatValue);
        }
        return Format1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Format1 value, JsonSerializerOptions options)
    {
        if (value.TryGetFormat(out var formatValue))
        {
            JsonSerializer.Serialize(writer, formatValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Format1)} contains no valid value to serialize.");
        }
    }
}
