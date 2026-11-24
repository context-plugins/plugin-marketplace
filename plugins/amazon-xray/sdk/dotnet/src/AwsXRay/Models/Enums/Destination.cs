using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// Retrieves the current destination.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Destination>))]
public sealed record Destination : OpenStringEnum<Destination>
{
    private Destination(string value) : base(value)
    {
    }

    public static readonly Destination XRay = new("XRay");

    public static readonly Destination CloudWatchLogs = new("CloudWatchLogs");

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
