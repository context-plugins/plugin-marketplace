using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersAuthLinkRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobile")]
    public string? Mobile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
