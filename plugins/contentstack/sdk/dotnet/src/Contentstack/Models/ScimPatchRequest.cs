using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A SCIM 2.0 PatchOp request for partial resource updates.
/// </summary>
public record ScimPatchRequest
{
    /// <summary>
    /// SCIM schema URN identifying this as a PatchOp request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemas")]
    public IReadOnlyList<string>? Schemas { get; init; }

    /// <summary>
    /// List of PATCH operations to perform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Operations")]
    public IReadOnlyList<ScimPatchOperation>? Operations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
