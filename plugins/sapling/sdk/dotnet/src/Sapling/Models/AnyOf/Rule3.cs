using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;
using Sapling.Core.Validation;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(Rule3Converter))]
public record Rule3
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Rule> _ruleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Rule3(Optional<string> stringValue, Optional<Rule> ruleValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _ruleValue = ruleValue;
        _unknownValue = unknownValue;
    }

    public static Rule3 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Rule3 Rule(Rule value) => new(default, Optional<Rule>.Some(value), default);

    internal static Rule3 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetRule([NotNullWhen(true)] out Rule? value) => _ruleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Rule3(string value) => String(value);

    public static implicit operator Rule3(Rule value) => Rule(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Rule, TResult> onRule,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRule(out var ruleValue) => onRule(ruleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Rule3)} holds no value.")
        };

    public void Match(Action<string> onString, Action<Rule> onRule, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRule(out var ruleValue)) onRule(ruleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Rule3)} holds no value.");
    }
}

file sealed class Rule3Converter : JsonConverter<Rule3>
{
    public override Rule3 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(80))
            {
                return Rule3.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Rule>(root, options, out var ruleValue))
        {
            return Rule3.Rule(ruleValue);
        }
        return Rule3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Rule3 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetRule(out var ruleValue))
        {
            JsonSerializer.Serialize(writer, ruleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Rule3)} contains no valid value to serialize.");
        }
    }
}
