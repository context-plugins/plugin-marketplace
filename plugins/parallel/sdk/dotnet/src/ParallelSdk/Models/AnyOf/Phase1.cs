using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Phase1Converter))]
public record Phase1
{
    private readonly Optional<Phase> _phaseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Phase1(Optional<Phase> phaseValue, Optional<UnknownArm> unknownValue)
    {
        _phaseValue = phaseValue;
        _unknownValue = unknownValue;
    }

    public static Phase1 Phase(Phase value) => new(Optional<Phase>.Some(value), default);

    internal static Phase1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPhase([NotNullWhen(true)] out Phase? value) => _phaseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Phase1(Phase value) => Phase(value);

    public TResult Match<TResult>(Func<Phase, TResult> onPhase, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPhase(out var phaseValue) => onPhase(phaseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Phase1)} holds no value.")
        };

    public void Match(Action<Phase> onPhase, Action<JsonElement> otherwise)
    {
        if (TryGetPhase(out var phaseValue)) onPhase(phaseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Phase1)} holds no value.");
    }
}

file sealed class Phase1Converter : JsonConverter<Phase1>
{
    public override Phase1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Phase>(root, options, out var phaseValue))
        {
            return Phase1.Phase(phaseValue);
        }
        return Phase1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Phase1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPhase(out var phaseValue))
        {
            JsonSerializer.Serialize(writer, phaseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Phase1)} contains no valid value to serialize.");
        }
    }
}
