using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// A charge levied against a <c>Merchant</c>.
/// </summary>
public record Fee
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Represents the total amount. The value may be returned as either:
    /// <list type="bullet">
    ///   <item><description>an <b>integer</b> (<c>int32</c>) in cents (e.g., <c>100</c> = $1.00), or</description></item>
    ///   <item><description>a <b>double</b> for fractional amounts (e.g., <c>2.393</c>).</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// The <c>Fee</c> category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// It is used for subscription fees and allows free-form text to be passed from the subscription fee product. Note that this product is mostly deprecated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_name")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The ID of the <c>Fee Profile</c> used to calculate fees for the <c>Transfer</c> related to this <c>Fee</c>. The specific <c>Transfer</c> is identified by the <c>linked_to</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_profile")]
    public string? FeeProfile { get; init; }

    /// <summary>
    /// The subtype of the <c>Fee</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_subtype")]
    public FeeSubtype? FeeSubtype { get; init; }

    /// <summary>
    /// The type of <c>Fee</c>. Finix may return more enums than those provided. Ensure your code accepts additional enums returned by Finix.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_type")]
    public FeeType? FeeType { get; init; }

    /// <summary>
    /// It is used for subscription fees and allows free-form text to be passed from the subscription fee product. Note that this product is mostly deprecated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// The ID of the linked resource. Note that this field will be deprecated soon, use <c>linked_to</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_id")]
    public string? LinkedId { get; init; }

    /// <summary>
    /// The ID of the linked resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_to")]
    public string? LinkedTo { get; init; }

    /// <summary>
    /// The type of entity the <c>Fee</c> is linked to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_type")]
    public LinkedType4? LinkedType { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource that was charged the fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// The timestamp indicating when the <c>Transfer</c> related to this <c>Fee</c> is ready to be settled. The specific <c>Transfer</c> is identified by the <c>linked_to</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ready_to_settle_at")]
    public DateTimeOffset? ReadyToSettleAt { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links11? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
