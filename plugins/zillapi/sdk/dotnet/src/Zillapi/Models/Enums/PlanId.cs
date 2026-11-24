using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlanId>))]
public sealed record PlanId : OpenStringEnum<PlanId>
{
    private PlanId(string value) : base(value)
    {
    }

    public static readonly PlanId Free = new("free");

    public static readonly PlanId Monthly = new("monthly");

    public static readonly PlanId Annual = new("annual");

    public static readonly PlanId Enterprise = new("enterprise");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onMonthly,
        Func<TResult> onAnnual,
        Func<TResult> onEnterprise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Monthly => onMonthly(),
            _ when this == Annual => onAnnual(),
            _ when this == Enterprise => onEnterprise(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onMonthly, Action onAnnual, Action onEnterprise, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Monthly) onMonthly();
        else if (this == Annual) onAnnual();
        else if (this == Enterprise) onEnterprise();
        else otherwise(Value);
    }
}
