using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionFaceApi>))]
public sealed record XAmzTargetAmazonRekognitionFaceApi : OpenStringEnum<XAmzTargetAmazonRekognitionFaceApi>
{
    private XAmzTargetAmazonRekognitionFaceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionFaceApi RekognitionServiceAssociateFaces = new(
        "RekognitionService.AssociateFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceAssociateFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceAssociateFaces => onRekognitionServiceAssociateFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceAssociateFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceAssociateFaces) onRekognitionServiceAssociateFaces();
        else otherwise(Value);
    }
}
