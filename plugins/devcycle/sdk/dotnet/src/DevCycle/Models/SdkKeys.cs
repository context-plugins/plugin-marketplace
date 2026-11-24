using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record SdkKeys
{
    [JsonPropertyName("mobile")]
    public required IReadOnlyList<object> Mobile { get; init; }

    [JsonPropertyName("client")]
    public required IReadOnlyList<object> Client { get; init; }

    [JsonPropertyName("server")]
    public required IReadOnlyList<object> Server { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
