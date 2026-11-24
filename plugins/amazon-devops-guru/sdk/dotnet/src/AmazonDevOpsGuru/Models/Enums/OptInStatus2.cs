using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// Specifies if DevOps Guru is enabled for customer managed keys.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptInStatus2>))]
public sealed record OptInStatus2 : OpenStringEnum<OptInStatus2>
{
    private OptInStatus2(string value) : base(value)
    {
    }

    public static readonly OptInStatus2 Enabled = new("ENABLED");

    public static readonly OptInStatus2 Disabled = new("DISABLED");

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
