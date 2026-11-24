using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 CodeBuild20161006StopSandbox = new("CodeBuild_20161006.StopSandbox");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StopSandbox, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StopSandbox => onCodeBuild20161006StopSandbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StopSandbox, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StopSandbox) onCodeBuild20161006StopSandbox();
        else otherwise(Value);
    }
}
