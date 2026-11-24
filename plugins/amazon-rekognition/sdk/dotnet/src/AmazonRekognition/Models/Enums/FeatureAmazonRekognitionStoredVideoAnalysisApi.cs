using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FeatureAmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record FeatureAmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<FeatureAmazonRekognitionStoredVideoAnalysisApi>
{
    private FeatureAmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly FeatureAmazonRekognitionStoredVideoAnalysisApi GeneralLabels = new("GENERAL_LABELS");

    public TResult Match<TResult>(Func<TResult> onGeneralLabels, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GeneralLabels => onGeneralLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneralLabels, Action<string> otherwise)
    {
        if (this == GeneralLabels) onGeneralLabels();
        else otherwise(Value);
    }
}
