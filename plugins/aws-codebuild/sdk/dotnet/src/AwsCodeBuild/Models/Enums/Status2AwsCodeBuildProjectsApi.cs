using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled for this build project. DISABLED: S3 build logs are not enabled for this build project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2AwsCodeBuildProjectsApi>))]
public sealed record Status2AwsCodeBuildProjectsApi : OpenStringEnum<Status2AwsCodeBuildProjectsApi>
{
    private Status2AwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly Status2AwsCodeBuildProjectsApi Enabled = new("ENABLED");

    public static readonly Status2AwsCodeBuildProjectsApi Disabled = new("DISABLED");

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
