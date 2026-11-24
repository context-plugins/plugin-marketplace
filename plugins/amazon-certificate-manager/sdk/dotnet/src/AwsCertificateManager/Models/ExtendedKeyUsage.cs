using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record ExtendedKeyUsage
{
    /// <summary>
    /// The name of an Extended Key Usage value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public Name1? Name { get; init; }

    /// <summary>
    /// An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280. 1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION) 1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION) 1.3.6.1.5.5.7.3.3 (CODE_SIGNING) 1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION) 1.3.6.1.5.5.7.3.8 (TIME_STAMPING) 1.3.6.1.5.5.7.3.9 (OCSP_SIGNING) 1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM) 1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL) 1.3.6.1.5.5.7.3.7 (IPSEC_USER)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OID")]
    public string? Oid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
