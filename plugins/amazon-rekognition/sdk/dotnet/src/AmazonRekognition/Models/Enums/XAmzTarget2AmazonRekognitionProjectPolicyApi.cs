using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionProjectPolicyApi>))]
public sealed record XAmzTarget2AmazonRekognitionProjectPolicyApi : OpenStringEnum<XAmzTarget2AmazonRekognitionProjectPolicyApi>
{
    private XAmzTarget2AmazonRekognitionProjectPolicyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionProjectPolicyApi RekognitionServicePutProjectPolicy = new(
        "RekognitionService.PutProjectPolicy");

    public TResult Match<TResult>(Func<TResult> onRekognitionServicePutProjectPolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServicePutProjectPolicy => onRekognitionServicePutProjectPolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServicePutProjectPolicy, Action<string> otherwise)
    {
        if (this == RekognitionServicePutProjectPolicy) onRekognitionServicePutProjectPolicy();
        else otherwise(Value);
    }
}
