using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Shortcut.Core.Extensions;
using Shortcut.Core.Models;

namespace Shortcut.Models.AnyOf;

/// <summary>
/// The ID of the primary entity that has changed, if applicable.
/// </summary>
[JsonConverter(typeof(PrimaryIdConverter))]
public record PrimaryId
{
    private readonly Optional<long> _longValue;

    private readonly Optional<Guid> _guidValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PrimaryId(Optional<long> longValue, Optional<Guid> guidValue, Optional<UnknownArm> unknownValue)
    {
        _longValue = longValue;
        _guidValue = guidValue;
        _unknownValue = unknownValue;
    }

    public static PrimaryId Long(long value) => new(Optional<long>.Some(value), default, default);

    public static PrimaryId Guid(Guid value) => new(default, Optional<Guid>.Some(value), default);

    internal static PrimaryId Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLong(out long value) => _longValue.TryGetValue(out value);

    public bool TryGetGuid(out Guid value) => _guidValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PrimaryId(long value) => Long(value);

    public static implicit operator PrimaryId(Guid value) => Guid(value);

    public TResult Match<TResult>(Func<long, TResult> onLong,
        Func<Guid, TResult> onGuid,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLong(out var longValue) => onLong(longValue),
            _ when TryGetGuid(out var guidValue) => onGuid(guidValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PrimaryId)} holds no value.")
        };

    public void Match(Action<long> onLong, Action<Guid> onGuid, Action<JsonElement> otherwise)
    {
        if (TryGetLong(out var longValue)) onLong(longValue);
        else if (TryGetGuid(out var guidValue)) onGuid(guidValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PrimaryId)} holds no value.");
    }
}

file sealed class PrimaryIdConverter : JsonConverter<PrimaryId>
{
    public override PrimaryId Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt64(out var longValue))
            {
                return PrimaryId.Long(longValue);
            }
        }
        if (JsonSerializer.TryDeserialize<Guid>(root, options, out var guidValue))
        {
            return PrimaryId.Guid(guidValue);
        }
        return PrimaryId.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PrimaryId value, JsonSerializerOptions options)
    {
        if (value.TryGetLong(out var longValue))
        {
            JsonSerializer.Serialize(writer, longValue, options);
        }
        else if (value.TryGetGuid(out var guidValue))
        {
            JsonSerializer.Serialize(writer, guidValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PrimaryId)} contains no valid value to serialize.");
        }
    }
}
