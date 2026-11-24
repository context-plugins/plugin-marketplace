using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget CodeBuild20161006StartSandbox = new("CodeBuild_20161006.StartSandbox");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StartSandbox, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StartSandbox => onCodeBuild20161006StartSandbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StartSandbox, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StartSandbox) onCodeBuild20161006StartSandbox();
        else otherwise(Value);
    }
}
