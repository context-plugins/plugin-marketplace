using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.AnyOf;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record MaxSearchRequest
{
    [JsonPropertyName("keyword")]
    [MaxLength(300)]
    public required string Keyword { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxPages")]
    [Minimum(1)]
    [Maximum(100)]
    public int? MaxPages { get; init; } = 10;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery")]
    public Delivery? Delivery { get; init; } = Delivery.Inline;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    [Minimum(1)]
    [Maximum(240)]
    public int? Count { get; init; } = 240;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ebaySite")]
    public EbaySite? EbaySite { get; init; } = EbaySite.EbayCom;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categoryId")]
    public string? CategoryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrder? SortOrder { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minPrice")]
    public double? MinPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxPrice")]
    public double? MaxPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemCondition")]
    public ItemCondition? ItemCondition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditionId")]
    [Minimum(0)]
    public int? ConditionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellerType")]
    public SellerType? SellerType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sold")]
    public bool? Sold { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exactMatch")]
    public bool? ExactMatch { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aspectFilter")]
    public IReadOnlyDictionary<string, AspectFilter>? AspectFilter { get; init; }
}
