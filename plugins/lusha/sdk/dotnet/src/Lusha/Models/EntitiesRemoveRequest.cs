using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EntitiesRemoveRequest
{
    /// <summary>
    /// Accepts either the encrypted token (<c>v{N}.…</c>, as returned by Get Entities) or the legacy numeric ID. Unresolved IDs are echoed back in <c>invalidIds</c> in the exact form you sent them.
    /// </summary>
    [JsonPropertyName("entityIds")]
    public required IReadOnlyList<string> EntityIds { get; init; }

    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
