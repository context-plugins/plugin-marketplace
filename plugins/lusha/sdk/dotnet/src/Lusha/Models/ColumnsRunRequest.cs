using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record ColumnsRunRequest
{
    /// <summary>
    /// Controls which rows a column operation applies to. <c>all</c> re-runs every row, including already-processed ones. <c>missing</c> only runs rows that don't have a value for this column yet. <c>specific</c> requires <c>entityIds</c>.
    /// </summary>
    [JsonPropertyName("runScope")]
    public required RunScope RunScope { get; init; }

    /// <summary>
    /// Required when <c>runScope</c> is <c>specific</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityIds")]
    public IReadOnlyList<string>? EntityIds { get; init; }

    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
