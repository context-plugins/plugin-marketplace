using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record SalesOrderUpdate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalDocumentNumber")]
    [MaxLength(35)]
    public string? ExternalDocumentNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderDate")]
    public DateTimeOffset? OrderDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public Guid? CustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerNumber")]
    [MaxLength(20)]
    public string? CustomerNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    [MaxLength(10)]
    public string? CurrencyCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricesIncludeTax")]
    public bool? PricesIncludeTax { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestedDeliveryDate")]
    public DateTimeOffset? RequestedDeliveryDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
