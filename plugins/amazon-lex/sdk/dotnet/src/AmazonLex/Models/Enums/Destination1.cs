using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Destination1>))]
public sealed record Destination1 : OpenStringEnum<Destination1>
{
    private Destination1(string value) : base(value)
    {
    }

    public static readonly Destination1 CloudwatchLogs = new("CLOUDWATCH_LOGS");

    public static readonly Destination1 S3 = new("S3");

    public TResult Match<TResult>(Func<TResult> onCloudwatchLogs,
        Func<TResult> onS3,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CloudwatchLogs => onCloudwatchLogs(),
            _ when this == S3 => onS3(),
            _ => otherwise(Value)
        };

    public void Match(Action onCloudwatchLogs, Action onS3, Action<string> otherwise)
    {
        if (this == CloudwatchLogs) onCloudwatchLogs();
        else if (this == S3) onS3();
        else otherwise(Value);
    }
}
