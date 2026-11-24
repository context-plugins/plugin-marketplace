using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

[JsonConverter(typeof(ValueConverter))]
public record Value
{
    private readonly Optional<DateTimeOffset> _dateValue;

    private readonly Optional<IReadOnlyList<DateTimeOffset>> _listOfDateValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Value(Optional<DateTimeOffset> dateValue,
        Optional<IReadOnlyList<DateTimeOffset>> listOfDateValue,
        Optional<IReadOnlyList<string>> listOfStringValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _dateValue = dateValue;
        _listOfDateValue = listOfDateValue;
        _listOfStringValue = listOfStringValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Value Date(DateTimeOffset value) =>
        new(Optional<DateTimeOffset>.Some(value), default, default, default, default);

    public static Value ListOfDate(IReadOnlyList<DateTimeOffset> value) =>
        new(default, Optional<IReadOnlyList<DateTimeOffset>>.Some(value), default, default, default);

    public static Value ListOfString(IReadOnlyList<string> value) =>
        new(default, default, Optional<IReadOnlyList<string>>.Some(value), default, default);

    public static Value String(string value) => new(default, default, default, Optional<string>.Some(value), default);

    internal static Value Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDate(out DateTimeOffset value) => _dateValue.TryGetValue(out value);

    public bool TryGetListOfDate([NotNullWhen(true)] out IReadOnlyList<DateTimeOffset>? value) =>
        _listOfDateValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Value(DateTimeOffset value) => Date(value);

    public static implicit operator Value(string value) => String(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDate,
        Func<IReadOnlyList<DateTimeOffset>, TResult> onListOfDate,
        Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDate(out var dateValue) => onDate(dateValue),
            _ when TryGetListOfDate(out var listOfDateValue) => onListOfDate(listOfDateValue),
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Value)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDate,
        Action<IReadOnlyList<DateTimeOffset>> onListOfDate,
        Action<IReadOnlyList<string>> onListOfString,
        Action<string> onString,
        Action<JsonElement> otherwise)
    {
        if (TryGetDate(out var dateValue)) onDate(dateValue);
        else if (TryGetListOfDate(out var listOfDateValue)) onListOfDate(listOfDateValue);
        else if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Value)} holds no value.");
    }
}

file sealed class ValueConverter : JsonConverter<Value>
{
    public override Value Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateValue))
        {
            return Value.Date(dateValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<DateTimeOffset>>(root, options, out var listOfDateValue))
        {
            return Value.ListOfDate(listOfDateValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return Value.ListOfString(listOfStringValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Value.String(value);
        }
        return Value.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Value value, JsonSerializerOptions options)
    {
        if (value.TryGetDate(out var dateValue))
        {
            JsonSerializer.Serialize(writer, dateValue, options);
        }
        else if (value.TryGetListOfDate(out var listOfDateValue))
        {
            JsonSerializer.Serialize(writer, listOfDateValue, options);
        }
        else if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
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
            throw new JsonException($"{nameof(Value)} contains no valid value to serialize.");
        }
    }
}
