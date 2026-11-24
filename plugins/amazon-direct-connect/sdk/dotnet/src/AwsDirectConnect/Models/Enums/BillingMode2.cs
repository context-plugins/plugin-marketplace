using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The billing mode for the connection.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingMode2>))]
public sealed record BillingMode2 : OpenStringEnum<BillingMode2>
{
    private BillingMode2(string value) : base(value)
    {
    }

    public static readonly BillingMode2 PayAsYouGo = new("PayAsYouGo");

    public static readonly BillingMode2 FlatRateTier1 = new("FlatRateTier1");

    public static readonly BillingMode2 FlatRateTier2 = new("FlatRateTier2");

    public static readonly BillingMode2 FlatRateTier3 = new("FlatRateTier3");

    public static readonly BillingMode2 FlatRateTier4 = new("FlatRateTier4");

    public static readonly BillingMode2 FlatRateTier5 = new("FlatRateTier5");

    public TResult Match<TResult>(Func<TResult> onPayAsYouGo,
        Func<TResult> onFlatRateTier1,
        Func<TResult> onFlatRateTier2,
        Func<TResult> onFlatRateTier3,
        Func<TResult> onFlatRateTier4,
        Func<TResult> onFlatRateTier5,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayAsYouGo => onPayAsYouGo(),
            _ when this == FlatRateTier1 => onFlatRateTier1(),
            _ when this == FlatRateTier2 => onFlatRateTier2(),
            _ when this == FlatRateTier3 => onFlatRateTier3(),
            _ when this == FlatRateTier4 => onFlatRateTier4(),
            _ when this == FlatRateTier5 => onFlatRateTier5(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayAsYouGo,
        Action onFlatRateTier1,
        Action onFlatRateTier2,
        Action onFlatRateTier3,
        Action onFlatRateTier4,
        Action onFlatRateTier5,
        Action<string> otherwise)
    {
        if (this == PayAsYouGo) onPayAsYouGo();
        else if (this == FlatRateTier1) onFlatRateTier1();
        else if (this == FlatRateTier2) onFlatRateTier2();
        else if (this == FlatRateTier3) onFlatRateTier3();
        else if (this == FlatRateTier4) onFlatRateTier4();
        else if (this == FlatRateTier5) onFlatRateTier5();
        else otherwise(Value);
    }
}
