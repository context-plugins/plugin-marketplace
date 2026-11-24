using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 AmazonForecastListWhatIfAnalyses = new("AmazonForecast.ListWhatIfAnalyses");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListWhatIfAnalyses, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListWhatIfAnalyses => onAmazonForecastListWhatIfAnalyses(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListWhatIfAnalyses, Action<string> otherwise)
    {
        if (this == AmazonForecastListWhatIfAnalyses) onAmazonForecastListWhatIfAnalyses();
        else otherwise(Value);
    }
}
