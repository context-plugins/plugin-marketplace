using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayInvoicesApi>))]
public sealed record EntityRazorpayInvoicesApi : OpenStringEnum<EntityRazorpayInvoicesApi>
{
    private EntityRazorpayInvoicesApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayInvoicesApi Invoice = new("invoice");

    public TResult Match<TResult>(Func<TResult> onInvoice, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Invoice => onInvoice(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvoice, Action<string> otherwise)
    {
        if (this == Invoice) onInvoice();
        else otherwise(Value);
    }
}
