using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

/// <summary>
/// Grouping dimensions; repeat the parameter to group by several at once
/// </summary>
[JsonConverter(typeof(GroupBy1Converter))]
public record GroupBy1
{
    private readonly Optional<IReadOnlyList<GroupBy>> _listOfGroupByValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private GroupBy1(Optional<IReadOnlyList<GroupBy>> listOfGroupByValue, Optional<UnknownArm> unknownValue)
    {
        _listOfGroupByValue = listOfGroupByValue;
        _unknownValue = unknownValue;
    }

    public static GroupBy1 ListOfGroupBy(IReadOnlyList<GroupBy> value) =>
        new(Optional<IReadOnlyList<GroupBy>>.Some(value), default);

    internal static GroupBy1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfGroupBy([NotNullWhen(true)] out IReadOnlyList<GroupBy>? value) =>
        _listOfGroupByValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<GroupBy>, TResult> onListOfGroupBy,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfGroupBy(out var listOfGroupByValue) => onListOfGroupBy(listOfGroupByValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GroupBy1)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<GroupBy>> onListOfGroupBy, Action<JsonElement> otherwise)
    {
        if (TryGetListOfGroupBy(out var listOfGroupByValue)) onListOfGroupBy(listOfGroupByValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GroupBy1)} holds no value.");
    }
}

file sealed class GroupBy1Converter : JsonConverter<GroupBy1>
{
    public override GroupBy1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<GroupBy>>(root, options, out var listOfGroupByValue))
        {
            return GroupBy1.ListOfGroupBy(listOfGroupByValue);
        }
        return GroupBy1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GroupBy1 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfGroupBy(out var listOfGroupByValue))
        {
            JsonSerializer.Serialize(writer, listOfGroupByValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GroupBy1)} contains no valid value to serialize.");
        }
    }
}
