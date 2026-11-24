using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayDisputesApi>))]
public sealed record Entity1RazorpayDisputesApi : OpenStringEnum<Entity1RazorpayDisputesApi>
{
    private Entity1RazorpayDisputesApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayDisputesApi Collection = new("collection");

    public TResult Match<TResult>(Func<TResult> onCollection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Collection => onCollection(),
            _ => otherwise(Value)
        };

    public void Match(Action onCollection, Action<string> otherwise)
    {
        if (this == Collection) onCollection();
        else otherwise(Value);
    }
}
