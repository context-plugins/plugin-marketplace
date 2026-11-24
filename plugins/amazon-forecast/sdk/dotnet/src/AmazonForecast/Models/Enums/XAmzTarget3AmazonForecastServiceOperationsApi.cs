using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceOperationsApi>))]
public sealed record XAmzTarget3AmazonForecastServiceOperationsApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceOperationsApi>
{
    private XAmzTarget3AmazonForecastServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceOperationsApi AmazonForecastDeleteResourceTree = new(
        "AmazonForecast.DeleteResourceTree");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteResourceTree, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteResourceTree => onAmazonForecastDeleteResourceTree(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteResourceTree, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteResourceTree) onAmazonForecastDeleteResourceTree();
        else otherwise(Value);
    }
}
