using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;
using Sapling.Core.Validation;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(Rule21Converter))]
public record Rule21
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Rule2> _rule2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Rule21(Optional<string> stringValue, Optional<Rule2> rule2Value, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _rule2Value = rule2Value;
        _unknownValue = unknownValue;
    }

    public static Rule21 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Rule21 Rule2(Rule2 value) => new(default, Optional<Rule2>.Some(value), default);

    internal static Rule21 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetRule2([NotNullWhen(true)] out Rule2? value) => _rule2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Rule21(string value) => String(value);

    public static implicit operator Rule21(Rule2 value) => Rule2(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Rule2, TResult> onRule2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRule2(out var rule2Value) => onRule2(rule2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Rule21)} holds no value.")
        };

    public void Match(Action<string> onString, Action<Rule2> onRule2, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRule2(out var rule2Value)) onRule2(rule2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Rule21)} holds no value.");
    }
}

file sealed class Rule21Converter : JsonConverter<Rule21>
{
    public override Rule21 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMaxLength(80))
            {
                return Rule21.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Rule2>(root, options, out var rule2Value))
        {
            return Rule21.Rule2(rule2Value);
        }
        return Rule21.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Rule21 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetRule2(out var rule2Value))
        {
            JsonSerializer.Serialize(writer, rule2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Rule21)} contains no valid value to serialize.");
        }
    }
}
