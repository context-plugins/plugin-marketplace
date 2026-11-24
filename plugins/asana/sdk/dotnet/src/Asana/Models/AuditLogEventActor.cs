using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

/// <summary>
/// The entity that triggered the event. Will typically be a user.
/// </summary>
public record AuditLogEventActor
{
    /// <summary>
    /// The type of actor.
    /// Can be one of <c>user</c>, <c>asana</c>, <c>asana_support</c>, <c>anonymous</c>, or <c>external_administrator</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actor_type")]
    public ActorType? ActorType { get; init; }

    /// <summary>
    /// Globally unique identifier of the actor, if it is a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The name of the actor, if it is a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The email of the actor, if it is a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
