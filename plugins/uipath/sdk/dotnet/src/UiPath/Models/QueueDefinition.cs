using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Definition of a transaction queue for distributing work items
/// </summary>
public record QueueDefinition
{
    /// <summary>
    /// Unique integer identifier of the queue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Display name of the queue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional description of the queue's purpose
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// Maximum number of automatic retries for failed transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxNumberOfRetries")]
    [Minimum(0)]
    [Maximum(10)]
    public int? MaxNumberOfRetries { get; init; }

    /// <summary>
    /// Whether failed items are automatically requeued for retry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcceptAutomaticallyRetry")]
    public bool? AcceptAutomaticallyRetry { get; init; }

    /// <summary>
    /// Whether each item must have a unique reference string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EnforceUniqueReference")]
    public bool? EnforceUniqueReference { get; init; }

    /// <summary>
    /// ID of the folder in which this queue resides
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationUnitId")]
    public long? OrganizationUnitId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
