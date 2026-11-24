using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget26>))]
public sealed record XAmzTarget26 : OpenStringEnum<XAmzTarget26>
{
    private XAmzTarget26(string value) : base(value)
    {
    }

    public static readonly XAmzTarget26 StorageGateway20130630DescribeCachediScsiVolumes = new(
        "StorageGateway_20130630.DescribeCachediSCSIVolumes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeCachediScsiVolumes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeCachediScsiVolumes => onStorageGateway20130630DescribeCachediScsiVolumes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeCachediScsiVolumes, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeCachediScsiVolumes) onStorageGateway20130630DescribeCachediScsiVolumes();
        else otherwise(Value);
    }
}
