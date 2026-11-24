using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionFacialAnalysisApi>))]
public sealed record XAmzTargetAmazonRekognitionFacialAnalysisApi : OpenStringEnum<XAmzTargetAmazonRekognitionFacialAnalysisApi>
{
    private XAmzTargetAmazonRekognitionFacialAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionFacialAnalysisApi RekognitionServiceCompareFaces = new(
        "RekognitionService.CompareFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCompareFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCompareFaces => onRekognitionServiceCompareFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCompareFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceCompareFaces) onRekognitionServiceCompareFaces();
        else otherwise(Value);
    }
}
