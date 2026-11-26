using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record Item
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("@odata.etag")]
    public string? OdataEtag { get; init; }

    /// <summary>
    /// The unique identifier of the item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The item number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    [MaxLength(20)]
    public string? Number { get; init; }

    /// <summary>
    /// The item display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(100)]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The item display name 2
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName2")]
    [MaxLength(50)]
    public string? DisplayName2 { get; init; }

    /// <summary>
    /// The item type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type2Dynamics365BusinessCentralApiV20ItemsApi? Type { get; init; }

    /// <summary>
    /// The item category ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemCategoryId")]
    public Guid? ItemCategoryId { get; init; }

    /// <summary>
    /// The item category code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemCategoryCode")]
    [MaxLength(20)]
    public string? ItemCategoryCode { get; init; }

    /// <summary>
    /// Whether the item is blocked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public bool? Blocked { get; init; }

    /// <summary>
    /// The Global Trade Item Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gtin")]
    [MaxLength(14)]
    public string? Gtin { get; init; }

    /// <summary>
    /// The current inventory quantity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventory")]
    public double? Inventory { get; init; }

    /// <summary>
    /// The unit price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitPrice")]
    public double? UnitPrice { get; init; }

    /// <summary>
    /// Whether the price includes tax
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceIncludesTax")]
    public bool? PriceIncludesTax { get; init; }

    /// <summary>
    /// The unit cost
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitCost")]
    public double? UnitCost { get; init; }

    /// <summary>
    /// The tax group ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxGroupId")]
    public Guid? TaxGroupId { get; init; }

    /// <summary>
    /// The tax group code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxGroupCode")]
    [MaxLength(20)]
    public string? TaxGroupCode { get; init; }

    /// <summary>
    /// The base unit of measure ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseUnitOfMeasureId")]
    public Guid? BaseUnitOfMeasureId { get; init; }

    /// <summary>
    /// The base unit of measure code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseUnitOfMeasureCode")]
    [MaxLength(10)]
    public string? BaseUnitOfMeasureCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generalProductPostingGroupId")]
    public Guid? GeneralProductPostingGroupId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generalProductPostingGroupCode")]
    [MaxLength(20)]
    public string? GeneralProductPostingGroupCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryPostingGroupId")]
    public Guid? InventoryPostingGroupId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryPostingGroupCode")]
    [MaxLength(20)]
    public string? InventoryPostingGroupCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedDateTime")]
    public DateTimeOffset? LastModifiedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
