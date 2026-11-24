using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TeamsAddUserResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TeamMembershipResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
