using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DialogCodeHookSettings
{
    /// <summary>
    /// Enables the dialog code hook so that it processes user requests.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
