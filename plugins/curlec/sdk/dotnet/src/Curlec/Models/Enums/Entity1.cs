using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1>))]
public sealed record Entity1 : OpenStringEnum<Entity1>
{
    private Entity1(string value) : base(value)
    {
    }

    public static readonly Entity1 Customer = new("customer");

    public TResult Match<TResult>(Func<TResult> onCustomer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Customer => onCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomer, Action<string> otherwise)
    {
        if (this == Customer) onCustomer();
        else otherwise(Value);
    }
}
