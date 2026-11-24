using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Deliverd.Core.Extensions;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;

namespace Deliverd.Models.AnyOf;

[JsonConverter(typeof(Audience1Converter))]
public record Audience1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Audience> _audienceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Audience1(Optional<string> stringValue, Optional<Audience> audienceValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _audienceValue = audienceValue;
        _unknownValue = unknownValue;
    }

    public static Audience1 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Audience1 Audience(Audience value) => new(default, Optional<Audience>.Some(value), default);

    internal static Audience1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetAudience([NotNullWhen(true)] out Audience? value) => _audienceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Audience1(string value) => String(value);

    public static implicit operator Audience1(Audience value) => Audience(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Audience, TResult> onAudience,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetAudience(out var audienceValue) => onAudience(audienceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Audience1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<Audience> onAudience, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetAudience(out var audienceValue)) onAudience(audienceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Audience1)} holds no value.");
    }
}

file sealed class Audience1Converter : JsonConverter<Audience1>
{
    public override Audience1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(200))
            {
                return Audience1.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Audience>(root, options, out var audienceValue))
        {
            return Audience1.Audience(audienceValue);
        }
        return Audience1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Audience1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetAudience(out var audienceValue))
        {
            JsonSerializer.Serialize(writer, audienceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Audience1)} contains no valid value to serialize.");
        }
    }
}
