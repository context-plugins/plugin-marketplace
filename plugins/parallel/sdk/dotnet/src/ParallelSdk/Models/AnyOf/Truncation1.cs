using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Truncation1Converter))]
public record Truncation1
{
    private readonly Optional<Truncation> _truncationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Truncation1(Optional<Truncation> truncationValue, Optional<UnknownArm> unknownValue)
    {
        _truncationValue = truncationValue;
        _unknownValue = unknownValue;
    }

    public static Truncation1 Truncation(Truncation value) => new(Optional<Truncation>.Some(value), default);

    internal static Truncation1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTruncation([NotNullWhen(true)] out Truncation? value) => _truncationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Truncation1(Truncation value) => Truncation(value);

    public TResult Match<TResult>(Func<Truncation, TResult> onTruncation, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTruncation(out var truncationValue) => onTruncation(truncationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Truncation1)} holds no value.")
        };

    public void Match(Action<Truncation> onTruncation, Action<JsonElement> otherwise)
    {
        if (TryGetTruncation(out var truncationValue)) onTruncation(truncationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Truncation1)} holds no value.");
    }
}

file sealed class Truncation1Converter : JsonConverter<Truncation1>
{
    public override Truncation1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Truncation>(root, options, out var truncationValue))
        {
            return Truncation1.Truncation(truncationValue);
        }
        return Truncation1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Truncation1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTruncation(out var truncationValue))
        {
            JsonSerializer.Serialize(writer, truncationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Truncation1)} contains no valid value to serialize.");
        }
    }
}
