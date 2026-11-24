using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Replace a recurring invoice (line item added)
/// </summary>
public record RecurringInvoiceReplaceRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonPropertyName("customerId")]
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    /// <summary>
    /// User-generated invoice number. This value can be your chosen number scheme or invoice due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    [JsonPropertyName("schedule")]
    public required Schedule Schedule { get; init; }

    /// <summary>
    /// Recurring invoice line item information
    /// </summary>
    [JsonPropertyName("recurringInvoiceLineItems")]
    public required IReadOnlyList<RecurringInvoiceReplaceLineItem> RecurringInvoiceLineItems { get; init; }

    /// <summary>
    /// Set as <c>true</c> to send an email to the customer when an invoice is created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sendEmail")]
    public bool? SendEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
