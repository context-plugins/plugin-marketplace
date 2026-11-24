using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 AwsStepFunctionsListTagsForResource = new(
        "AWSStepFunctions.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListTagsForResource => onAwsStepFunctionsListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListTagsForResource, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListTagsForResource) onAwsStepFunctionsListTagsForResource();
        else otherwise(Value);
    }
}
