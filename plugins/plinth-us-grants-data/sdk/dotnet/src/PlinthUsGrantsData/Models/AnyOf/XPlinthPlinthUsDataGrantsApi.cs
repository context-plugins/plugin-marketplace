using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(XPlinthPlinthUsDataGrantsApiConverter))]
public record XPlinthPlinthUsDataGrantsApi
{
    private readonly Optional<GrantProvenance> _grantProvenanceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private XPlinthPlinthUsDataGrantsApi(Optional<GrantProvenance> grantProvenanceValue,
        Optional<UnknownArm> unknownValue)
    {
        _grantProvenanceValue = grantProvenanceValue;
        _unknownValue = unknownValue;
    }

    public static XPlinthPlinthUsDataGrantsApi GrantProvenance(GrantProvenance value) =>
        new(Optional<GrantProvenance>.Some(value), default);

    internal static XPlinthPlinthUsDataGrantsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGrantProvenance([NotNullWhen(true)] out GrantProvenance? value) =>
        _grantProvenanceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator XPlinthPlinthUsDataGrantsApi(GrantProvenance value) => GrantProvenance(value);

    public TResult Match<TResult>(Func<GrantProvenance, TResult> onGrantProvenance,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGrantProvenance(out var grantProvenanceValue) => onGrantProvenance(grantProvenanceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(XPlinthPlinthUsDataGrantsApi)} holds no value.")
        };

    public void Match(Action<GrantProvenance> onGrantProvenance, Action<JsonElement> otherwise)
    {
        if (TryGetGrantProvenance(out var grantProvenanceValue)) onGrantProvenance(grantProvenanceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(XPlinthPlinthUsDataGrantsApi)} holds no value.");
    }
}

file sealed class XPlinthPlinthUsDataGrantsApiConverter : JsonConverter<XPlinthPlinthUsDataGrantsApi>
{
    public override XPlinthPlinthUsDataGrantsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GrantProvenance>(root, options, out var grantProvenanceValue))
        {
            return XPlinthPlinthUsDataGrantsApi.GrantProvenance(grantProvenanceValue);
        }
        return XPlinthPlinthUsDataGrantsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, XPlinthPlinthUsDataGrantsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetGrantProvenance(out var grantProvenanceValue))
        {
            JsonSerializer.Serialize(writer, grantProvenanceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(XPlinthPlinthUsDataGrantsApi)} contains no valid value to serialize.");
        }
    }
}
