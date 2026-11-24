using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(SignupTraitsRequestConverter))]
public record SignupTraitsRequest
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignupTraitsRequest(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static SignupTraitsRequest String(string value) =>
        new(Optional<string>.Some(value), default, default, default);

    public static SignupTraitsRequest Double(double value) =>
        new(default, Optional<double>.Some(value), default, default);

    public static SignupTraitsRequest Bool(bool value) => new(default, default, Optional<bool>.Some(value), default);

    internal static SignupTraitsRequest Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignupTraitsRequest(string value) => String(value);

    public static implicit operator SignupTraitsRequest(double value) => Double(value);

    public static implicit operator SignupTraitsRequest(bool value) => Bool(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignupTraitsRequest)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<bool> onBool,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignupTraitsRequest)} holds no value.");
    }
}

file sealed class SignupTraitsRequestConverter : JsonConverter<SignupTraitsRequest>
{
    public override SignupTraitsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return SignupTraitsRequest.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return SignupTraitsRequest.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return SignupTraitsRequest.Bool(boolValue);
        }
        return SignupTraitsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SignupTraitsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SignupTraitsRequest)} contains no valid value to serialize.");
        }
    }
}
