using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Draft = new("DRAFT");

    public static readonly Status4 Scheduled = new("SCHEDULED");

    public static readonly Status4 Posted = new("POSTED");

    public static readonly Status4 Error = new("ERROR");

    public static readonly Status4 Deleted = new("DELETED");

    public static readonly Status4 Processing = new("PROCESSING");

    public static readonly Status4 Retrying = new("RETRYING");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onScheduled,
        Func<TResult> onPosted,
        Func<TResult> onError,
        Func<TResult> onDeleted,
        Func<TResult> onProcessing,
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
            _ when this == Retrying => onRetrying(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onScheduled,
        Action onPosted,
        Action onError,
        Action onDeleted,
        Action onProcessing,
        Action onRetrying,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Scheduled) onScheduled();
        else if (this == Posted) onPosted();
        else if (this == Error) onError();
        else if (this == Deleted) onDeleted();
        else if (this == Processing) onProcessing();
        else if (this == Retrying) onRetrying();
        else otherwise(Value);
    }
}
