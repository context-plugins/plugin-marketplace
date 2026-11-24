using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionUserApi>))]
public sealed record XAmzTargetAmazonRekognitionUserApi : OpenStringEnum<XAmzTargetAmazonRekognitionUserApi>
{
    private XAmzTargetAmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionUserApi RekognitionServiceCreateUser = new(
        "RekognitionService.CreateUser");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateUser, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateUser => onRekognitionServiceCreateUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateUser, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateUser) onRekognitionServiceCreateUser();
        else otherwise(Value);
    }
}
