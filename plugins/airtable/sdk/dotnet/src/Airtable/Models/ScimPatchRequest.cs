using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A SCIM 2.0 PATCH request with one or more operations.
/// </summary>
public record ScimPatchRequest
{
    [JsonPropertyName("schemas")]
    public required IReadOnlyList<string> Schemas { get; init; }

    /// <summary>
    /// The list of PATCH operations to apply.
    /// </summary>
    [JsonPropertyName("Operations")]
    public required IReadOnlyList<Operation> Operations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
