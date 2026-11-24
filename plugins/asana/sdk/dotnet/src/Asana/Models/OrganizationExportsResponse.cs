using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record OrganizationExportsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public OrganizationExportResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
