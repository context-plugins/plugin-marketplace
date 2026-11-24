using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 RekognitionServiceSearchFaces = new("RekognitionService.SearchFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceSearchFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceSearchFaces => onRekognitionServiceSearchFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceSearchFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceSearchFaces) onRekognitionServiceSearchFaces();
        else otherwise(Value);
    }
}
