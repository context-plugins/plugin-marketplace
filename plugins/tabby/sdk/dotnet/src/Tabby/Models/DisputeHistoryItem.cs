using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record DisputeHistoryItem
{
    /// <summary>
    /// Array of links to images which were uploaded by customer or merchant.
    /// </summary>
    [JsonPropertyName("attachments")]
    public required IReadOnlyList<string> Attachments { get; init; }

    /// <summary>
    /// Date and time of creation of dispute history items, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Indicates the entity responsible for the creation of the record. It can take one of the following values:
    ///   - If <c>source</c> is set to <c>customer</c>, this field will contain the email address of the customer;
    ///   - If <c>source</c> is set to <c>merchant</c> and the action was performed through the merchant-dashboard, then field will contain the email address of the dashboard user;
    ///   - If <c>source</c> is set to <c>merchant</c> and the action was performed through the Disputes API, this field will contain the constant value 'Disputes API';
    ///   - If <c>source</c> is set to <c>tabby-support</c>, this field will be empty.
    /// </summary>
    [JsonPropertyName("created_by")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Contains additional information or comments related to the performed action. It can take one of the following values:
    ///   - If <c>source</c> is set to <c>customer</c>, this field will contain the customer's comment.
    ///   - If <c>source</c> is set to <c>merchant</c>, this field will contain the reason for the challenge.
    ///   - If <c>source</c> is set to <c>tabby-support</c>, this field will be empty.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// This field specifies author that led to the creation of the record. It can take one of the following values:
    ///   - <c>customer</c>: Indicates that the action was initiated by a customer;
    ///   - <c>merchant</c>: Indicates that the action was initiated by a merchant;
    ///   - <c>tabby-support</c>: Indicates that the action was initiated by Tabby support.
    /// </summary>
    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    /// <summary>
    /// The event type of the dispute history item:
    ///   - <c>dispute_created</c> - the customer raised a dispute;
    ///   - <c>dispute_approved</c> - disputed was approved and amount was refunded to customer;
    ///   - <c>dispute_declined</c> - dispute was declined by Tabby support;
    ///   - <c>dispute_canceled</c> - dispute was canceled by customer;
    ///   - <c>dispute_in_arbitration</c> - merchant challenged dispute (e.g incorrect amount);
    ///   - <c>dispute_amount_changed</c> - disputed amount was changed;
    ///   - <c>dispute_comment_added</c> - merchant added comment to the dispute;
    ///   - <c>evidence_merchant</c> - agent requested evidence from the merchant;
    ///   - <c>evidence_customer</c> - agent requested evidence from the customer;
    ///   - <c>evidence_merchant_provided</c> - merchant provided evidence;
    ///   - <c>evidence_customer_provided</c> - customer provided evidence;
    ///   - <c>merchant_14d_unresponsive</c> - merchant did not respond within 14 days;
    ///   - <c>customer_14d_unresponsive</c> - customer did not respond within 14 days.
    /// </summary>
    [JsonPropertyName("event_type")]
    public required EventType EventType { get; init; }

    /// <summary>
    /// Contains additional message provided by merchant while perform action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
