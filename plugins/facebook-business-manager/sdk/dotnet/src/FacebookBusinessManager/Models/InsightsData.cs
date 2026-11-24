using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record InsightsData
{
    /// <summary>
    /// Number of times ads were shown
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("impressions")]
    public string? Impressions { get; init; }

    /// <summary>
    /// Number of clicks on ads
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public string? Clicks { get; init; }

    /// <summary>
    /// Total amount spent during the period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spend")]
    public string? Spend { get; init; }

    /// <summary>
    /// Number of unique people who saw the ads
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reach")]
    public string? Reach { get; init; }

    /// <summary>
    /// Average cost per click
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cpc")]
    public string? Cpc { get; init; }

    /// <summary>
    /// Average cost per 1,000 impressions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cpm")]
    public string? Cpm { get; init; }

    /// <summary>
    /// Click-through rate percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ctr")]
    public string? Ctr { get; init; }

    /// <summary>
    /// Average number of times each person saw the ad
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public string? Frequency { get; init; }

    /// <summary>
    /// List of actions taken by people
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public IReadOnlyList<ActionModel>? Actions { get; init; }

    /// <summary>
    /// List of conversion events
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversions")]
    public IReadOnlyList<Conversion>? Conversions { get; init; }

    /// <summary>
    /// Start date of the reporting period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_start")]
    public DateTimeOffset? DateStart { get; init; }

    /// <summary>
    /// End date of the reporting period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_stop")]
    public DateTimeOffset? DateStop { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign_id")]
    public string? CampaignId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign_name")]
    public string? CampaignName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adset_id")]
    public string? AdsetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adset_name")]
    public string? AdsetName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ad_id")]
    public string? AdId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ad_name")]
    public string? AdName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
