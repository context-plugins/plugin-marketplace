using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayPlansApi>))]
public sealed record Entity1RazorpayPlansApi : OpenStringEnum<Entity1RazorpayPlansApi>
{
    private Entity1RazorpayPlansApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayPlansApi Item = new("item");

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
