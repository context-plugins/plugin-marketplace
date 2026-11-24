using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record PhoneNumberReportingReportsApi
{
    /// <summary>
    /// International Phone Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("international")]
    public string? International { get; init; }

    /// <summary>
    /// Local Phone Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("local")]
    public string? Local { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
