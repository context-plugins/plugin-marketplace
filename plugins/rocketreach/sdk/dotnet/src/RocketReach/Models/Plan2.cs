using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation.Attributes;

namespace RocketReach.Models;

/// <summary>
/// Object representing the user's plan
/// </summary>
public record Plan2
{
    /// <summary>
    /// RocketReach internal unique plan ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [Minimum(-2147483648)]
    [Maximum(2147483647)]
    public int? Id { get; init; }

    /// <summary>
    /// Name of the plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(64)]
    public string? Name { get; init; }

    /// <summary>
    /// Maximum number of lookups for the plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lookup_limit")]
    public int? LookupLimit { get; init; }

    /// <summary>
    /// Maximum number of exports for the plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("export_limit")]
    public int? ExportLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
