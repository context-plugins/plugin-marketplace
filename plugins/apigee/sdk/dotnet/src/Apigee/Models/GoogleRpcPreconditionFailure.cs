using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.
/// </summary>
public record GoogleRpcPreconditionFailure
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
