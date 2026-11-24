using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(IncompleteDetails1Converter))]
public record IncompleteDetails1
{
    private readonly Optional<IncompleteDetails> _incompleteDetailsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private IncompleteDetails1(Optional<IncompleteDetails> incompleteDetailsValue, Optional<UnknownArm> unknownValue)
    {
        _incompleteDetailsValue = incompleteDetailsValue;
        _unknownValue = unknownValue;
    }

    public static IncompleteDetails1 IncompleteDetails(IncompleteDetails value) =>
        new(Optional<IncompleteDetails>.Some(value), default);

    internal static IncompleteDetails1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetIncompleteDetails([NotNullWhen(true)] out IncompleteDetails? value) =>
        _incompleteDetailsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IncompleteDetails1(IncompleteDetails value) => IncompleteDetails(value);

    public TResult Match<TResult>(Func<IncompleteDetails, TResult> onIncompleteDetails,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIncompleteDetails(out var incompleteDetailsValue) => onIncompleteDetails(
                incompleteDetailsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IncompleteDetails1)} holds no value.")
        };

    public void Match(Action<IncompleteDetails> onIncompleteDetails, Action<JsonElement> otherwise)
    {
        if (TryGetIncompleteDetails(out var incompleteDetailsValue)) onIncompleteDetails(incompleteDetailsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IncompleteDetails1)} holds no value.");
    }
}

file sealed class IncompleteDetails1Converter : JsonConverter<IncompleteDetails1>
{
    public override IncompleteDetails1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IncompleteDetails>(root, options, out var incompleteDetailsValue))
        {
            return IncompleteDetails1.IncompleteDetails(incompleteDetailsValue);
        }
        return IncompleteDetails1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IncompleteDetails1 value, JsonSerializerOptions options)
    {
        if (value.TryGetIncompleteDetails(out var incompleteDetailsValue))
        {
            JsonSerializer.Serialize(writer, incompleteDetailsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IncompleteDetails1)} contains no valid value to serialize.");
        }
    }
}
