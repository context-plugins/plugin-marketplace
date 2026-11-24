using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(PreviousReviewDecisionConverter))]
public record PreviousReviewDecision
{
    private readonly Optional<TaskState> _taskStateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PreviousReviewDecision(Optional<TaskState> taskStateValue, Optional<UnknownArm> unknownValue)
    {
        _taskStateValue = taskStateValue;
        _unknownValue = unknownValue;
    }

    public static PreviousReviewDecision TaskState(TaskState value) => new(Optional<TaskState>.Some(value), default);

    internal static PreviousReviewDecision Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskState([NotNullWhen(true)] out TaskState? value) => _taskStateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PreviousReviewDecision(TaskState value) => TaskState(value);

    public TResult Match<TResult>(Func<TaskState, TResult> onTaskState, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskState(out var taskStateValue) => onTaskState(taskStateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PreviousReviewDecision)} holds no value.")
        };

    public void Match(Action<TaskState> onTaskState, Action<JsonElement> otherwise)
    {
        if (TryGetTaskState(out var taskStateValue)) onTaskState(taskStateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PreviousReviewDecision)} holds no value.");
    }
}

file sealed class PreviousReviewDecisionConverter : JsonConverter<PreviousReviewDecision>
{
    public override PreviousReviewDecision Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskState>(root, options, out var taskStateValue))
        {
            return PreviousReviewDecision.TaskState(taskStateValue);
        }
        return PreviousReviewDecision.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PreviousReviewDecision value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskState(out var taskStateValue))
        {
            JsonSerializer.Serialize(writer, taskStateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PreviousReviewDecision)} contains no valid value to serialize.");
        }
    }
}
