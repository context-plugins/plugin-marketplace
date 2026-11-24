using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DoiT.Core.Extensions;
using DoiT.Core.Models;

namespace DoiT.Models.AnyOf;

/// <summary>
/// The content of a single cell from a BigQuery result. Can be a string, number, or null.
/// </summary>
[JsonConverter(typeof(ValueDoiTReportsApiConverter))]
public record ValueDoiTReportsApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ValueDoiTReportsApi(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<int> intValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static ValueDoiTReportsApi String(string value) =>
        new(Optional<string>.Some(value), default, default, default);

    public static ValueDoiTReportsApi Double(double value) =>
        new(default, Optional<double>.Some(value), default, default);

    public static ValueDoiTReportsApi Int(int value) => new(default, default, Optional<int>.Some(value), default);

    internal static ValueDoiTReportsApi Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ValueDoiTReportsApi(string value) => String(value);

    public static implicit operator ValueDoiTReportsApi(double value) => Double(value);

    public static implicit operator ValueDoiTReportsApi(int value) => Int(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<int, TResult> onInt,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ValueDoiTReportsApi)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<int> onInt,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ValueDoiTReportsApi)} holds no value.");
    }
}

file sealed class ValueDoiTReportsApiConverter : JsonConverter<ValueDoiTReportsApi>
{
    public override ValueDoiTReportsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return ValueDoiTReportsApi.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return ValueDoiTReportsApi.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return ValueDoiTReportsApi.Int(intValue);
            }
        }
        return ValueDoiTReportsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ValueDoiTReportsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ValueDoiTReportsApi)} contains no valid value to serialize.");
        }
    }
}
