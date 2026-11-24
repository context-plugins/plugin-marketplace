using System;
using System.Text.Json.Serialization;
using Applike.Core.Enum;

namespace Applike.Models.Enums;

/// <summary>
/// The type of campaign you're running. Retargeting campaigns require special set up on partner side to target only existing users.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequiredCampaignType>))]
public sealed record RequiredCampaignType : OpenStringEnum<RequiredCampaignType>
{
    private RequiredCampaignType(string value) : base(value)
    {
    }

    public static readonly RequiredCampaignType Acquisition = new("acquisition");

    public static readonly RequiredCampaignType Retargeting = new("retargeting");

    public static readonly RequiredCampaignType Ctv = new("ctv");

    public TResult Match<TResult>(Func<TResult> onAcquisition,
        Func<TResult> onRetargeting,
        Func<TResult> onCtv,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Acquisition => onAcquisition(),
            _ when this == Retargeting => onRetargeting(),
            _ when this == Ctv => onCtv(),
            _ => otherwise(Value)
        };

    public void Match(Action onAcquisition, Action onRetargeting, Action onCtv, Action<string> otherwise)
    {
        if (this == Acquisition) onAcquisition();
        else if (this == Retargeting) onRetargeting();
        else if (this == Ctv) onCtv();
        else otherwise(Value);
    }
}
