using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// Effective SSL inspection status for this policy.
/// If SSL inspection is not explicitly configured on this policy, the value is
/// inherited from the Base Policy.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SslInspection>))]
public sealed record SslInspection : OpenStringEnum<SslInspection>
{
    private SslInspection(string value) : base(value)
    {
    }

    public static readonly SslInspection Enabled = new("enabled");

    public static readonly SslInspection Disabled = new("disabled");

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
