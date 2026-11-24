using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Number of sources read in processing the task.
/// </summary>
[JsonConverter(typeof(NumSourcesReadConverter))]
public record NumSourcesRead
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private NumSourcesRead(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static NumSourcesRead Int(int value) => new(Optional<int>.Some(value), default);

    internal static NumSourcesRead Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator NumSourcesRead(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(NumSourcesRead)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(NumSourcesRead)} holds no value.");
    }
}

file sealed class NumSourcesReadConverter : JsonConverter<NumSourcesRead>
{
    public override NumSourcesRead Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return NumSourcesRead.Int(intValue);
            }
        }
        return NumSourcesRead.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, NumSourcesRead value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(NumSourcesRead)} contains no valid value to serialize.");
        }
    }
}
