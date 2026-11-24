using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionUserApi>))]
public sealed record XAmzTarget1AmazonRekognitionUserApi : OpenStringEnum<XAmzTarget1AmazonRekognitionUserApi>
{
    private XAmzTarget1AmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionUserApi RekognitionServiceDeleteUser = new(
        "RekognitionService.DeleteUser");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteUser, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteUser => onRekognitionServiceDeleteUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteUser, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteUser) onRekognitionServiceDeleteUser();
        else otherwise(Value);
    }
}
