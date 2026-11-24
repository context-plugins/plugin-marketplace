using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(PromptTokenIdsConverter))]
public record PromptTokenIds
{
    private readonly Optional<IReadOnlyList<int>> _listOfIntValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PromptTokenIds(Optional<IReadOnlyList<int>> listOfIntValue, Optional<UnknownArm> unknownValue)
    {
        _listOfIntValue = listOfIntValue;
        _unknownValue = unknownValue;
    }

    public static PromptTokenIds ListOfInt(IReadOnlyList<int> value) =>
        new(Optional<IReadOnlyList<int>>.Some(value), default);

    internal static PromptTokenIds Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfInt([NotNullWhen(true)] out IReadOnlyList<int>? value) =>
        _listOfIntValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<int>, TResult> onListOfInt,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfInt(out var listOfIntValue) => onListOfInt(listOfIntValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PromptTokenIds)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<int>> onListOfInt, Action<JsonElement> otherwise)
    {
        if (TryGetListOfInt(out var listOfIntValue)) onListOfInt(listOfIntValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PromptTokenIds)} holds no value.");
    }
}

file sealed class PromptTokenIdsConverter : JsonConverter<PromptTokenIds>
{
    public override PromptTokenIds Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<int>>(root, options, out var listOfIntValue))
        {
            return PromptTokenIds.ListOfInt(listOfIntValue);
        }
        return PromptTokenIds.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PromptTokenIds value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfInt(out var listOfIntValue))
        {
            JsonSerializer.Serialize(writer, listOfIntValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PromptTokenIds)} contains no valid value to serialize.");
        }
    }
}
