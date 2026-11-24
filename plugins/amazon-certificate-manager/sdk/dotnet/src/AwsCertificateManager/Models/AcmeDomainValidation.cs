using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record AcmeDomainValidation
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME domain validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeDomainValidationArn")]
    public string? AcmeDomainValidationArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeEndpointArn")]
    public string? AcmeEndpointArn { get; init; }

    /// <summary>
    /// The domain name being validated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainName")]
    public string? DomainName { get; init; }

    /// <summary>
    /// The type of prevalidation used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PrevalidationType")]
    public PrevalidationType? PrevalidationType { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PrevalidationDetails")]
    public PrevalidationDetails? PrevalidationDetails { get; init; }

    /// <summary>
    /// The status of the domain validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAwsCertificateManagerAcmeDomainValidationApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureDetails")]
    public FailureDetails? FailureDetails { get; init; }

    /// <summary>
    /// The time at which the domain validation was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// The time at which the domain validation was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UpdatedAt")]
    public string? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
