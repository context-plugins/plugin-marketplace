using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget AmazonForecastCreateDatasetGroup = new("AmazonForecast.CreateDatasetGroup");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateDatasetGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateDatasetGroup => onAmazonForecastCreateDatasetGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateDatasetGroup, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateDatasetGroup) onAmazonForecastCreateDatasetGroup();
        else otherwise(Value);
    }
}
