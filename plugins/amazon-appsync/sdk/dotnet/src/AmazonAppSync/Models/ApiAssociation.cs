using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record ApiAssociation
{
    /// <summary>
    /// The domain name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domainName")]
    public string? DomainName { get; init; }

    /// <summary>
    /// The API ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiId")]
    public string? ApiId { get; init; }

    /// <summary>
    /// Identifies the status of an association. PROCESSING: The API association is being created. You cannot modify association requests during processing. SUCCESS: The API association was successful. You can modify associations after success. FAILED: The API association has failed. You can modify associations after failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associationStatus")]
    public AssociationStatus? AssociationStatus { get; init; }

    /// <summary>
    /// Details about the last deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentDetail")]
    public string? DeploymentDetail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
