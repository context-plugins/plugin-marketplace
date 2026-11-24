using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptInStatus1>))]
public sealed record OptInStatus1 : OpenStringEnum<OptInStatus1>
{
    private OptInStatus1(string value) : base(value)
    {
    }

    public static readonly OptInStatus1 Enabled = new("ENABLED");

    public static readonly OptInStatus1 Disabled = new("DISABLED");

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
