using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 CodeBuild20161006StartSandboxConnection = new(
        "CodeBuild_20161006.StartSandboxConnection");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006StartSandboxConnection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006StartSandboxConnection => onCodeBuild20161006StartSandboxConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006StartSandboxConnection, Action<string> otherwise)
    {
        if (this == CodeBuild20161006StartSandboxConnection) onCodeBuild20161006StartSandboxConnection();
        else otherwise(Value);
    }
}
