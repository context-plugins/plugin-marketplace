using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 Invoice = new("invoice");

    public static readonly Type3 Link = new("link");

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
