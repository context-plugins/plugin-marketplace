using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayDisputesApi>))]
public sealed record EntityRazorpayDisputesApi : OpenStringEnum<EntityRazorpayDisputesApi>
{
    private EntityRazorpayDisputesApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayDisputesApi Dispute = new("dispute");

    public TResult Match<TResult>(Func<TResult> onDispute, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dispute => onDispute(),
            _ => otherwise(Value)
        };

    public void Match(Action onDispute, Action<string> otherwise)
    {
        if (this == Dispute) onDispute();
        else otherwise(Value);
    }
}
