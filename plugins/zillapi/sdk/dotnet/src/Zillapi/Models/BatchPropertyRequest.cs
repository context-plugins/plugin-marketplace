using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Zillapi.Core.Models;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Models;

/// <summary>
/// Up to 500 entries total across urls and addresses. At least one of urls or addresses is required.
/// </summary>
public record BatchPropertyRequest
{
    /// <summary>
    /// Zillow URLs to resolve.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("urls")]
    [MaxLength(500)]
    public IReadOnlyList<string>? Urls { get; init; }

    /// <summary>
    /// Full street addresses to resolve.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addresses")]
    [MaxLength(500)]
    public IReadOnlyList<string>? Addresses { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertyStatus")]
    public PropertyStatus? PropertyStatus { get; init; } = PropertyStatus.ForSale;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractBuildingUnits")]
    public ExtractBuildingUnits? ExtractBuildingUnits { get; init; } = ExtractBuildingUnits.Disabled;

    /// <summary>
    /// Upper bound on records returned by the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxItems")]
    [Minimum(1)]
    [Maximum(5000)]
    public int? MaxItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
