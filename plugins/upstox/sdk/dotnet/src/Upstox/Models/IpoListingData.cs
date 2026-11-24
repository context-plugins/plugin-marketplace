using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record IpoListingData
{
    /// <summary>
    /// IPO id (slug). Pass this as the id to the IPO details and apply APIs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Trading symbol of the issuer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("symbol")]
    public string? Symbol { get; init; }

    /// <summary>
    /// Name of the issuer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Current stage of the IPO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; }

    /// <summary>
    /// ISIN of the issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isin")]
    public string? Isin { get; init; }

    /// <summary>
    /// Issue type of the IPO. <c>regular</c> is a mainboard issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issue_type")]
    public IssueType? IssueType { get; init; }

    /// <summary>
    /// Total issue size in crores
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issue_size")]
    public double? IssueSize { get; init; }

    /// <summary>
    /// Industry the issuer operates in
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    /// <summary>
    /// Lower end of the price band, per share
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimum_price")]
    public double? MinimumPrice { get; init; }

    /// <summary>
    /// Upper end of the price band, per share
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximum_price")]
    public double? MaximumPrice { get; init; }

    /// <summary>
    /// Date bidding opens, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bidding_start_date")]
    public string? BiddingStartDate { get; init; }

    /// <summary>
    /// Date bidding closes, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bidding_end_date")]
    public string? BiddingEndDate { get; init; }

    /// <summary>
    /// Overall subscription so far; null until the issue opens
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_subscription")]
    public string? TotalSubscription { get; init; }

    /// <summary>
    /// Investor categories the issue accepts. Empty when the listing data carries none — the IPO details API is the authoritative source
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("investors")]
    public IReadOnlyList<IpoInvestorType>? Investors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
