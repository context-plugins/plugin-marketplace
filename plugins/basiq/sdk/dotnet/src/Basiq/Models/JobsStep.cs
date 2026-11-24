using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// List of steps that need to be completed.
/// </summary>
public record JobsStep
{
    /// <summary>
    /// Name of the step the job needs to complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public Title? Title { get; init; }

    /// <summary>
    /// Status of the job step
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusConnectJobsApi Status { get; init; }

    /// <summary>
    /// Result object containing a list of URLs or null. Otherwise if a step failed contains an error response.
    /// </summary>
    [JsonPropertyName("result")]
    public required JobsResult Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
