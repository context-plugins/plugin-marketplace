using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Record status enum for invoices.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoiceRecordStatus>))]
public sealed record InvoiceRecordStatus : OpenStringEnum<InvoiceRecordStatus>
{
    private InvoiceRecordStatus(string value) : base(value)
    {
    }

    public static readonly InvoiceRecordStatus Active = new("ACTIVE");

    public static readonly InvoiceRecordStatus Inactive = new("INACTIVE");

    public static readonly InvoiceRecordStatus Draft = new("DRAFT");

    public static readonly InvoiceRecordStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onDraft,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Draft => onDraft(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action onDraft, Action onUndefined, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Draft) onDraft();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
