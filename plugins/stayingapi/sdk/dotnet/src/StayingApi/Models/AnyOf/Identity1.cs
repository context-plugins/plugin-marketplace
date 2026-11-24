using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Extensions;
using StayingApi.Core.Models;

namespace StayingApi.Models.AnyOf;

[JsonConverter(typeof(Identity1Converter))]
public record Identity1
{
    private readonly Optional<Identity> _identityValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Identity1(Optional<Identity> identityValue, Optional<UnknownArm> unknownValue)
    {
        _identityValue = identityValue;
        _unknownValue = unknownValue;
    }

    public static Identity1 Identity(Identity value) => new(Optional<Identity>.Some(value), default);

    internal static Identity1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetIdentity([NotNullWhen(true)] out Identity? value) => _identityValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Identity1(Identity value) => Identity(value);

    public TResult Match<TResult>(Func<Identity, TResult> onIdentity, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIdentity(out var identityValue) => onIdentity(identityValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Identity1)} holds no value.")
        };

    public void Match(Action<Identity> onIdentity, Action<JsonElement> otherwise)
    {
        if (TryGetIdentity(out var identityValue)) onIdentity(identityValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Identity1)} holds no value.");
    }
}

file sealed class Identity1Converter : JsonConverter<Identity1>
{
    public override Identity1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Identity>(root, options, out var identityValue))
        {
            return Identity1.Identity(identityValue);
        }
        return Identity1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Identity1 value, JsonSerializerOptions options)
    {
        if (value.TryGetIdentity(out var identityValue))
        {
            JsonSerializer.Serialize(writer, identityValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Identity1)} contains no valid value to serialize.");
        }
    }
}
