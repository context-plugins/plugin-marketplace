using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IpoTimeline
{
    /// <summary>
    /// Date pre-apply opens, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pre_apply_start_date")]
    public string? PreApplyStartDate { get; init; }

    /// <summary>
    /// Date the issue opens for applications, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_start_date")]
    public string? ApplicationStartDate { get; init; }

    /// <summary>
    /// Date the issue closes for applications, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_end_date")]
    public string? ApplicationEndDate { get; init; }

    /// <summary>
    /// Date allotment processing starts, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allotment_start_date")]
    public string? AllotmentStartDate { get; init; }

    /// <summary>
    /// Date allotment is finalised, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allotment_date")]
    public string? AllotmentDate { get; init; }

    /// <summary>
    /// Date refunds are initiated for unallotted applications, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refund_initiation_date")]
    public string? RefundInitiationDate { get; init; }

    /// <summary>
    /// Date the share lists on the exchange, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listing_date")]
    public string? ListingDate { get; init; }

    /// <summary>
    /// Last date the UPI mandate can be approved, in yyyy-MM-dd
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mandate_end_date")]
    public string? MandateEndDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
