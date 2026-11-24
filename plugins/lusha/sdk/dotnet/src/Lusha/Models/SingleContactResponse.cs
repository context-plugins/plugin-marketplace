using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SingleContactResponse
{
    [JsonPropertyName("contact")]
    public required ContactSingleResponse Contact { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
