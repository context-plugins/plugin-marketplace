using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Source2ReportingReportsApi
{
    /// <summary>
    /// The location to the object or attribute that the error relates to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pointer")]
    public string? Pointer { get; init; }

    /// <summary>
    /// A string indicating which URI query parameter caused the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameter")]
    public string? Parameter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
