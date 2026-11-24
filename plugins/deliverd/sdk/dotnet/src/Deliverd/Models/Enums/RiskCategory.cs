using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What kind of harm this risks
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskCategory>))]
public sealed record RiskCategory : OpenStringEnum<RiskCategory>
{
    private RiskCategory(string value) : base(value)
    {
    }

    public static readonly RiskCategory Financial = new("financial");

    public static readonly RiskCategory Data = new("data");

    public static readonly RiskCategory Communication = new("communication");

    public static readonly RiskCategory Infrastructure = new("infrastructure");

    public static readonly RiskCategory Identity = new("identity");

    public static readonly RiskCategory Other = new("other");

    public TResult Match<TResult>(Func<TResult> onFinancial,
        Func<TResult> onData,
        Func<TResult> onCommunication,
        Func<TResult> onInfrastructure,
        Func<TResult> onIdentity,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Financial => onFinancial(),
            _ when this == Data => onData(),
            _ when this == Communication => onCommunication(),
            _ when this == Infrastructure => onInfrastructure(),
            _ when this == Identity => onIdentity(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onFinancial,
        Action onData,
        Action onCommunication,
        Action onInfrastructure,
        Action onIdentity,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Financial) onFinancial();
        else if (this == Data) onData();
        else if (this == Communication) onCommunication();
        else if (this == Infrastructure) onInfrastructure();
        else if (this == Identity) onIdentity();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
