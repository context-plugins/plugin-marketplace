using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TeamsRemoveUserRequest
{
    /// <summary>
    /// A user identification object for specification with the addUser/removeUser endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TeamRemoveUserRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
