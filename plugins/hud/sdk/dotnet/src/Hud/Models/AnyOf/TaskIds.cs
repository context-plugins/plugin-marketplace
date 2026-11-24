using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(TaskIdsConverter))]
public record TaskIds
{
    private readonly Optional<IReadOnlyList<Guid>> _listOfGuidValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TaskIds(Optional<IReadOnlyList<Guid>> listOfGuidValue, Optional<UnknownArm> unknownValue)
    {
        _listOfGuidValue = listOfGuidValue;
        _unknownValue = unknownValue;
    }

    public static TaskIds ListOfGuid(IReadOnlyList<Guid> value) =>
        new(Optional<IReadOnlyList<Guid>>.Some(value), default);

    internal static TaskIds Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfGuid([NotNullWhen(true)] out IReadOnlyList<Guid>? value) =>
        _listOfGuidValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Guid>, TResult> onListOfGuid,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfGuid(out var listOfGuidValue) => onListOfGuid(listOfGuidValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TaskIds)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Guid>> onListOfGuid, Action<JsonElement> otherwise)
    {
        if (TryGetListOfGuid(out var listOfGuidValue)) onListOfGuid(listOfGuidValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TaskIds)} holds no value.");
    }
}

file sealed class TaskIdsConverter : JsonConverter<TaskIds>
{
    public override TaskIds Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Guid>>(root, options, out var listOfGuidValue))
        {
            return TaskIds.ListOfGuid(listOfGuidValue);
        }
        return TaskIds.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TaskIds value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfGuid(out var listOfGuidValue))
        {
            JsonSerializer.Serialize(writer, listOfGuidValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TaskIds)} contains no valid value to serialize.");
        }
    }
}
