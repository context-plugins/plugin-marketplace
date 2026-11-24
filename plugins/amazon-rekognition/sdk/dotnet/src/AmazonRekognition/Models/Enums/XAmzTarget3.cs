using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 RekognitionServiceListFaces = new("RekognitionService.ListFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListFaces => onRekognitionServiceListFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceListFaces) onRekognitionServiceListFaces();
        else otherwise(Value);
    }
}
