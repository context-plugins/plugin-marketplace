using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// A single usage summary record
/// </summary>
public record UsageSummary
{
    /// <summary>
    /// The unique identifier of the usage summary
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The name of the event being tracked
    /// </summary>
    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    /// <summary>
    /// The quantity of events in this usage period
    /// </summary>
    [JsonPropertyName("eventsQuantity")]
    public required long EventsQuantity { get; init; }

    /// <summary>
    /// The start date of the usage period
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The end date of the usage period
    /// </summary>
    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// The subtotal amount in the smallest currency unit (e.g., cents)
    /// </summary>
    [JsonPropertyName("subtotal")]
    public required long Subtotal { get; init; }

    /// <summary>
    /// The next billing date for this usage
    /// </summary>
    [JsonPropertyName("nextBillingDate")]
    public required DateTimeOffset NextBillingDate { get; init; }

    /// <summary>
    /// The internal customer ID
    /// </summary>
    [JsonPropertyName("customerId")]
    public required Guid CustomerId { get; init; }

    /// <summary>
    /// The order ID associated with this usage
    /// </summary>
    [JsonPropertyName("orderId")]
    public required Guid OrderId { get; init; }

    /// <summary>
    /// The order line ID associated with this usage
    /// </summary>
    [JsonPropertyName("orderLineId")]
    public required Guid OrderLineId { get; init; }

    /// <summary>
    /// The order line attribute ID associated with this usage
    /// </summary>
    [JsonPropertyName("orderLineAttributeId")]
    public required Guid OrderLineAttributeId { get; init; }

    /// <summary>
    /// The invoice ID if this usage has been invoiced
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceId")]
    public Guid? InvoiceId { get; init; }

    /// <summary>
    /// The invoice line ID if this usage has been invoiced
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceLineId")]
    public Guid? InvoiceLineId { get; init; }

    /// <summary>
    /// When the usage summary was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When the usage summary was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Associated order information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public UsageSummaryOrder? Order { get; init; }

    /// <summary>
    /// Associated order line information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderLine")]
    public UsageSummaryOrderLine? OrderLine { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
