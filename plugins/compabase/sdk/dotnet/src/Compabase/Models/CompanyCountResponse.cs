using System.Text.Json.Serialization;
using Compabase.Core.Models;
using Compabase.Core.Validation.Attributes;

namespace Compabase.Models;

public record CompanyCountResponse
{
    /// <summary>
    /// Number of companies matching the filters.
    /// </summary>
    [JsonPropertyName("count")]
    [Minimum(0)]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
