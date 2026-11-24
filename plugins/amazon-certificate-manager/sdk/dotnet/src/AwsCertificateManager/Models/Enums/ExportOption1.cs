using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by certificate export option.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportOption1>))]
public sealed record ExportOption1 : OpenStringEnum<ExportOption1>
{
    private ExportOption1(string value) : base(value)
    {
    }

    public static readonly ExportOption1 Enabled = new("ENABLED");

    public static readonly ExportOption1 Disabled = new("DISABLED");

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
