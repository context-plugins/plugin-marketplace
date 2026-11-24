using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 RekognitionServiceDeleteCollection = new("RekognitionService.DeleteCollection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteCollection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteCollection => onRekognitionServiceDeleteCollection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteCollection, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteCollection) onRekognitionServiceDeleteCollection();
        else otherwise(Value);
    }
}
