using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity2>))]
public sealed record Entity2 : OpenStringEnum<Entity2>
{
    private Entity2(string value) : base(value)
    {
    }

    public static readonly Entity2 SettlementOndemandPayout = new("settlement.ondemand_payout");

    public TResult Match<TResult>(Func<TResult> onSettlementOndemandPayout, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SettlementOndemandPayout => onSettlementOndemandPayout(),
            _ => otherwise(Value)
        };

    public void Match(Action onSettlementOndemandPayout, Action<string> otherwise)
    {
        if (this == SettlementOndemandPayout) onSettlementOndemandPayout();
        else otherwise(Value);
    }
}
