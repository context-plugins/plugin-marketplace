using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Indicates whether the certificate can be exported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportOption>))]
public sealed record ExportOption : OpenStringEnum<ExportOption>
{
    private ExportOption(string value) : base(value)
    {
    }

    public static readonly ExportOption Enabled = new("ENABLED");

    public static readonly ExportOption Disabled = new("DISABLED");

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
