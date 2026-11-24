using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionProjectPolicyApi>))]
public sealed record XAmzTargetAmazonRekognitionProjectPolicyApi : OpenStringEnum<XAmzTargetAmazonRekognitionProjectPolicyApi>
{
    private XAmzTargetAmazonRekognitionProjectPolicyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionProjectPolicyApi RekognitionServiceDeleteProjectPolicy = new(
        "RekognitionService.DeleteProjectPolicy");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteProjectPolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteProjectPolicy => onRekognitionServiceDeleteProjectPolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteProjectPolicy, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteProjectPolicy) onRekognitionServiceDeleteProjectPolicy();
        else otherwise(Value);
    }
}
