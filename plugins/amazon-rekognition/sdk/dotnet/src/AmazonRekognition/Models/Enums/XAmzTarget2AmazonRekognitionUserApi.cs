using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionUserApi>))]
public sealed record XAmzTarget2AmazonRekognitionUserApi : OpenStringEnum<XAmzTarget2AmazonRekognitionUserApi>
{
    private XAmzTarget2AmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionUserApi RekognitionServiceListUsers = new(
        "RekognitionService.ListUsers");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListUsers, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListUsers => onRekognitionServiceListUsers(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListUsers, Action<string> otherwise)
    {
        if (this == RekognitionServiceListUsers) onRekognitionServiceListUsers();
        else otherwise(Value);
    }
}
