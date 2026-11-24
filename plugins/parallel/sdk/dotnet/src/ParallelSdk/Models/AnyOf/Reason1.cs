using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Reason1Converter))]
public record Reason1
{
    private readonly Optional<Reason> _reasonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Reason1(Optional<Reason> reasonValue, Optional<UnknownArm> unknownValue)
    {
        _reasonValue = reasonValue;
        _unknownValue = unknownValue;
    }

    public static Reason1 Reason(Reason value) => new(Optional<Reason>.Some(value), default);

    internal static Reason1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReason([NotNullWhen(true)] out Reason? value) => _reasonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Reason1(Reason value) => Reason(value);

    public TResult Match<TResult>(Func<Reason, TResult> onReason, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReason(out var reasonValue) => onReason(reasonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Reason1)} holds no value.")
        };

    public void Match(Action<Reason> onReason, Action<JsonElement> otherwise)
    {
        if (TryGetReason(out var reasonValue)) onReason(reasonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Reason1)} holds no value.");
    }
}

file sealed class Reason1Converter : JsonConverter<Reason1>
{
    public override Reason1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Reason>(root, options, out var reasonValue))
        {
            return Reason1.Reason(reasonValue);
        }
        return Reason1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Reason1 value, JsonSerializerOptions options)
    {
        if (value.TryGetReason(out var reasonValue))
        {
            JsonSerializer.Serialize(writer, reasonValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Reason1)} contains no valid value to serialize.");
        }
    }
}
