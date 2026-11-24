using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Estimated monthly additional savings per Savings Plan (SP) type, taken from the latest PerfectScale for Commitments purchase projection. Unlike <c>savingsTotals</c> (realized YTD/lifetime savings), this is a forward-looking estimate of the monthly savings achievable if the recommended commitments are purchased. For member accounts, the AWS organization figure is attributed by each member account's share of trailing-60-day SP-eligible on-demand cost. A per-SP-type value of <c>0.00</c> means the latest projection is missing, expired, or empty. The field is omitted entirely only for accounts that have never had potential savings computed.
/// </summary>
public record AwsMonthlyPotentialSavings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compute")]
    public Money? Compute { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public Money? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
