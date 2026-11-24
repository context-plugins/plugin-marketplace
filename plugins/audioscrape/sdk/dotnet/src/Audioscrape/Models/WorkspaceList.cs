using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record WorkspaceList
{
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonPropertyName("workspaces")]
    public required IReadOnlyList<WorkspaceSummary> Workspaces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
