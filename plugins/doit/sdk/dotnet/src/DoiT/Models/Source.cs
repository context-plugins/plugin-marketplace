using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Attribution. channel defaults to agent; console and web are the human channels.
/// </summary>
public record Source
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public ChannelDoiTSignupApi? Channel { get; init; } = ChannelDoiTSignupApi.Agent;

    /// <summary>
    /// Name and version of the calling agent (agent channel).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentClient")]
    [MaxLength(120)]
    public string? AgentClient { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign")]
    [MaxLength(120)]
    public string? Campaign { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utmSource")]
    [MaxLength(120)]
    public string? UtmSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utmMedium")]
    [MaxLength(120)]
    public string? UtmMedium { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utmCampaign")]
    [MaxLength(120)]
    public string? UtmCampaign { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
