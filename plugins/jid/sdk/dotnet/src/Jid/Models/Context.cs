using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Core.Validation.Attributes;
using Jid.Models.Enums;

namespace Jid.Models;

public record Context
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("form_type")]
    public FormType? FormType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(5000)]
    public string? Message { get; init; }

    /// <summary>
    /// USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stated_value")]
    [Minimum(0.0)]
    public double? StatedValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stated_role")]
    public StatedRole? StatedRole { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? Country { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activity")]
    public Activity? Activity { get; init; }

    /// <summary>
    /// vendor_claim / listing_claim: the website of the business or listing being claimed. Enables the affiliation check.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("claimed_website")]
    public string? ClaimedWebsite { get; init; }

    /// <summary>
    /// The place or market the sender stated ("Jakarta"): shown on read.sender, never stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stated_location")]
    [MaxLength(80)]
    public string? StatedLocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
