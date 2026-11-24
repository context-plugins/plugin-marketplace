using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;
using Sapling.Core.Validation;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(Field1Converter))]
public record Field1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Field> _fieldValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Field1(Optional<string> stringValue, Optional<Field> fieldValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _fieldValue = fieldValue;
        _unknownValue = unknownValue;
    }

    public static Field1 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Field1 Field(Field value) => new(default, Optional<Field>.Some(value), default);

    internal static Field1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetField([NotNullWhen(true)] out Field? value) => _fieldValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Field1(string value) => String(value);

    public static implicit operator Field1(Field value) => Field(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Field, TResult> onField,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetField(out var fieldValue) => onField(fieldValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Field1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<Field> onField, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetField(out var fieldValue)) onField(fieldValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Field1)} holds no value.");
    }
}

file sealed class Field1Converter : JsonConverter<Field1>
{
    public override Field1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(50))
            {
                return Field1.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Field>(root, options, out var fieldValue))
        {
            return Field1.Field(fieldValue);
        }
        return Field1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Field1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetField(out var fieldValue))
        {
            JsonSerializer.Serialize(writer, fieldValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Field1)} contains no valid value to serialize.");
        }
    }
}
