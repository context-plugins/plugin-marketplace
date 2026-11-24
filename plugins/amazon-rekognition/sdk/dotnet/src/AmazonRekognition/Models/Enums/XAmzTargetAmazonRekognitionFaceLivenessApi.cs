using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionFaceLivenessApi>))]
public sealed record XAmzTargetAmazonRekognitionFaceLivenessApi : OpenStringEnum<XAmzTargetAmazonRekognitionFaceLivenessApi>
{
    private XAmzTargetAmazonRekognitionFaceLivenessApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionFaceLivenessApi RekognitionServiceCreateFaceLivenessSession = new(
        "RekognitionService.CreateFaceLivenessSession");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateFaceLivenessSession,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                RekognitionServiceCreateFaceLivenessSession => onRekognitionServiceCreateFaceLivenessSession(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateFaceLivenessSession, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateFaceLivenessSession) onRekognitionServiceCreateFaceLivenessSession();
        else otherwise(Value);
    }
}
