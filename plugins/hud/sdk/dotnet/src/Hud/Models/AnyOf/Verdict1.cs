using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Verdict1Converter))]
public record Verdict1
{
    private readonly Optional<Verdict> _verdictValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Verdict1(Optional<Verdict> verdictValue, Optional<UnknownArm> unknownValue)
    {
        _verdictValue = verdictValue;
        _unknownValue = unknownValue;
    }

    public static Verdict1 Verdict(Verdict value) => new(Optional<Verdict>.Some(value), default);

    internal static Verdict1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetVerdict([NotNullWhen(true)] out Verdict? value) => _verdictValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Verdict1(Verdict value) => Verdict(value);

    public TResult Match<TResult>(Func<Verdict, TResult> onVerdict, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetVerdict(out var verdictValue) => onVerdict(verdictValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Verdict1)} holds no value.")
        };

    public void Match(Action<Verdict> onVerdict, Action<JsonElement> otherwise)
    {
        if (TryGetVerdict(out var verdictValue)) onVerdict(verdictValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Verdict1)} holds no value.");
    }
}

file sealed class Verdict1Converter : JsonConverter<Verdict1>
{
    public override Verdict1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Verdict>(root, options, out var verdictValue))
        {
            return Verdict1.Verdict(verdictValue);
        }
        return Verdict1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Verdict1 value, JsonSerializerOptions options)
    {
        if (value.TryGetVerdict(out var verdictValue))
        {
            JsonSerializer.Serialize(writer, verdictValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Verdict1)} contains no valid value to serialize.");
        }
    }
}
