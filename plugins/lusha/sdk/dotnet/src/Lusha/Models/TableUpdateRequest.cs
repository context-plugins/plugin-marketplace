using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// <c>name</c>, <c>visibility</c>, and <c>archived</c> are all optional — send any subset; omitted fields stay unchanged. Sending none of them is a no-op. A partial update re-reads the persisted table first, so fields you don't send are never clobbered.
/// </summary>
public record TableUpdateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public Visibility? Visibility { get; init; }

    /// <summary>
    /// Set <c>true</c> to archive the table (hides it from default List Tables results), <c>false</c> to restore it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
