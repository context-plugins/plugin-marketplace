using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Updated search query for the monitor. Use this for minor updates to prompts and instructions only. Major changes to the query may lead to unexpected results in change detection, as the monitor compares new results with what was previously seen.
/// </summary>
[JsonConverter(typeof(QueryParallelAiMonitorApiConverter))]
public record QueryParallelAiMonitorApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private QueryParallelAiMonitorApi(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static QueryParallelAiMonitorApi String(string value) => new(Optional<string>.Some(value), default);

    internal static QueryParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator QueryParallelAiMonitorApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(QueryParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(QueryParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class QueryParallelAiMonitorApiConverter : JsonConverter<QueryParallelAiMonitorApi>
{
    public override QueryParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return QueryParallelAiMonitorApi.String(value);
        }
        return QueryParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, QueryParallelAiMonitorApi value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(QueryParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
