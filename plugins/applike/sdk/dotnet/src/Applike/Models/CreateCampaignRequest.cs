using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;
using Applike.Models.Enums;

namespace Applike.Models;

public record CreateCampaignRequest
{
    /// <summary>
    /// justtrack's internal ID for the app
    /// </summary>
    [JsonPropertyName("appId")]
    [Minimum(1)]
    public required int AppId { get; init; }

    [JsonPropertyName("countryCodes")]
    public required IReadOnlyList<string> CountryCodes { get; init; }

    /// <summary>
    /// the name of your app goal in justtrack
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("goalName")]
    [MinLength(1)]
    public string? GoalName { get; init; }

    /// <summary>
    /// The identifier for the campaign that originated with the partner
    /// </summary>
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// towards what the partner is optimizing this campaign
    /// </summary>
    [JsonPropertyName("optimizationType")]
    [MinLength(1)]
    public required string OptimizationType { get; init; }

    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public required int PartnerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promoCode")]
    [MinLength(1)]
    public string? PromoCode { get; init; }

    /// <summary>
    /// The type of campaign you're running. Retargeting campaigns require special set up on partner side to target only existing users.
    /// </summary>
    [JsonPropertyName("type")]
    public required RequiredCampaignType Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
