using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Annotations11Converter))]
public record Annotations11
{
    private readonly Optional<ToolAnnotations> _toolAnnotationsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Annotations11(Optional<ToolAnnotations> toolAnnotationsValue, Optional<UnknownArm> unknownValue)
    {
        _toolAnnotationsValue = toolAnnotationsValue;
        _unknownValue = unknownValue;
    }

    public static Annotations11 ToolAnnotations(ToolAnnotations value) =>
        new(Optional<ToolAnnotations>.Some(value), default);

    internal static Annotations11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetToolAnnotations([NotNullWhen(true)] out ToolAnnotations? value) =>
        _toolAnnotationsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Annotations11(ToolAnnotations value) => ToolAnnotations(value);

    public TResult Match<TResult>(Func<ToolAnnotations, TResult> onToolAnnotations,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetToolAnnotations(out var toolAnnotationsValue) => onToolAnnotations(toolAnnotationsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Annotations11)} holds no value.")
        };

    public void Match(Action<ToolAnnotations> onToolAnnotations, Action<JsonElement> otherwise)
    {
        if (TryGetToolAnnotations(out var toolAnnotationsValue)) onToolAnnotations(toolAnnotationsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Annotations11)} holds no value.");
    }
}

file sealed class Annotations11Converter : JsonConverter<Annotations11>
{
    public override Annotations11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ToolAnnotations>(root, options, out var toolAnnotationsValue))
        {
            return Annotations11.ToolAnnotations(toolAnnotationsValue);
        }
        return Annotations11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Annotations11 value, JsonSerializerOptions options)
    {
        if (value.TryGetToolAnnotations(out var toolAnnotationsValue))
        {
            JsonSerializer.Serialize(writer, toolAnnotationsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Annotations11)} contains no valid value to serialize.");
        }
    }
}
