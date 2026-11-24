using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ToolDefinitionsConverter))]
public record ToolDefinitions
{
    private readonly Optional<IReadOnlyList<object>> _listOfAnonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ToolDefinitions(Optional<IReadOnlyList<object>> listOfAnonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfAnonymousObjectValue = listOfAnonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static ToolDefinitions ListOfAnonymousObject(IReadOnlyList<object> value) =>
        new(Optional<IReadOnlyList<object>>.Some(value), default);

    internal static ToolDefinitions Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfAnonymousObject([NotNullWhen(true)] out IReadOnlyList<object>? value) =>
        _listOfAnonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<object>, TResult> onListOfAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue) => onListOfAnonymousObject(
                listOfAnonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ToolDefinitions)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<object>> onListOfAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue)) onListOfAnonymousObject(
            listOfAnonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ToolDefinitions)} holds no value.");
    }
}

file sealed class ToolDefinitionsConverter : JsonConverter<ToolDefinitions>
{
    public override ToolDefinitions Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<object>>(root, options, out var listOfAnonymousObjectValue))
        {
            return ToolDefinitions.ListOfAnonymousObject(listOfAnonymousObjectValue);
        }
        return ToolDefinitions.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ToolDefinitions value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, listOfAnonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ToolDefinitions)} contains no valid value to serialize.");
        }
    }
}
