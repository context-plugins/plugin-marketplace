using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiDeleteColumnMetricMonitorResponse
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
