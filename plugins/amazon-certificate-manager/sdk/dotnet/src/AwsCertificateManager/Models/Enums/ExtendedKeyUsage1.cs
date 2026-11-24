using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by extended key usage.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExtendedKeyUsage1>))]
public sealed record ExtendedKeyUsage1 : OpenStringEnum<ExtendedKeyUsage1>
{
    private ExtendedKeyUsage1(string value) : base(value)
    {
    }

    public static readonly ExtendedKeyUsage1 TlsWebServerAuthentication = new("TLS_WEB_SERVER_AUTHENTICATION");

    public static readonly ExtendedKeyUsage1 TlsWebClientAuthentication = new("TLS_WEB_CLIENT_AUTHENTICATION");

    public static readonly ExtendedKeyUsage1 CodeSigning = new("CODE_SIGNING");

    public static readonly ExtendedKeyUsage1 EmailProtection = new("EMAIL_PROTECTION");

    public static readonly ExtendedKeyUsage1 TimeStamping = new("TIME_STAMPING");

    public static readonly ExtendedKeyUsage1 OcspSigning = new("OCSP_SIGNING");

    public static readonly ExtendedKeyUsage1 IpsecEndSystem = new("IPSEC_END_SYSTEM");

    public static readonly ExtendedKeyUsage1 IpsecTunnel = new("IPSEC_TUNNEL");

    public static readonly ExtendedKeyUsage1 IpsecUser = new("IPSEC_USER");

    public static readonly ExtendedKeyUsage1 Any = new("ANY");

    public static readonly ExtendedKeyUsage1 None = new("NONE");

    public static readonly ExtendedKeyUsage1 Custom = new("CUSTOM");

    public TResult Match<TResult>(Func<TResult> onTlsWebServerAuthentication,
        Func<TResult> onTlsWebClientAuthentication,
        Func<TResult> onCodeSigning,
        Func<TResult> onEmailProtection,
        Func<TResult> onTimeStamping,
        Func<TResult> onOcspSigning,
        Func<TResult> onIpsecEndSystem,
        Func<TResult> onIpsecTunnel,
        Func<TResult> onIpsecUser,
        Func<TResult> onAny,
        Func<TResult> onNone,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TlsWebServerAuthentication => onTlsWebServerAuthentication(),
            _ when this == TlsWebClientAuthentication => onTlsWebClientAuthentication(),
            _ when this == CodeSigning => onCodeSigning(),
            _ when this == EmailProtection => onEmailProtection(),
            _ when this == TimeStamping => onTimeStamping(),
            _ when this == OcspSigning => onOcspSigning(),
            _ when this == IpsecEndSystem => onIpsecEndSystem(),
            _ when this == IpsecTunnel => onIpsecTunnel(),
            _ when this == IpsecUser => onIpsecUser(),
            _ when this == Any => onAny(),
            _ when this == None => onNone(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onTlsWebServerAuthentication,
        Action onTlsWebClientAuthentication,
        Action onCodeSigning,
        Action onEmailProtection,
        Action onTimeStamping,
        Action onOcspSigning,
        Action onIpsecEndSystem,
        Action onIpsecTunnel,
        Action onIpsecUser,
        Action onAny,
        Action onNone,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == TlsWebServerAuthentication) onTlsWebServerAuthentication();
        else if (this == TlsWebClientAuthentication) onTlsWebClientAuthentication();
        else if (this == CodeSigning) onCodeSigning();
        else if (this == EmailProtection) onEmailProtection();
        else if (this == TimeStamping) onTimeStamping();
        else if (this == OcspSigning) onOcspSigning();
        else if (this == IpsecEndSystem) onIpsecEndSystem();
        else if (this == IpsecTunnel) onIpsecTunnel();
        else if (this == IpsecUser) onIpsecUser();
        else if (this == Any) onAny();
        else if (this == None) onNone();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
