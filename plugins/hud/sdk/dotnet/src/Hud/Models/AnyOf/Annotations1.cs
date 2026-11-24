using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Annotations1Converter))]
public record Annotations1
{
    private readonly Optional<Annotations> _annotationsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Annotations1(Optional<Annotations> annotationsValue, Optional<UnknownArm> unknownValue)
    {
        _annotationsValue = annotationsValue;
        _unknownValue = unknownValue;
    }

    public static Annotations1 Annotations(Annotations value) => new(Optional<Annotations>.Some(value), default);

    internal static Annotations1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnnotations([NotNullWhen(true)] out Annotations? value) =>
        _annotationsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Annotations1(Annotations value) => Annotations(value);

    public TResult Match<TResult>(Func<Annotations, TResult> onAnnotations, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnnotations(out var annotationsValue) => onAnnotations(annotationsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Annotations1)} holds no value.")
        };

    public void Match(Action<Annotations> onAnnotations, Action<JsonElement> otherwise)
    {
        if (TryGetAnnotations(out var annotationsValue)) onAnnotations(annotationsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Annotations1)} holds no value.");
    }
}

file sealed class Annotations1Converter : JsonConverter<Annotations1>
{
    public override Annotations1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Annotations>(root, options, out var annotationsValue))
        {
            return Annotations1.Annotations(annotationsValue);
        }
        return Annotations1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Annotations1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAnnotations(out var annotationsValue))
        {
            JsonSerializer.Serialize(writer, annotationsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Annotations1)} contains no valid value to serialize.");
        }
    }
}
