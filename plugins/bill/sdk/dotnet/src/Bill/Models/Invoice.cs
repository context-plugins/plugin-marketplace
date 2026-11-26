using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Invoice linked to a bill.
/// </summary>
public record Invoice
{
    /// <summary>
    /// User-generated invoice number. This value can be your chosen number scheme or bill due date.
    /// </summary>
    [JsonPropertyName("invoiceNumber")]
    [StringLength(100, MinimumLength = 1)]
    public required string InvoiceNumber { get; init; }

    /// <summary>
    /// Date when the invoice is sent. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonPropertyName("invoiceDate")]
    public required DateTimeOffset InvoiceDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
