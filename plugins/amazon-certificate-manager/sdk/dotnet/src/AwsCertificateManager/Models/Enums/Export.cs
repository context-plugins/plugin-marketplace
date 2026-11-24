using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// You can opt in to allow the export of your certificates by specifying ENABLED. You cannot update the value of Export after the the certificate is created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Export>))]
public sealed record Export : OpenStringEnum<Export>
{
    private Export(string value) : base(value)
    {
    }

    public static readonly Export Enabled = new("ENABLED");

    public static readonly Export Disabled = new("DISABLED");

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
