using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record IpoDetailsData
{
    /// <summary>
    /// IPO id (slug). Pass this as the id to the apply API
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
    /// Time bidding opens each day, in HH:mm IST
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_start_time")]
    public string? DailyStartTime { get; init; }

    /// <summary>
    /// Time bidding closes each day, in HH:mm IST
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_end_time")]
    public string? DailyEndTime { get; init; }

    /// <summary>
    /// Face value of one share
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("face_value")]
    public double? FaceValue { get; init; }

    /// <summary>
    /// Minimum price increment for a bid
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tick_size")]
    public double? TickSize { get; init; }

    /// <summary>
    /// Number of shares in one lot
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_size")]
    public int? LotSize { get; init; }

    /// <summary>
    /// Smallest quantity that can be bid for; bids must be in multiples of the lot size
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimum_quantity")]
    public int? MinimumQuantity { get; init; }

    /// <summary>
    /// Cut-off price for retail applications
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cut_off_price")]
    public double? CutOffPrice { get; init; }

    /// <summary>
    /// Price the share listed at; null until listing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listing_price")]
    public double? ListingPrice { get; init; }

    /// <summary>
    /// Exchange(s) the issue lists on. Comma-separated when the issue lists on more than one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listing_exchange")]
    public string? ListingExchange { get; init; }

    /// <summary>
    /// Link to the Red Herring Prospectus
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rhp_url")]
    public string? RhpUrl { get; init; }

    /// <summary>
    /// Link to the Draft Red Herring Prospectus
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("drhp_url")]
    public string? DrhpUrl { get; init; }

    /// <summary>
    /// Key dates for the issue, from pre-apply through listing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeline")]
    public IpoTimeline1? Timeline { get; init; }

    /// <summary>
    /// Registrar handling the issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registrar_info")]
    public IpoRegistrarInfo1? RegistrarInfo { get; init; }

    /// <summary>
    /// Overall subscription so far; null until the issue opens
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_subscription")]
    public string? TotalSubscription { get; init; }

    /// <summary>
    /// Investor categories the issue accepts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("investors")]
    public IReadOnlyList<IpoInvestorType>? Investors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
