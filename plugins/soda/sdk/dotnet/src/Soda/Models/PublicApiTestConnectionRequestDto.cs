using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiTestConnectionRequestDto
{
    [JsonPropertyName("configurationFileContents")]
    public required string ConfigurationFileContents { get; init; }

    [JsonPropertyName("runnerId")]
    public required string RunnerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
