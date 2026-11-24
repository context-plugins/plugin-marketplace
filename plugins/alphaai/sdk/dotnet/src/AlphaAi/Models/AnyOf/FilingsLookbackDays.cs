using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models.AnyOf;

[JsonConverter(typeof(FilingsLookbackDaysConverter))]
public record FilingsLookbackDays
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FilingsLookbackDays(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static FilingsLookbackDays Int(int value) => new(Optional<int>.Some(value), default);

    internal static FilingsLookbackDays Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FilingsLookbackDays(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FilingsLookbackDays)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FilingsLookbackDays)} holds no value.");
    }
}

file sealed class FilingsLookbackDaysConverter : JsonConverter<FilingsLookbackDays>
{
    public override FilingsLookbackDays Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return FilingsLookbackDays.Int(intValue);
            }
        }
        return FilingsLookbackDays.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FilingsLookbackDays value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(FilingsLookbackDays)} contains no valid value to serialize.");
        }
    }
}
