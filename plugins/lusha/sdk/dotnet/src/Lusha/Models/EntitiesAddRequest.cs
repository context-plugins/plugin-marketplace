using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EntitiesAddRequest
{
    /// <summary>
    /// Lusha IDs as strings — <c>personId</c> for contacts, <c>lushaCompanyId</c> for companies. Accepts either the encrypted token (<c>v{N}.…</c>, as returned by Search/Enrich/Get Entities) or the legacy numeric ID. An ID that is neither a valid token nor numeric returns <c>400</c>.
    /// </summary>
    [JsonPropertyName("entityIds")]
    [MaxLength(500)]
    public required IReadOnlyList<string> EntityIds { get; init; }

    /// <summary>
    /// Contacts tables only. One <c>lushaCompanyId</c> per contact (encrypted token or numeric), index-aligned with <c>entityIds</c>, to help pair company-level enrichment to the right company for each contact. Ignored on companies tables.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyIds")]
    public IReadOnlyList<string>? CompanyIds { get; init; }

    /// <summary>
    /// Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route call when authenticating with an API key (there is no signed-in user) — omitting it returns <c>400</c>. Optional for OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on behalf of another owner.
    /// </summary>
    [JsonPropertyName("owner")]
    public required TableOwner Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
