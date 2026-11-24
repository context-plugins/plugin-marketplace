using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionFaceLivenessApi>))]
public sealed record XAmzTarget1AmazonRekognitionFaceLivenessApi : OpenStringEnum<XAmzTarget1AmazonRekognitionFaceLivenessApi>
{
    private XAmzTarget1AmazonRekognitionFaceLivenessApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionFaceLivenessApi RekognitionServiceGetFaceLivenessSessionResults = new(
        "RekognitionService.GetFaceLivenessSessionResults");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetFaceLivenessSessionResults,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                RekognitionServiceGetFaceLivenessSessionResults => onRekognitionServiceGetFaceLivenessSessionResults(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetFaceLivenessSessionResults, Action<string> otherwise)
    {
        if (this ==
            RekognitionServiceGetFaceLivenessSessionResults) onRekognitionServiceGetFaceLivenessSessionResults();
        else otherwise(Value);
    }
}
