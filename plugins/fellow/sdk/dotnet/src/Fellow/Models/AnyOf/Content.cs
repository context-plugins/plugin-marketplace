using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Fellow.Core.Extensions;
using Fellow.Core.Models;

namespace Fellow.Models.AnyOf;

[JsonConverter(typeof(ContentConverter))]
public record Content
{
    private readonly Optional<IReadOnlyList<RecapKeyMoment>> _listOfRecapKeyMomentValue;

    private readonly Optional<IReadOnlyList<RecapTopic>> _listOfRecapTopicValue;

    private readonly Optional<IReadOnlyList<RecapActionItem>> _listOfRecapActionItemValue;

    private readonly Optional<IReadOnlyList<RecapDecision>> _listOfRecapDecisionValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Content(Optional<IReadOnlyList<RecapKeyMoment>> listOfRecapKeyMomentValue,
        Optional<IReadOnlyList<RecapTopic>> listOfRecapTopicValue,
        Optional<IReadOnlyList<RecapActionItem>> listOfRecapActionItemValue,
        Optional<IReadOnlyList<RecapDecision>> listOfRecapDecisionValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfRecapKeyMomentValue = listOfRecapKeyMomentValue;
        _listOfRecapTopicValue = listOfRecapTopicValue;
        _listOfRecapActionItemValue = listOfRecapActionItemValue;
        _listOfRecapDecisionValue = listOfRecapDecisionValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Content ListOfRecapKeyMoment(IReadOnlyList<RecapKeyMoment> value) =>
        new(Optional<IReadOnlyList<RecapKeyMoment>>.Some(value), default, default, default, default, default);

    public static Content ListOfRecapTopic(IReadOnlyList<RecapTopic> value) =>
        new(default, Optional<IReadOnlyList<RecapTopic>>.Some(value), default, default, default, default);

    public static Content ListOfRecapActionItem(IReadOnlyList<RecapActionItem> value) =>
        new(default, default, Optional<IReadOnlyList<RecapActionItem>>.Some(value), default, default, default);

    public static Content ListOfRecapDecision(IReadOnlyList<RecapDecision> value) =>
        new(default, default, default, Optional<IReadOnlyList<RecapDecision>>.Some(value), default, default);

    public static Content String(string value) =>
        new(default, default, default, default, Optional<string>.Some(value), default);

    internal static Content Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfRecapKeyMoment([NotNullWhen(true)] out IReadOnlyList<RecapKeyMoment>? value) =>
        _listOfRecapKeyMomentValue.TryGetValue(out value);

    public bool TryGetListOfRecapTopic([NotNullWhen(true)] out IReadOnlyList<RecapTopic>? value) =>
        _listOfRecapTopicValue.TryGetValue(out value);

    public bool TryGetListOfRecapActionItem([NotNullWhen(true)] out IReadOnlyList<RecapActionItem>? value) =>
        _listOfRecapActionItemValue.TryGetValue(out value);

    public bool TryGetListOfRecapDecision([NotNullWhen(true)] out IReadOnlyList<RecapDecision>? value) =>
        _listOfRecapDecisionValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Content(string value) => String(value);

    public TResult Match<TResult>(Func<IReadOnlyList<RecapKeyMoment>, TResult> onListOfRecapKeyMoment,
        Func<IReadOnlyList<RecapTopic>, TResult> onListOfRecapTopic,
        Func<IReadOnlyList<RecapActionItem>, TResult> onListOfRecapActionItem,
        Func<IReadOnlyList<RecapDecision>, TResult> onListOfRecapDecision,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfRecapKeyMoment(out var listOfRecapKeyMomentValue) => onListOfRecapKeyMoment(
                listOfRecapKeyMomentValue),
            _ when TryGetListOfRecapTopic(out var listOfRecapTopicValue) => onListOfRecapTopic(listOfRecapTopicValue),
            _ when TryGetListOfRecapActionItem(out var listOfRecapActionItemValue) => onListOfRecapActionItem(
                listOfRecapActionItemValue),
            _ when TryGetListOfRecapDecision(out var listOfRecapDecisionValue) => onListOfRecapDecision(
                listOfRecapDecisionValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Content)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<RecapKeyMoment>> onListOfRecapKeyMoment,
        Action<IReadOnlyList<RecapTopic>> onListOfRecapTopic,
        Action<IReadOnlyList<RecapActionItem>> onListOfRecapActionItem,
        Action<IReadOnlyList<RecapDecision>> onListOfRecapDecision,
        Action<string> onString,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfRecapKeyMoment(out var listOfRecapKeyMomentValue)) onListOfRecapKeyMoment(
            listOfRecapKeyMomentValue);
        else if (TryGetListOfRecapTopic(out var listOfRecapTopicValue)) onListOfRecapTopic(listOfRecapTopicValue);
        else if (TryGetListOfRecapActionItem(out var listOfRecapActionItemValue)) onListOfRecapActionItem(
            listOfRecapActionItemValue);
        else if (TryGetListOfRecapDecision(out var listOfRecapDecisionValue)) onListOfRecapDecision(
            listOfRecapDecisionValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Content)} holds no value.");
    }
}

file sealed class ContentConverter : JsonConverter<Content>
{
    public override Content Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RecapKeyMoment>>(
            root,
            options,
            out var listOfRecapKeyMomentValue))
        {
            return Content.ListOfRecapKeyMoment(listOfRecapKeyMomentValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RecapTopic>>(root, options, out var listOfRecapTopicValue))
        {
            return Content.ListOfRecapTopic(listOfRecapTopicValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RecapActionItem>>(
            root,
            options,
            out var listOfRecapActionItemValue))
        {
            return Content.ListOfRecapActionItem(listOfRecapActionItemValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RecapDecision>>(
            root,
            options,
            out var listOfRecapDecisionValue))
        {
            return Content.ListOfRecapDecision(listOfRecapDecisionValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Content.String(value);
        }
        return Content.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Content value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfRecapKeyMoment(out var listOfRecapKeyMomentValue))
        {
            JsonSerializer.Serialize(writer, listOfRecapKeyMomentValue, options);
        }
        else if (value.TryGetListOfRecapTopic(out var listOfRecapTopicValue))
        {
            JsonSerializer.Serialize(writer, listOfRecapTopicValue, options);
        }
        else if (value.TryGetListOfRecapActionItem(out var listOfRecapActionItemValue))
        {
            JsonSerializer.Serialize(writer, listOfRecapActionItemValue, options);
        }
        else if (value.TryGetListOfRecapDecision(out var listOfRecapDecisionValue))
        {
            JsonSerializer.Serialize(writer, listOfRecapDecisionValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Content)} contains no valid value to serialize.");
        }
    }
}
