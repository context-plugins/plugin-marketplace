using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Controls how much research is performed, trading response time for answer quality. Defaults to <c>medium</c> when omitted.
/// </summary>
[JsonConverter(typeof(Effort1Converter))]
public record Effort1
{
    private readonly Optional<Effort> _effortValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Effort1(Optional<Effort> effortValue, Optional<UnknownArm> unknownValue)
    {
        _effortValue = effortValue;
        _unknownValue = unknownValue;
    }

    public static Effort1 Effort(Effort value) => new(Optional<Effort>.Some(value), default);

    internal static Effort1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEffort([NotNullWhen(true)] out Effort? value) => _effortValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Effort1(Effort value) => Effort(value);

    public TResult Match<TResult>(Func<Effort, TResult> onEffort, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEffort(out var effortValue) => onEffort(effortValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Effort1)} holds no value.")
        };

    public void Match(Action<Effort> onEffort, Action<JsonElement> otherwise)
    {
        if (TryGetEffort(out var effortValue)) onEffort(effortValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Effort1)} holds no value.");
    }
}

file sealed class Effort1Converter : JsonConverter<Effort1>
{
    public override Effort1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Effort>(root, options, out var effortValue))
        {
            return Effort1.Effort(effortValue);
        }
        return Effort1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Effort1 value, JsonSerializerOptions options)
    {
        if (value.TryGetEffort(out var effortValue))
        {
            JsonSerializer.Serialize(writer, effortValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Effort1)} contains no valid value to serialize.");
        }
    }
}
