using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 CodeBuild20161006GetResourcePolicy = new(
        "CodeBuild_20161006.GetResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006GetResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006GetResourcePolicy => onCodeBuild20161006GetResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006GetResourcePolicy, Action<string> otherwise)
    {
        if (this == CodeBuild20161006GetResourcePolicy) onCodeBuild20161006GetResourcePolicy();
        else otherwise(Value);
    }
}
