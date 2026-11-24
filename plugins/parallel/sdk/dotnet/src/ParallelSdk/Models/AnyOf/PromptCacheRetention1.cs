using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(PromptCacheRetention1Converter))]
public record PromptCacheRetention1
{
    private readonly Optional<PromptCacheRetention> _promptCacheRetentionValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PromptCacheRetention1(Optional<PromptCacheRetention> promptCacheRetentionValue,
        Optional<UnknownArm> unknownValue)
    {
        _promptCacheRetentionValue = promptCacheRetentionValue;
        _unknownValue = unknownValue;
    }

    public static PromptCacheRetention1 PromptCacheRetention(PromptCacheRetention value) =>
        new(Optional<PromptCacheRetention>.Some(value), default);

    internal static PromptCacheRetention1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPromptCacheRetention([NotNullWhen(true)] out PromptCacheRetention? value) =>
        _promptCacheRetentionValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PromptCacheRetention1(PromptCacheRetention value) => PromptCacheRetention(value);

    public TResult Match<TResult>(Func<PromptCacheRetention, TResult> onPromptCacheRetention,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPromptCacheRetention(out var promptCacheRetentionValue) => onPromptCacheRetention(
                promptCacheRetentionValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PromptCacheRetention1)} holds no value.")
        };

    public void Match(Action<PromptCacheRetention> onPromptCacheRetention, Action<JsonElement> otherwise)
    {
        if (TryGetPromptCacheRetention(out var promptCacheRetentionValue)) onPromptCacheRetention(
            promptCacheRetentionValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PromptCacheRetention1)} holds no value.");
    }
}

file sealed class PromptCacheRetention1Converter : JsonConverter<PromptCacheRetention1>
{
    public override PromptCacheRetention1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PromptCacheRetention>(root, options, out var promptCacheRetentionValue))
        {
            return PromptCacheRetention1.PromptCacheRetention(promptCacheRetentionValue);
        }
        return PromptCacheRetention1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PromptCacheRetention1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPromptCacheRetention(out var promptCacheRetentionValue))
        {
            JsonSerializer.Serialize(writer, promptCacheRetentionValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PromptCacheRetention1)} contains no valid value to serialize.");
        }
    }
}
