using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record FleetStatus
{
    /// <summary>
    /// The status code of the compute fleet. Valid values include: CREATING: The compute fleet is being created. UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is being rotated. PENDING_DELETION: The compute fleet is pending deletion. DELETING: The compute fleet is being deleted. CREATE_FAILED: The compute fleet has failed to create. UPDATE_ROLLBACK_FAILED: The compute fleet has failed to update and could not rollback to previous state. ACTIVE: The compute fleet has succeeded and is active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCode")]
    public StatusCode? StatusCode { get; init; }

    /// <summary>
    /// Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute fleet has failed to create. UPDATE_FAILED: The compute fleet has failed to update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public Context? Context { get; init; }

    /// <summary>
    /// A message associated with the status of a compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
