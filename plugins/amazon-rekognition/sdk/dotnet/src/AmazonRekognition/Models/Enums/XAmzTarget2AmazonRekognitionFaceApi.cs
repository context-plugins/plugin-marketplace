using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionFaceApi>))]
public sealed record XAmzTarget2AmazonRekognitionFaceApi : OpenStringEnum<XAmzTarget2AmazonRekognitionFaceApi>
{
    private XAmzTarget2AmazonRekognitionFaceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionFaceApi RekognitionServiceDisassociateFaces = new(
        "RekognitionService.DisassociateFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDisassociateFaces,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDisassociateFaces => onRekognitionServiceDisassociateFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDisassociateFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceDisassociateFaces) onRekognitionServiceDisassociateFaces();
        else otherwise(Value);
    }
}
