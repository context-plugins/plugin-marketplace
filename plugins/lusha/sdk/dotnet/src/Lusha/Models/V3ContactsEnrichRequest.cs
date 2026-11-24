using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3ContactsEnrichRequest
{
    [JsonPropertyName("ids")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal")]
    public IReadOnlyList<Reveal>? Reveal { get; init; }

    /// <summary>
    /// Whether this call is allowed to fall through to your enabled
    /// third-party providers when Lusha's own data has no match, for the fields
    /// requested via <c>reveal</c>. Defaults to <c>true</c> whenever Data Waterfall is
    /// enabled on your account (Account &gt; Waterfall) - pass <c>false</c> to opt this
    /// specific call out. Has no effect if Data Waterfall or no providers are
    /// enabled on your account. Provider order isn't configurable - Lusha manages
    /// that internally.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waterfallEnabled")]
    public bool? WaterfallEnabled { get; init; } = true;

    /// <summary>
    /// Optional. If provided, these contacts are also added to this table (if not already present) and the revealed fields' columns are populated. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
