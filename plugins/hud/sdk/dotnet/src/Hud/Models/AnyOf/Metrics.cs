using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

/// <summary>
/// Named counts the importer reports, e.g. <c>tasks_imported</c>; set with <c>summary</c>
/// </summary>
[JsonConverter(typeof(MetricsConverter))]
public record Metrics
{
    private readonly Optional<IReadOnlyDictionary<string, double>> _mapOfDoubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Metrics(Optional<IReadOnlyDictionary<string, double>> mapOfDoubleValue, Optional<UnknownArm> unknownValue)
    {
        _mapOfDoubleValue = mapOfDoubleValue;
        _unknownValue = unknownValue;
    }

    public static Metrics MapOfDouble(IReadOnlyDictionary<string, double> value) =>
        new(Optional<IReadOnlyDictionary<string, double>>.Some(value), default);

    internal static Metrics Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfDouble([NotNullWhen(true)] out IReadOnlyDictionary<string, double>? value) =>
        _mapOfDoubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, double>, TResult> onMapOfDouble,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfDouble(out var mapOfDoubleValue) => onMapOfDouble(mapOfDoubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Metrics)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, double>> onMapOfDouble, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfDouble(out var mapOfDoubleValue)) onMapOfDouble(mapOfDoubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Metrics)} holds no value.");
    }
}

file sealed class MetricsConverter : JsonConverter<Metrics>
{
    public override Metrics Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, double>>(root, options, out var mapOfDoubleValue))
        {
            return Metrics.MapOfDouble(mapOfDoubleValue);
        }
        return Metrics.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Metrics value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfDouble(out var mapOfDoubleValue))
        {
            JsonSerializer.Serialize(writer, mapOfDoubleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Metrics)} contains no valid value to serialize.");
        }
    }
}
