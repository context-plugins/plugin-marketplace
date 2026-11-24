using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Shortcut.Core.Extensions;
using Shortcut.Core.Models;

namespace Shortcut.Models.AnyOf;

[JsonConverter(typeof(Action1Converter))]
public record Action1
{
    private readonly Optional<HistoryActionBranchCreate> _historyActionBranchCreateValue;

    private readonly Optional<HistoryActionBranchMerge> _historyActionBranchMergeValue;

    private readonly Optional<HistoryActionBranchPush> _historyActionBranchPushValue;

    private readonly Optional<HistoryActionLabelCreate> _historyActionLabelCreateValue;

    private readonly Optional<HistoryActionLabelUpdate> _historyActionLabelUpdateValue;

    private readonly Optional<HistoryActionLabelDelete> _historyActionLabelDeleteValue;

    private readonly Optional<HistoryActionProjectUpdate> _historyActionProjectUpdateValue;

    private readonly Optional<HistoryActionPullRequest> _historyActionPullRequestValue;

    private readonly Optional<HistoryActionStoryCreate> _historyActionStoryCreateValue;

    private readonly Optional<HistoryActionStoryUpdate> _historyActionStoryUpdateValue;

    private readonly Optional<HistoryActionStoryDelete> _historyActionStoryDeleteValue;

    private readonly Optional<HistoryActionStoryCommentCreate> _historyActionStoryCommentCreateValue;

    private readonly Optional<HistoryActionStoryLinkCreate> _historyActionStoryLinkCreateValue;

    private readonly Optional<HistoryActionStoryLinkUpdate> _historyActionStoryLinkUpdateValue;

    private readonly Optional<HistoryActionStoryLinkDelete> _historyActionStoryLinkDeleteValue;

    private readonly Optional<HistoryActionTaskCreate> _historyActionTaskCreateValue;

    private readonly Optional<HistoryActionTaskUpdate> _historyActionTaskUpdateValue;

    private readonly Optional<HistoryActionTaskDelete> _historyActionTaskDeleteValue;

    private readonly Optional<HistoryActionWorkspace2BulkUpdate> _historyActionWorkspace2BulkUpdateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Action1(Optional<HistoryActionBranchCreate> historyActionBranchCreateValue,
        Optional<HistoryActionBranchMerge> historyActionBranchMergeValue,
        Optional<HistoryActionBranchPush> historyActionBranchPushValue,
        Optional<HistoryActionLabelCreate> historyActionLabelCreateValue,
        Optional<HistoryActionLabelUpdate> historyActionLabelUpdateValue,
        Optional<HistoryActionLabelDelete> historyActionLabelDeleteValue,
        Optional<HistoryActionProjectUpdate> historyActionProjectUpdateValue,
        Optional<HistoryActionPullRequest> historyActionPullRequestValue,
        Optional<HistoryActionStoryCreate> historyActionStoryCreateValue,
        Optional<HistoryActionStoryUpdate> historyActionStoryUpdateValue,
        Optional<HistoryActionStoryDelete> historyActionStoryDeleteValue,
        Optional<HistoryActionStoryCommentCreate> historyActionStoryCommentCreateValue,
        Optional<HistoryActionStoryLinkCreate> historyActionStoryLinkCreateValue,
        Optional<HistoryActionStoryLinkUpdate> historyActionStoryLinkUpdateValue,
        Optional<HistoryActionStoryLinkDelete> historyActionStoryLinkDeleteValue,
        Optional<HistoryActionTaskCreate> historyActionTaskCreateValue,
        Optional<HistoryActionTaskUpdate> historyActionTaskUpdateValue,
        Optional<HistoryActionTaskDelete> historyActionTaskDeleteValue,
        Optional<HistoryActionWorkspace2BulkUpdate> historyActionWorkspace2BulkUpdateValue,
        Optional<UnknownArm> unknownValue)
    {
        _historyActionBranchCreateValue = historyActionBranchCreateValue;
        _historyActionBranchMergeValue = historyActionBranchMergeValue;
        _historyActionBranchPushValue = historyActionBranchPushValue;
        _historyActionLabelCreateValue = historyActionLabelCreateValue;
        _historyActionLabelUpdateValue = historyActionLabelUpdateValue;
        _historyActionLabelDeleteValue = historyActionLabelDeleteValue;
        _historyActionProjectUpdateValue = historyActionProjectUpdateValue;
        _historyActionPullRequestValue = historyActionPullRequestValue;
        _historyActionStoryCreateValue = historyActionStoryCreateValue;
        _historyActionStoryUpdateValue = historyActionStoryUpdateValue;
        _historyActionStoryDeleteValue = historyActionStoryDeleteValue;
        _historyActionStoryCommentCreateValue = historyActionStoryCommentCreateValue;
        _historyActionStoryLinkCreateValue = historyActionStoryLinkCreateValue;
        _historyActionStoryLinkUpdateValue = historyActionStoryLinkUpdateValue;
        _historyActionStoryLinkDeleteValue = historyActionStoryLinkDeleteValue;
        _historyActionTaskCreateValue = historyActionTaskCreateValue;
        _historyActionTaskUpdateValue = historyActionTaskUpdateValue;
        _historyActionTaskDeleteValue = historyActionTaskDeleteValue;
        _historyActionWorkspace2BulkUpdateValue = historyActionWorkspace2BulkUpdateValue;
        _unknownValue = unknownValue;
    }

    public static Action1 HistoryActionBranchCreate(HistoryActionBranchCreate value) =>
        new(
            Optional<HistoryActionBranchCreate>.Some(value),
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
            default,
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionBranchMerge(HistoryActionBranchMerge value) =>
        new(
            default,
            Optional<HistoryActionBranchMerge>.Some(value),
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
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionBranchPush(HistoryActionBranchPush value) =>
        new(
            default,
            default,
            Optional<HistoryActionBranchPush>.Some(value),
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
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionLabelCreate(HistoryActionLabelCreate value) =>
        new(
            default,
            default,
            default,
            Optional<HistoryActionLabelCreate>.Some(value),
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
            default,
            default,
            default);

    public static Action1 HistoryActionLabelUpdate(HistoryActionLabelUpdate value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<HistoryActionLabelUpdate>.Some(value),
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
            default,
            default);

    public static Action1 HistoryActionLabelDelete(HistoryActionLabelDelete value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryActionLabelDelete>.Some(value),
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
            default);

    public static Action1 HistoryActionProjectUpdate(HistoryActionProjectUpdate value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryActionProjectUpdate>.Some(value),
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

    public static Action1 HistoryActionPullRequest(HistoryActionPullRequest value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryActionPullRequest>.Some(value),
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

    public static Action1 HistoryActionStoryCreate(HistoryActionStoryCreate value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryActionStoryCreate>.Some(value),
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

    public static Action1 HistoryActionStoryUpdate(HistoryActionStoryUpdate value) =>
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
            Optional<HistoryActionStoryUpdate>.Some(value),
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

    public static Action1 HistoryActionStoryDelete(HistoryActionStoryDelete value) =>
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
            Optional<HistoryActionStoryDelete>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionStoryCommentCreate(HistoryActionStoryCommentCreate value) =>
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
            Optional<HistoryActionStoryCommentCreate>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionStoryLinkCreate(HistoryActionStoryLinkCreate value) =>
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
            Optional<HistoryActionStoryLinkCreate>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionStoryLinkUpdate(HistoryActionStoryLinkUpdate value) =>
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
            Optional<HistoryActionStoryLinkUpdate>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionStoryLinkDelete(HistoryActionStoryLinkDelete value) =>
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
            default,
            Optional<HistoryActionStoryLinkDelete>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionTaskCreate(HistoryActionTaskCreate value) =>
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
            default,
            default,
            Optional<HistoryActionTaskCreate>.Some(value),
            default,
            default,
            default,
            default);

    public static Action1 HistoryActionTaskUpdate(HistoryActionTaskUpdate value) =>
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
            default,
            default,
            default,
            Optional<HistoryActionTaskUpdate>.Some(value),
            default,
            default,
            default);

    public static Action1 HistoryActionTaskDelete(HistoryActionTaskDelete value) =>
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
            default,
            default,
            default,
            default,
            Optional<HistoryActionTaskDelete>.Some(value),
            default,
            default);

    public static Action1 HistoryActionWorkspace2BulkUpdate(HistoryActionWorkspace2BulkUpdate value) =>
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
            default,
            default,
            default,
            default,
            default,
            Optional<HistoryActionWorkspace2BulkUpdate>.Some(value),
            default);

    internal static Action1 Unknown(JsonElement value) =>
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
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetHistoryActionBranchCreate([NotNullWhen(true)] out HistoryActionBranchCreate? value) =>
        _historyActionBranchCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionBranchMerge([NotNullWhen(true)] out HistoryActionBranchMerge? value) =>
        _historyActionBranchMergeValue.TryGetValue(out value);

    public bool TryGetHistoryActionBranchPush([NotNullWhen(true)] out HistoryActionBranchPush? value) =>
        _historyActionBranchPushValue.TryGetValue(out value);

    public bool TryGetHistoryActionLabelCreate([NotNullWhen(true)] out HistoryActionLabelCreate? value) =>
        _historyActionLabelCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionLabelUpdate([NotNullWhen(true)] out HistoryActionLabelUpdate? value) =>
        _historyActionLabelUpdateValue.TryGetValue(out value);

    public bool TryGetHistoryActionLabelDelete([NotNullWhen(true)] out HistoryActionLabelDelete? value) =>
        _historyActionLabelDeleteValue.TryGetValue(out value);

    public bool TryGetHistoryActionProjectUpdate([NotNullWhen(true)] out HistoryActionProjectUpdate? value) =>
        _historyActionProjectUpdateValue.TryGetValue(out value);

    public bool TryGetHistoryActionPullRequest([NotNullWhen(true)] out HistoryActionPullRequest? value) =>
        _historyActionPullRequestValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryCreate([NotNullWhen(true)] out HistoryActionStoryCreate? value) =>
        _historyActionStoryCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryUpdate([NotNullWhen(true)] out HistoryActionStoryUpdate? value) =>
        _historyActionStoryUpdateValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryDelete([NotNullWhen(true)] out HistoryActionStoryDelete? value) =>
        _historyActionStoryDeleteValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryCommentCreate([NotNullWhen(true)] out HistoryActionStoryCommentCreate? value) =>
        _historyActionStoryCommentCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryLinkCreate([NotNullWhen(true)] out HistoryActionStoryLinkCreate? value) =>
        _historyActionStoryLinkCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryLinkUpdate([NotNullWhen(true)] out HistoryActionStoryLinkUpdate? value) =>
        _historyActionStoryLinkUpdateValue.TryGetValue(out value);

    public bool TryGetHistoryActionStoryLinkDelete([NotNullWhen(true)] out HistoryActionStoryLinkDelete? value) =>
        _historyActionStoryLinkDeleteValue.TryGetValue(out value);

    public bool TryGetHistoryActionTaskCreate([NotNullWhen(true)] out HistoryActionTaskCreate? value) =>
        _historyActionTaskCreateValue.TryGetValue(out value);

    public bool TryGetHistoryActionTaskUpdate([NotNullWhen(true)] out HistoryActionTaskUpdate? value) =>
        _historyActionTaskUpdateValue.TryGetValue(out value);

    public bool TryGetHistoryActionTaskDelete([NotNullWhen(true)] out HistoryActionTaskDelete? value) =>
        _historyActionTaskDeleteValue.TryGetValue(out value);

    public bool TryGetHistoryActionWorkspace2BulkUpdate([NotNullWhen(true)] out HistoryActionWorkspace2BulkUpdate? value) =>
        _historyActionWorkspace2BulkUpdateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Action1(HistoryActionBranchCreate value) => HistoryActionBranchCreate(value);

    public static implicit operator Action1(HistoryActionBranchMerge value) => HistoryActionBranchMerge(value);

    public static implicit operator Action1(HistoryActionBranchPush value) => HistoryActionBranchPush(value);

    public static implicit operator Action1(HistoryActionLabelCreate value) => HistoryActionLabelCreate(value);

    public static implicit operator Action1(HistoryActionLabelUpdate value) => HistoryActionLabelUpdate(value);

    public static implicit operator Action1(HistoryActionLabelDelete value) => HistoryActionLabelDelete(value);

    public static implicit operator Action1(HistoryActionProjectUpdate value) => HistoryActionProjectUpdate(value);

    public static implicit operator Action1(HistoryActionPullRequest value) => HistoryActionPullRequest(value);

    public static implicit operator Action1(HistoryActionStoryCreate value) => HistoryActionStoryCreate(value);

    public static implicit operator Action1(HistoryActionStoryUpdate value) => HistoryActionStoryUpdate(value);

    public static implicit operator Action1(HistoryActionStoryDelete value) => HistoryActionStoryDelete(value);

    public static implicit operator Action1(HistoryActionStoryCommentCreate value) =>
        HistoryActionStoryCommentCreate(value);

    public static implicit operator Action1(HistoryActionStoryLinkCreate value) => HistoryActionStoryLinkCreate(value);

    public static implicit operator Action1(HistoryActionStoryLinkUpdate value) => HistoryActionStoryLinkUpdate(value);

    public static implicit operator Action1(HistoryActionStoryLinkDelete value) => HistoryActionStoryLinkDelete(value);

    public static implicit operator Action1(HistoryActionTaskCreate value) => HistoryActionTaskCreate(value);

    public static implicit operator Action1(HistoryActionTaskUpdate value) => HistoryActionTaskUpdate(value);

    public static implicit operator Action1(HistoryActionTaskDelete value) => HistoryActionTaskDelete(value);

    public static implicit operator Action1(HistoryActionWorkspace2BulkUpdate value) =>
        HistoryActionWorkspace2BulkUpdate(value);

    public TResult Match<TResult>(Func<HistoryActionBranchCreate, TResult> onHistoryActionBranchCreate,
        Func<HistoryActionBranchMerge, TResult> onHistoryActionBranchMerge,
        Func<HistoryActionBranchPush, TResult> onHistoryActionBranchPush,
        Func<HistoryActionLabelCreate, TResult> onHistoryActionLabelCreate,
        Func<HistoryActionLabelUpdate, TResult> onHistoryActionLabelUpdate,
        Func<HistoryActionLabelDelete, TResult> onHistoryActionLabelDelete,
        Func<HistoryActionProjectUpdate, TResult> onHistoryActionProjectUpdate,
        Func<HistoryActionPullRequest, TResult> onHistoryActionPullRequest,
        Func<HistoryActionStoryCreate, TResult> onHistoryActionStoryCreate,
        Func<HistoryActionStoryUpdate, TResult> onHistoryActionStoryUpdate,
        Func<HistoryActionStoryDelete, TResult> onHistoryActionStoryDelete,
        Func<HistoryActionStoryCommentCreate, TResult> onHistoryActionStoryCommentCreate,
        Func<HistoryActionStoryLinkCreate, TResult> onHistoryActionStoryLinkCreate,
        Func<HistoryActionStoryLinkUpdate, TResult> onHistoryActionStoryLinkUpdate,
        Func<HistoryActionStoryLinkDelete, TResult> onHistoryActionStoryLinkDelete,
        Func<HistoryActionTaskCreate, TResult> onHistoryActionTaskCreate,
        Func<HistoryActionTaskUpdate, TResult> onHistoryActionTaskUpdate,
        Func<HistoryActionTaskDelete, TResult> onHistoryActionTaskDelete,
        Func<HistoryActionWorkspace2BulkUpdate, TResult> onHistoryActionWorkspace2BulkUpdate,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHistoryActionBranchCreate(
                out var historyActionBranchCreateValue) => onHistoryActionBranchCreate(historyActionBranchCreateValue),
            _ when TryGetHistoryActionBranchMerge(out var historyActionBranchMergeValue) => onHistoryActionBranchMerge(
                historyActionBranchMergeValue),
            _ when TryGetHistoryActionBranchPush(out var historyActionBranchPushValue) => onHistoryActionBranchPush(
                historyActionBranchPushValue),
            _ when TryGetHistoryActionLabelCreate(out var historyActionLabelCreateValue) => onHistoryActionLabelCreate(
                historyActionLabelCreateValue),
            _ when TryGetHistoryActionLabelUpdate(out var historyActionLabelUpdateValue) => onHistoryActionLabelUpdate(
                historyActionLabelUpdateValue),
            _ when TryGetHistoryActionLabelDelete(out var historyActionLabelDeleteValue) => onHistoryActionLabelDelete(
                historyActionLabelDeleteValue),
            _ when TryGetHistoryActionProjectUpdate(
                out var historyActionProjectUpdateValue) => onHistoryActionProjectUpdate(
                historyActionProjectUpdateValue),
            _ when TryGetHistoryActionPullRequest(out var historyActionPullRequestValue) => onHistoryActionPullRequest(
                historyActionPullRequestValue),
            _ when TryGetHistoryActionStoryCreate(out var historyActionStoryCreateValue) => onHistoryActionStoryCreate(
                historyActionStoryCreateValue),
            _ when TryGetHistoryActionStoryUpdate(out var historyActionStoryUpdateValue) => onHistoryActionStoryUpdate(
                historyActionStoryUpdateValue),
            _ when TryGetHistoryActionStoryDelete(out var historyActionStoryDeleteValue) => onHistoryActionStoryDelete(
                historyActionStoryDeleteValue),
            _ when TryGetHistoryActionStoryCommentCreate(
                out var historyActionStoryCommentCreateValue) => onHistoryActionStoryCommentCreate(
                historyActionStoryCommentCreateValue),
            _ when TryGetHistoryActionStoryLinkCreate(
                out var historyActionStoryLinkCreateValue) => onHistoryActionStoryLinkCreate(
                historyActionStoryLinkCreateValue),
            _ when TryGetHistoryActionStoryLinkUpdate(
                out var historyActionStoryLinkUpdateValue) => onHistoryActionStoryLinkUpdate(
                historyActionStoryLinkUpdateValue),
            _ when TryGetHistoryActionStoryLinkDelete(
                out var historyActionStoryLinkDeleteValue) => onHistoryActionStoryLinkDelete(
                historyActionStoryLinkDeleteValue),
            _ when TryGetHistoryActionTaskCreate(out var historyActionTaskCreateValue) => onHistoryActionTaskCreate(
                historyActionTaskCreateValue),
            _ when TryGetHistoryActionTaskUpdate(out var historyActionTaskUpdateValue) => onHistoryActionTaskUpdate(
                historyActionTaskUpdateValue),
            _ when TryGetHistoryActionTaskDelete(out var historyActionTaskDeleteValue) => onHistoryActionTaskDelete(
                historyActionTaskDeleteValue),
            _ when TryGetHistoryActionWorkspace2BulkUpdate(
                out var historyActionWorkspace2BulkUpdateValue) => onHistoryActionWorkspace2BulkUpdate(
                historyActionWorkspace2BulkUpdateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Action1)} holds no value.")
        };

    public void Match(Action<HistoryActionBranchCreate> onHistoryActionBranchCreate,
        Action<HistoryActionBranchMerge> onHistoryActionBranchMerge,
        Action<HistoryActionBranchPush> onHistoryActionBranchPush,
        Action<HistoryActionLabelCreate> onHistoryActionLabelCreate,
        Action<HistoryActionLabelUpdate> onHistoryActionLabelUpdate,
        Action<HistoryActionLabelDelete> onHistoryActionLabelDelete,
        Action<HistoryActionProjectUpdate> onHistoryActionProjectUpdate,
        Action<HistoryActionPullRequest> onHistoryActionPullRequest,
        Action<HistoryActionStoryCreate> onHistoryActionStoryCreate,
        Action<HistoryActionStoryUpdate> onHistoryActionStoryUpdate,
        Action<HistoryActionStoryDelete> onHistoryActionStoryDelete,
        Action<HistoryActionStoryCommentCreate> onHistoryActionStoryCommentCreate,
        Action<HistoryActionStoryLinkCreate> onHistoryActionStoryLinkCreate,
        Action<HistoryActionStoryLinkUpdate> onHistoryActionStoryLinkUpdate,
        Action<HistoryActionStoryLinkDelete> onHistoryActionStoryLinkDelete,
        Action<HistoryActionTaskCreate> onHistoryActionTaskCreate,
        Action<HistoryActionTaskUpdate> onHistoryActionTaskUpdate,
        Action<HistoryActionTaskDelete> onHistoryActionTaskDelete,
        Action<HistoryActionWorkspace2BulkUpdate> onHistoryActionWorkspace2BulkUpdate,
        Action<JsonElement> otherwise)
    {
        if (TryGetHistoryActionBranchCreate(out var historyActionBranchCreateValue)) onHistoryActionBranchCreate(
            historyActionBranchCreateValue);
        else if (TryGetHistoryActionBranchMerge(out var historyActionBranchMergeValue)) onHistoryActionBranchMerge(
            historyActionBranchMergeValue);
        else if (TryGetHistoryActionBranchPush(out var historyActionBranchPushValue)) onHistoryActionBranchPush(
            historyActionBranchPushValue);
        else if (TryGetHistoryActionLabelCreate(out var historyActionLabelCreateValue)) onHistoryActionLabelCreate(
            historyActionLabelCreateValue);
        else if (TryGetHistoryActionLabelUpdate(out var historyActionLabelUpdateValue)) onHistoryActionLabelUpdate(
            historyActionLabelUpdateValue);
        else if (TryGetHistoryActionLabelDelete(out var historyActionLabelDeleteValue)) onHistoryActionLabelDelete(
            historyActionLabelDeleteValue);
        else if (TryGetHistoryActionProjectUpdate(
            out var historyActionProjectUpdateValue)) onHistoryActionProjectUpdate(historyActionProjectUpdateValue);
        else if (TryGetHistoryActionPullRequest(out var historyActionPullRequestValue)) onHistoryActionPullRequest(
            historyActionPullRequestValue);
        else if (TryGetHistoryActionStoryCreate(out var historyActionStoryCreateValue)) onHistoryActionStoryCreate(
            historyActionStoryCreateValue);
        else if (TryGetHistoryActionStoryUpdate(out var historyActionStoryUpdateValue)) onHistoryActionStoryUpdate(
            historyActionStoryUpdateValue);
        else if (TryGetHistoryActionStoryDelete(out var historyActionStoryDeleteValue)) onHistoryActionStoryDelete(
            historyActionStoryDeleteValue);
        else if (TryGetHistoryActionStoryCommentCreate(
            out var historyActionStoryCommentCreateValue)) onHistoryActionStoryCommentCreate(
            historyActionStoryCommentCreateValue);
        else if (TryGetHistoryActionStoryLinkCreate(
            out var historyActionStoryLinkCreateValue)) onHistoryActionStoryLinkCreate(
            historyActionStoryLinkCreateValue);
        else if (TryGetHistoryActionStoryLinkUpdate(
            out var historyActionStoryLinkUpdateValue)) onHistoryActionStoryLinkUpdate(
            historyActionStoryLinkUpdateValue);
        else if (TryGetHistoryActionStoryLinkDelete(
            out var historyActionStoryLinkDeleteValue)) onHistoryActionStoryLinkDelete(
            historyActionStoryLinkDeleteValue);
        else if (TryGetHistoryActionTaskCreate(out var historyActionTaskCreateValue)) onHistoryActionTaskCreate(
            historyActionTaskCreateValue);
        else if (TryGetHistoryActionTaskUpdate(out var historyActionTaskUpdateValue)) onHistoryActionTaskUpdate(
            historyActionTaskUpdateValue);
        else if (TryGetHistoryActionTaskDelete(out var historyActionTaskDeleteValue)) onHistoryActionTaskDelete(
            historyActionTaskDeleteValue);
        else if (TryGetHistoryActionWorkspace2BulkUpdate(
            out var historyActionWorkspace2BulkUpdateValue)) onHistoryActionWorkspace2BulkUpdate(
            historyActionWorkspace2BulkUpdateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Action1)} holds no value.");
    }
}

file sealed class Action1Converter : JsonConverter<Action1>
{
    public override Action1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<HistoryActionBranchCreate>(
            root,
            options,
            out var historyActionBranchCreateValue))
        {
            return Action1.HistoryActionBranchCreate(historyActionBranchCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionBranchMerge>(
            root,
            options,
            out var historyActionBranchMergeValue))
        {
            return Action1.HistoryActionBranchMerge(historyActionBranchMergeValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionBranchPush>(root, options, out var historyActionBranchPushValue))
        {
            return Action1.HistoryActionBranchPush(historyActionBranchPushValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionLabelCreate>(
            root,
            options,
            out var historyActionLabelCreateValue))
        {
            return Action1.HistoryActionLabelCreate(historyActionLabelCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionLabelUpdate>(
            root,
            options,
            out var historyActionLabelUpdateValue))
        {
            return Action1.HistoryActionLabelUpdate(historyActionLabelUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionLabelDelete>(
            root,
            options,
            out var historyActionLabelDeleteValue))
        {
            return Action1.HistoryActionLabelDelete(historyActionLabelDeleteValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionProjectUpdate>(
            root,
            options,
            out var historyActionProjectUpdateValue))
        {
            return Action1.HistoryActionProjectUpdate(historyActionProjectUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionPullRequest>(
            root,
            options,
            out var historyActionPullRequestValue))
        {
            return Action1.HistoryActionPullRequest(historyActionPullRequestValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryCreate>(
            root,
            options,
            out var historyActionStoryCreateValue))
        {
            return Action1.HistoryActionStoryCreate(historyActionStoryCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryUpdate>(
            root,
            options,
            out var historyActionStoryUpdateValue))
        {
            return Action1.HistoryActionStoryUpdate(historyActionStoryUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryDelete>(
            root,
            options,
            out var historyActionStoryDeleteValue))
        {
            return Action1.HistoryActionStoryDelete(historyActionStoryDeleteValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryCommentCreate>(
            root,
            options,
            out var historyActionStoryCommentCreateValue))
        {
            return Action1.HistoryActionStoryCommentCreate(historyActionStoryCommentCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryLinkCreate>(
            root,
            options,
            out var historyActionStoryLinkCreateValue))
        {
            return Action1.HistoryActionStoryLinkCreate(historyActionStoryLinkCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryLinkUpdate>(
            root,
            options,
            out var historyActionStoryLinkUpdateValue))
        {
            return Action1.HistoryActionStoryLinkUpdate(historyActionStoryLinkUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionStoryLinkDelete>(
            root,
            options,
            out var historyActionStoryLinkDeleteValue))
        {
            return Action1.HistoryActionStoryLinkDelete(historyActionStoryLinkDeleteValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionTaskCreate>(root, options, out var historyActionTaskCreateValue))
        {
            return Action1.HistoryActionTaskCreate(historyActionTaskCreateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionTaskUpdate>(root, options, out var historyActionTaskUpdateValue))
        {
            return Action1.HistoryActionTaskUpdate(historyActionTaskUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionTaskDelete>(root, options, out var historyActionTaskDeleteValue))
        {
            return Action1.HistoryActionTaskDelete(historyActionTaskDeleteValue);
        }
        if (JsonSerializer.TryDeserialize<HistoryActionWorkspace2BulkUpdate>(
            root,
            options,
            out var historyActionWorkspace2BulkUpdateValue))
        {
            return Action1.HistoryActionWorkspace2BulkUpdate(historyActionWorkspace2BulkUpdateValue);
        }
        return Action1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Action1 value, JsonSerializerOptions options)
    {
        if (value.TryGetHistoryActionBranchCreate(out var historyActionBranchCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionBranchCreateValue, options);
        }
        else if (value.TryGetHistoryActionBranchMerge(out var historyActionBranchMergeValue))
        {
            JsonSerializer.Serialize(writer, historyActionBranchMergeValue, options);
        }
        else if (value.TryGetHistoryActionBranchPush(out var historyActionBranchPushValue))
        {
            JsonSerializer.Serialize(writer, historyActionBranchPushValue, options);
        }
        else if (value.TryGetHistoryActionLabelCreate(out var historyActionLabelCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionLabelCreateValue, options);
        }
        else if (value.TryGetHistoryActionLabelUpdate(out var historyActionLabelUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionLabelUpdateValue, options);
        }
        else if (value.TryGetHistoryActionLabelDelete(out var historyActionLabelDeleteValue))
        {
            JsonSerializer.Serialize(writer, historyActionLabelDeleteValue, options);
        }
        else if (value.TryGetHistoryActionProjectUpdate(out var historyActionProjectUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionProjectUpdateValue, options);
        }
        else if (value.TryGetHistoryActionPullRequest(out var historyActionPullRequestValue))
        {
            JsonSerializer.Serialize(writer, historyActionPullRequestValue, options);
        }
        else if (value.TryGetHistoryActionStoryCreate(out var historyActionStoryCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryCreateValue, options);
        }
        else if (value.TryGetHistoryActionStoryUpdate(out var historyActionStoryUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryUpdateValue, options);
        }
        else if (value.TryGetHistoryActionStoryDelete(out var historyActionStoryDeleteValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryDeleteValue, options);
        }
        else if (value.TryGetHistoryActionStoryCommentCreate(out var historyActionStoryCommentCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryCommentCreateValue, options);
        }
        else if (value.TryGetHistoryActionStoryLinkCreate(out var historyActionStoryLinkCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryLinkCreateValue, options);
        }
        else if (value.TryGetHistoryActionStoryLinkUpdate(out var historyActionStoryLinkUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryLinkUpdateValue, options);
        }
        else if (value.TryGetHistoryActionStoryLinkDelete(out var historyActionStoryLinkDeleteValue))
        {
            JsonSerializer.Serialize(writer, historyActionStoryLinkDeleteValue, options);
        }
        else if (value.TryGetHistoryActionTaskCreate(out var historyActionTaskCreateValue))
        {
            JsonSerializer.Serialize(writer, historyActionTaskCreateValue, options);
        }
        else if (value.TryGetHistoryActionTaskUpdate(out var historyActionTaskUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionTaskUpdateValue, options);
        }
        else if (value.TryGetHistoryActionTaskDelete(out var historyActionTaskDeleteValue))
        {
            JsonSerializer.Serialize(writer, historyActionTaskDeleteValue, options);
        }
        else if (value.TryGetHistoryActionWorkspace2BulkUpdate(out var historyActionWorkspace2BulkUpdateValue))
        {
            JsonSerializer.Serialize(writer, historyActionWorkspace2BulkUpdateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Action1)} contains no valid value to serialize.");
        }
    }
}
