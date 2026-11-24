using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersJobsResponse
{
    /// <summary>
    /// Type of the response, always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Container object, containing job details.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<JobsData> Data { get; init; }

    /// <summary>
    /// Size of the all the jobs.
    /// </summary>
    [JsonPropertyName("size")]
    public required long Size { get; init; }

    /// <summary>
    /// Link object containing a link to the resource, self reference.
    /// </summary>
    [JsonPropertyName("links")]
    public required ResourceLink Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
