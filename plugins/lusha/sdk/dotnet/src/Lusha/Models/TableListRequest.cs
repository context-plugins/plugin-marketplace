using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record TableListRequest
{
    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(0)]
    [Maximum(100)]
    public int? Page { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; } = 100;

    /// <summary>
    /// Optional filter — matches tables whose name contains this text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// <c>deleted</c> is not a filterable status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
