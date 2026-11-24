using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The configured destination of trace segments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Destination2>))]
public sealed record Destination2 : OpenStringEnum<Destination2>
{
    private Destination2(string value) : base(value)
    {
    }

    public static readonly Destination2 XRay = new("XRay");

    public static readonly Destination2 CloudWatchLogs = new("CloudWatchLogs");

    public TResult Match<TResult>(Func<TResult> onXRay,
        Func<TResult> onCloudWatchLogs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == XRay => onXRay(),
            _ when this == CloudWatchLogs => onCloudWatchLogs(),
            _ => otherwise(Value)
        };

    public void Match(Action onXRay, Action onCloudWatchLogs, Action<string> otherwise)
    {
        if (this == XRay) onXRay();
        else if (this == CloudWatchLogs) onCloudWatchLogs();
        else otherwise(Value);
    }
}
