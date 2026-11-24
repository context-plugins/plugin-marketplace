using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(Contentdisposition1Converter))]
public record Contentdisposition1
{
    private readonly Optional<Contentdisposition> _contentdispositionValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Contentdisposition1(Optional<Contentdisposition> contentdispositionValue, Optional<UnknownArm> unknownValue)
    {
        _contentdispositionValue = contentdispositionValue;
        _unknownValue = unknownValue;
    }

    public static Contentdisposition1 Contentdisposition(Contentdisposition value) =>
        new(Optional<Contentdisposition>.Some(value), default);

    internal static Contentdisposition1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetContentdisposition([NotNullWhen(true)] out Contentdisposition? value) =>
        _contentdispositionValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Contentdisposition1(Contentdisposition value) => Contentdisposition(value);

    public TResult Match<TResult>(Func<Contentdisposition, TResult> onContentdisposition,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetContentdisposition(out var contentdispositionValue) => onContentdisposition(
                contentdispositionValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Contentdisposition1)} holds no value.")
        };

    public void Match(Action<Contentdisposition> onContentdisposition, Action<JsonElement> otherwise)
    {
        if (TryGetContentdisposition(out var contentdispositionValue)) onContentdisposition(contentdispositionValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Contentdisposition1)} holds no value.");
    }
}

file sealed class Contentdisposition1Converter : JsonConverter<Contentdisposition1>
{
    public override Contentdisposition1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Contentdisposition>(root, options, out var contentdispositionValue))
        {
            return Contentdisposition1.Contentdisposition(contentdispositionValue);
        }
        return Contentdisposition1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Contentdisposition1 value, JsonSerializerOptions options)
    {
        if (value.TryGetContentdisposition(out var contentdispositionValue))
        {
            JsonSerializer.Serialize(writer, contentdispositionValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Contentdisposition1)} contains no valid value to serialize.");
        }
    }
}
