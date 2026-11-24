using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Moderation11Converter))]
public record Moderation11
{
    private readonly Optional<Moderation1> _moderation1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Moderation11(Optional<Moderation1> moderation1Value, Optional<UnknownArm> unknownValue)
    {
        _moderation1Value = moderation1Value;
        _unknownValue = unknownValue;
    }

    public static Moderation11 Moderation1(Moderation1 value) => new(Optional<Moderation1>.Some(value), default);

    internal static Moderation11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModeration1([NotNullWhen(true)] out Moderation1? value) =>
        _moderation1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Moderation11(Moderation1 value) => Moderation1(value);

    public TResult Match<TResult>(Func<Moderation1, TResult> onModeration1, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModeration1(out var moderation1Value) => onModeration1(moderation1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Moderation11)} holds no value.")
        };

    public void Match(Action<Moderation1> onModeration1, Action<JsonElement> otherwise)
    {
        if (TryGetModeration1(out var moderation1Value)) onModeration1(moderation1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Moderation11)} holds no value.");
    }
}

file sealed class Moderation11Converter : JsonConverter<Moderation11>
{
    public override Moderation11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Moderation1>(root, options, out var moderation1Value))
        {
            return Moderation11.Moderation1(moderation1Value);
        }
        return Moderation11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Moderation11 value, JsonSerializerOptions options)
    {
        if (value.TryGetModeration1(out var moderation1Value))
        {
            JsonSerializer.Serialize(writer, moderation1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Moderation11)} contains no valid value to serialize.");
        }
    }
}
