using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Spend \&amp; Expense accounting integration transaction information.
/// </summary>
public record AccountingIntegrationTransaction
{
    /// <summary>
    /// BILL-generated ID of the transaction in your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction can be billed to a client or customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billable")]
    public bool? Billable { get; init; }

    /// <summary>
    /// Unique transaction ID in your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integrationTxId")]
    public string? IntegrationTxId { get; init; }

    /// <summary>
    /// Current sync status of the transaction with your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncStatus")]
    public string? SyncStatus { get; init; }

    /// <summary>
    /// Message describing the result of the previous sync attempt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncMessage")]
    public string? SyncMessage { get; init; }

    /// <summary>
    /// Accounting system integration type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integrationType")]
    public string? IntegrationType { get; init; }

    /// <summary>
    /// BILL-generated ID of the accounting system integration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integrationId")]
    public string? IntegrationId { get; init; }

    /// <summary>
    /// Unique ID of the sync request that processed the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncRequestId")]
    public string? SyncRequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
