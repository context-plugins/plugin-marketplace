using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Institution tier identifier
/// 1 TierOne  TierOne tier identifier for tier1 institution
/// 2 TierTwo  TierTwo tier identifier for tier2 institution
/// 3 TierThree  TierThree tier identifier for tier3 institution
/// 4 TierFour  TierFour tier identifier for tier4 institution
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TierPlatformConnectorsApi>))]
public sealed record TierPlatformConnectorsApi : OpenStringEnum<TierPlatformConnectorsApi>
{
    private TierPlatformConnectorsApi(string value) : base(value)
    {
    }

    public static readonly TierPlatformConnectorsApi _1 = new("1");

    public static readonly TierPlatformConnectorsApi _2 = new("2");

    public static readonly TierPlatformConnectorsApi _3 = new("3");

    public static readonly TierPlatformConnectorsApi _4 = new("4");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> on_2,
        Func<TResult> on_3,
        Func<TResult> on_4,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == _2 => on_2(),
            _ when this == _3 => on_3(),
            _ when this == _4 => on_4(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action on_2, Action on_3, Action on_4, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == _2) on_2();
        else if (this == _3) on_3();
        else if (this == _4) on_4();
        else otherwise(Value);
    }
}
