using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// To create an Explainability for all time points in your forecast horizon, use ALL. To create an Explainability for specific time points in your forecast horizon, use SPECIFIC. Specify time points with the StartDateTime and EndDateTime parameters within the CreateExplainability operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimePointGranularity>))]
public sealed record TimePointGranularity : OpenStringEnum<TimePointGranularity>
{
    private TimePointGranularity(string value) : base(value)
    {
    }

    public static readonly TimePointGranularity All = new("ALL");

    public static readonly TimePointGranularity Specific = new("SPECIFIC");

    public TResult Match<TResult>(Func<TResult> onAll, Func<TResult> onSpecific, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Specific => onSpecific(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onSpecific, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Specific) onSpecific();
        else otherwise(Value);
    }
}
