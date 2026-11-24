using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record TableCreateRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public Visibility? Visibility { get; init; } = Visibility.Private;

    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    /// <summary>
    /// Optional initial entity IDs to seed the table with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
