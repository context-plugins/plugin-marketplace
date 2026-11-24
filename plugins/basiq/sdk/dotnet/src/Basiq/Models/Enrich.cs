using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Enrich
{
    [JsonPropertyName("cleanDescription")]
    public required string CleanDescription { get; init; }

    [JsonPropertyName("tags")]
    public required object Tags { get; init; }

    [JsonPropertyName("category")]
    public required CategoryReportingReportsApi Category { get; init; }

    [JsonPropertyName("location")]
    public required LocationReportingReportsApi Location { get; init; }

    [JsonPropertyName("merchant")]
    public required MerchantReportingReportsApi Merchant { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
