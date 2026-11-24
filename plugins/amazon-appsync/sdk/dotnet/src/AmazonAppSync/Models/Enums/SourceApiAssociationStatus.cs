using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The state of the source API association.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceApiAssociationStatus>))]
public sealed record SourceApiAssociationStatus : OpenStringEnum<SourceApiAssociationStatus>
{
    private SourceApiAssociationStatus(string value) : base(value)
    {
    }

    public static readonly SourceApiAssociationStatus MergeScheduled = new("MERGE_SCHEDULED");

    public static readonly SourceApiAssociationStatus MergeFailed = new("MERGE_FAILED");

    public static readonly SourceApiAssociationStatus MergeSuccess = new("MERGE_SUCCESS");

    public static readonly SourceApiAssociationStatus MergeInProgress = new("MERGE_IN_PROGRESS");

    public static readonly SourceApiAssociationStatus AutoMergeScheduleFailed = new("AUTO_MERGE_SCHEDULE_FAILED");

    public static readonly SourceApiAssociationStatus DeletionScheduled = new("DELETION_SCHEDULED");

    public static readonly SourceApiAssociationStatus DeletionInProgress = new("DELETION_IN_PROGRESS");

    public static readonly SourceApiAssociationStatus DeletionFailed = new("DELETION_FAILED");

    public TResult Match<TResult>(Func<TResult> onMergeScheduled,
        Func<TResult> onMergeFailed,
        Func<TResult> onMergeSuccess,
        Func<TResult> onMergeInProgress,
        Func<TResult> onAutoMergeScheduleFailed,
        Func<TResult> onDeletionScheduled,
        Func<TResult> onDeletionInProgress,
        Func<TResult> onDeletionFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MergeScheduled => onMergeScheduled(),
            _ when this == MergeFailed => onMergeFailed(),
            _ when this == MergeSuccess => onMergeSuccess(),
            _ when this == MergeInProgress => onMergeInProgress(),
            _ when this == AutoMergeScheduleFailed => onAutoMergeScheduleFailed(),
            _ when this == DeletionScheduled => onDeletionScheduled(),
            _ when this == DeletionInProgress => onDeletionInProgress(),
            _ when this == DeletionFailed => onDeletionFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onMergeScheduled,
        Action onMergeFailed,
        Action onMergeSuccess,
        Action onMergeInProgress,
        Action onAutoMergeScheduleFailed,
        Action onDeletionScheduled,
        Action onDeletionInProgress,
        Action onDeletionFailed,
        Action<string> otherwise)
    {
        if (this == MergeScheduled) onMergeScheduled();
        else if (this == MergeFailed) onMergeFailed();
        else if (this == MergeSuccess) onMergeSuccess();
        else if (this == MergeInProgress) onMergeInProgress();
        else if (this == AutoMergeScheduleFailed) onAutoMergeScheduleFailed();
        else if (this == DeletionScheduled) onDeletionScheduled();
        else if (this == DeletionInProgress) onDeletionInProgress();
        else if (this == DeletionFailed) onDeletionFailed();
        else otherwise(Value);
    }
}
