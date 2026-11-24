using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The destination of the trace segments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Destination1>))]
public sealed record Destination1 : OpenStringEnum<Destination1>
{
    private Destination1(string value) : base(value)
    {
    }

    public static readonly Destination1 XRay = new("XRay");

    public static readonly Destination1 CloudWatchLogs = new("CloudWatchLogs");

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
