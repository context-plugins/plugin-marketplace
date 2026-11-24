using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record OrderItem
{
    /// <summary>
    /// Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for Item refunds and disputes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_id")]
    public string? ReferenceId { get; init; }

    /// <summary>
    /// Name of the product.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Description of the product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Quantity of the product ordered.
    /// </summary>
    [JsonPropertyName("quantity")]
    [Minimum(1)]
    public int Quantity { get; init; } = 1;

    /// <summary>
    /// Price per unit of the product. Should be positive or zero.
    /// </summary>
    [JsonPropertyName("unit_price")]
    public string UnitPrice { get; init; } = "0.00";

    /// <summary>
    /// Amount of the applied discount if any. Should be positive or zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public string? DiscountAmount { get; init; } = "0.00";

    /// <summary>
    /// URL of the item image to show in the order information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    [Format(FormatKind.Uri)]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// URL of the item at your store.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_url")]
    [Format(FormatKind.Uri)]
    public string? ProductUrl { get; init; }

    /// <summary>
    /// Who the goods are designed to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gender")]
    public Gender1? Gender { get; init; }

    /// <summary>
    /// Required as name of high-level category (Clothes, Electronics,etc.); or a tree of category-subcategory1-subcategory2; or id of the category and table with category-ids data mapped provided.
    /// </summary>
    [JsonPropertyName("category")]
    public required string Category { get; init; }

    /// <summary>
    /// white / blue/ green
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// cotton / polyester / synthetic
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_material")]
    public string? ProductMaterial { get; init; }

    /// <summary>
    /// EU / UK
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size_type")]
    public string? SizeType { get; init; }

    /// <summary>
    /// L / XL / 12
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public string? Size { get; init; }

    /// <summary>
    /// Mango / Dorothy Perkins / Tommy Hilfiger
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    /// <summary>
    /// Indicates whether a product can be returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_refundable")]
    public bool? IsRefundable { get; init; }

    /// <summary>
    /// A machine-readable product identifier. Typically used for logistics and scanning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("barcode")]
    public string? Barcode { get; init; }

    /// <summary>
    /// Product Part Number assigned by the manufacturer. Used to identify specific components or versions of a product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ppn")]
    public string? Ppn { get; init; }

    /// <summary>
    /// The name of the seller offering this item. This field is used to distinguish products from different vendors on a single marketplace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller")]
    public string? Seller { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
