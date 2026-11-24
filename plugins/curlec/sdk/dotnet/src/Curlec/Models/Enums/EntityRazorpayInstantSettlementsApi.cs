using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayInstantSettlementsApi>))]
public sealed record EntityRazorpayInstantSettlementsApi : OpenStringEnum<EntityRazorpayInstantSettlementsApi>
{
    private EntityRazorpayInstantSettlementsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayInstantSettlementsApi SettlementOndemand = new("settlement.ondemand");

    public TResult Match<TResult>(Func<TResult> onSettlementOndemand, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SettlementOndemand => onSettlementOndemand(),
            _ => otherwise(Value)
        };

    public void Match(Action onSettlementOndemand, Action<string> otherwise)
    {
        if (this == SettlementOndemand) onSettlementOndemand();
        else otherwise(Value);
    }
}
