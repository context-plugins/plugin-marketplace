using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonRekognitionUserApi>))]
public sealed record XAmzTarget3AmazonRekognitionUserApi : OpenStringEnum<XAmzTarget3AmazonRekognitionUserApi>
{
    private XAmzTarget3AmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonRekognitionUserApi RekognitionServiceSearchUsers = new(
        "RekognitionService.SearchUsers");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceSearchUsers, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceSearchUsers => onRekognitionServiceSearchUsers(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceSearchUsers, Action<string> otherwise)
    {
        if (this == RekognitionServiceSearchUsers) onRekognitionServiceSearchUsers();
        else otherwise(Value);
    }
}
