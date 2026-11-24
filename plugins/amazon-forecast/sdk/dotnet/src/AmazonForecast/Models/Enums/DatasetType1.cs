using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The dataset type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatasetType1>))]
public sealed record DatasetType1 : OpenStringEnum<DatasetType1>
{
    private DatasetType1(string value) : base(value)
    {
    }

    public static readonly DatasetType1 TargetTimeSeries = new("TARGET_TIME_SERIES");

    public static readonly DatasetType1 RelatedTimeSeries = new("RELATED_TIME_SERIES");

    public static readonly DatasetType1 ItemMetadata = new("ITEM_METADATA");

    public TResult Match<TResult>(Func<TResult> onTargetTimeSeries,
        Func<TResult> onRelatedTimeSeries,
        Func<TResult> onItemMetadata,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TargetTimeSeries => onTargetTimeSeries(),
            _ when this == RelatedTimeSeries => onRelatedTimeSeries(),
            _ when this == ItemMetadata => onItemMetadata(),
            _ => otherwise(Value)
        };

    public void Match(Action onTargetTimeSeries,
        Action onRelatedTimeSeries,
        Action onItemMetadata,
        Action<string> otherwise)
    {
        if (this == TargetTimeSeries) onTargetTimeSeries();
        else if (this == RelatedTimeSeries) onRelatedTimeSeries();
        else if (this == ItemMetadata) onItemMetadata();
        else otherwise(Value);
    }
}
