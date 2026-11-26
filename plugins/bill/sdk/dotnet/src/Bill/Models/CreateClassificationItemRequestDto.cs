using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Create an item
/// </summary>
public record CreateClassificationItemRequestDto
{
    [JsonPropertyName("type")]
    public required ItemTypeRequest Type { get; init; }

    /// <summary>
    /// Item short name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// Item name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// Item description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent item. You can set this field if this item is a child object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentId")]
    public string? ParentId { get; init; }

    /// <summary>
    /// Item price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public double? Price { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the item when it is used for bills or purchases in your accounting system. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseChartOfAccountId")]
    public string? ExpenseChartOfAccountId { get; init; }

    /// <summary>
    /// Item description when it is used for bills or purchases in your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseDescription")]
    public string? PurchaseDescription { get; init; }

    /// <summary>
    /// Item purchase cost set in your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseCost")]
    public double? PurchaseCost { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the item. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccountId")]
    public string? ChartOfAccountId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the item is taxable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxable")]
    public bool? Taxable { get; init; }

    /// <summary>
    /// Item tax percentage. You can set this field for a set of item <c>type</c> values.
    /// * <c>DISCOUNT</c>
    /// * <c>SALES_TAX</c>
    /// * <c>OTHER_CHARGE</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    public double? Percentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
