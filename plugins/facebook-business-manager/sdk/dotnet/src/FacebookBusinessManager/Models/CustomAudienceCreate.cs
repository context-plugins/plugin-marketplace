using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record CustomAudienceCreate
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("subtype")]
    public required Subtype1 Subtype { get; init; }

    /// <summary>
    /// Source of customer data for CUSTOM subtype
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_file_source")]
    public string? CustomerFileSource { get; init; }

    /// <summary>
    /// Specification for lookalike audiences
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lookalike_spec")]
    public LookalikeSpec? LookalikeSpec { get; init; }

    /// <summary>
    /// Rule-based audience definition for WEBSITE or APP subtypes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rule")]
    public object? Rule { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
