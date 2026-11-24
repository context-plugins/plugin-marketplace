using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record PurchaseOrderCreate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderDate")]
    public DateTimeOffset? OrderDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public Guid? VendorId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorNumber")]
    [MaxLength(20)]
    public string? VendorNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    [MaxLength(10)]
    public string? CurrencyCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricesIncludeTax")]
    public bool? PricesIncludeTax { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestedReceiptDate")]
    public DateTimeOffset? RequestedReceiptDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
