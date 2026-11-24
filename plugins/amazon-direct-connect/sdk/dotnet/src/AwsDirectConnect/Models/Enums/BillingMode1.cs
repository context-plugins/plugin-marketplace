using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The billing mode of the connection.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingMode1>))]
public sealed record BillingMode1 : OpenStringEnum<BillingMode1>
{
    private BillingMode1(string value) : base(value)
    {
    }

    public static readonly BillingMode1 PayAsYouGo = new("PayAsYouGo");

    public static readonly BillingMode1 FlatRateTier1 = new("FlatRateTier1");

    public static readonly BillingMode1 FlatRateTier2 = new("FlatRateTier2");

    public static readonly BillingMode1 FlatRateTier3 = new("FlatRateTier3");

    public static readonly BillingMode1 FlatRateTier4 = new("FlatRateTier4");

    public static readonly BillingMode1 FlatRateTier5 = new("FlatRateTier5");

    public static readonly BillingMode1 PortPairFlatRateTier1 = new("PortPairFlatRateTier1");

    public static readonly BillingMode1 PortPairFlatRateTier2 = new("PortPairFlatRateTier2");

    public static readonly BillingMode1 PortPairFlatRateTier3 = new("PortPairFlatRateTier3");

    public static readonly BillingMode1 PortPairFlatRateTier4 = new("PortPairFlatRateTier4");

    public static readonly BillingMode1 PortPairFlatRateTier5 = new("PortPairFlatRateTier5");

    public TResult Match<TResult>(Func<TResult> onPayAsYouGo,
        Func<TResult> onFlatRateTier1,
        Func<TResult> onFlatRateTier2,
        Func<TResult> onFlatRateTier3,
        Func<TResult> onFlatRateTier4,
        Func<TResult> onFlatRateTier5,
        Func<TResult> onPortPairFlatRateTier1,
        Func<TResult> onPortPairFlatRateTier2,
        Func<TResult> onPortPairFlatRateTier3,
        Func<TResult> onPortPairFlatRateTier4,
        Func<TResult> onPortPairFlatRateTier5,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayAsYouGo => onPayAsYouGo(),
            _ when this == FlatRateTier1 => onFlatRateTier1(),
            _ when this == FlatRateTier2 => onFlatRateTier2(),
            _ when this == FlatRateTier3 => onFlatRateTier3(),
            _ when this == FlatRateTier4 => onFlatRateTier4(),
            _ when this == FlatRateTier5 => onFlatRateTier5(),
            _ when this == PortPairFlatRateTier1 => onPortPairFlatRateTier1(),
            _ when this == PortPairFlatRateTier2 => onPortPairFlatRateTier2(),
            _ when this == PortPairFlatRateTier3 => onPortPairFlatRateTier3(),
            _ when this == PortPairFlatRateTier4 => onPortPairFlatRateTier4(),
            _ when this == PortPairFlatRateTier5 => onPortPairFlatRateTier5(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayAsYouGo,
        Action onFlatRateTier1,
        Action onFlatRateTier2,
        Action onFlatRateTier3,
        Action onFlatRateTier4,
        Action onFlatRateTier5,
        Action onPortPairFlatRateTier1,
        Action onPortPairFlatRateTier2,
        Action onPortPairFlatRateTier3,
        Action onPortPairFlatRateTier4,
        Action onPortPairFlatRateTier5,
        Action<string> otherwise)
    {
        if (this == PayAsYouGo) onPayAsYouGo();
        else if (this == FlatRateTier1) onFlatRateTier1();
        else if (this == FlatRateTier2) onFlatRateTier2();
        else if (this == FlatRateTier3) onFlatRateTier3();
        else if (this == FlatRateTier4) onFlatRateTier4();
        else if (this == FlatRateTier5) onFlatRateTier5();
        else if (this == PortPairFlatRateTier1) onPortPairFlatRateTier1();
        else if (this == PortPairFlatRateTier2) onPortPairFlatRateTier2();
        else if (this == PortPairFlatRateTier3) onPortPairFlatRateTier3();
        else if (this == PortPairFlatRateTier4) onPortPairFlatRateTier4();
        else if (this == PortPairFlatRateTier5) onPortPairFlatRateTier5();
        else otherwise(Value);
    }
}
