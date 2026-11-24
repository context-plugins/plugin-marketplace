using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record DiscoveryCallback
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bulkId")]
    public string? BulkId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackMethod")]
    public CallbackMethod? CallbackMethod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bulkStatus")]
    public string? BulkStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
