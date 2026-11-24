using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Identifies one target company. Provide exactly one of domain or id.
/// </summary>
public record V3BuyingGroupCompanyItem
{
    /// <summary>
    /// Optional caller-supplied token, echoed back on the matching result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientReferenceId")]
    public string? ClientReferenceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Lusha company ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
