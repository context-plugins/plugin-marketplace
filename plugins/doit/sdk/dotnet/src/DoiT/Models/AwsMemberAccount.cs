using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsMemberAccount
{
    /// <summary>
    /// 12-digit AWS member account ID.
    /// </summary>
    [JsonPropertyName("memberAccountId")]
    public required string MemberAccountId { get; init; }

    /// <summary>
    /// 12-digit AWS management (payer) account ID of the parent AWS Organization.
    /// </summary>
    [JsonPropertyName("managementAccountId")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a custom name set on the asset in the DoiT Console. Null when no name is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Trailing 30-day aggregate metrics per SP type (<c>compute</c>, <c>database</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats30d")]
    public Stats30D? Stats30D { get; init; }

    /// <summary>
    /// Estimated monthly additional savings per SP type for this member account, attributed from the parent AWS organization's projection by share of trailing-60-day Savings Plan-eligible on-demand cost.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyPotentialSavings")]
    public AwsMonthlyPotentialSavings? MonthlyPotentialSavings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
