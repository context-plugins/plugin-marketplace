using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(FeaturedSourceConverter))]
public record FeaturedSource
{
    private readonly Optional<FeaturedSourceResponse> _featuredSourceResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FeaturedSource(Optional<FeaturedSourceResponse> featuredSourceResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _featuredSourceResponseValue = featuredSourceResponseValue;
        _unknownValue = unknownValue;
    }

    public static FeaturedSource FeaturedSourceResponse(FeaturedSourceResponse value) =>
        new(Optional<FeaturedSourceResponse>.Some(value), default);

    internal static FeaturedSource Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFeaturedSourceResponse([NotNullWhen(true)] out FeaturedSourceResponse? value) =>
        _featuredSourceResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FeaturedSource(FeaturedSourceResponse value) => FeaturedSourceResponse(value);

    public TResult Match<TResult>(Func<FeaturedSourceResponse, TResult> onFeaturedSourceResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFeaturedSourceResponse(out var featuredSourceResponseValue) => onFeaturedSourceResponse(
                featuredSourceResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FeaturedSource)} holds no value.")
        };

    public void Match(Action<FeaturedSourceResponse> onFeaturedSourceResponse, Action<JsonElement> otherwise)
    {
        if (TryGetFeaturedSourceResponse(out var featuredSourceResponseValue)) onFeaturedSourceResponse(
            featuredSourceResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FeaturedSource)} holds no value.");
    }
}

file sealed class FeaturedSourceConverter : JsonConverter<FeaturedSource>
{
    public override FeaturedSource Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FeaturedSourceResponse>(root, options, out var featuredSourceResponseValue))
        {
            return FeaturedSource.FeaturedSourceResponse(featuredSourceResponseValue);
        }
        return FeaturedSource.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FeaturedSource value, JsonSerializerOptions options)
    {
        if (value.TryGetFeaturedSourceResponse(out var featuredSourceResponseValue))
        {
            JsonSerializer.Serialize(writer, featuredSourceResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FeaturedSource)} contains no valid value to serialize.");
        }
    }
}
