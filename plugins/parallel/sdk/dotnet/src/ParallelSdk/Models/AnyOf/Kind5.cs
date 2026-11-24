using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Filter memories by kind: <c>task</c>, <c>monitor</c>, or <c>findall</c>.
/// </summary>
[JsonConverter(typeof(Kind5Converter))]
public record Kind5
{
    private readonly Optional<Kind> _kindValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Kind5(Optional<Kind> kindValue, Optional<UnknownArm> unknownValue)
    {
        _kindValue = kindValue;
        _unknownValue = unknownValue;
    }

    public static Kind5 Kind(Kind value) => new(Optional<Kind>.Some(value), default);

    internal static Kind5 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetKind([NotNullWhen(true)] out Kind? value) => _kindValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Kind5(Kind value) => Kind(value);

    public TResult Match<TResult>(Func<Kind, TResult> onKind, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetKind(out var kindValue) => onKind(kindValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Kind5)} holds no value.")
        };

    public void Match(Action<Kind> onKind, Action<JsonElement> otherwise)
    {
        if (TryGetKind(out var kindValue)) onKind(kindValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Kind5)} holds no value.");
    }
}

file sealed class Kind5Converter : JsonConverter<Kind5>
{
    public override Kind5 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Kind>(root, options, out var kindValue))
        {
            return Kind5.Kind(kindValue);
        }
        return Kind5.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Kind5 value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Kind5)} contains no valid value to serialize.");
        }
    }
}
