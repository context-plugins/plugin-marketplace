using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(SessionIdHudPlatformModelsApiConverter))]
public record SessionIdHudPlatformModelsApi
{
    private readonly Optional<Guid> _guidValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SessionIdHudPlatformModelsApi(Optional<Guid> guidValue, Optional<UnknownArm> unknownValue)
    {
        _guidValue = guidValue;
        _unknownValue = unknownValue;
    }

    public static SessionIdHudPlatformModelsApi Guid(Guid value) => new(Optional<Guid>.Some(value), default);

    internal static SessionIdHudPlatformModelsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGuid(out Guid value) => _guidValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SessionIdHudPlatformModelsApi(Guid value) => Guid(value);

    public TResult Match<TResult>(Func<Guid, TResult> onGuid, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGuid(out var guidValue) => onGuid(guidValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SessionIdHudPlatformModelsApi)} holds no value.")
        };

    public void Match(Action<Guid> onGuid, Action<JsonElement> otherwise)
    {
        if (TryGetGuid(out var guidValue)) onGuid(guidValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SessionIdHudPlatformModelsApi)} holds no value.");
    }
}

file sealed class SessionIdHudPlatformModelsApiConverter : JsonConverter<SessionIdHudPlatformModelsApi>
{
    public override SessionIdHudPlatformModelsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Guid>(root, options, out var guidValue))
        {
            return SessionIdHudPlatformModelsApi.Guid(guidValue);
        }
        return SessionIdHudPlatformModelsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        SessionIdHudPlatformModelsApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetGuid(out var guidValue))
        {
            JsonSerializer.Serialize(writer, guidValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SessionIdHudPlatformModelsApi)} contains no valid value to serialize.");
        }
    }
}
