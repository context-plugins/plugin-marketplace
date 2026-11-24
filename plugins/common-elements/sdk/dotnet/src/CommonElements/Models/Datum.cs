using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Datum
{
    /// <summary>
    /// Two-letter state code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Associations in the state, summed across subtypes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("association_count")]
    public double? AssociationCount { get; init; }

    /// <summary>
    /// Subtype to count, e.g. { "hoa": 51204, "condo": 27810 }.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("by_subtype")]
    public object? BySubtype { get; init; }

    /// <summary>
    /// Insurance licensees recorded in the state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insurance_licensee_count")]
    public double? InsuranceLicenseeCount { get; init; }

    /// <summary>
    /// Of those, the ones recorded as active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insurance_active_count")]
    public double? InsuranceActiveCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
