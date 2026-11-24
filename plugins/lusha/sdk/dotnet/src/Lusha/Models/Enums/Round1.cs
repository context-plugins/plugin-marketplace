using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Round1>))]
public sealed record Round1 : OpenStringEnum<Round1>
{
    private Round1(string value) : base(value)
    {
    }

    public static readonly Round1 PreSeed = new("pre_seed");

    public static readonly Round1 Seed = new("seed");

    public static readonly Round1 SeriesA = new("series_a");

    public static readonly Round1 SeriesB = new("series_b");

    public static readonly Round1 SeriesC = new("series_c");

    public static readonly Round1 SeriesD = new("series_d");

    public static readonly Round1 SeriesE = new("series_e");

    public static readonly Round1 SeriesF = new("series_f");

    public static readonly Round1 SeriesG = new("series_g");

    public static readonly Round1 SeriesH = new("series_h");

    public static readonly Round1 Other = new("other");

    public TResult Match<TResult>(Func<TResult> onPreSeed,
        Func<TResult> onSeed,
        Func<TResult> onSeriesA,
        Func<TResult> onSeriesB,
        Func<TResult> onSeriesC,
        Func<TResult> onSeriesD,
        Func<TResult> onSeriesE,
        Func<TResult> onSeriesF,
        Func<TResult> onSeriesG,
        Func<TResult> onSeriesH,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PreSeed => onPreSeed(),
            _ when this == Seed => onSeed(),
            _ when this == SeriesA => onSeriesA(),
            _ when this == SeriesB => onSeriesB(),
            _ when this == SeriesC => onSeriesC(),
            _ when this == SeriesD => onSeriesD(),
            _ when this == SeriesE => onSeriesE(),
            _ when this == SeriesF => onSeriesF(),
            _ when this == SeriesG => onSeriesG(),
            _ when this == SeriesH => onSeriesH(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreSeed,
        Action onSeed,
        Action onSeriesA,
        Action onSeriesB,
        Action onSeriesC,
        Action onSeriesD,
        Action onSeriesE,
        Action onSeriesF,
        Action onSeriesG,
        Action onSeriesH,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == PreSeed) onPreSeed();
        else if (this == Seed) onSeed();
        else if (this == SeriesA) onSeriesA();
        else if (this == SeriesB) onSeriesB();
        else if (this == SeriesC) onSeriesC();
        else if (this == SeriesD) onSeriesD();
        else if (this == SeriesE) onSeriesE();
        else if (this == SeriesF) onSeriesF();
        else if (this == SeriesG) onSeriesG();
        else if (this == SeriesH) onSeriesH();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
