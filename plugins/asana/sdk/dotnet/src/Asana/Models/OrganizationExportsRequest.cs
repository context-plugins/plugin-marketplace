using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record OrganizationExportsRequest
{
    /// <summary>
    /// An *organization_export* request starts a job to export the complete data of the given Organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public OrganizationExportRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
