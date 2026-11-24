using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 RekognitionServiceGetCelebrityInfo = new("RekognitionService.GetCelebrityInfo");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetCelebrityInfo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetCelebrityInfo => onRekognitionServiceGetCelebrityInfo(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetCelebrityInfo, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetCelebrityInfo) onRekognitionServiceGetCelebrityInfo();
        else otherwise(Value);
    }
}
