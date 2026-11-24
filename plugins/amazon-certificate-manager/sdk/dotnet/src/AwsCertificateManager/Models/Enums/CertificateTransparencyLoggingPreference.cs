using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CertificateTransparencyLoggingPreference>))]
public sealed record CertificateTransparencyLoggingPreference : OpenStringEnum<CertificateTransparencyLoggingPreference>
{
    private CertificateTransparencyLoggingPreference(string value) : base(value)
    {
    }

    public static readonly CertificateTransparencyLoggingPreference Enabled = new("ENABLED");

    public static readonly CertificateTransparencyLoggingPreference Disabled = new("DISABLED");

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
