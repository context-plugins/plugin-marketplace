using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record IpoOrderData
{
    /// <summary>
    /// Reference id of the IPO the application was placed against
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
    /// Exchange the application was submitted to. Casing follows the exchange feed and may vary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public string? Exchange { get; init; }

    /// <summary>
    /// Id of the request that created the application
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_id")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Application id. Pass this as order_id to the get-order and cancel-order APIs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    /// <summary>
    /// Lifecycle stage of the application. Known values: awaiting_mandate, ipo_allotted, ipo_not_allotted, application_deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Outcome of the application. Known values: success, allotted, not_allotted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_status")]
    public string? OrderStatus { get; init; }

    /// <summary>
    /// State of the UPI mandate backing the application. Known values: pending, mandate_accepted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_status")]
    public string? PaymentStatus { get; init; }

    /// <summary>
    /// Investor category the application was placed under. IND (individual) and HNI can be applied for; EMP appears on employee-quota applications
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Issue type of the IPO. <c>regular</c> is a mainboard issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issue_type")]
    public IssueType? IssueType { get; init; }

    /// <summary>
    /// Free-text reason from the exchange or registrar explaining the current status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// UPI id the mandate was raised against
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upi")]
    public string? Upi { get; init; }

    /// <summary>
    /// Amount blocked in the applicant's bank account for this application, as a decimal string. Absent until the mandate is accepted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upi_amount_blocked")]
    public string? UpiAmountBlocked { get; init; }

    /// <summary>
    /// When the application was submitted to NSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted there
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nse_submitted_date")]
    public string? NseSubmittedDate { get; init; }

    /// <summary>
    /// When the application was submitted to BSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted there
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bse_submitted_date")]
    public string? BseSubmittedDate { get; init; }

    /// <summary>
    /// When the UPI mandate was approved; null until approved
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mandate_approved_date")]
    public string? MandateApprovedDate { get; init; }

    /// <summary>
    /// When the application was rejected; null unless rejected
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rejection_date")]
    public string? RejectionDate { get; init; }

    /// <summary>
    /// When the UPI mandate was rejected; null unless rejected
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mandate_rejection_date")]
    public string? MandateRejectionDate { get; init; }

    /// <summary>
    /// When cancellation was requested; null unless a cancellation was raised
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancel_requested_date")]
    public string? CancelRequestedDate { get; init; }

    /// <summary>
    /// When cancellation was accepted; null unless the cancellation completed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancel_accepted_date")]
    public string? CancelAcceptedDate { get; init; }

    /// <summary>
    /// Shares allotted. 0 until allotment completes, and on applications that were not allotted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("units_allotted")]
    public int? UnitsAllotted { get; init; }

    /// <summary>
    /// Bids placed in this application
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bids")]
    public IReadOnlyList<IpoOrderBid>? Bids { get; init; }

    /// <summary>
    /// When the application was created, in yyyy-MM-dd'T'HH:mm:ss
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// When the application was last updated, in yyyy-MM-dd'T'HH:mm:ss
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_updated_at")]
    public string? LastUpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
