using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Record status enum for bills.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillRecordStatus>))]
public sealed record BillRecordStatus : OpenStringEnum<BillRecordStatus>
{
    private BillRecordStatus(string value) : base(value)
    {
    }

    public static readonly BillRecordStatus Active = new("ACTIVE");

    public static readonly BillRecordStatus Inactive = new("INACTIVE");

    public static readonly BillRecordStatus Draft = new("DRAFT");

    public static readonly BillRecordStatus DraftDeleted = new("DRAFT_DELETED");

    public static readonly BillRecordStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onDraft,
        Func<TResult> onDraftDeleted,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Draft => onDraft(),
            _ when this == DraftDeleted => onDraftDeleted(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onInactive,
        Action onDraft,
        Action onDraftDeleted,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Draft) onDraft();
        else if (this == DraftDeleted) onDraftDeleted();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
