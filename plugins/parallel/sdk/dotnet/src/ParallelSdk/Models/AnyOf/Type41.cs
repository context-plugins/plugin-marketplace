using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Type of the monitor being updated. Required when <c>settings</c> is provided; must be <c>event_stream</c> (snapshot monitors have no updatable type-specific settings).
/// </summary>
[JsonConverter(typeof(Type41Converter))]
public record Type41
{
    private readonly Optional<Type4> _type4Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Type41(Optional<Type4> type4Value, Optional<UnknownArm> unknownValue)
    {
        _type4Value = type4Value;
        _unknownValue = unknownValue;
    }

    public static Type41 Type4(Type4 value) => new(Optional<Type4>.Some(value), default);

    internal static Type41 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetType4([NotNullWhen(true)] out Type4? value) => _type4Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Type41(Type4 value) => Type4(value);

    public TResult Match<TResult>(Func<Type4, TResult> onType4, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetType4(out var type4Value) => onType4(type4Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Type41)} holds no value.")
        };

    public void Match(Action<Type4> onType4, Action<JsonElement> otherwise)
    {
        if (TryGetType4(out var type4Value)) onType4(type4Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Type41)} holds no value.");
    }
}

file sealed class Type41Converter : JsonConverter<Type41>
{
    public override Type41 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Type4>(root, options, out var type4Value))
        {
            return Type41.Type4(type4Value);
        }
        return Type41.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Type41 value, JsonSerializerOptions options)
    {
        if (value.TryGetType4(out var type4Value))
        {
            JsonSerializer.Serialize(writer, type4Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Type41)} contains no valid value to serialize.");
        }
    }
}
