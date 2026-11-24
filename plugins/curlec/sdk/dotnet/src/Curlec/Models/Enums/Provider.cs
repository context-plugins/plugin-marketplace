using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Provider>))]
public sealed record Provider : OpenStringEnum<Provider>
{
    private Provider(string value) : base(value)
    {
    }

    public static readonly Provider Amazonpay = new("amazonpay");

    public TResult Match<TResult>(Func<TResult> onAmazonpay, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Amazonpay => onAmazonpay(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonpay, Action<string> otherwise)
    {
        if (this == Amazonpay) onAmazonpay();
        else otherwise(Value);
    }
}
