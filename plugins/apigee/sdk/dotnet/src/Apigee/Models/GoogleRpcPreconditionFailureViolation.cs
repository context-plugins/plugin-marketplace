using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A message type used to describe a single precondition failure.
/// </summary>
public record GoogleRpcPreconditionFailureViolation
{
    /// <summary>
    /// A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
