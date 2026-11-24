using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The cadence and index of the time period. The value is one of: <c>FY</c>, <c>H1</c>, <c>H2</c>, <c>Q1</c>, <c>Q2</c>, <c>Q3</c>, or <c>Q4</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Fy = new("FY");

    public static readonly Period H1 = new("H1");

    public static readonly Period H2 = new("H2");

    public static readonly Period Q1 = new("Q1");

    public static readonly Period Q2 = new("Q2");

    public static readonly Period Q3 = new("Q3");

    public static readonly Period Q4 = new("Q4");

    public TResult Match<TResult>(Func<TResult> onFy,
        Func<TResult> onH1,
        Func<TResult> onH2,
        Func<TResult> onQ1,
        Func<TResult> onQ2,
        Func<TResult> onQ3,
        Func<TResult> onQ4,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fy => onFy(),
            _ when this == H1 => onH1(),
            _ when this == H2 => onH2(),
            _ when this == Q1 => onQ1(),
            _ when this == Q2 => onQ2(),
            _ when this == Q3 => onQ3(),
            _ when this == Q4 => onQ4(),
            _ => otherwise(Value)
        };

    public void Match(Action onFy,
        Action onH1,
        Action onH2,
        Action onQ1,
        Action onQ2,
        Action onQ3,
        Action onQ4,
        Action<string> otherwise)
    {
        if (this == Fy) onFy();
        else if (this == H1) onH1();
        else if (this == H2) onH2();
        else if (this == Q1) onQ1();
        else if (this == Q2) onQ2();
        else if (this == Q3) onQ3();
        else if (this == Q4) onQ4();
        else otherwise(Value);
    }
}
