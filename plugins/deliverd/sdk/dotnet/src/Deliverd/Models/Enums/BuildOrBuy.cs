using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BuildOrBuy>))]
public sealed record BuildOrBuy : OpenStringEnum<BuildOrBuy>
{
    private BuildOrBuy(string value) : base(value)
    {
    }

    public static readonly BuildOrBuy Build = new("build");

    public static readonly BuildOrBuy Buy = new("buy");

    public static readonly BuildOrBuy Hybrid = new("hybrid");

    public TResult Match<TResult>(Func<TResult> onBuild,
        Func<TResult> onBuy,
        Func<TResult> onHybrid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Build => onBuild(),
            _ when this == Buy => onBuy(),
            _ when this == Hybrid => onHybrid(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuild, Action onBuy, Action onHybrid, Action<string> otherwise)
    {
        if (this == Build) onBuild();
        else if (this == Buy) onBuy();
        else if (this == Hybrid) onHybrid();
        else otherwise(Value);
    }
}
