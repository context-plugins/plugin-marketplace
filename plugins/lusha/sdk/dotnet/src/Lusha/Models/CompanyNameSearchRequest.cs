using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyNameSearchRequest
{
    /// <summary>
    /// Search text for company name
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
