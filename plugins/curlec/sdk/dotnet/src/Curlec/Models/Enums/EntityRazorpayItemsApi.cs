using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayItemsApi>))]
public sealed record EntityRazorpayItemsApi : OpenStringEnum<EntityRazorpayItemsApi>
{
    private EntityRazorpayItemsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayItemsApi Item = new("item");

    public TResult Match<TResult>(Func<TResult> onItem, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Item => onItem(),
            _ => otherwise(Value)
        };

    public void Match(Action onItem, Action<string> otherwise)
    {
        if (this == Item) onItem();
        else otherwise(Value);
    }
}
