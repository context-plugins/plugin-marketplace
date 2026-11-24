using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Moderation2Converter))]
public record Moderation2
{
    private readonly Optional<Moderation> _moderationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Moderation2(Optional<Moderation> moderationValue, Optional<UnknownArm> unknownValue)
    {
        _moderationValue = moderationValue;
        _unknownValue = unknownValue;
    }

    public static Moderation2 Moderation(Moderation value) => new(Optional<Moderation>.Some(value), default);

    internal static Moderation2 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModeration([NotNullWhen(true)] out Moderation? value) => _moderationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Moderation2(Moderation value) => Moderation(value);

    public TResult Match<TResult>(Func<Moderation, TResult> onModeration, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModeration(out var moderationValue) => onModeration(moderationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Moderation2)} holds no value.")
        };

    public void Match(Action<Moderation> onModeration, Action<JsonElement> otherwise)
    {
        if (TryGetModeration(out var moderationValue)) onModeration(moderationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Moderation2)} holds no value.");
    }
}

file sealed class Moderation2Converter : JsonConverter<Moderation2>
{
    public override Moderation2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Moderation>(root, options, out var moderationValue))
        {
            return Moderation2.Moderation(moderationValue);
        }
        return Moderation2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Moderation2 value, JsonSerializerOptions options)
    {
        if (value.TryGetModeration(out var moderationValue))
        {
            JsonSerializer.Serialize(writer, moderationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Moderation2)} contains no valid value to serialize.");
        }
    }
}
