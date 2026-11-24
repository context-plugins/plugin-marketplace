using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Direction>))]
public sealed record Direction : OpenStringEnum<Direction>
{
    private Direction(string value) : base(value)
    {
    }

    public static readonly Direction Downstream = new("downstream");

    public static readonly Direction Upstream = new("upstream");

    public static readonly Direction Both = new("both");

    public TResult Match<TResult>(Func<TResult> onDownstream,
        Func<TResult> onUpstream,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Downstream => onDownstream(),
            _ when this == Upstream => onUpstream(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onDownstream, Action onUpstream, Action onBoth, Action<string> otherwise)
    {
        if (this == Downstream) onDownstream();
        else if (this == Upstream) onUpstream();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
