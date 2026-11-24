using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget73>))]
public sealed record XAmzTarget73 : OpenStringEnum<XAmzTarget73>
{
    private XAmzTarget73(string value) : base(value)
    {
    }

    public static readonly XAmzTarget73 StorageGateway20130630DescribeSmbSettings = new(
        "StorageGateway_20130630.DescribeSMBSettings");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeSmbSettings,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeSmbSettings => onStorageGateway20130630DescribeSmbSettings(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeSmbSettings, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeSmbSettings) onStorageGateway20130630DescribeSmbSettings();
        else otherwise(Value);
    }
}
