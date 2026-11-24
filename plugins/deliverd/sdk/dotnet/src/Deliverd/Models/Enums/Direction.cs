using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Direction>))]
public sealed record Direction : OpenStringEnum<Direction>
{
    private Direction(string value) : base(value)
    {
    }

    public static readonly Direction Loosened = new("loosened");

    public static readonly Direction Tightened = new("tightened");

    public TResult Match<TResult>(Func<TResult> onLoosened,
        Func<TResult> onTightened,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Loosened => onLoosened(),
            _ when this == Tightened => onTightened(),
            _ => otherwise(Value)
        };

    public void Match(Action onLoosened, Action onTightened, Action<string> otherwise)
    {
        if (this == Loosened) onLoosened();
        else if (this == Tightened) onTightened();
        else otherwise(Value);
    }
}
