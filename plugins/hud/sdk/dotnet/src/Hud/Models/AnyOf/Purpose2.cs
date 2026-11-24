using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Purpose2Converter))]
public record Purpose2
{
    private readonly Optional<Purpose> _purposeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Purpose2(Optional<Purpose> purposeValue, Optional<UnknownArm> unknownValue)
    {
        _purposeValue = purposeValue;
        _unknownValue = unknownValue;
    }

    public static Purpose2 Purpose(Purpose value) => new(Optional<Purpose>.Some(value), default);

    internal static Purpose2 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPurpose([NotNullWhen(true)] out Purpose? value) => _purposeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Purpose2(Purpose value) => Purpose(value);

    public TResult Match<TResult>(Func<Purpose, TResult> onPurpose, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPurpose(out var purposeValue) => onPurpose(purposeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Purpose2)} holds no value.")
        };

    public void Match(Action<Purpose> onPurpose, Action<JsonElement> otherwise)
    {
        if (TryGetPurpose(out var purposeValue)) onPurpose(purposeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Purpose2)} holds no value.");
    }
}

file sealed class Purpose2Converter : JsonConverter<Purpose2>
{
    public override Purpose2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Purpose>(root, options, out var purposeValue))
        {
            return Purpose2.Purpose(purposeValue);
        }
        return Purpose2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Purpose2 value, JsonSerializerOptions options)
    {
        if (value.TryGetPurpose(out var purposeValue))
        {
            JsonSerializer.Serialize(writer, purposeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Purpose2)} contains no valid value to serialize.");
        }
    }
}
