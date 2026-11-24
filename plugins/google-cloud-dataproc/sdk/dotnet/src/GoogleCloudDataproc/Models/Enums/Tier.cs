using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The tier of the service.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Tier>))]
public sealed record Tier : OpenStringEnum<Tier>
{
    private Tier(string value) : base(value)
    {
    }

    public static readonly Tier TierUnspecified = new("TIER_UNSPECIFIED");

    public static readonly Tier Developer = new("DEVELOPER");

    public static readonly Tier Enterprise = new("ENTERPRISE");

    public TResult Match<TResult>(Func<TResult> onTierUnspecified,
        Func<TResult> onDeveloper,
        Func<TResult> onEnterprise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TierUnspecified => onTierUnspecified(),
            _ when this == Developer => onDeveloper(),
            _ when this == Enterprise => onEnterprise(),
            _ => otherwise(Value)
        };

    public void Match(Action onTierUnspecified, Action onDeveloper, Action onEnterprise, Action<string> otherwise)
    {
        if (this == TierUnspecified) onTierUnspecified();
        else if (this == Developer) onDeveloper();
        else if (this == Enterprise) onEnterprise();
        else otherwise(Value);
    }
}
