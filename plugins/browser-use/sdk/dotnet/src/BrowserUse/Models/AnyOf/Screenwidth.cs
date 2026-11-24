using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Core.Validation;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Custom screen width in pixels for the browser.
/// </summary>
[JsonConverter(typeof(ScreenwidthConverter))]
public record Screenwidth
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Screenwidth(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static Screenwidth Int(int value) => new(Optional<int>.Some(value), default);

    internal static Screenwidth Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Screenwidth(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Screenwidth)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Screenwidth)} holds no value.");
    }
}

file sealed class ScreenwidthConverter : JsonConverter<Screenwidth>
{
    public override Screenwidth Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue) && intValue.MeetsMinimum(320) && intValue.MeetsMaximum(6144))
            {
                return Screenwidth.Int(intValue);
            }
        }
        return Screenwidth.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Screenwidth value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Screenwidth)} contains no valid value to serialize.");
        }
    }
}
