using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for starting one or more automation jobs
/// </summary>
public record StartJobsRequest
{
    /// <summary>
    /// Parameters controlling how jobs are started
    /// </summary>
    [JsonPropertyName("startInfo")]
    public required StartInfo StartInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
