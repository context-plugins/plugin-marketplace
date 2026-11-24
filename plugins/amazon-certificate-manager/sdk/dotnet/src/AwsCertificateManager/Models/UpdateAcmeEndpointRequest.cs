using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record UpdateAcmeEndpointRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint to update.
    /// </summary>
    [JsonPropertyName("AcmeEndpointArn")]
    public required string AcmeEndpointArn { get; init; }

    /// <summary>
    /// The updated authorization behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuthorizationBehavior")]
    public AuthorizationBehavior2? AuthorizationBehavior { get; init; }

    /// <summary>
    /// The updated contact requirement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Contact")]
    public Contact3? Contact { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateAuthority")]
    public CertificateAuthority? CertificateAuthority { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
