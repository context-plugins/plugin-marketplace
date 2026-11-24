using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Specify ENABLED or DISABLED to identify certificates that can be exported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportOption3>))]
public sealed record ExportOption3 : OpenStringEnum<ExportOption3>
{
    private ExportOption3(string value) : base(value)
    {
    }

    public static readonly ExportOption3 Enabled = new("ENABLED");

    public static readonly ExportOption3 Disabled = new("DISABLED");

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
