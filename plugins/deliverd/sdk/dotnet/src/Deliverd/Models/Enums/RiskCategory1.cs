using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RiskCategory1>))]
public sealed record RiskCategory1 : OpenStringEnum<RiskCategory1>
{
    private RiskCategory1(string value) : base(value)
    {
    }

    public static readonly RiskCategory1 Financial = new("financial");

    public static readonly RiskCategory1 Data = new("data");

    public static readonly RiskCategory1 Communication = new("communication");

    public static readonly RiskCategory1 Infrastructure = new("infrastructure");

    public static readonly RiskCategory1 Identity = new("identity");

    public static readonly RiskCategory1 Other = new("other");

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
