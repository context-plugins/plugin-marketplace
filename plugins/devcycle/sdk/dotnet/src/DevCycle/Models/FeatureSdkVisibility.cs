using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureSdkVisibility
{
    [JsonPropertyName("mobile")]
    public required bool Mobile { get; init; }

    [JsonPropertyName("client")]
    public required bool Client { get; init; }

    [JsonPropertyName("server")]
    public required bool Server { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
