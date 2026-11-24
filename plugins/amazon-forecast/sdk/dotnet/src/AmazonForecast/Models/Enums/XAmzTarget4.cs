using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 AmazonForecastUpdateDatasetGroup = new("AmazonForecast.UpdateDatasetGroup");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastUpdateDatasetGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastUpdateDatasetGroup => onAmazonForecastUpdateDatasetGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastUpdateDatasetGroup, Action<string> otherwise)
    {
        if (this == AmazonForecastUpdateDatasetGroup) onAmazonForecastUpdateDatasetGroup();
        else otherwise(Value);
    }
}
