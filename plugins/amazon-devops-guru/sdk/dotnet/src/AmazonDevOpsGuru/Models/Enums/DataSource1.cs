using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSource1>))]
public sealed record DataSource1 : OpenStringEnum<DataSource1>
{
    private DataSource1(string value) : base(value)
    {
    }

    public static readonly DataSource1 AwsCloudTrail = new("AWS_CLOUD_TRAIL");

    public static readonly DataSource1 AwsCodeDeploy = new("AWS_CODE_DEPLOY");

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
