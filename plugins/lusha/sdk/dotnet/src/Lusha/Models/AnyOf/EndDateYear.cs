using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models.AnyOf;

[JsonConverter(typeof(EndDateYearConverter))]
public record EndDateYear
{
    private readonly Optional<int?> _intValue;

    private readonly Optional<string?> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EndDateYear(Optional<int?> intValue, Optional<string?> stringValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static EndDateYear Int(int? value) => new(Optional<int?>.Some(value), default, default);

    public static EndDateYear String(string? value) => new(default, Optional<string?>.Some(value), default);

    internal static EndDateYear Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int? value) => _intValue.TryGetValue(out value);

    public bool TryGetString(out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EndDateYear(int? value) => Int(value);

    public static implicit operator EndDateYear(string? value) => String(value);

    public TResult Match<TResult>(Func<int?, TResult> onInt,
        Func<string?, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EndDateYear)} holds no value.")
        };

    public void Match(Action<int?> onInt, Action<string?> onString, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EndDateYear)} holds no value.");
    }
}

file sealed class EndDateYearConverter : JsonConverter<EndDateYear>
{
    public override EndDateYear Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return EndDateYear.Int(intValue);
            }
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return EndDateYear.String(value);
        }
        return EndDateYear.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EndDateYear value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EndDateYear)} contains no valid value to serialize.");
        }
    }
}
