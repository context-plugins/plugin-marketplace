using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record PublicApiCreateIncidentDto
{
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("leadId")]
    public string? LeadId { get; init; }

    [JsonPropertyName("monitorResultIds")]
    public required IReadOnlyList<string> MonitorResultIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolutionNotes")]
    public string? ResolutionNotes { get; init; }

    [JsonPropertyName("severity")]
    public required IncidentSeverityDto Severity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public IncidentStatusDto? Status { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
