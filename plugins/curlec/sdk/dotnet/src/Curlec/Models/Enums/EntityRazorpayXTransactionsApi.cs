using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXTransactionsApi>))]
public sealed record EntityRazorpayXTransactionsApi : OpenStringEnum<EntityRazorpayXTransactionsApi>
{
    private EntityRazorpayXTransactionsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXTransactionsApi Transaction = new("transaction");

    public TResult Match<TResult>(Func<TResult> onTransaction, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transaction => onTransaction(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransaction, Action<string> otherwise)
    {
        if (this == Transaction) onTransaction();
        else otherwise(Value);
    }
}
