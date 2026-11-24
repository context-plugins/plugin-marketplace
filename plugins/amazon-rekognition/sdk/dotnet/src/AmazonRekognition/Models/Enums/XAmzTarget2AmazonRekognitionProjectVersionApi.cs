using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionProjectVersionApi>))]
public sealed record XAmzTarget2AmazonRekognitionProjectVersionApi : OpenStringEnum<XAmzTarget2AmazonRekognitionProjectVersionApi>
{
    private XAmzTarget2AmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionProjectVersionApi RekognitionServiceDescribeProjectVersions = new(
        "RekognitionService.DescribeProjectVersions");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDescribeProjectVersions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDescribeProjectVersions => onRekognitionServiceDescribeProjectVersions(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDescribeProjectVersions, Action<string> otherwise)
    {
        if (this == RekognitionServiceDescribeProjectVersions) onRekognitionServiceDescribeProjectVersions();
        else otherwise(Value);
    }
}
