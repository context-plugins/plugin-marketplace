using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record FunderAggregate
{
    [JsonPropertyName("funder_ein")]
    public required string FunderEin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funder_name")]
    public FunderName? FunderName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funder_state")]
    public FunderState? FunderState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_amount")]
    public TotalAmount? TotalAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grant_count")]
    public GrantCount? GrantCount { get; init; }

    /// <summary>
    /// Distinct recipients we can identify as organizations. Grant lines whose recipient is a placeholder ('various individuals', 'see attached') or an individual-assistance program's beneficiary do not count toward this, so it is not the count of distinct recipient_raw strings — for funders that give to individuals the two differ by orders of magnitude. CHANGED 2026-08: this previously counted distinct raw strings, and reads taken before that are not comparable. The excluded money is reported in x_plinth.unidentified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient_count")]
    public RecipientCount? RecipientCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_fiscal_year")]
    public FirstFiscalYear? FirstFiscalYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_fiscal_year")]
    public LastFiscalYear? LastFiscalYear { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
