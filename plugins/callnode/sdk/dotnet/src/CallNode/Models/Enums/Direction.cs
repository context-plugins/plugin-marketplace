using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Direction>))]
public sealed record Direction : OpenStringEnum<Direction>
{
    private Direction(string value) : base(value)
    {
    }

    public static readonly Direction Inbound = new("inbound");

    public static readonly Direction Outbound = new("outbound");

    public TResult Match<TResult>(Func<TResult> onInbound, Func<TResult> onOutbound, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inbound => onInbound(),
            _ when this == Outbound => onOutbound(),
            _ => otherwise(Value)
        };

    public void Match(Action onInbound, Action onOutbound, Action<string> otherwise)
    {
        if (this == Inbound) onInbound();
        else if (this == Outbound) onOutbound();
        else otherwise(Value);
    }
}
