using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(Kind1Converter))]
public record Kind1
{
    private readonly Optional<Kind> _kindValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Kind1(Optional<Kind> kindValue, Optional<UnknownArm> unknownValue)
    {
        _kindValue = kindValue;
        _unknownValue = unknownValue;
    }

    public static Kind1 Kind(Kind value) => new(Optional<Kind>.Some(value), default);

    internal static Kind1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetKind([NotNullWhen(true)] out Kind? value) => _kindValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Kind1(Kind value) => Kind(value);

    public TResult Match<TResult>(Func<Kind, TResult> onKind, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetKind(out var kindValue) => onKind(kindValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Kind1)} holds no value.")
        };

    public void Match(Action<Kind> onKind, Action<JsonElement> otherwise)
    {
        if (TryGetKind(out var kindValue)) onKind(kindValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Kind1)} holds no value.");
    }
}

file sealed class Kind1Converter : JsonConverter<Kind1>
{
    public override Kind1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Kind>(root, options, out var kindValue))
        {
            return Kind1.Kind(kindValue);
        }
        return Kind1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Kind1 value, JsonSerializerOptions options)
    {
        if (value.TryGetKind(out var kindValue))
        {
            JsonSerializer.Serialize(writer, kindValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Kind1)} contains no valid value to serialize.");
        }
    }
}
