using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record ServiceQuotaResource
{
    /// <summary>
    /// Provider resource scope for the quota.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDoiTServiceQuotasApi Type { get; init; }

    /// <summary>
    /// AWS account ID or Google Cloud project ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Human-readable resource name when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
