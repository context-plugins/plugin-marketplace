using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSource>))]
public sealed record DataSource : OpenStringEnum<DataSource>
{
    private DataSource(string value) : base(value)
    {
    }

    public static readonly DataSource AwsCloudTrail = new("AWS_CLOUD_TRAIL");

    public static readonly DataSource AwsCodeDeploy = new("AWS_CODE_DEPLOY");

    public TResult Match<TResult>(Func<TResult> onAwsCloudTrail,
        Func<TResult> onAwsCodeDeploy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsCloudTrail => onAwsCloudTrail(),
            _ when this == AwsCodeDeploy => onAwsCodeDeploy(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsCloudTrail, Action onAwsCodeDeploy, Action<string> otherwise)
    {
        if (this == AwsCloudTrail) onAwsCloudTrail();
        else if (this == AwsCodeDeploy) onAwsCodeDeploy();
        else otherwise(Value);
    }
}
