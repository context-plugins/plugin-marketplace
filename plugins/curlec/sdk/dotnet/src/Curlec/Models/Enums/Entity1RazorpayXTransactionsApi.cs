using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayXTransactionsApi>))]
public sealed record Entity1RazorpayXTransactionsApi : OpenStringEnum<Entity1RazorpayXTransactionsApi>
{
    private Entity1RazorpayXTransactionsApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayXTransactionsApi Payout = new("payout");

    public static readonly Entity1RazorpayXTransactionsApi BankTransfer = new("bank_transfer");

    public TResult Match<TResult>(Func<TResult> onPayout,
        Func<TResult> onBankTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payout => onPayout(),
            _ when this == BankTransfer => onBankTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayout, Action onBankTransfer, Action<string> otherwise)
    {
        if (this == Payout) onPayout();
        else if (this == BankTransfer) onBankTransfer();
        else otherwise(Value);
    }
}
