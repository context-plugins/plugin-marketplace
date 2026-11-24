using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// Never includes credentials.
/// </summary>
public record WorkspaceMembers
{
    [JsonPropertyName("members")]
    public required IReadOnlyList<Member> Members { get; init; }

    /// <summary>
    /// Pending, unexpired invitations only.
    /// </summary>
    [JsonPropertyName("invitations")]
    public required IReadOnlyList<Invitation> Invitations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
