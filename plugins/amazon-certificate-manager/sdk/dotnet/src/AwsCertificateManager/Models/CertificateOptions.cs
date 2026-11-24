using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record CertificateOptions
{
    /// <summary>
    /// This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateTransparencyLoggingPreference")]
    public CertificateTransparencyLoggingPreference? CertificateTransparencyLoggingPreference { get; init; }

    /// <summary>
    /// You can opt in to allow the export of your certificates by specifying ENABLED. You cannot update the value of Export after the the certificate is created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Export")]
    public Export? Export { get; init; }

    /// <summary>
    /// The domain validation method for the certificate. To migrate from email to DNS validation, specify DNS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod3? ValidationMethod { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
