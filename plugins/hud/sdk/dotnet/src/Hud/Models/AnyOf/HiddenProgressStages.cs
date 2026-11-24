using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(HiddenProgressStagesConverter))]
public record HiddenProgressStages
{
    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private HiddenProgressStages(Optional<IReadOnlyList<string>> listOfStringValue, Optional<UnknownArm> unknownValue)
    {
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static HiddenProgressStages ListOfString(IReadOnlyList<string> value) =>
        new(Optional<IReadOnlyList<string>>.Some(value), default);

    internal static HiddenProgressStages Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(HiddenProgressStages)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<string>> onListOfString, Action<JsonElement> otherwise)
    {
        if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(HiddenProgressStages)} holds no value.");
    }
}

file sealed class HiddenProgressStagesConverter : JsonConverter<HiddenProgressStages>
{
    public override HiddenProgressStages Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return HiddenProgressStages.ListOfString(listOfStringValue);
        }
        return HiddenProgressStages.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, HiddenProgressStages value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(HiddenProgressStages)} contains no valid value to serialize.");
        }
    }
}
