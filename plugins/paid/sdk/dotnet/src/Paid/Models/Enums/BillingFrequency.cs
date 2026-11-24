using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BillingFrequency>))]
public sealed record BillingFrequency : OpenStringEnum<BillingFrequency>
{
    private BillingFrequency(string value) : base(value)
    {
    }

    public static readonly BillingFrequency Monthly = new("monthly");

    public static readonly BillingFrequency Quarterly = new("quarterly");

    public static readonly BillingFrequency Annual = new("annual");

    public TResult Match<TResult>(Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onAnnual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == Annual => onAnnual(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonthly, Action onQuarterly, Action onAnnual, Action<string> otherwise)
    {
        if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == Annual) onAnnual();
        else otherwise(Value);
    }
}
