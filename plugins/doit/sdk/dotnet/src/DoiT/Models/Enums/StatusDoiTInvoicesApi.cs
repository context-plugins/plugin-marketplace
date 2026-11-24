using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Status of the invoice
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTInvoicesApi>))]
public sealed record StatusDoiTInvoicesApi : OpenStringEnum<StatusDoiTInvoicesApi>
{
    private StatusDoiTInvoicesApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTInvoicesApi Open = new("OPEN");

    public static readonly StatusDoiTInvoicesApi PastDue = new("PAST DUE");

    public static readonly StatusDoiTInvoicesApi Paid = new("PAID");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onPastDue,
        Func<TResult> onPaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == PastDue => onPastDue(),
            _ when this == Paid => onPaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onPastDue, Action onPaid, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == PastDue) onPastDue();
        else if (this == Paid) onPaid();
        else otherwise(Value);
    }
}
