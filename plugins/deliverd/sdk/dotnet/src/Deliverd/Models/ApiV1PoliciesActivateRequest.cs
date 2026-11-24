using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1PoliciesActivateRequest
{
    /// <summary>
    /// The version number to put in force. The one it replaces is superseded
    /// </summary>
    [JsonPropertyName("version")]
    [Minimum(1)]
    public required int Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
