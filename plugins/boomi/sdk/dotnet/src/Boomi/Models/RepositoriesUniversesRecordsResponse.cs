using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

public record RepositoriesUniversesRecordsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("records")]
    public IReadOnlyList<GoldenRecord>? Records { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
