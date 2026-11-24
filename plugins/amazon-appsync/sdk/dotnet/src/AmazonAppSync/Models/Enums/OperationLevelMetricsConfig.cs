using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperationLevelMetricsConfig>))]
public sealed record OperationLevelMetricsConfig : OpenStringEnum<OperationLevelMetricsConfig>
{
    private OperationLevelMetricsConfig(string value) : base(value)
    {
    }

    public static readonly OperationLevelMetricsConfig Enabled = new("ENABLED");

    public static readonly OperationLevelMetricsConfig Disabled = new("DISABLED");

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
