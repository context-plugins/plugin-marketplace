using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// Which extraction tier produced the row: <c>universe</c> (lean, from the filing index) or <c>matched</c> (rich, with a confidence). <b>Currently <c>universe</c> on every row.</b>, Which layer answered: <c>universe</c> or a bespoke enrichment.
/// </summary>
[JsonConverter(typeof(SourceTierConverter))]
public record SourceTier
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SourceTier(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static SourceTier String(string value) => new(Optional<string>.Some(value), default);

    internal static SourceTier Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SourceTier(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SourceTier)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SourceTier)} holds no value.");
    }
}

file sealed class SourceTierConverter : JsonConverter<SourceTier>
{
    public override SourceTier Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return SourceTier.String(value);
        }
        return SourceTier.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SourceTier value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SourceTier)} contains no valid value to serialize.");
        }
    }
}
