using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record WorkspaceIdentifyResponse
{
    [JsonPropertyName("data")]
    public required WorkspaceIdentity Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
