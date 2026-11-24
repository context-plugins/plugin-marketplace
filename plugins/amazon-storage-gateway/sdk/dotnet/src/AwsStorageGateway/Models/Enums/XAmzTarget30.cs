using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget30>))]
public sealed record XAmzTarget30 : OpenStringEnum<XAmzTarget30>
{
    private XAmzTarget30(string value) : base(value)
    {
    }

    public static readonly XAmzTarget30 StorageGateway20130630DescribeSmbFileShares = new(
        "StorageGateway_20130630.DescribeSMBFileShares");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeSmbFileShares,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeSmbFileShares => onStorageGateway20130630DescribeSmbFileShares(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeSmbFileShares, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeSmbFileShares) onStorageGateway20130630DescribeSmbFileShares();
        else otherwise(Value);
    }
}
