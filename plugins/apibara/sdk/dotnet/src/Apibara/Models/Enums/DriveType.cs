using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DriveType>))]
public sealed record DriveType : OpenStringEnum<DriveType>
{
    private DriveType(string value) : base(value)
    {
    }

    public static readonly DriveType Awd = new("AWD");

    public static readonly DriveType Fwd = new("FWD");

    public static readonly DriveType Rwd = new("RWD");

    public TResult Match<TResult>(Func<TResult> onAwd,
        Func<TResult> onFwd,
        Func<TResult> onRwd,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Awd => onAwd(),
            _ when this == Fwd => onFwd(),
            _ when this == Rwd => onRwd(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwd, Action onFwd, Action onRwd, Action<string> otherwise)
    {
        if (this == Awd) onAwd();
        else if (this == Fwd) onFwd();
        else if (this == Rwd) onRwd();
        else otherwise(Value);
    }
}
