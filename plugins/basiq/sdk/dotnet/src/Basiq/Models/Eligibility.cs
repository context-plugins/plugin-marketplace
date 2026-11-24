using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Eligibility
{
    /// <summary>
    /// The type of the specific eligibility constraint for a discountType.
    /// </summary>
    [JsonPropertyName("discountEligibilityType")]
    public required DiscountEligibilityType DiscountEligibilityType { get; init; }

    /// <summary>
    /// Generic field containing additional information relevant to the discountEligibilityType specified. Whether mandatory or not is dependent on the value of discountEligibilityType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalValue")]
    public string? AdditionalValue { get; init; }

    /// <summary>
    /// Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of discountEligibilityType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this eligibility constraint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
