using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Reason for termination when FindAll run is in terminal status.
/// </summary>
[JsonConverter(typeof(TerminationReason1Converter))]
public record TerminationReason1
{
    private readonly Optional<TerminationReason> _terminationReasonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TerminationReason1(Optional<TerminationReason> terminationReasonValue, Optional<UnknownArm> unknownValue)
    {
        _terminationReasonValue = terminationReasonValue;
        _unknownValue = unknownValue;
    }

    public static TerminationReason1 TerminationReason(TerminationReason value) =>
        new(Optional<TerminationReason>.Some(value), default);

    internal static TerminationReason1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTerminationReason([NotNullWhen(true)] out TerminationReason? value) =>
        _terminationReasonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TerminationReason1(TerminationReason value) => TerminationReason(value);

    public TResult Match<TResult>(Func<TerminationReason, TResult> onTerminationReason,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTerminationReason(out var terminationReasonValue) => onTerminationReason(
                terminationReasonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TerminationReason1)} holds no value.")
        };

    public void Match(Action<TerminationReason> onTerminationReason, Action<JsonElement> otherwise)
    {
        if (TryGetTerminationReason(out var terminationReasonValue)) onTerminationReason(terminationReasonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TerminationReason1)} holds no value.");
    }
}

file sealed class TerminationReason1Converter : JsonConverter<TerminationReason1>
{
    public override TerminationReason1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TerminationReason>(root, options, out var terminationReasonValue))
        {
            return TerminationReason1.TerminationReason(terminationReasonValue);
        }
        return TerminationReason1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TerminationReason1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTerminationReason(out var terminationReasonValue))
        {
            JsonSerializer.Serialize(writer, terminationReasonValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TerminationReason1)} contains no valid value to serialize.");
        }
    }
}
