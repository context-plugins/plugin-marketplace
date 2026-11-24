using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(XPlinth1Converter))]
public record XPlinth1
{
    private readonly Optional<XPlinth> _xPlinthValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private XPlinth1(Optional<XPlinth> xPlinthValue, Optional<UnknownArm> unknownValue)
    {
        _xPlinthValue = xPlinthValue;
        _unknownValue = unknownValue;
    }

    public static XPlinth1 XPlinth(XPlinth value) => new(Optional<XPlinth>.Some(value), default);

    internal static XPlinth1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetXPlinth([NotNullWhen(true)] out XPlinth? value) => _xPlinthValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator XPlinth1(XPlinth value) => XPlinth(value);

    public TResult Match<TResult>(Func<XPlinth, TResult> onXPlinth, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetXPlinth(out var xPlinthValue) => onXPlinth(xPlinthValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(XPlinth1)} holds no value.")
        };

    public void Match(Action<XPlinth> onXPlinth, Action<JsonElement> otherwise)
    {
        if (TryGetXPlinth(out var xPlinthValue)) onXPlinth(xPlinthValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(XPlinth1)} holds no value.");
    }
}

file sealed class XPlinth1Converter : JsonConverter<XPlinth1>
{
    public override XPlinth1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<XPlinth>(root, options, out var xPlinthValue))
        {
            return XPlinth1.XPlinth(xPlinthValue);
        }
        return XPlinth1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, XPlinth1 value, JsonSerializerOptions options)
    {
        if (value.TryGetXPlinth(out var xPlinthValue))
        {
            JsonSerializer.Serialize(writer, xPlinthValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(XPlinth1)} contains no valid value to serialize.");
        }
    }
}
