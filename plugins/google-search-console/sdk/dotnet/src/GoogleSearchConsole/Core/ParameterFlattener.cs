using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Core;

internal static class ParameterFlattener
{
    internal readonly record struct Field(string Key, IReadOnlyList<string> Items, string Delimiter)
    {
        public string Text => string.Join(Delimiter, Items);
    }

    public static IEnumerable<Field> Flatten(Param param)
    {
        var element = ToElement(param.Value);
        if (param.Key is { } key)
            return Flatten(key, Parse(element), param.Format);

        if (element.ValueKind is not (JsonValueKind.Object or JsonValueKind.Null))
            throw new InvalidOperationException(
                $"A keyless parameter must be an object; its value serialized as {element.ValueKind}.");

        return Parse(element) is Map map
            ? map.Pairs.SelectMany(pair => Flatten(pair.Name, pair.Value, param.Format))
            : [];
    }

    public static IEnumerable<string> Flatten(object? value) =>
        Parse(ToElement(value)) switch
        {
            Undefined => [],
            Sequence sequence when sequence.Items.All(item => item is not (Sequence or Map)) => sequence.Texts,
            var other => [other.Text]
        };

    private static IEnumerable<Field> Flatten(string key, Value value, SerializationFormat format) =>
        (value, format) switch
        {
            (Undefined, _) => [],
            (Scalar scalar, _) => [new Field(key, [scalar.Text], string.Empty)],
            (Sequence sequence, SerializationFormat.Delimited delimited) =>
                [new Field(key, [.. sequence.Texts], delimited.Delimiter)],
            (Map map, SerializationFormat.Delimited delimited) =>
                [new Field(key, [.. map.Texts], delimited.Delimiter)],
            (Sequence sequence, SerializationFormat.Repeated repeated) => sequence.Items.SelectMany(
                (item, index) => Flatten(repeated.ItemKey(key, index), item, format)),
            (Map map, SerializationFormat.Repeated) =>
                map.Pairs.SelectMany(pair => Flatten($"{key}[{pair.Name}]", pair.Value, format)),
            _ => throw new InvalidOperationException("SerializationFormat is neither delimited nor repeated.")
        };

    private static Value Parse(JsonElement element) =>
        element.ValueKind switch
        {
            JsonValueKind.Null => new Undefined(),
            JsonValueKind.Array => Sequence.Of([.. element.EnumerateArray().Select(Parse)], element.GetRawText()),
            JsonValueKind.Object => Map.Of(
                [.. element.EnumerateObject().Select(property => (property.Name, Parse(property.Value)))],
                element.GetRawText()),
            JsonValueKind.String => new Scalar(element.ToString()),
            _ => new Scalar(element.GetRawText())
        };

    private static JsonElement ToElement(object? value) =>
        value is JsonElement element ? element : JsonSerializer.SerializeToElement(value, JsonSerializerOptions.Web);

    private abstract record Value(string Text);

    private sealed record Undefined() : Value(string.Empty);

    private sealed record Scalar(string Text) : Value(Text);

    private sealed record Sequence(IReadOnlyList<Value> Items, string Text) : Value(Text)
    {
        public static Value Of(IReadOnlyList<Value> items, string text) =>
            items.Count == 0 ? new Undefined() : new Sequence(items, text);

        public IEnumerable<string> Texts => Items.Select(item => item.Text);
    }

    private sealed record Map(IReadOnlyList<(string Name, Value Value)> Pairs, string Text) : Value(Text)
    {
        public static Value Of(IReadOnlyList<(string Name, Value Value)> pairs, string text)
        {
            IReadOnlyList<(string Name, Value Value)> defined = [.. pairs.Where(pair => pair.Value is not Undefined)];
            return defined.Count == 0 ? new Undefined() : new Map(defined, text);
        }

        public IEnumerable<string> Texts => Pairs.SelectMany(pair => new[] { pair.Name, pair.Value.Text });
    }
}
