using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record WebhookTestResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
