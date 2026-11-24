using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ToolCallsConverter))]
public record ToolCalls
{
    private readonly Optional<IReadOnlyList<AtifToolCall>> _listOfAtifToolCallValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ToolCalls(Optional<IReadOnlyList<AtifToolCall>> listOfAtifToolCallValue, Optional<UnknownArm> unknownValue)
    {
        _listOfAtifToolCallValue = listOfAtifToolCallValue;
        _unknownValue = unknownValue;
    }

    public static ToolCalls ListOfAtifToolCall(IReadOnlyList<AtifToolCall> value) =>
        new(Optional<IReadOnlyList<AtifToolCall>>.Some(value), default);

    internal static ToolCalls Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfAtifToolCall([NotNullWhen(true)] out IReadOnlyList<AtifToolCall>? value) =>
        _listOfAtifToolCallValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<AtifToolCall>, TResult> onListOfAtifToolCall,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfAtifToolCall(out var listOfAtifToolCallValue) => onListOfAtifToolCall(
                listOfAtifToolCallValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ToolCalls)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<AtifToolCall>> onListOfAtifToolCall, Action<JsonElement> otherwise)
    {
        if (TryGetListOfAtifToolCall(out var listOfAtifToolCallValue)) onListOfAtifToolCall(listOfAtifToolCallValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ToolCalls)} holds no value.");
    }
}

file sealed class ToolCallsConverter : JsonConverter<ToolCalls>
{
    public override ToolCalls Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AtifToolCall>>(root, options, out var listOfAtifToolCallValue))
        {
            return ToolCalls.ListOfAtifToolCall(listOfAtifToolCallValue);
        }
        return ToolCalls.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ToolCalls value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfAtifToolCall(out var listOfAtifToolCallValue))
        {
            JsonSerializer.Serialize(writer, listOfAtifToolCallValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ToolCalls)} contains no valid value to serialize.");
        }
    }
}
