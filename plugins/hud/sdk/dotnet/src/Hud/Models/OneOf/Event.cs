using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models.OneOf;

[JsonConverter(typeof(EventConverter))]
public record Event
{
    private readonly Optional<AgentMessageEvent> _agentMessageEventValue;

    private readonly Optional<FileCaptureEvent> _fileCaptureEventValue;

    private readonly Optional<FileChangeEvent> _fileChangeEventValue;

    private readonly Optional<FileSetupEvent> _fileSetupEventValue;

    private readonly Optional<FileSnapshotEvent> _fileSnapshotEventValue;

    private readonly Optional<RawEvent> _rawEventValue;

    private readonly Optional<InferenceEvent> _inferenceEventValue;

    private readonly Optional<ObservationEvent> _observationEventValue;

    private readonly Optional<VideoSegmentEvent> _videoSegmentEventValue;

    private readonly Optional<ScenarioEvent> _scenarioEventValue;

    private readonly Optional<SubagentEvent> _subagentEventValue;

    private readonly Optional<ToolCallEvent> _toolCallEventValue;

    private readonly Optional<UserMessageEvent> _userMessageEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Event(Optional<AgentMessageEvent> agentMessageEventValue,
        Optional<FileCaptureEvent> fileCaptureEventValue,
        Optional<FileChangeEvent> fileChangeEventValue,
        Optional<FileSetupEvent> fileSetupEventValue,
        Optional<FileSnapshotEvent> fileSnapshotEventValue,
        Optional<RawEvent> rawEventValue,
        Optional<InferenceEvent> inferenceEventValue,
        Optional<ObservationEvent> observationEventValue,
        Optional<VideoSegmentEvent> videoSegmentEventValue,
        Optional<ScenarioEvent> scenarioEventValue,
        Optional<SubagentEvent> subagentEventValue,
        Optional<ToolCallEvent> toolCallEventValue,
        Optional<UserMessageEvent> userMessageEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _agentMessageEventValue = agentMessageEventValue;
        _fileCaptureEventValue = fileCaptureEventValue;
        _fileChangeEventValue = fileChangeEventValue;
        _fileSetupEventValue = fileSetupEventValue;
        _fileSnapshotEventValue = fileSnapshotEventValue;
        _rawEventValue = rawEventValue;
        _inferenceEventValue = inferenceEventValue;
        _observationEventValue = observationEventValue;
        _videoSegmentEventValue = videoSegmentEventValue;
        _scenarioEventValue = scenarioEventValue;
        _subagentEventValue = subagentEventValue;
        _toolCallEventValue = toolCallEventValue;
        _userMessageEventValue = userMessageEventValue;
        _unknownValue = unknownValue;
    }

    public static Event AgentMessageEvent(AgentMessageEvent value) =>
        new(
            Optional<AgentMessageEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event FileCaptureEvent(FileCaptureEvent value) =>
        new(
            default,
            Optional<FileCaptureEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event FileChangeEvent(FileChangeEvent value) =>
        new(
            default,
            default,
            Optional<FileChangeEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event FileSetupEvent(FileSetupEvent value) =>
        new(
            default,
            default,
            default,
            Optional<FileSetupEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event FileSnapshotEvent(FileSnapshotEvent value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<FileSnapshotEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event RawEvent(RawEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<RawEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event InferenceEvent(InferenceEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<InferenceEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event ObservationEvent(ObservationEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ObservationEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static Event VideoSegmentEvent(VideoSegmentEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<VideoSegmentEvent>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static Event ScenarioEvent(ScenarioEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ScenarioEvent>.Some(value),
            default,
            default,
            default,
            default);

    public static Event SubagentEvent(SubagentEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<SubagentEvent>.Some(value),
            default,
            default,
            default);

    public static Event ToolCallEvent(ToolCallEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ToolCallEvent>.Some(value),
            default,
            default);

    public static Event UserMessageEvent(UserMessageEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UserMessageEvent>.Some(value),
            default);

    internal static Event Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAgentMessageEvent([NotNullWhen(true)] out AgentMessageEvent? value) =>
        _agentMessageEventValue.TryGetValue(out value);

    public bool TryGetFileCaptureEvent([NotNullWhen(true)] out FileCaptureEvent? value) =>
        _fileCaptureEventValue.TryGetValue(out value);

    public bool TryGetFileChangeEvent([NotNullWhen(true)] out FileChangeEvent? value) =>
        _fileChangeEventValue.TryGetValue(out value);

    public bool TryGetFileSetupEvent([NotNullWhen(true)] out FileSetupEvent? value) =>
        _fileSetupEventValue.TryGetValue(out value);

    public bool TryGetFileSnapshotEvent([NotNullWhen(true)] out FileSnapshotEvent? value) =>
        _fileSnapshotEventValue.TryGetValue(out value);

    public bool TryGetRawEvent([NotNullWhen(true)] out RawEvent? value) => _rawEventValue.TryGetValue(out value);

    public bool TryGetInferenceEvent([NotNullWhen(true)] out InferenceEvent? value) =>
        _inferenceEventValue.TryGetValue(out value);

    public bool TryGetObservationEvent([NotNullWhen(true)] out ObservationEvent? value) =>
        _observationEventValue.TryGetValue(out value);

    public bool TryGetVideoSegmentEvent([NotNullWhen(true)] out VideoSegmentEvent? value) =>
        _videoSegmentEventValue.TryGetValue(out value);

    public bool TryGetScenarioEvent([NotNullWhen(true)] out ScenarioEvent? value) =>
        _scenarioEventValue.TryGetValue(out value);

    public bool TryGetSubagentEvent([NotNullWhen(true)] out SubagentEvent? value) =>
        _subagentEventValue.TryGetValue(out value);

    public bool TryGetToolCallEvent([NotNullWhen(true)] out ToolCallEvent? value) =>
        _toolCallEventValue.TryGetValue(out value);

    public bool TryGetUserMessageEvent([NotNullWhen(true)] out UserMessageEvent? value) =>
        _userMessageEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Event(AgentMessageEvent value) => AgentMessageEvent(value);

    public static implicit operator Event(FileCaptureEvent value) => FileCaptureEvent(value);

    public static implicit operator Event(FileChangeEvent value) => FileChangeEvent(value);

    public static implicit operator Event(FileSetupEvent value) => FileSetupEvent(value);

    public static implicit operator Event(FileSnapshotEvent value) => FileSnapshotEvent(value);

    public static implicit operator Event(RawEvent value) => RawEvent(value);

    public static implicit operator Event(InferenceEvent value) => InferenceEvent(value);

    public static implicit operator Event(ObservationEvent value) => ObservationEvent(value);

    public static implicit operator Event(VideoSegmentEvent value) => VideoSegmentEvent(value);

    public static implicit operator Event(ScenarioEvent value) => ScenarioEvent(value);

    public static implicit operator Event(SubagentEvent value) => SubagentEvent(value);

    public static implicit operator Event(ToolCallEvent value) => ToolCallEvent(value);

    public static implicit operator Event(UserMessageEvent value) => UserMessageEvent(value);

    public TResult Match<TResult>(Func<AgentMessageEvent, TResult> onAgentMessageEvent,
        Func<FileCaptureEvent, TResult> onFileCaptureEvent,
        Func<FileChangeEvent, TResult> onFileChangeEvent,
        Func<FileSetupEvent, TResult> onFileSetupEvent,
        Func<FileSnapshotEvent, TResult> onFileSnapshotEvent,
        Func<RawEvent, TResult> onRawEvent,
        Func<InferenceEvent, TResult> onInferenceEvent,
        Func<ObservationEvent, TResult> onObservationEvent,
        Func<VideoSegmentEvent, TResult> onVideoSegmentEvent,
        Func<ScenarioEvent, TResult> onScenarioEvent,
        Func<SubagentEvent, TResult> onSubagentEvent,
        Func<ToolCallEvent, TResult> onToolCallEvent,
        Func<UserMessageEvent, TResult> onUserMessageEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAgentMessageEvent(out var agentMessageEventValue) => onAgentMessageEvent(
                agentMessageEventValue),
            _ when TryGetFileCaptureEvent(out var fileCaptureEventValue) => onFileCaptureEvent(fileCaptureEventValue),
            _ when TryGetFileChangeEvent(out var fileChangeEventValue) => onFileChangeEvent(fileChangeEventValue),
            _ when TryGetFileSetupEvent(out var fileSetupEventValue) => onFileSetupEvent(fileSetupEventValue),
            _ when TryGetFileSnapshotEvent(out var fileSnapshotEventValue) => onFileSnapshotEvent(
                fileSnapshotEventValue),
            _ when TryGetRawEvent(out var rawEventValue) => onRawEvent(rawEventValue),
            _ when TryGetInferenceEvent(out var inferenceEventValue) => onInferenceEvent(inferenceEventValue),
            _ when TryGetObservationEvent(out var observationEventValue) => onObservationEvent(observationEventValue),
            _ when TryGetVideoSegmentEvent(out var videoSegmentEventValue) => onVideoSegmentEvent(
                videoSegmentEventValue),
            _ when TryGetScenarioEvent(out var scenarioEventValue) => onScenarioEvent(scenarioEventValue),
            _ when TryGetSubagentEvent(out var subagentEventValue) => onSubagentEvent(subagentEventValue),
            _ when TryGetToolCallEvent(out var toolCallEventValue) => onToolCallEvent(toolCallEventValue),
            _ when TryGetUserMessageEvent(out var userMessageEventValue) => onUserMessageEvent(userMessageEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Event)} holds no value.")
        };

    public void Match(Action<AgentMessageEvent> onAgentMessageEvent,
        Action<FileCaptureEvent> onFileCaptureEvent,
        Action<FileChangeEvent> onFileChangeEvent,
        Action<FileSetupEvent> onFileSetupEvent,
        Action<FileSnapshotEvent> onFileSnapshotEvent,
        Action<RawEvent> onRawEvent,
        Action<InferenceEvent> onInferenceEvent,
        Action<ObservationEvent> onObservationEvent,
        Action<VideoSegmentEvent> onVideoSegmentEvent,
        Action<ScenarioEvent> onScenarioEvent,
        Action<SubagentEvent> onSubagentEvent,
        Action<ToolCallEvent> onToolCallEvent,
        Action<UserMessageEvent> onUserMessageEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetAgentMessageEvent(out var agentMessageEventValue)) onAgentMessageEvent(agentMessageEventValue);
        else if (TryGetFileCaptureEvent(out var fileCaptureEventValue)) onFileCaptureEvent(fileCaptureEventValue);
        else if (TryGetFileChangeEvent(out var fileChangeEventValue)) onFileChangeEvent(fileChangeEventValue);
        else if (TryGetFileSetupEvent(out var fileSetupEventValue)) onFileSetupEvent(fileSetupEventValue);
        else if (TryGetFileSnapshotEvent(out var fileSnapshotEventValue)) onFileSnapshotEvent(fileSnapshotEventValue);
        else if (TryGetRawEvent(out var rawEventValue)) onRawEvent(rawEventValue);
        else if (TryGetInferenceEvent(out var inferenceEventValue)) onInferenceEvent(inferenceEventValue);
        else if (TryGetObservationEvent(out var observationEventValue)) onObservationEvent(observationEventValue);
        else if (TryGetVideoSegmentEvent(out var videoSegmentEventValue)) onVideoSegmentEvent(videoSegmentEventValue);
        else if (TryGetScenarioEvent(out var scenarioEventValue)) onScenarioEvent(scenarioEventValue);
        else if (TryGetSubagentEvent(out var subagentEventValue)) onSubagentEvent(subagentEventValue);
        else if (TryGetToolCallEvent(out var toolCallEventValue)) onToolCallEvent(toolCallEventValue);
        else if (TryGetUserMessageEvent(out var userMessageEventValue)) onUserMessageEvent(userMessageEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Event)} holds no value.");
    }
}

file sealed class EventConverter : JsonConverter<Event>
{
    public override Event Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("kind", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'kind' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "agent_message" => Event.AgentMessageEvent(root.Deserialize<AgentMessageEvent>(options)!),
            "file_capture" => Event.FileCaptureEvent(root.Deserialize<FileCaptureEvent>(options)!),
            "file_change" => Event.FileChangeEvent(root.Deserialize<FileChangeEvent>(options)!),
            "file_setup" => Event.FileSetupEvent(root.Deserialize<FileSetupEvent>(options)!),
            "file_snapshot" => Event.FileSnapshotEvent(root.Deserialize<FileSnapshotEvent>(options)!),
            "raw" => Event.RawEvent(root.Deserialize<RawEvent>(options)!),
            "robot_inference" => Event.InferenceEvent(root.Deserialize<InferenceEvent>(options)!),
            "robot_observation" => Event.ObservationEvent(root.Deserialize<ObservationEvent>(options)!),
            "robot_video_segment" => Event.VideoSegmentEvent(root.Deserialize<VideoSegmentEvent>(options)!),
            "scenario_evaluate" or "scenario_setup" => Event.ScenarioEvent(root.Deserialize<ScenarioEvent>(options)!),
            "subagent" => Event.SubagentEvent(root.Deserialize<SubagentEvent>(options)!),
            "tool_call" => Event.ToolCallEvent(root.Deserialize<ToolCallEvent>(options)!),
            "user_message" => Event.UserMessageEvent(root.Deserialize<UserMessageEvent>(options)!),
            _ => Event.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Event value, JsonSerializerOptions options)
    {
        if (value.TryGetAgentMessageEvent(out var agentMessageEventValue))
        {
            JsonSerializer.Serialize(writer, agentMessageEventValue, options);
        }
        else if (value.TryGetFileCaptureEvent(out var fileCaptureEventValue))
        {
            JsonSerializer.Serialize(writer, fileCaptureEventValue, options);
        }
        else if (value.TryGetFileChangeEvent(out var fileChangeEventValue))
        {
            JsonSerializer.Serialize(writer, fileChangeEventValue, options);
        }
        else if (value.TryGetFileSetupEvent(out var fileSetupEventValue))
        {
            JsonSerializer.Serialize(writer, fileSetupEventValue, options);
        }
        else if (value.TryGetFileSnapshotEvent(out var fileSnapshotEventValue))
        {
            JsonSerializer.Serialize(writer, fileSnapshotEventValue, options);
        }
        else if (value.TryGetRawEvent(out var rawEventValue))
        {
            JsonSerializer.Serialize(writer, rawEventValue, options);
        }
        else if (value.TryGetInferenceEvent(out var inferenceEventValue))
        {
            JsonSerializer.Serialize(writer, inferenceEventValue, options);
        }
        else if (value.TryGetObservationEvent(out var observationEventValue))
        {
            JsonSerializer.Serialize(writer, observationEventValue, options);
        }
        else if (value.TryGetVideoSegmentEvent(out var videoSegmentEventValue))
        {
            JsonSerializer.Serialize(writer, videoSegmentEventValue, options);
        }
        else if (value.TryGetScenarioEvent(out var scenarioEventValue))
        {
            JsonSerializer.Serialize(writer, scenarioEventValue, options);
        }
        else if (value.TryGetSubagentEvent(out var subagentEventValue))
        {
            JsonSerializer.Serialize(writer, subagentEventValue, options);
        }
        else if (value.TryGetToolCallEvent(out var toolCallEventValue))
        {
            JsonSerializer.Serialize(writer, toolCallEventValue, options);
        }
        else if (value.TryGetUserMessageEvent(out var userMessageEventValue))
        {
            JsonSerializer.Serialize(writer, userMessageEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Event)} contains no valid value to serialize.");
        }
    }
}
