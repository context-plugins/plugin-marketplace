using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Lusha.Core.Extensions;
using Lusha.Core.Models;

namespace Lusha.Models.AnyOf;

[JsonConverter(typeof(StartDateMonthConverter))]
public record StartDateMonth
{
    private readonly Optional<double?> _doubleValue;

    private readonly Optional<string?> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private StartDateMonth(Optional<double?> doubleValue,
        Optional<string?> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static StartDateMonth Double(double? value) => new(Optional<double?>.Some(value), default, default);

    public static StartDateMonth String(string? value) => new(default, Optional<string?>.Some(value), default);

    internal static StartDateMonth Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double? value) => _doubleValue.TryGetValue(out value);

    public bool TryGetString(out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator StartDateMonth(double? value) => Double(value);

    public static implicit operator StartDateMonth(string? value) => String(value);

    public TResult Match<TResult>(Func<double?, TResult> onDouble,
        Func<string?, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(StartDateMonth)} holds no value.")
        };

    public void Match(Action<double?> onDouble, Action<string?> onString, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(StartDateMonth)} holds no value.");
    }
}

file sealed class StartDateMonthConverter : JsonConverter<StartDateMonth>
{
    public override StartDateMonth Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double?>(root, options, out var doubleValue))
        {
            return StartDateMonth.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return StartDateMonth.String(value);
        }
        return StartDateMonth.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, StartDateMonth value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(StartDateMonth)} contains no valid value to serialize.");
        }
    }
}
