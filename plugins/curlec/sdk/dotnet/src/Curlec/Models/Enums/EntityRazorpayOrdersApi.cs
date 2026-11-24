using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayOrdersApi>))]
public sealed record EntityRazorpayOrdersApi : OpenStringEnum<EntityRazorpayOrdersApi>
{
    private EntityRazorpayOrdersApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayOrdersApi Order = new("order");

    public TResult Match<TResult>(Func<TResult> onOrder, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Order => onOrder(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrder, Action<string> otherwise)
    {
        if (this == Order) onOrder();
        else otherwise(Value);
    }
}
