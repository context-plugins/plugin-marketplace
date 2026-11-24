using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Shortcut.Core.Extensions;
using Shortcut.Core.Models;

namespace Shortcut.Models.AnyOf;

/// <summary>
/// The ID of the entity referenced.
/// </summary>
[JsonConverter(typeof(IdConverter))]
public record Id
{
    private readonly Optional<long> _longValue;

    private readonly Optional<Guid> _guidValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Id(Optional<long> longValue, Optional<Guid> guidValue, Optional<UnknownArm> unknownValue)
    {
        _longValue = longValue;
        _guidValue = guidValue;
        _unknownValue = unknownValue;
    }

    public static Id Long(long value) => new(Optional<long>.Some(value), default, default);

    public static Id Guid(Guid value) => new(default, Optional<Guid>.Some(value), default);

    internal static Id Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLong(out long value) => _longValue.TryGetValue(out value);

    public bool TryGetGuid(out Guid value) => _guidValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Id(long value) => Long(value);

    public static implicit operator Id(Guid value) => Guid(value);

    public TResult Match<TResult>(Func<long, TResult> onLong,
        Func<Guid, TResult> onGuid,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLong(out var longValue) => onLong(longValue),
            _ when TryGetGuid(out var guidValue) => onGuid(guidValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Id)} holds no value.")
        };

    public void Match(Action<long> onLong, Action<Guid> onGuid, Action<JsonElement> otherwise)
    {
        if (TryGetLong(out var longValue)) onLong(longValue);
        else if (TryGetGuid(out var guidValue)) onGuid(guidValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Id)} holds no value.");
    }
}

file sealed class IdConverter : JsonConverter<Id>
{
    public override Id Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt64(out var longValue))
            {
                return Id.Long(longValue);
            }
        }
        if (JsonSerializer.TryDeserialize<Guid>(root, options, out var guidValue))
        {
            return Id.Guid(guidValue);
        }
        return Id.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Id value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Id)} contains no valid value to serialize.");
        }
    }
}
