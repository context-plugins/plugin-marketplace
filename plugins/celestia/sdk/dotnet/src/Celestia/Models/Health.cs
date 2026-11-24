using System.Text.Json.Serialization;
using Celestia.Core.Models;

namespace Celestia.Models;

public record Health
{
    [JsonPropertyName("status")]
    public string Status { get; } = "ok";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
