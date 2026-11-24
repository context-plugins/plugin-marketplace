using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 AmazonForecastDescribeDatasetGroup = new("AmazonForecast.DescribeDatasetGroup");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeDatasetGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeDatasetGroup => onAmazonForecastDescribeDatasetGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeDatasetGroup, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeDatasetGroup) onAmazonForecastDescribeDatasetGroup();
        else otherwise(Value);
    }
}
