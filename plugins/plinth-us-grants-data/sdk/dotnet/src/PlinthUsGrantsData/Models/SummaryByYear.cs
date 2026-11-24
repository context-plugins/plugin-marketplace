using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record SummaryByYear
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fiscal_year")]
    public FiscalYear1? FiscalYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_amount")]
    public TotalAmount? TotalAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grant_count")]
    public GrantCount? GrantCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funder_count")]
    public FunderCount? FunderCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
