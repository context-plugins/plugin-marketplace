using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.OneOf;

[JsonConverter(typeof(SourceConverter))]
public record Source
{
    private readonly Optional<InlineSecretSource> _inlineSecretSourceValue;

    private readonly Optional<OnePasswordSecretSource> _onePasswordSecretSourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Source(Optional<InlineSecretSource> inlineSecretSourceValue,
        Optional<OnePasswordSecretSource> onePasswordSecretSourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _inlineSecretSourceValue = inlineSecretSourceValue;
        _onePasswordSecretSourceValue = onePasswordSecretSourceValue;
        _unknownValue = unknownValue;
    }

    public static Source InlineSecretSource(InlineSecretSource value) =>
        new(Optional<InlineSecretSource>.Some(value), default, default);

    public static Source OnePasswordSecretSource(OnePasswordSecretSource value) =>
        new(default, Optional<OnePasswordSecretSource>.Some(value), default);

    internal static Source Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInlineSecretSource([NotNullWhen(true)] out InlineSecretSource? value) =>
        _inlineSecretSourceValue.TryGetValue(out value);

    public bool TryGetOnePasswordSecretSource([NotNullWhen(true)] out OnePasswordSecretSource? value) =>
        _onePasswordSecretSourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Source(InlineSecretSource value) => InlineSecretSource(value);

    public static implicit operator Source(OnePasswordSecretSource value) => OnePasswordSecretSource(value);

    public TResult Match<TResult>(Func<InlineSecretSource, TResult> onInlineSecretSource,
        Func<OnePasswordSecretSource, TResult> onOnePasswordSecretSource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInlineSecretSource(out var inlineSecretSourceValue) => onInlineSecretSource(
                inlineSecretSourceValue),
            _ when TryGetOnePasswordSecretSource(out var onePasswordSecretSourceValue) => onOnePasswordSecretSource(
                onePasswordSecretSourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Source)} holds no value.")
        };

    public void Match(Action<InlineSecretSource> onInlineSecretSource,
        Action<OnePasswordSecretSource> onOnePasswordSecretSource,
        Action<JsonElement> otherwise)
    {
        if (TryGetInlineSecretSource(out var inlineSecretSourceValue)) onInlineSecretSource(inlineSecretSourceValue);
        else if (TryGetOnePasswordSecretSource(out var onePasswordSecretSourceValue)) onOnePasswordSecretSource(
            onePasswordSecretSourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Source)} holds no value.");
    }
}

file sealed class SourceConverter : JsonConverter<Source>
{
    public override Source Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "inline" => Source.InlineSecretSource(root.Deserialize<InlineSecretSource>(options)!),
            "onepassword" => Source.OnePasswordSecretSource(root.Deserialize<OnePasswordSecretSource>(options)!),
            _ => Source.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Source value, JsonSerializerOptions options)
    {
        if (value.TryGetInlineSecretSource(out var inlineSecretSourceValue))
        {
            JsonSerializer.Serialize(writer, inlineSecretSourceValue, options);
        }
        else if (value.TryGetOnePasswordSecretSource(out var onePasswordSecretSourceValue))
        {
            JsonSerializer.Serialize(writer, onePasswordSecretSourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Source)} contains no valid value to serialize.");
        }
    }
}
