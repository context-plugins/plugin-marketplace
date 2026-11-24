using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The command type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsCodeBuildCommandExecutionApi>))]
public sealed record TypeAwsCodeBuildCommandExecutionApi : OpenStringEnum<TypeAwsCodeBuildCommandExecutionApi>
{
    private TypeAwsCodeBuildCommandExecutionApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsCodeBuildCommandExecutionApi Shell = new("SHELL");

    public TResult Match<TResult>(Func<TResult> onShell, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Shell => onShell(),
            _ => otherwise(Value)
        };

    public void Match(Action onShell, Action<string> otherwise)
    {
        if (this == Shell) onShell();
        else otherwise(Value);
    }
}
