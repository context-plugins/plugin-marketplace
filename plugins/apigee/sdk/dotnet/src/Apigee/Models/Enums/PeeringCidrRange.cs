using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support <c>SLASH_16</c> to <c>SLASH_20</c> and defaults to <c>SLASH_16</c>. Evaluation organizations support only <c>SLASH_23</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PeeringCidrRange>))]
public sealed record PeeringCidrRange : OpenStringEnum<PeeringCidrRange>
{
    private PeeringCidrRange(string value) : base(value)
    {
    }

    public static readonly PeeringCidrRange CidrRangeUnspecified = new("CIDR_RANGE_UNSPECIFIED");

    public static readonly PeeringCidrRange Slash16 = new("SLASH_16");

    public static readonly PeeringCidrRange Slash17 = new("SLASH_17");

    public static readonly PeeringCidrRange Slash18 = new("SLASH_18");

    public static readonly PeeringCidrRange Slash19 = new("SLASH_19");

    public static readonly PeeringCidrRange Slash20 = new("SLASH_20");

    public static readonly PeeringCidrRange Slash22 = new("SLASH_22");

    public static readonly PeeringCidrRange Slash23 = new("SLASH_23");

    public TResult Match<TResult>(Func<TResult> onCidrRangeUnspecified,
        Func<TResult> onSlash16,
        Func<TResult> onSlash17,
        Func<TResult> onSlash18,
        Func<TResult> onSlash19,
        Func<TResult> onSlash20,
        Func<TResult> onSlash22,
        Func<TResult> onSlash23,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CidrRangeUnspecified => onCidrRangeUnspecified(),
            _ when this == Slash16 => onSlash16(),
            _ when this == Slash17 => onSlash17(),
            _ when this == Slash18 => onSlash18(),
            _ when this == Slash19 => onSlash19(),
            _ when this == Slash20 => onSlash20(),
            _ when this == Slash22 => onSlash22(),
            _ when this == Slash23 => onSlash23(),
            _ => otherwise(Value)
        };

    public void Match(Action onCidrRangeUnspecified,
        Action onSlash16,
        Action onSlash17,
        Action onSlash18,
        Action onSlash19,
        Action onSlash20,
        Action onSlash22,
        Action onSlash23,
        Action<string> otherwise)
    {
        if (this == CidrRangeUnspecified) onCidrRangeUnspecified();
        else if (this == Slash16) onSlash16();
        else if (this == Slash17) onSlash17();
        else if (this == Slash18) onSlash18();
        else if (this == Slash19) onSlash19();
        else if (this == Slash20) onSlash20();
        else if (this == Slash22) onSlash22();
        else if (this == Slash23) onSlash23();
        else otherwise(Value);
    }
}
