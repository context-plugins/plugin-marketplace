using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1WholesaleNumbersRequest
{
    /// <summary>
    /// From <c>/wholesale/areas</c>
    /// </summary>
    [JsonPropertyName("areaId")]
    public required string AreaId { get; init; }

    /// <summary>
    /// Host, <c>{number}</c> template, or full sip URI (public hosts only).
    /// </summary>
    [JsonPropertyName("deliverTo")]
    public required string DeliverTo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("friendlyName")]
    [MaxLength(100)]
    public string? FriendlyName { get; init; }

    /// <summary>
    /// Pass when ordering outside the US.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryId")]
    public string? CountryId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
