using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(CanonicalVerdict1Converter))]
public record CanonicalVerdict1
{
    private readonly Optional<CanonicalVerdict> _canonicalVerdictValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CanonicalVerdict1(Optional<CanonicalVerdict> canonicalVerdictValue, Optional<UnknownArm> unknownValue)
    {
        _canonicalVerdictValue = canonicalVerdictValue;
        _unknownValue = unknownValue;
    }

    public static CanonicalVerdict1 CanonicalVerdict(CanonicalVerdict value) =>
        new(Optional<CanonicalVerdict>.Some(value), default);

    internal static CanonicalVerdict1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCanonicalVerdict([NotNullWhen(true)] out CanonicalVerdict? value) =>
        _canonicalVerdictValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CanonicalVerdict1(CanonicalVerdict value) => CanonicalVerdict(value);

    public TResult Match<TResult>(Func<CanonicalVerdict, TResult> onCanonicalVerdict,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCanonicalVerdict(out var canonicalVerdictValue) => onCanonicalVerdict(canonicalVerdictValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CanonicalVerdict1)} holds no value.")
        };

    public void Match(Action<CanonicalVerdict> onCanonicalVerdict, Action<JsonElement> otherwise)
    {
        if (TryGetCanonicalVerdict(out var canonicalVerdictValue)) onCanonicalVerdict(canonicalVerdictValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CanonicalVerdict1)} holds no value.");
    }
}

file sealed class CanonicalVerdict1Converter : JsonConverter<CanonicalVerdict1>
{
    public override CanonicalVerdict1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CanonicalVerdict>(root, options, out var canonicalVerdictValue))
        {
            return CanonicalVerdict1.CanonicalVerdict(canonicalVerdictValue);
        }
        return CanonicalVerdict1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CanonicalVerdict1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCanonicalVerdict(out var canonicalVerdictValue))
        {
            JsonSerializer.Serialize(writer, canonicalVerdictValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CanonicalVerdict1)} contains no valid value to serialize.");
        }
    }
}
