using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// invoice: a formal invoice document. link: a payment page / payment link.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Invoice = new("invoice");

    public static readonly TypeEnum Link = new("link");

    public TResult Match<TResult>(Func<TResult> onInvoice, Func<TResult> onLink, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Invoice => onInvoice(),
            _ when this == Link => onLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvoice, Action onLink, Action<string> otherwise)
    {
        if (this == Invoice) onInvoice();
        else if (this == Link) onLink();
        else otherwise(Value);
    }
}
