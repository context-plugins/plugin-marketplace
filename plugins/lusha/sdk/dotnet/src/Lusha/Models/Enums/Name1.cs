using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Name1>))]
public sealed record Name1 : OpenStringEnum<Name1>
{
    private Name1(string value) : base(value)
    {
    }

    public static readonly Name1 Angel = new("angel");

    public static readonly Name1 Venture = new("venture");

    public static readonly Name1 PrivateEquity = new("private_equity");

    public static readonly Name1 Crowdfunding = new("crowdfunding");

    public static readonly Name1 Grant = new("grant");

    public static readonly Name1 DebtFinancing = new("debt_financing");

    public static readonly Name1 Other = new("other");

    public TResult Match<TResult>(Func<TResult> onAngel,
        Func<TResult> onVenture,
        Func<TResult> onPrivateEquity,
        Func<TResult> onCrowdfunding,
        Func<TResult> onGrant,
        Func<TResult> onDebtFinancing,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Angel => onAngel(),
            _ when this == Venture => onVenture(),
            _ when this == PrivateEquity => onPrivateEquity(),
            _ when this == Crowdfunding => onCrowdfunding(),
            _ when this == Grant => onGrant(),
            _ when this == DebtFinancing => onDebtFinancing(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onAngel,
        Action onVenture,
        Action onPrivateEquity,
        Action onCrowdfunding,
        Action onGrant,
        Action onDebtFinancing,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Angel) onAngel();
        else if (this == Venture) onVenture();
        else if (this == PrivateEquity) onPrivateEquity();
        else if (this == Crowdfunding) onCrowdfunding();
        else if (this == Grant) onGrant();
        else if (this == DebtFinancing) onDebtFinancing();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
