using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A user identification object for specification with the addUser/removeUser endpoints.
/// </summary>
public record TeamRemoveUserRequest
{
    /// <summary>
    /// A string identifying a user. This can either be the string "me", an email, or the gid of a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public string? User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
