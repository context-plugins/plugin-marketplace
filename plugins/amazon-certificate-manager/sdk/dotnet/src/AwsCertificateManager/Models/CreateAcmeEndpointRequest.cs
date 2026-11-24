using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record CreateAcmeEndpointRequest
{
    /// <summary>
    /// A unique, case-sensitive identifier to ensure idempotency of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdempotencyToken")]
    public string? IdempotencyToken { get; init; }

    /// <summary>
    /// The authorization behavior for the ACME endpoint.
    /// </summary>
    [JsonPropertyName("AuthorizationBehavior")]
    public string AuthorizationBehavior { get; } = "PRE_APPROVED";

    /// <summary>
    /// Specifies whether ACME clients must provide contact information during account registration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Contact")]
    public Contact2? Contact { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonPropertyName("CertificateAuthority")]
    public required CertificateAuthority CertificateAuthority { get; init; }

    /// <summary>
    /// One or more tags to associate with the ACME endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// Tags to apply to certificates issued through this ACME endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateTags")]
    public IReadOnlyList<Tag>? CertificateTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
