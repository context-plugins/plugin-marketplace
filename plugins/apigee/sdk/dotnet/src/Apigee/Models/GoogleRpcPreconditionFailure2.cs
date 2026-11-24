using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Validation errors that would cause the deployment change request to be rejected.
/// </summary>
public record GoogleRpcPreconditionFailure2
{
    /// <summary>
    /// Describes all precondition violations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("violations")]
    public IReadOnlyList<GoogleRpcPreconditionFailureViolation>? Violations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
