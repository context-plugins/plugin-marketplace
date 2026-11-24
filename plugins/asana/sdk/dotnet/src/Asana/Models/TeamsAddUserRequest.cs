using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TeamsAddUserRequest
{
    /// <summary>
    /// A user identification object for specification with the addUser/removeUser endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TeamAddUserRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
