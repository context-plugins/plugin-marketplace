using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Additional properties associated with an asset, such as subscription and customer details.
/// </summary>
public record AssetProperties
{
    /// <summary>
    /// The primary domain of the customer associated with this asset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerDomain")]
    public string? CustomerDomain { get; init; }

    /// <summary>
    /// The unique identifier of the customer in the reseller or partner portal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerID")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// The reseller domain through which this asset was provisioned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reseller")]
    public string? Reseller { get; init; }

    /// <summary>
    /// Subscription details for a G Suite or Office 365 asset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription")]
    public Subscription? Subscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
