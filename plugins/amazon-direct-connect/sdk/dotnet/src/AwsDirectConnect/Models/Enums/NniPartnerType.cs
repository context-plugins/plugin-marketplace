using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The type of network-to-network interface (NNI) partner. The partner type will be one of the following: V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections. V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections. nonPartner: The customer is not a partner.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NniPartnerType>))]
public sealed record NniPartnerType : OpenStringEnum<NniPartnerType>
{
    private NniPartnerType(string value) : base(value)
    {
    }

    public static readonly NniPartnerType V1 = new("v1");

    public static readonly NniPartnerType V2 = new("v2");

    public static readonly NniPartnerType NonPartner = new("nonPartner");

    public TResult Match<TResult>(Func<TResult> onV1,
        Func<TResult> onV2,
        Func<TResult> onNonPartner,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == V1 => onV1(),
            _ when this == V2 => onV2(),
            _ when this == NonPartner => onNonPartner(),
            _ => otherwise(Value)
        };

    public void Match(Action onV1, Action onV2, Action onNonPartner, Action<string> otherwise)
    {
        if (this == V1) onV1();
        else if (this == V2) onV2();
        else if (this == NonPartner) onNonPartner();
        else otherwise(Value);
    }
}
