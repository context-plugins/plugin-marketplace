using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// An *organization_export* request starts a job to export the complete data of the given Organization.
/// </summary>
public record OrganizationExportRequest
{
    /// <summary>
    /// Globally unique identifier for the workspace or organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization")]
    public string? Organization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
