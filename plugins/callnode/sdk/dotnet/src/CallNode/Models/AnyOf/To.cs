using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;

namespace CallNode.Models.AnyOf;

/// <summary>
/// The destination. An E.164 number, a <c>sip:</c> URI, or — together with
/// <c>sipTrunkId</c> — an E.164 number or a 1–64 character extension the
/// trunk's host understands.
/// </summary>
[JsonConverter(typeof(ToConverter))]
public record To
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<string> _string2Value;

    private readonly Optional<string> _string3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private To(Optional<string> stringValue,
        Optional<string> string2Value,
        Optional<string> string3Value,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _string2Value = string2Value;
        _string3Value = string3Value;
        _unknownValue = unknownValue;
    }

    public static To String(string value) => new(Optional<string>.Some(value), default, default, default);

    public static To String2(string value) => new(default, Optional<string>.Some(value), default, default);

    public static To String3(string value) => new(default, default, Optional<string>.Some(value), default);

    internal static To Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetString2([NotNullWhen(true)] out string? value) => _string2Value.TryGetValue(out value);

    public bool TryGetString3([NotNullWhen(true)] out string? value) => _string3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<string, TResult> onString2,
        Func<string, TResult> onString3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetString2(out var string2Value) => onString2(string2Value),
            _ when TryGetString3(out var string3Value) => onString3(string3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(To)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<string> onString2,
        Action<string> onString3,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetString2(out var string2Value)) onString2(string2Value);
        else if (TryGetString3(out var string3Value)) onString3(string3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(To)} holds no value.");
    }
}

file sealed class ToConverter : JsonConverter<To>
{
    public override To Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.MatchesPattern("^\\+[1-9]\\d{6,14}$"))
            {
                return To.String(value);
            }
            if (value.MatchesPattern(
                "^sip:[A-Za-z0-9._+\\-*#]{1,64}@[A-Za-z0-9.\\-]+(:\\d{1,5})?(;transport=(udp|tcp))?$"))
            {
                return To.String2(value);
            }
            if (value.MatchesPattern("^[0-9A-Za-z*#._\\-]{1,64}$"))
            {
                return To.String3(value);
            }
        }
        return To.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, To value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetString2(out var string2Value))
        {
            JsonSerializer.Serialize(writer, string2Value, options);
        }
        else if (value.TryGetString3(out var string3Value))
        {
            JsonSerializer.Serialize(writer, string3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(To)} contains no valid value to serialize.");
        }
    }
}
