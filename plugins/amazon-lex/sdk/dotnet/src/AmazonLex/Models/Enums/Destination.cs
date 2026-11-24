using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The destination where logs are delivered.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Destination>))]
public sealed record Destination : OpenStringEnum<Destination>
{
    private Destination(string value) : base(value)
    {
    }

    public static readonly Destination CloudwatchLogs = new("CLOUDWATCH_LOGS");

    public static readonly Destination S3 = new("S3");

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
