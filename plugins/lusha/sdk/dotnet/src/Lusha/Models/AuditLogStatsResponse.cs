using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record AuditLogStatsResponse
{
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("success")]
    public required int Success { get; init; }

    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    [JsonPropertyName("successRate")]
    public required string SuccessRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
