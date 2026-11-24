using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ArgumentsConverter))]
public record Arguments
{
    private readonly Optional<IReadOnlyList<PromptArgument>> _listOfPromptArgumentValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Arguments(Optional<IReadOnlyList<PromptArgument>> listOfPromptArgumentValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfPromptArgumentValue = listOfPromptArgumentValue;
        _unknownValue = unknownValue;
    }

    public static Arguments ListOfPromptArgument(IReadOnlyList<PromptArgument> value) =>
        new(Optional<IReadOnlyList<PromptArgument>>.Some(value), default);

    internal static Arguments Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfPromptArgument([NotNullWhen(true)] out IReadOnlyList<PromptArgument>? value) =>
        _listOfPromptArgumentValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<PromptArgument>, TResult> onListOfPromptArgument,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfPromptArgument(out var listOfPromptArgumentValue) => onListOfPromptArgument(
                listOfPromptArgumentValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Arguments)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<PromptArgument>> onListOfPromptArgument, Action<JsonElement> otherwise)
    {
        if (TryGetListOfPromptArgument(out var listOfPromptArgumentValue)) onListOfPromptArgument(
            listOfPromptArgumentValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Arguments)} holds no value.");
    }
}

file sealed class ArgumentsConverter : JsonConverter<Arguments>
{
    public override Arguments Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<PromptArgument>>(
            root,
            options,
            out var listOfPromptArgumentValue))
        {
            return Arguments.ListOfPromptArgument(listOfPromptArgumentValue);
        }
        return Arguments.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Arguments value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfPromptArgument(out var listOfPromptArgumentValue))
        {
            JsonSerializer.Serialize(writer, listOfPromptArgumentValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Arguments)} contains no valid value to serialize.");
        }
    }
}
