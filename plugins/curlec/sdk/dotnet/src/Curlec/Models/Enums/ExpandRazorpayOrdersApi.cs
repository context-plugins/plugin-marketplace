using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExpandRazorpayOrdersApi>))]
public sealed record ExpandRazorpayOrdersApi : OpenStringEnum<ExpandRazorpayOrdersApi>
{
    private ExpandRazorpayOrdersApi(string value) : base(value)
    {
    }

    public static readonly ExpandRazorpayOrdersApi Payments = new("payments");

    public static readonly ExpandRazorpayOrdersApi PaymentsCard = new("payments.card");

    public static readonly ExpandRazorpayOrdersApi Transfers = new("transfers");

    public static readonly ExpandRazorpayOrdersApi VirtualAccount = new("virtual_account");

    public TResult Match<TResult>(Func<TResult> onPayments,
        Func<TResult> onPaymentsCard,
        Func<TResult> onTransfers,
        Func<TResult> onVirtualAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payments => onPayments(),
            _ when this == PaymentsCard => onPaymentsCard(),
            _ when this == Transfers => onTransfers(),
            _ when this == VirtualAccount => onVirtualAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayments,
        Action onPaymentsCard,
        Action onTransfers,
        Action onVirtualAccount,
        Action<string> otherwise)
    {
        if (this == Payments) onPayments();
        else if (this == PaymentsCard) onPaymentsCard();
        else if (this == Transfers) onTransfers();
        else if (this == VirtualAccount) onVirtualAccount();
        else otherwise(Value);
    }
}
