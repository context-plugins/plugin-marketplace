using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SchemaVersion>))]
public sealed record SchemaVersion : OpenStringEnum<SchemaVersion>
{
    private SchemaVersion(string value) : base(value)
    {
    }

    public static readonly SchemaVersion AtifV10 = new("ATIF-v1.0");

    public static readonly SchemaVersion AtifV11 = new("ATIF-v1.1");

    public static readonly SchemaVersion AtifV12 = new("ATIF-v1.2");

    public static readonly SchemaVersion AtifV13 = new("ATIF-v1.3");

    public static readonly SchemaVersion AtifV14 = new("ATIF-v1.4");

    public static readonly SchemaVersion AtifV15 = new("ATIF-v1.5");

    public static readonly SchemaVersion AtifV16 = new("ATIF-v1.6");

    public static readonly SchemaVersion AtifV17 = new("ATIF-v1.7");

    public static readonly SchemaVersion AtifV18 = new("ATIF-v1.8");

    public TResult Match<TResult>(Func<TResult> onAtifV10,
        Func<TResult> onAtifV11,
        Func<TResult> onAtifV12,
        Func<TResult> onAtifV13,
        Func<TResult> onAtifV14,
        Func<TResult> onAtifV15,
        Func<TResult> onAtifV16,
        Func<TResult> onAtifV17,
        Func<TResult> onAtifV18,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AtifV10 => onAtifV10(),
            _ when this == AtifV11 => onAtifV11(),
            _ when this == AtifV12 => onAtifV12(),
            _ when this == AtifV13 => onAtifV13(),
            _ when this == AtifV14 => onAtifV14(),
            _ when this == AtifV15 => onAtifV15(),
            _ when this == AtifV16 => onAtifV16(),
            _ when this == AtifV17 => onAtifV17(),
            _ when this == AtifV18 => onAtifV18(),
            _ => otherwise(Value)
        };

    public void Match(Action onAtifV10,
        Action onAtifV11,
        Action onAtifV12,
        Action onAtifV13,
        Action onAtifV14,
        Action onAtifV15,
        Action onAtifV16,
        Action onAtifV17,
        Action onAtifV18,
        Action<string> otherwise)
    {
        if (this == AtifV10) onAtifV10();
        else if (this == AtifV11) onAtifV11();
        else if (this == AtifV12) onAtifV12();
        else if (this == AtifV13) onAtifV13();
        else if (this == AtifV14) onAtifV14();
        else if (this == AtifV15) onAtifV15();
        else if (this == AtifV16) onAtifV16();
        else if (this == AtifV17) onAtifV17();
        else if (this == AtifV18) onAtifV18();
        else otherwise(Value);
    }
}
