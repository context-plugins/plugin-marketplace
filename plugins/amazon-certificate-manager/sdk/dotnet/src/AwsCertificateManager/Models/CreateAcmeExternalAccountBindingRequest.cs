using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record CreateAcmeExternalAccountBindingRequest
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
    /// The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding.
    /// </summary>
    [JsonPropertyName("RoleArn")]
    public required string RoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Expiration")]
    public Expiration? Expiration { get; init; }

    /// <summary>
    /// One or more tags to associate with the external account binding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
