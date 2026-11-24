using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceWhatIfForecastApi>))]
public sealed record XAmzTarget2AmazonForecastServiceWhatIfForecastApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceWhatIfForecastApi>
{
    private XAmzTarget2AmazonForecastServiceWhatIfForecastApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceWhatIfForecastApi AmazonForecastDescribeWhatIfForecast = new(
        "AmazonForecast.DescribeWhatIfForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeWhatIfForecast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeWhatIfForecast => onAmazonForecastDescribeWhatIfForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeWhatIfForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeWhatIfForecast) onAmazonForecastDescribeWhatIfForecast();
        else otherwise(Value);
    }
}
