using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Subtype>))]
public sealed record Subtype : OpenStringEnum<Subtype>
{
    private Subtype(string value) : base(value)
    {
    }

    public static readonly Subtype Physical = new("physical");

    public static readonly Subtype Digital = new("digital");

    public static readonly Subtype Hybrid = new("hybrid");

    public TResult Match<TResult>(Func<TResult> onPhysical,
        Func<TResult> onDigital,
        Func<TResult> onHybrid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Physical => onPhysical(),
            _ when this == Digital => onDigital(),
            _ when this == Hybrid => onHybrid(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhysical, Action onDigital, Action onHybrid, Action<string> otherwise)
    {
        if (this == Physical) onPhysical();
        else if (this == Digital) onDigital();
        else if (this == Hybrid) onHybrid();
        else otherwise(Value);
    }
}
