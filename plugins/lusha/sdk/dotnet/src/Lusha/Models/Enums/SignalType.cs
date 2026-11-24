using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SignalType>))]
public sealed record SignalType : OpenStringEnum<SignalType>
{
    private SignalType(string value) : base(value)
    {
    }

    public static readonly SignalType AllSignals = new("allSignals");

    public static readonly SignalType Promotion = new("promotion");

    public static readonly SignalType CompanyChange = new("companyChange");

    public TResult Match<TResult>(Func<TResult> onAllSignals,
        Func<TResult> onPromotion,
        Func<TResult> onCompanyChange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllSignals => onAllSignals(),
            _ when this == Promotion => onPromotion(),
            _ when this == CompanyChange => onCompanyChange(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllSignals, Action onPromotion, Action onCompanyChange, Action<string> otherwise)
    {
        if (this == AllSignals) onAllSignals();
        else if (this == Promotion) onPromotion();
        else if (this == CompanyChange) onCompanyChange();
        else otherwise(Value);
    }
}
