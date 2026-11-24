using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Signal>))]
public sealed record Signal : OpenStringEnum<Signal>
{
    private Signal(string value) : base(value)
    {
    }

    public static readonly Signal AllSignals = new("allSignals");

    public static readonly Signal Promotion = new("promotion");

    public static readonly Signal CompanyChange = new("companyChange");

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
