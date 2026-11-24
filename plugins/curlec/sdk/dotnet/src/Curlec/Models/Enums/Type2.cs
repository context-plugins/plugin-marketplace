using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// invoice: formal invoice; link: payment page.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Invoice = new("invoice");

    public static readonly Type2 Link = new("link");

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
