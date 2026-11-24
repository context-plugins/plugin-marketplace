using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A list of organizations.
/// </summary>
public record OrganizationList
{
    /// <summary>
    /// Array of organization objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizations")]
    public IReadOnlyList<Organization>? Organizations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
