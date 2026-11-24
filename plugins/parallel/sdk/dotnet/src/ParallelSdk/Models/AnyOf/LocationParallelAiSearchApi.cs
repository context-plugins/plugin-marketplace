using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// ISO 3166-1 alpha-2 country code for geo-targeted search results.
/// </summary>
[JsonConverter(typeof(LocationParallelAiSearchApiConverter))]
public record LocationParallelAiSearchApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LocationParallelAiSearchApi(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static LocationParallelAiSearchApi String(string value) => new(Optional<string>.Some(value), default);

    internal static LocationParallelAiSearchApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LocationParallelAiSearchApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LocationParallelAiSearchApi)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LocationParallelAiSearchApi)} holds no value.");
    }
}

file sealed class LocationParallelAiSearchApiConverter : JsonConverter<LocationParallelAiSearchApi>
{
    public override LocationParallelAiSearchApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return LocationParallelAiSearchApi.String(value);
        }
        return LocationParallelAiSearchApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LocationParallelAiSearchApi value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LocationParallelAiSearchApi)} contains no valid value to serialize.");
        }
    }
}
