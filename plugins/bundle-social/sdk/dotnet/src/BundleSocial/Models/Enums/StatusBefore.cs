using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBefore>))]
public sealed record StatusBefore : OpenStringEnum<StatusBefore>
{
    private StatusBefore(string value) : base(value)
    {
    }

    public static readonly StatusBefore Draft = new("DRAFT");

    public static readonly StatusBefore Scheduled = new("SCHEDULED");

    public static readonly StatusBefore Posted = new("POSTED");

    public static readonly StatusBefore Error = new("ERROR");

    public static readonly StatusBefore Deleted = new("DELETED");

    public static readonly StatusBefore Processing = new("PROCESSING");

    public static readonly StatusBefore Review = new("REVIEW");

    public static readonly StatusBefore Retrying = new("RETRYING");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onScheduled,
        Func<TResult> onPosted,
        Func<TResult> onError,
        Func<TResult> onDeleted,
        Func<TResult> onProcessing,
        Func<TResult> onReview,
        Func<TResult> onRetrying,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Posted => onPosted(),
            _ when this == Error => onError(),
            _ when this == Deleted => onDeleted(),
            _ when this == Processing => onProcessing(),
            _ when this == Review => onReview(),
            _ when this == Retrying => onRetrying(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onScheduled,
        Action onPosted,
        Action onError,
        Action onDeleted,
        Action onProcessing,
        Action onReview,
        Action onRetrying,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Scheduled) onScheduled();
        else if (this == Posted) onPosted();
        else if (this == Error) onError();
        else if (this == Deleted) onDeleted();
        else if (this == Processing) onProcessing();
        else if (this == Review) onReview();
        else if (this == Retrying) onRetrying();
        else otherwise(Value);
    }
}
