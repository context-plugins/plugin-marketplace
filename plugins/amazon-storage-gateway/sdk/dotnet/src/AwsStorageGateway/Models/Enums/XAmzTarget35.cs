using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget35>))]
public sealed record XAmzTarget35 : OpenStringEnum<XAmzTarget35>
{
    private XAmzTarget35(string value) : base(value)
    {
    }

    public static readonly XAmzTarget35 StorageGateway20130630DescribeStorediScsiVolumes = new(
        "StorageGateway_20130630.DescribeStorediSCSIVolumes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeStorediScsiVolumes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeStorediScsiVolumes => onStorageGateway20130630DescribeStorediScsiVolumes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeStorediScsiVolumes, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeStorediScsiVolumes) onStorageGateway20130630DescribeStorediScsiVolumes();
        else otherwise(Value);
    }
}
