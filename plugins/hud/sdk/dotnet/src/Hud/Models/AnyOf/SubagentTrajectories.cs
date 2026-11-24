using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(SubagentTrajectoriesConverter))]
public record SubagentTrajectories
{
    private readonly Optional<IReadOnlyList<AtifTrajectory>> _listOfAtifTrajectoryValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubagentTrajectories(Optional<IReadOnlyList<AtifTrajectory>> listOfAtifTrajectoryValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfAtifTrajectoryValue = listOfAtifTrajectoryValue;
        _unknownValue = unknownValue;
    }

    public static SubagentTrajectories ListOfAtifTrajectory(IReadOnlyList<AtifTrajectory> value) =>
        new(Optional<IReadOnlyList<AtifTrajectory>>.Some(value), default);

    internal static SubagentTrajectories Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfAtifTrajectory([NotNullWhen(true)] out IReadOnlyList<AtifTrajectory>? value) =>
        _listOfAtifTrajectoryValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<AtifTrajectory>, TResult> onListOfAtifTrajectory,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfAtifTrajectory(out var listOfAtifTrajectoryValue) => onListOfAtifTrajectory(
                listOfAtifTrajectoryValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubagentTrajectories)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<AtifTrajectory>> onListOfAtifTrajectory, Action<JsonElement> otherwise)
    {
        if (TryGetListOfAtifTrajectory(out var listOfAtifTrajectoryValue)) onListOfAtifTrajectory(
            listOfAtifTrajectoryValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubagentTrajectories)} holds no value.");
    }
}

file sealed class SubagentTrajectoriesConverter : JsonConverter<SubagentTrajectories>
{
    public override SubagentTrajectories Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AtifTrajectory>>(
            root,
            options,
            out var listOfAtifTrajectoryValue))
        {
            return SubagentTrajectories.ListOfAtifTrajectory(listOfAtifTrajectoryValue);
        }
        return SubagentTrajectories.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubagentTrajectories value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfAtifTrajectory(out var listOfAtifTrajectoryValue))
        {
            JsonSerializer.Serialize(writer, listOfAtifTrajectoryValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubagentTrajectories)} contains no valid value to serialize.");
        }
    }
}
