using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(FinishReason1Converter))]
public record FinishReason1
{
    private readonly Optional<FinishReason> _finishReasonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FinishReason1(Optional<FinishReason> finishReasonValue, Optional<UnknownArm> unknownValue)
    {
        _finishReasonValue = finishReasonValue;
        _unknownValue = unknownValue;
    }

    public static FinishReason1 FinishReason(FinishReason value) => new(Optional<FinishReason>.Some(value), default);

    internal static FinishReason1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFinishReason([NotNullWhen(true)] out FinishReason? value) =>
        _finishReasonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FinishReason1(FinishReason value) => FinishReason(value);

    public TResult Match<TResult>(Func<FinishReason, TResult> onFinishReason, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFinishReason(out var finishReasonValue) => onFinishReason(finishReasonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FinishReason1)} holds no value.")
        };

    public void Match(Action<FinishReason> onFinishReason, Action<JsonElement> otherwise)
    {
        if (TryGetFinishReason(out var finishReasonValue)) onFinishReason(finishReasonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FinishReason1)} holds no value.");
    }
}

file sealed class FinishReason1Converter : JsonConverter<FinishReason1>
{
    public override FinishReason1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FinishReason>(root, options, out var finishReasonValue))
        {
            return FinishReason1.FinishReason(finishReasonValue);
        }
        return FinishReason1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FinishReason1 value, JsonSerializerOptions options)
    {
        if (value.TryGetFinishReason(out var finishReasonValue))
        {
            JsonSerializer.Serialize(writer, finishReasonValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FinishReason1)} contains no valid value to serialize.");
        }
    }
}
