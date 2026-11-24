using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DaysOnZillow1>))]
public sealed record DaysOnZillow1 : OpenStringEnum<DaysOnZillow1>
{
    private DaysOnZillow1(string value) : base(value)
    {
    }

    public static readonly DaysOnZillow1 _1 = new("1");

    public static readonly DaysOnZillow1 _7 = new("7");

    public static readonly DaysOnZillow1 _14 = new("14");

    public static readonly DaysOnZillow1 _30 = new("30");

    public static readonly DaysOnZillow1 _90 = new("90");

    public static readonly DaysOnZillow1 _6M = new("6m");

    public static readonly DaysOnZillow1 _12M = new("12m");

    public static readonly DaysOnZillow1 _24M = new("24m");

    public static readonly DaysOnZillow1 _36M = new("36m");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> on_7,
        Func<TResult> on_14,
        Func<TResult> on_30,
        Func<TResult> on_90,
        Func<TResult> on_6M,
        Func<TResult> on_12M,
        Func<TResult> on_24M,
        Func<TResult> on_36M,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == _7 => on_7(),
            _ when this == _14 => on_14(),
            _ when this == _30 => on_30(),
            _ when this == _90 => on_90(),
            _ when this == _6M => on_6M(),
            _ when this == _12M => on_12M(),
            _ when this == _24M => on_24M(),
            _ when this == _36M => on_36M(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1,
        Action on_7,
        Action on_14,
        Action on_30,
        Action on_90,
        Action on_6M,
        Action on_12M,
        Action on_24M,
        Action on_36M,
        Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == _7) on_7();
        else if (this == _14) on_14();
        else if (this == _30) on_30();
        else if (this == _90) on_90();
        else if (this == _6M) on_6M();
        else if (this == _12M) on_12M();
        else if (this == _24M) on_24M();
        else if (this == _36M) on_36M();
        else otherwise(Value);
    }
}
