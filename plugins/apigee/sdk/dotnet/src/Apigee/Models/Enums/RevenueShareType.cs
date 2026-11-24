using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Method used to calculate the revenue that is shared with developers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RevenueShareType>))]
public sealed record RevenueShareType : OpenStringEnum<RevenueShareType>
{
    private RevenueShareType(string value) : base(value)
    {
    }

    public static readonly RevenueShareType RevenueShareTypeUnspecified = new("REVENUE_SHARE_TYPE_UNSPECIFIED");

    public static readonly RevenueShareType Fixed = new("FIXED");

    public static readonly RevenueShareType VolumeBanded = new("VOLUME_BANDED");

    public TResult Match<TResult>(Func<TResult> onRevenueShareTypeUnspecified,
        Func<TResult> onFixed,
        Func<TResult> onVolumeBanded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RevenueShareTypeUnspecified => onRevenueShareTypeUnspecified(),
            _ when this == Fixed => onFixed(),
            _ when this == VolumeBanded => onVolumeBanded(),
            _ => otherwise(Value)
        };

    public void Match(Action onRevenueShareTypeUnspecified,
        Action onFixed,
        Action onVolumeBanded,
        Action<string> otherwise)
    {
        if (this == RevenueShareTypeUnspecified) onRevenueShareTypeUnspecified();
        else if (this == Fixed) onFixed();
        else if (this == VolumeBanded) onVolumeBanded();
        else otherwise(Value);
    }
}
