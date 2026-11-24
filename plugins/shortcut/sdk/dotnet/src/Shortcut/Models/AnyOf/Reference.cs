using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Shortcut.Core.Extensions;
using Shortcut.Core.Models;

namespace Shortcut.Models.AnyOf;

[JsonConverter(typeof(ReferenceConverter))]
public record Reference
{
    private readonly Optional<HistoryReferenceBranch> _historyReferenceBranchValue;

    private readonly Optional<HistoryReferenceCommit> _historyReferenceCommitValue;

    private readonly Optional<HistoryReferenceEpic> _historyReferenceEpicValue;

    private readonly Optional<HistoryReferenceGroup> _historyReferenceGroupValue;

    private readonly Optional<HistoryReferenceIteration> _historyReferenceIterationValue;

    private readonly Optional<HistoryReferenceLabel> _historyReferenceLabelValue;

    private readonly Optional<HistoryReferenceProject> _historyReferenceProjectValue;

    private readonly Optional<HistoryReferenceStory> _historyReferenceStoryValue;

    private readonly Optional<HistoryReferenceStoryTask> _historyReferenceStoryTaskValue;

    private readonly Optional<HistoryReferenceCustomFieldEnumValue> _historyReferenceCustomFieldEnumValueValue;

    private readonly Optional<HistoryReferenceWorkflowState> _historyReferenceWorkflowStateValue;

    private readonly Optional<HistoryReferenceGeneral> _historyReferenceGeneralValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Reference(Optional<HistoryReferenceBranch> historyReferenceBranchValue,
        Optional<HistoryReferenceCommit> historyReferenceCommitValue,
        Optional<HistoryReferenceEpic> historyReferenceEpicValue,
        Optional<HistoryReferenceGroup> historyReferenceGroupValue,
        Optional<HistoryReferenceIteration> historyReferenceIterationValue,
        Optional<HistoryReferenceLabel> historyReferenceLabelValue,
        Optional<HistoryReferenceProject> historyReferenceProjectValue,
        Optional<HistoryReferenceStory> historyReferenceStoryValue,
        Optional<HistoryReferenceStoryTask> historyReferenceStoryTaskValue,
        Optional<HistoryReferenceCustomFieldEnumValue> historyReferenceCustomFieldEnumValueValue,
        Optional<HistoryReferenceWorkflowState> historyReferenceWorkflowStateValue,
        Optional<HistoryReferenceGeneral> historyReferenceGeneralValue,
        Optional<UnknownArm> unknownValue)
    {
        _historyReferenceBranchValue = historyReferenceBranchValue;
        _historyReferenceCommitValue = historyReferenceCommitValue;
        _historyReferenceEpicValue = historyReferenceEpicValue;
        _historyReferenceGroupValue = historyReferenceGroupValue;
        _historyReferenceIterationValue = historyReferenceIterationValue;
        _historyReferenceLabelValue = historyReferenceLabelValue;
        _historyReferenceProjectValue = historyReferenceProjectValue;
        _historyReferenceStoryValue = historyReferenceStoryValue;
        _historyReferenceStoryTaskValue = historyReferenceStoryTaskValue;
        _historyReferenceCustomFieldEnumValueValue = historyReferenceCustomFieldEnumValueValue;
        _historyReferenceWorkflowStateValue = historyReferenceWorkflowStateValue;
        _historyReferenceGeneralValue = historyReferenceGeneralValue;
        _unknownValue = unknownValue;
    }

    public static Reference HistoryReferenceBranch(HistoryReferenceBranch value) =>
        new(
            Optional<HistoryReferenceBranch>.Some(value),
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

    public static Reference HistoryReferenceCommit(HistoryReferenceCommit value) =>
        new(
            default,
            Optional<HistoryReferenceCommit>.Some(value),
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

    public static Reference HistoryReferenceEpic(HistoryReferenceEpic value) =>
        new(
            default,
            default,
            Optional<HistoryReferenceEpic>.Some(value),
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

    public static Reference HistoryReferenceGroup(HistoryReferenceGroup value) =>
        new(
            default,
            default,
            default,
            Optional<HistoryReferenceGroup>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceIteration(HistoryReferenceIteration value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<HistoryReferenceIteration>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceLabel(HistoryReferenceLabel value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryReferenceLabel>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceProject(HistoryReferenceProject value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryReferenceProject>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceStory(HistoryReferenceStory value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryReferenceStory>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceStoryTask(HistoryReferenceStoryTask value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryReferenceStoryTask>.Some(value),
            default,
            default,
            default,
            default);

    public static Reference HistoryReferenceCustomFieldEnumValue(HistoryReferenceCustomFieldEnumValue value) =>
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
            Optional<HistoryReferenceCustomFieldEnumValue>.Some(value),
            default,
            default,
            default);

    public static Reference HistoryReferenceWorkflowState(HistoryReferenceWorkflowState value) =>
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
            Optional<HistoryReferenceWorkflowState>.Some(value),
            default,
            default);

    public static Reference HistoryReferenceGeneral(HistoryReferenceGeneral value) =>
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
            Optional<HistoryReferenceGeneral>.Some(value),
            default);

    internal static Reference Unknown(JsonElement value) =>
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
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetHistoryReferenceBranch([NotNullWhen(true)] out HistoryReferenceBranch? value) =>
        _historyReferenceBranchValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceCommit([NotNullWhen(true)] out HistoryReferenceCommit? value) =>
        _historyReferenceCommitValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceEpic([NotNullWhen(true)] out HistoryReferenceEpic? value) =>
        _historyReferenceEpicValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceGroup([NotNullWhen(true)] out HistoryReferenceGroup? value) =>
        _historyReferenceGroupValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceIteration([NotNullWhen(true)] out HistoryReferenceIteration? value) =>
        _historyReferenceIterationValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceLabel([NotNullWhen(true)] out HistoryReferenceLabel? value) =>
        _historyReferenceLabelValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceProject([NotNullWhen(true)] out HistoryReferenceProject? value) =>
        _historyReferenceProjectValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceStory([NotNullWhen(true)] out HistoryReferenceStory? value) =>
        _historyReferenceStoryValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceStoryTask([NotNullWhen(true)] out HistoryReferenceStoryTask? value) =>
        _historyReferenceStoryTaskValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceCustomFieldEnumValue([NotNullWhen(true)] out HistoryReferenceCustomFieldEnumValue? value) =>
        _historyReferenceCustomFieldEnumValueValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceWorkflowState([NotNullWhen(true)] out HistoryReferenceWorkflowState? value) =>
        _historyReferenceWorkflowStateValue.TryGetValue(out value);

    public bool TryGetHistoryReferenceGeneral([NotNullWhen(true)] out HistoryReferenceGeneral? value) =>
        _historyReferenceGeneralValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Reference(HistoryReferenceBranch value) => HistoryReferenceBranch(value);

    public static implicit operator Reference(HistoryReferenceCommit value) => HistoryReferenceCommit(value);

    public static implicit operator Reference(HistoryReferenceEpic value) => HistoryReferenceEpic(value);

    public static implicit operator Reference(HistoryReferenceGroup value) => HistoryReferenceGroup(value);

    public static implicit operator Reference(HistoryReferenceIteration value) => HistoryReferenceIteration(value);

    public static implicit operator Reference(HistoryReferenceLabel value) => HistoryReferenceLabel(value);

    public static implicit operator Reference(HistoryReferenceProject value) => HistoryReferenceProject(value);

    public static implicit operator Reference(HistoryReferenceStory value) => HistoryReferenceStory(value);

    public static implicit operator Reference(HistoryReferenceStoryTask value) => HistoryReferenceStoryTask(value);

    public static implicit operator Reference(HistoryReferenceCustomFieldEnumValue value) =>
        HistoryReferenceCustomFieldEnumValue(value);

    public static implicit operator Reference(HistoryReferenceWorkflowState value) =>
        HistoryReferenceWorkflowState(value);

    public static implicit operator Reference(HistoryReferenceGeneral value) => HistoryReferenceGeneral(value);

    public TResult Match<TResult>(Func<HistoryReferenceBranch, TResult> onHistoryReferenceBranch,
        Func<HistoryReferenceCommit, TResult> onHistoryReferenceCommit,
        Func<HistoryReferenceEpic, TResult> onHistoryReferenceEpic,
        Func<HistoryReferenceGroup, TResult> onHistoryReferenceGroup,
        Func<HistoryReferenceIteration, TResult> onHistoryReferenceIteration,
        Func<HistoryReferenceLabel, TResult> onHistoryReferenceLabel,
        Func<HistoryReferenceProject, TResult> onHistoryReferenceProject,
        Func<HistoryReferenceStory, TResult> onHistoryReferenceStory,
        Func<HistoryReferenceStoryTask, TResult> onHistoryReferenceStoryTask,
        Func<HistoryReferenceCustomFieldEnumValue, TResult> onHistoryReferenceCustomFieldEnumValue,
        Func<HistoryReferenceWorkflowState, TResult> onHistoryReferenceWorkflowState,
        Func<HistoryReferenceGeneral, TResult> onHistoryReferenceGeneral,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHistoryReferenceBranch(out var historyReferenceBranchValue) => onHistoryReferenceBranch(
                historyReferenceBranchValue),
            _ when TryGetHistoryReferenceCommit(out var historyReferenceCommitValue) => onHistoryReferenceCommit(
                historyReferenceCommitValue),
            _ when TryGetHistoryReferenceEpic(out var historyReferenceEpicValue) => onHistoryReferenceEpic(
                historyReferenceEpicValue),
            _ when TryGetHistoryReferenceGroup(out var historyReferenceGroupValue) => onHistoryReferenceGroup(
                historyReferenceGroupValue),
            _ when TryGetHistoryReferenceIteration(
                out var historyReferenceIterationValue) => onHistoryReferenceIteration(historyReferenceIterationValue),
            _ when TryGetHistoryReferenceLabel(out var historyReferenceLabelValue) => onHistoryReferenceLabel(
                historyReferenceLabelValue),
            _ when TryGetHistoryReferenceProject(out var historyReferenceProjectValue) => onHistoryReferenceProject(
                historyReferenceProjectValue),
            _ when TryGetHistoryReferenceStory(out var historyReferenceStoryValue) => onHistoryReferenceStory(
                historyReferenceStoryValue),
            _ when TryGetHistoryReferenceStoryTask(
                out var historyReferenceStoryTaskValue) => onHistoryReferenceStoryTask(historyReferenceStoryTaskValue),
            _ when TryGetHistoryReferenceCustomFieldEnumValue(
                out var historyReferenceCustomFieldEnumValueValue) => onHistoryReferenceCustomFieldEnumValue(
                historyReferenceCustomFieldEnumValueValue),
            _ when TryGetHistoryReferenceWorkflowState(
                out var historyReferenceWorkflowStateValue) => onHistoryReferenceWorkflowState(
                historyReferenceWorkflowStateValue),
            _ when TryGetHistoryReferenceGeneral(out var historyReferenceGeneralValue) => onHistoryReferenceGeneral(
                historyReferenceGeneralValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Reference)} holds no value.")
        };

    public void Match(Action<HistoryReferenceBranch> onHistoryReferenceBranch,
        Action<HistoryReferenceCommit> onHistoryReferenceCommit,
        Action<HistoryReferenceEpic> onHistoryReferenceEpic,
        Action<HistoryReferenceGroup> onHistoryReferenceGroup,
        Action<HistoryReferenceIteration> onHistoryReferenceIteration,
        Action<HistoryReferenceLabel> onHistoryReferenceLabel,
        Action<HistoryReferenceProject> onHistoryReferenceProject,
        Action<HistoryReferenceStory> onHistoryReferenceStory,
        Action<HistoryReferenceStoryTask> onHistoryReferenceStoryTask,
        Action<HistoryReferenceCustomFieldEnumValue> onHistoryReferenceCustomFieldEnumValue,
        Action<HistoryReferenceWorkflowState> onHistoryReferenceWorkflowState,
        Action<HistoryReferenceGeneral> onHistoryReferenceGeneral,
        Action<JsonElement> otherwise)
    {
        if (TryGetHistoryReferenceBranch(out var historyReferenceBranchValue)) onHistoryReferenceBranch(
            historyReferenceBranchValue);
        else if (TryGetHistoryReferenceCommit(out var historyReferenceCommitValue)) onHistoryReferenceCommit(
            historyReferenceCommitValue);
        else if (TryGetHistoryReferenceEpic(out var historyReferenceEpicValue)) onHistoryReferenceEpic(
            historyReferenceEpicValue);
        else if (TryGetHistoryReferenceGroup(out var historyReferenceGroupValue)) onHistoryReferenceGroup(
            historyReferenceGroupValue);
        else if (TryGetHistoryReferenceIteration(out var historyReferenceIterationValue)) onHistoryReferenceIteration(
            historyReferenceIterationValue);
        else if (TryGetHistoryReferenceLabel(out var historyReferenceLabelValue)) onHistoryReferenceLabel(
            historyReferenceLabelValue);
        else if (TryGetHistoryReferenceProject(out var historyReferenceProjectValue)) onHistoryReferenceProject(
            historyReferenceProjectValue);
        else if (TryGetHistoryReferenceStory(out var historyReferenceStoryValue)) onHistoryReferenceStory(
            historyReferenceStoryValue);
        else if (TryGetHistoryReferenceStoryTask(out var historyReferenceStoryTaskValue)) onHistoryReferenceStoryTask(
            historyReferenceStoryTaskValue);
        else if (TryGetHistoryReferenceCustomFieldEnumValue(
            out var historyReferenceCustomFieldEnumValueValue)) onHistoryReferenceCustomFieldEnumValue(
            historyReferenceCustomFieldEnumValueValue);
        else if (TryGetHistoryReferenceWorkflowState(
            out var historyReferenceWorkflowStateValue)) onHistoryReferenceWorkflowState(
            historyReferenceWorkflowStateValue);
        else if (TryGetHistoryReferenceGeneral(out var historyReferenceGeneralValue)) onHistoryReferenceGeneral(
            historyReferenceGeneralValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Reference)} holds no value.");
    }
}

file sealed class ReferenceConverter : JsonConverter<Reference>
{
    public override Reference Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<HistoryReferenceBranch>(root, options, out var historyReferenceBranchValue))
        {
            return Reference.HistoryReferenceBranch(historyReferenceBranchValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceCommit>(root, options, out var historyReferenceCommitValue))
        {
            return Reference.HistoryReferenceCommit(historyReferenceCommitValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceEpic>(root, options, out var historyReferenceEpicValue))
        {
            return Reference.HistoryReferenceEpic(historyReferenceEpicValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceGroup>(root, options, out var historyReferenceGroupValue))
        {
            return Reference.HistoryReferenceGroup(historyReferenceGroupValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceIteration>(
            root,
            options,
            out var historyReferenceIterationValue))
        {
            return Reference.HistoryReferenceIteration(historyReferenceIterationValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceLabel>(root, options, out var historyReferenceLabelValue))
        {
            return Reference.HistoryReferenceLabel(historyReferenceLabelValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceProject>(root, options, out var historyReferenceProjectValue))
        {
            return Reference.HistoryReferenceProject(historyReferenceProjectValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceStory>(root, options, out var historyReferenceStoryValue))
        {
            return Reference.HistoryReferenceStory(historyReferenceStoryValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceStoryTask>(
            root,
            options,
            out var historyReferenceStoryTaskValue))
        {
            return Reference.HistoryReferenceStoryTask(historyReferenceStoryTaskValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceCustomFieldEnumValue>(
            root,
            options,
            out var historyReferenceCustomFieldEnumValueValue))
        {
            return Reference.HistoryReferenceCustomFieldEnumValue(historyReferenceCustomFieldEnumValueValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceWorkflowState>(
            root,
            options,
            out var historyReferenceWorkflowStateValue))
        {
            return Reference.HistoryReferenceWorkflowState(historyReferenceWorkflowStateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryReferenceGeneral>(root, options, out var historyReferenceGeneralValue))
        {
            return Reference.HistoryReferenceGeneral(historyReferenceGeneralValue);
        }
        return Reference.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Reference value, JsonSerializerOptions options)
    {
        if (value.TryGetHistoryReferenceBranch(out var historyReferenceBranchValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceBranchValue, options);
        }
        else if (value.TryGetHistoryReferenceCommit(out var historyReferenceCommitValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceCommitValue, options);
        }
        else if (value.TryGetHistoryReferenceEpic(out var historyReferenceEpicValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceEpicValue, options);
        }
        else if (value.TryGetHistoryReferenceGroup(out var historyReferenceGroupValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceGroupValue, options);
        }
        else if (value.TryGetHistoryReferenceIteration(out var historyReferenceIterationValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceIterationValue, options);
        }
        else if (value.TryGetHistoryReferenceLabel(out var historyReferenceLabelValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceLabelValue, options);
        }
        else if (value.TryGetHistoryReferenceProject(out var historyReferenceProjectValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceProjectValue, options);
        }
        else if (value.TryGetHistoryReferenceStory(out var historyReferenceStoryValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceStoryValue, options);
        }
        else if (value.TryGetHistoryReferenceStoryTask(out var historyReferenceStoryTaskValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceStoryTaskValue, options);
        }
        else if (value.TryGetHistoryReferenceCustomFieldEnumValue(out var historyReferenceCustomFieldEnumValueValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceCustomFieldEnumValueValue, options);
        }
        else if (value.TryGetHistoryReferenceWorkflowState(out var historyReferenceWorkflowStateValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceWorkflowStateValue, options);
        }
        else if (value.TryGetHistoryReferenceGeneral(out var historyReferenceGeneralValue))
        {
            JsonSerializer.Serialize(writer, historyReferenceGeneralValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Reference)} contains no valid value to serialize.");
        }
    }
}
