using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record DomainScope
{
    /// <summary>
    /// Whether validation applies to the exact domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExactDomain")]
    public ExactDomain? ExactDomain { get; init; }

    /// <summary>
    /// Whether validation applies to subdomains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Subdomains")]
    public Subdomains? Subdomains { get; init; }

    /// <summary>
    /// Whether validation applies to wildcard domains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Wildcards")]
    public Wildcards? Wildcards { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
