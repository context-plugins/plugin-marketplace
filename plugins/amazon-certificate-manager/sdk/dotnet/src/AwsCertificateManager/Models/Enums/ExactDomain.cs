using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Whether validation applies to the exact domain.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExactDomain>))]
public sealed record ExactDomain : OpenStringEnum<ExactDomain>
{
    private ExactDomain(string value) : base(value)
    {
    }

    public static readonly ExactDomain Enabled = new("ENABLED");

    public static readonly ExactDomain Disabled = new("DISABLED");

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
