using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionProjectPolicyApi>))]
public sealed record XAmzTarget1AmazonRekognitionProjectPolicyApi : OpenStringEnum<XAmzTarget1AmazonRekognitionProjectPolicyApi>
{
    private XAmzTarget1AmazonRekognitionProjectPolicyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionProjectPolicyApi RekognitionServiceListProjectPolicies = new(
        "RekognitionService.ListProjectPolicies");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListProjectPolicies,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListProjectPolicies => onRekognitionServiceListProjectPolicies(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListProjectPolicies, Action<string> otherwise)
    {
        if (this == RekognitionServiceListProjectPolicies) onRekognitionServiceListProjectPolicies();
        else otherwise(Value);
    }
}
