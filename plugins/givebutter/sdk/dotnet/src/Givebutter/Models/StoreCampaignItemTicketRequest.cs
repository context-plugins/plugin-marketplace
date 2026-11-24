using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Core.Validation.Attributes;
using Givebutter.Models.Enums;

namespace Givebutter.Models;

public record StoreCampaignItemTicketRequest
{
    [JsonPropertyName("name")]
    [MaxLength(255)]
    public required string Name { get; init; }

    [JsonPropertyName("price")]
    [Minimum(0.0)]
    public required double Price { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_quantity")]
    [Minimum(0)]
    public int? TotalQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtype")]
    public Subtype? Subtype { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retail_price")]
    [Minimum(0.0)]
    public double? RetailPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(5000)]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundle_only")]
    public bool? BundleOnly { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hide_remaining")]
    public bool? HideRemaining { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public Scope? Scope { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundles")]
    public IReadOnlyList<string>? Bundles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<string>? CustomFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pictures")]
    public IReadOnlyList<string>? Pictures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
