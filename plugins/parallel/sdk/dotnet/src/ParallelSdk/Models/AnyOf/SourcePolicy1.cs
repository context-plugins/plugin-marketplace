using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Domain filtering preferences: preferred and disallowed domains for monitor search results., Domain and date filtering preferences for search results., Optional source policy governing preferred and disallowed domains in web search results.
/// </summary>
[JsonConverter(typeof(SourcePolicy1Converter))]
public record SourcePolicy1
{
    private readonly Optional<SourcePolicy> _sourcePolicyValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SourcePolicy1(Optional<SourcePolicy> sourcePolicyValue, Optional<UnknownArm> unknownValue)
    {
        _sourcePolicyValue = sourcePolicyValue;
        _unknownValue = unknownValue;
    }

    public static SourcePolicy1 SourcePolicy(SourcePolicy value) => new(Optional<SourcePolicy>.Some(value), default);

    internal static SourcePolicy1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSourcePolicy([NotNullWhen(true)] out SourcePolicy? value) =>
        _sourcePolicyValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SourcePolicy1(SourcePolicy value) => SourcePolicy(value);

    public TResult Match<TResult>(Func<SourcePolicy, TResult> onSourcePolicy, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSourcePolicy(out var sourcePolicyValue) => onSourcePolicy(sourcePolicyValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SourcePolicy1)} holds no value.")
        };

    public void Match(Action<SourcePolicy> onSourcePolicy, Action<JsonElement> otherwise)
    {
        if (TryGetSourcePolicy(out var sourcePolicyValue)) onSourcePolicy(sourcePolicyValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SourcePolicy1)} holds no value.");
    }
}

file sealed class SourcePolicy1Converter : JsonConverter<SourcePolicy1>
{
    public override SourcePolicy1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SourcePolicy>(root, options, out var sourcePolicyValue))
        {
            return SourcePolicy1.SourcePolicy(sourcePolicyValue);
        }
        return SourcePolicy1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SourcePolicy1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSourcePolicy(out var sourcePolicyValue))
        {
            JsonSerializer.Serialize(writer, sourcePolicyValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SourcePolicy1)} contains no valid value to serialize.");
        }
    }
}
