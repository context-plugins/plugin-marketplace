using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptInStatus>))]
public sealed record OptInStatus : OpenStringEnum<OptInStatus>
{
    private OptInStatus(string value) : base(value)
    {
    }

    public static readonly OptInStatus Enabled = new("ENABLED");

    public static readonly OptInStatus Disabled = new("DISABLED");

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
