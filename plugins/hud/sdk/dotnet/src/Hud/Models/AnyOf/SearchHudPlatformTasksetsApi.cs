using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

/// <summary>
/// ILIKE-match on taskset name
/// </summary>
[JsonConverter(typeof(SearchHudPlatformTasksetsApiConverter))]
public record SearchHudPlatformTasksetsApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SearchHudPlatformTasksetsApi(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static SearchHudPlatformTasksetsApi String(string value) => new(Optional<string>.Some(value), default);

    internal static SearchHudPlatformTasksetsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SearchHudPlatformTasksetsApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SearchHudPlatformTasksetsApi)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SearchHudPlatformTasksetsApi)} holds no value.");
    }
}

file sealed class SearchHudPlatformTasksetsApiConverter : JsonConverter<SearchHudPlatformTasksetsApi>
{
    public override SearchHudPlatformTasksetsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return SearchHudPlatformTasksetsApi.String(value);
        }
        return SearchHudPlatformTasksetsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SearchHudPlatformTasksetsApi value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(SearchHudPlatformTasksetsApi)} contains no valid value to serialize.");
        }
    }
}
