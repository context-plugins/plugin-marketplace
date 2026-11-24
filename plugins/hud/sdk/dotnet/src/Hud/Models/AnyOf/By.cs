using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ByConverter))]
public record By
{
    private readonly Optional<Guid> _guidValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private By(Optional<Guid> guidValue, Optional<UnknownArm> unknownValue)
    {
        _guidValue = guidValue;
        _unknownValue = unknownValue;
    }

    public static By Guid(Guid value) => new(Optional<Guid>.Some(value), default);

    internal static By Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGuid(out Guid value) => _guidValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator By(Guid value) => Guid(value);

    public TResult Match<TResult>(Func<Guid, TResult> onGuid, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGuid(out var guidValue) => onGuid(guidValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(By)} holds no value.")
        };

    public void Match(Action<Guid> onGuid, Action<JsonElement> otherwise)
    {
        if (TryGetGuid(out var guidValue)) onGuid(guidValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(By)} holds no value.");
    }
}

file sealed class ByConverter : JsonConverter<By>
{
    public override By Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Guid>(root, options, out var guidValue))
        {
            return By.Guid(guidValue);
        }
        return By.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, By value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(By)} contains no valid value to serialize.");
        }
    }
}
