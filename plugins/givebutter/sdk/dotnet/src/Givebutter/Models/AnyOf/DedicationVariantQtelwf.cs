using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(DedicationVariantQtelwfConverter))]
public record DedicationVariantQtelwf
{
    private readonly Optional<DedicationResource> _dedicationResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DedicationVariantQtelwf(Optional<DedicationResource> dedicationResourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _dedicationResourceValue = dedicationResourceValue;
        _unknownValue = unknownValue;
    }

    public static DedicationVariantQtelwf DedicationResource(DedicationResource value) =>
        new(Optional<DedicationResource>.Some(value), default);

    internal static DedicationVariantQtelwf Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDedicationResource([NotNullWhen(true)] out DedicationResource? value) =>
        _dedicationResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DedicationVariantQtelwf(DedicationResource value) => DedicationResource(value);

    public TResult Match<TResult>(Func<DedicationResource, TResult> onDedicationResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDedicationResource(out var dedicationResourceValue) => onDedicationResource(
                dedicationResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DedicationVariantQtelwf)} holds no value.")
        };

    public void Match(Action<DedicationResource> onDedicationResource, Action<JsonElement> otherwise)
    {
        if (TryGetDedicationResource(out var dedicationResourceValue)) onDedicationResource(dedicationResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DedicationVariantQtelwf)} holds no value.");
    }
}

file sealed class DedicationVariantQtelwfConverter : JsonConverter<DedicationVariantQtelwf>
{
    public override DedicationVariantQtelwf Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DedicationResource>(root, options, out var dedicationResourceValue))
        {
            return DedicationVariantQtelwf.DedicationResource(dedicationResourceValue);
        }
        return DedicationVariantQtelwf.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DedicationVariantQtelwf value, JsonSerializerOptions options)
    {
        if (value.TryGetDedicationResource(out var dedicationResourceValue))
        {
            JsonSerializer.Serialize(writer, dedicationResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DedicationVariantQtelwf)} contains no valid value to serialize.");
        }
    }
}
