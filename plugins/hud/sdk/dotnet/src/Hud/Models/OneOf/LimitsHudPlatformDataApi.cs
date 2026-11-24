using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models.OneOf;

[JsonConverter(typeof(LimitsHudPlatformDataApiConverter))]
public record LimitsHudPlatformDataApi
{
    private readonly Optional<BoundedDataFileStorageLimits> _boundedDataFileStorageLimitsValue;

    private readonly Optional<UnlimitedDataFileStorageLimits> _unlimitedDataFileStorageLimitsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LimitsHudPlatformDataApi(Optional<BoundedDataFileStorageLimits> boundedDataFileStorageLimitsValue,
        Optional<UnlimitedDataFileStorageLimits> unlimitedDataFileStorageLimitsValue,
        Optional<UnknownArm> unknownValue)
    {
        _boundedDataFileStorageLimitsValue = boundedDataFileStorageLimitsValue;
        _unlimitedDataFileStorageLimitsValue = unlimitedDataFileStorageLimitsValue;
        _unknownValue = unknownValue;
    }

    public static LimitsHudPlatformDataApi BoundedDataFileStorageLimits(BoundedDataFileStorageLimits value) =>
        new(Optional<BoundedDataFileStorageLimits>.Some(value), default, default);

    public static LimitsHudPlatformDataApi UnlimitedDataFileStorageLimits(UnlimitedDataFileStorageLimits value) =>
        new(default, Optional<UnlimitedDataFileStorageLimits>.Some(value), default);

    internal static LimitsHudPlatformDataApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBoundedDataFileStorageLimits([NotNullWhen(true)] out BoundedDataFileStorageLimits? value) =>
        _boundedDataFileStorageLimitsValue.TryGetValue(out value);

    public bool TryGetUnlimitedDataFileStorageLimits([NotNullWhen(true)] out UnlimitedDataFileStorageLimits? value) =>
        _unlimitedDataFileStorageLimitsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LimitsHudPlatformDataApi(BoundedDataFileStorageLimits value) =>
        BoundedDataFileStorageLimits(value);

    public static implicit operator LimitsHudPlatformDataApi(UnlimitedDataFileStorageLimits value) =>
        UnlimitedDataFileStorageLimits(value);

    public TResult Match<TResult>(Func<BoundedDataFileStorageLimits, TResult> onBoundedDataFileStorageLimits,
        Func<UnlimitedDataFileStorageLimits, TResult> onUnlimitedDataFileStorageLimits,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBoundedDataFileStorageLimits(
                out var boundedDataFileStorageLimitsValue) => onBoundedDataFileStorageLimits(
                boundedDataFileStorageLimitsValue),
            _ when TryGetUnlimitedDataFileStorageLimits(
                out var unlimitedDataFileStorageLimitsValue) => onUnlimitedDataFileStorageLimits(
                unlimitedDataFileStorageLimitsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LimitsHudPlatformDataApi)} holds no value.")
        };

    public void Match(Action<BoundedDataFileStorageLimits> onBoundedDataFileStorageLimits,
        Action<UnlimitedDataFileStorageLimits> onUnlimitedDataFileStorageLimits,
        Action<JsonElement> otherwise)
    {
        if (TryGetBoundedDataFileStorageLimits(
            out var boundedDataFileStorageLimitsValue)) onBoundedDataFileStorageLimits(
            boundedDataFileStorageLimitsValue);
        else if (TryGetUnlimitedDataFileStorageLimits(
            out var unlimitedDataFileStorageLimitsValue)) onUnlimitedDataFileStorageLimits(
            unlimitedDataFileStorageLimitsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LimitsHudPlatformDataApi)} holds no value.");
    }
}

file sealed class LimitsHudPlatformDataApiConverter : JsonConverter<LimitsHudPlatformDataApi>
{
    public override LimitsHudPlatformDataApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("kind", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'kind' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "bounded" => LimitsHudPlatformDataApi.BoundedDataFileStorageLimits(
                root.Deserialize<BoundedDataFileStorageLimits>(options)!),
            "unlimited" => LimitsHudPlatformDataApi.UnlimitedDataFileStorageLimits(
                root.Deserialize<UnlimitedDataFileStorageLimits>(options)!),
            _ => LimitsHudPlatformDataApi.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, LimitsHudPlatformDataApi value, JsonSerializerOptions options)
    {
        if (value.TryGetBoundedDataFileStorageLimits(out var boundedDataFileStorageLimitsValue))
        {
            JsonSerializer.Serialize(writer, boundedDataFileStorageLimitsValue, options);
        }
        else if (value.TryGetUnlimitedDataFileStorageLimits(out var unlimitedDataFileStorageLimitsValue))
        {
            JsonSerializer.Serialize(writer, unlimitedDataFileStorageLimitsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LimitsHudPlatformDataApi)} contains no valid value to serialize.");
        }
    }
}
