using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusAfter>))]
public sealed record StatusAfter : OpenStringEnum<StatusAfter>
{
    private StatusAfter(string value) : base(value)
    {
    }

    public static readonly StatusAfter Draft = new("DRAFT");

    public static readonly StatusAfter Scheduled = new("SCHEDULED");

    public static readonly StatusAfter Posted = new("POSTED");

    public static readonly StatusAfter Error = new("ERROR");

    public static readonly StatusAfter Deleted = new("DELETED");

    public static readonly StatusAfter Processing = new("PROCESSING");

    public static readonly StatusAfter Review = new("REVIEW");

    public static readonly StatusAfter Retrying = new("RETRYING");

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
