using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models.OneOf;

[JsonConverter(typeof(MediaAuthConverter))]
public record MediaAuth
{
    private readonly Optional<BasicAuth> _basicAuthValue;

    private readonly Optional<BearerTokenAuth> _bearerTokenAuthValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MediaAuth(Optional<BasicAuth> basicAuthValue,
        Optional<BearerTokenAuth> bearerTokenAuthValue,
        Optional<UnknownArm> unknownValue)
    {
        _basicAuthValue = basicAuthValue;
        _bearerTokenAuthValue = bearerTokenAuthValue;
        _unknownValue = unknownValue;
    }

    public static MediaAuth BasicAuth(BasicAuth value) => new(Optional<BasicAuth>.Some(value), default, default);

    public static MediaAuth BearerTokenAuth(BearerTokenAuth value) =>
        new(default, Optional<BearerTokenAuth>.Some(value), default);

    internal static MediaAuth Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBasicAuth([NotNullWhen(true)] out BasicAuth? value) => _basicAuthValue.TryGetValue(out value);

    public bool TryGetBearerTokenAuth([NotNullWhen(true)] out BearerTokenAuth? value) =>
        _bearerTokenAuthValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MediaAuth(BasicAuth value) => BasicAuth(value);

    public static implicit operator MediaAuth(BearerTokenAuth value) => BearerTokenAuth(value);

    public TResult Match<TResult>(Func<BasicAuth, TResult> onBasicAuth,
        Func<BearerTokenAuth, TResult> onBearerTokenAuth,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBasicAuth(out var basicAuthValue) => onBasicAuth(basicAuthValue),
            _ when TryGetBearerTokenAuth(out var bearerTokenAuthValue) => onBearerTokenAuth(bearerTokenAuthValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MediaAuth)} holds no value.")
        };

    public void Match(Action<BasicAuth> onBasicAuth,
        Action<BearerTokenAuth> onBearerTokenAuth,
        Action<JsonElement> otherwise)
    {
        if (TryGetBasicAuth(out var basicAuthValue)) onBasicAuth(basicAuthValue);
        else if (TryGetBearerTokenAuth(out var bearerTokenAuthValue)) onBearerTokenAuth(bearerTokenAuthValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MediaAuth)} holds no value.");
    }
}

file sealed class MediaAuthConverter : JsonConverter<MediaAuth>
{
    public override MediaAuth Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "basic_auth" => MediaAuth.BasicAuth(root.Deserialize<BasicAuth>(options)!),
            "bearer_token" => MediaAuth.BearerTokenAuth(root.Deserialize<BearerTokenAuth>(options)!),
            _ => MediaAuth.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, MediaAuth value, JsonSerializerOptions options)
    {
        if (value.TryGetBasicAuth(out var basicAuthValue))
        {
            JsonSerializer.Serialize(writer, basicAuthValue, options);
        }
        else if (value.TryGetBearerTokenAuth(out var bearerTokenAuthValue))
        {
            JsonSerializer.Serialize(writer, bearerTokenAuthValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MediaAuth)} contains no valid value to serialize.");
        }
    }
}
