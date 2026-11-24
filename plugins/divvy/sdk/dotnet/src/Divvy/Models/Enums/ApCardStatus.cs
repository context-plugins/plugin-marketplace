using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// AP Card response status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApCardStatus>))]
public sealed record ApCardStatus : OpenStringEnum<ApCardStatus>
{
    private ApCardStatus(string value) : base(value)
    {
    }

    public static readonly ApCardStatus Active = new("ACTIVE");

    public static readonly ApCardStatus Inactive = new("INACTIVE");

    public static readonly ApCardStatus Deleted = new("DELETED");

    public static readonly ApCardStatus Pending = new("PENDING");

    public static readonly ApCardStatus Draft = new("DRAFT");

    public static readonly ApCardStatus DraftDeleted = new("DRAFT_DELETED");

    public static readonly ApCardStatus Frozen = new("FROZEN");

    public static readonly ApCardStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onDeleted,
        Func<TResult> onPending,
        Func<TResult> onDraft,
        Func<TResult> onDraftDeleted,
        Func<TResult> onFrozen,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Deleted => onDeleted(),
            _ when this == Pending => onPending(),
            _ when this == Draft => onDraft(),
            _ when this == DraftDeleted => onDraftDeleted(),
            _ when this == Frozen => onFrozen(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onInactive,
        Action onDeleted,
        Action onPending,
        Action onDraft,
        Action onDraftDeleted,
        Action onFrozen,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Deleted) onDeleted();
        else if (this == Pending) onPending();
        else if (this == Draft) onDraft();
        else if (this == DraftDeleted) onDraftDeleted();
        else if (this == Frozen) onFrozen();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
