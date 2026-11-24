using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Moderation1ParallelAiResponsesApiConverter))]
public record Moderation1ParallelAiResponsesApi
{
    private readonly Optional<Moderation> _moderationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Moderation1ParallelAiResponsesApi(Optional<Moderation> moderationValue, Optional<UnknownArm> unknownValue)
    {
        _moderationValue = moderationValue;
        _unknownValue = unknownValue;
    }

    public static Moderation1ParallelAiResponsesApi Moderation(Moderation value) =>
        new(Optional<Moderation>.Some(value), default);

    internal static Moderation1ParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModeration([NotNullWhen(true)] out Moderation? value) => _moderationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Moderation1ParallelAiResponsesApi(Moderation value) => Moderation(value);

    public TResult Match<TResult>(Func<Moderation, TResult> onModeration, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModeration(out var moderationValue) => onModeration(moderationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Moderation1ParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<Moderation> onModeration, Action<JsonElement> otherwise)
    {
        if (TryGetModeration(out var moderationValue)) onModeration(moderationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Moderation1ParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class Moderation1ParallelAiResponsesApiConverter : JsonConverter<Moderation1ParallelAiResponsesApi>
{
    public override Moderation1ParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Moderation>(root, options, out var moderationValue))
        {
            return Moderation1ParallelAiResponsesApi.Moderation(moderationValue);
        }
        return Moderation1ParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Moderation1ParallelAiResponsesApi value,
        JsonSerializerOptions options)
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
            throw new JsonException(
                $"{nameof(Moderation1ParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
