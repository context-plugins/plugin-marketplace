using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ReportsVersionsResponse
{
    [JsonPropertyName("report")]
    public required Report Report { get; init; }

    [JsonPropertyName("version")]
    public required VersionDeliverdDevReportsApi Version { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("warnings")]
    public required IReadOnlyList<string> Warnings { get; init; }

    [JsonPropertyName("audience")]
    public required IReadOnlyList<Audience> Audience { get; init; }

    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approval")]
    public ApprovalDeliverdDevReportsApi? Approval { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
