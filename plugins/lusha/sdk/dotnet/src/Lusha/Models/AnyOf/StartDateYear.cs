using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Lusha.Core.Extensions;
using Lusha.Core.Models;

namespace Lusha.Models.AnyOf;

[JsonConverter(typeof(StartDateYearConverter))]
public record StartDateYear
{
    private readonly Optional<double?> _doubleValue;

    private readonly Optional<string?> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private StartDateYear(Optional<double?> doubleValue,
        Optional<string?> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static StartDateYear Double(double? value) => new(Optional<double?>.Some(value), default, default);

    public static StartDateYear String(string? value) => new(default, Optional<string?>.Some(value), default);

    internal static StartDateYear Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double? value) => _doubleValue.TryGetValue(out value);

    public bool TryGetString(out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator StartDateYear(double? value) => Double(value);

    public static implicit operator StartDateYear(string? value) => String(value);

    public TResult Match<TResult>(Func<double?, TResult> onDouble,
        Func<string?, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(StartDateYear)} holds no value.")
        };

    public void Match(Action<double?> onDouble, Action<string?> onString, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(StartDateYear)} holds no value.");
    }
}

file sealed class StartDateYearConverter : JsonConverter<StartDateYear>
{
    public override StartDateYear Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double?>(root, options, out var doubleValue))
        {
            return StartDateYear.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return StartDateYear.String(value);
        }
        return StartDateYear.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, StartDateYear value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(StartDateYear)} contains no valid value to serialize.");
        }
    }
}
