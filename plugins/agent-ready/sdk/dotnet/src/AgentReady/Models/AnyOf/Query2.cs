using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AgentReady.Core.Extensions;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;

namespace AgentReady.Models.AnyOf;

[JsonConverter(typeof(Query2Converter))]
public record Query2
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Query> _queryValue;

    private readonly Optional<Query1> _query1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Query2(Optional<string> stringValue,
        Optional<Query> queryValue,
        Optional<Query1> query1Value,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _queryValue = queryValue;
        _query1Value = query1Value;
        _unknownValue = unknownValue;
    }

    public static Query2 String(string value) => new(Optional<string>.Some(value), default, default, default);

    public static Query2 Query(Query value) => new(default, Optional<Query>.Some(value), default, default);

    public static Query2 Query1(Query1 value) => new(default, default, Optional<Query1>.Some(value), default);

    internal static Query2 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetQuery([NotNullWhen(true)] out Query? value) => _queryValue.TryGetValue(out value);

    public bool TryGetQuery1([NotNullWhen(true)] out Query1? value) => _query1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Query2(string value) => String(value);

    public static implicit operator Query2(Query value) => Query(value);

    public static implicit operator Query2(Query1 value) => Query1(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Query, TResult> onQuery,
        Func<Query1, TResult> onQuery1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetQuery(out var queryValue) => onQuery(queryValue),
            _ when TryGetQuery1(out var query1Value) => onQuery1(query1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Query2)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<Query> onQuery,
        Action<Query1> onQuery1,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetQuery(out var queryValue)) onQuery(queryValue);
        else if (TryGetQuery1(out var query1Value)) onQuery1(query1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Query2)} holds no value.");
    }
}

file sealed class Query2Converter : JsonConverter<Query2>
{
    public override Query2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(2000))
            {
                return Query2.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Query>(root, options, out var queryValue))
        {
            return Query2.Query(queryValue);
        }
        if (JsonSerializer.TryDeserialize<Query1>(root, options, out var query1Value))
        {
            return Query2.Query1(query1Value);
        }
        return Query2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Query2 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetQuery(out var queryValue))
        {
            JsonSerializer.Serialize(writer, queryValue, options);
        }
        else if (value.TryGetQuery1(out var query1Value))
        {
            JsonSerializer.Serialize(writer, query1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Query2)} contains no valid value to serialize.");
        }
    }
}
