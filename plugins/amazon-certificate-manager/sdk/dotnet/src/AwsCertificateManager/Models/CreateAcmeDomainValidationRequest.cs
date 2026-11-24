using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record CreateAcmeDomainValidationRequest
{
    /// <summary>
    /// A unique, case-sensitive identifier to ensure idempotency of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdempotencyToken")]
    public string? IdempotencyToken { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonPropertyName("AcmeEndpointArn")]
    public required string AcmeEndpointArn { get; init; }

    /// <summary>
    /// The domain name to validate.
    /// </summary>
    [JsonPropertyName("DomainName")]
    public required string DomainName { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonPropertyName("PrevalidationOptions")]
    public required PrevalidationOptions PrevalidationOptions { get; init; }

    /// <summary>
    /// One or more tags to associate with the domain validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
