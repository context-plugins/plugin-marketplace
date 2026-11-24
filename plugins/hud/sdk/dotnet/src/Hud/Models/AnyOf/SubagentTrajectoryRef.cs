using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(SubagentTrajectoryRefConverter))]
public record SubagentTrajectoryRef
{
    private readonly Optional<IReadOnlyList<AtifSubagentRef>> _listOfAtifSubagentRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubagentTrajectoryRef(Optional<IReadOnlyList<AtifSubagentRef>> listOfAtifSubagentRefValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfAtifSubagentRefValue = listOfAtifSubagentRefValue;
        _unknownValue = unknownValue;
    }

    public static SubagentTrajectoryRef ListOfAtifSubagentRef(IReadOnlyList<AtifSubagentRef> value) =>
        new(Optional<IReadOnlyList<AtifSubagentRef>>.Some(value), default);

    internal static SubagentTrajectoryRef Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfAtifSubagentRef([NotNullWhen(true)] out IReadOnlyList<AtifSubagentRef>? value) =>
        _listOfAtifSubagentRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<AtifSubagentRef>, TResult> onListOfAtifSubagentRef,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfAtifSubagentRef(out var listOfAtifSubagentRefValue) => onListOfAtifSubagentRef(
                listOfAtifSubagentRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubagentTrajectoryRef)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<AtifSubagentRef>> onListOfAtifSubagentRef, Action<JsonElement> otherwise)
    {
        if (TryGetListOfAtifSubagentRef(out var listOfAtifSubagentRefValue)) onListOfAtifSubagentRef(
            listOfAtifSubagentRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubagentTrajectoryRef)} holds no value.");
    }
}

file sealed class SubagentTrajectoryRefConverter : JsonConverter<SubagentTrajectoryRef>
{
    public override SubagentTrajectoryRef Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AtifSubagentRef>>(
            root,
            options,
            out var listOfAtifSubagentRefValue))
        {
            return SubagentTrajectoryRef.ListOfAtifSubagentRef(listOfAtifSubagentRefValue);
        }
        return SubagentTrajectoryRef.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubagentTrajectoryRef value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfAtifSubagentRef(out var listOfAtifSubagentRefValue))
        {
            JsonSerializer.Serialize(writer, listOfAtifSubagentRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubagentTrajectoryRef)} contains no valid value to serialize.");
        }
    }
}
