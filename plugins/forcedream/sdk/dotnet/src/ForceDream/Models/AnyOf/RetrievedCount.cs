using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ForceDream.Core.Extensions;
using ForceDream.Core.Models;

namespace ForceDream.Models.AnyOf;

[JsonConverter(typeof(RetrievedCountConverter))]
public record RetrievedCount
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RetrievedCount(Optional<double> doubleValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static RetrievedCount Double(double value) => new(Optional<double>.Some(value), default, default);

    public static RetrievedCount String(string value) => new(default, Optional<string>.Some(value), default);

    internal static RetrievedCount Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RetrievedCount(double value) => Double(value);

    public static implicit operator RetrievedCount(string value) => String(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RetrievedCount)} holds no value.")
        };

    public void Match(Action<double> onDouble, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RetrievedCount)} holds no value.");
    }
}

file sealed class RetrievedCountConverter : JsonConverter<RetrievedCount>
{
    public override RetrievedCount Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return RetrievedCount.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return RetrievedCount.String(value);
        }
        return RetrievedCount.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RetrievedCount value, JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
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
            throw new JsonException($"{nameof(RetrievedCount)} contains no valid value to serialize.");
        }
    }
}
