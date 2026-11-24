using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED: CloudWatch Logs are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for this build project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AwsCodeBuildProjectsApi>))]
public sealed record Status1AwsCodeBuildProjectsApi : OpenStringEnum<Status1AwsCodeBuildProjectsApi>
{
    private Status1AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly Status1AwsCodeBuildProjectsApi Enabled = new("ENABLED");

    public static readonly Status1AwsCodeBuildProjectsApi Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onEnabled, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnabled, Action onDisabled, Action<string> otherwise)
    {
        if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
