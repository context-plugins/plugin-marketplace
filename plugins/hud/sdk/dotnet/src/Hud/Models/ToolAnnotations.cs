using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Additional properties describing a Tool to clients.
/// <para>
/// NOTE: all properties in ToolAnnotations are <b>hints</b>.
/// They are not guaranteed to provide a faithful description of
/// tool behavior (including descriptive properties like <c>title</c>).
/// </para>
/// <para>
/// Clients should never make tool use decisions based on ToolAnnotations
/// received from untrusted servers.
/// </para>
/// </summary>
public record ToolAnnotations
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public Title? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readOnlyHint")]
    public Readonlyhint? ReadOnlyHint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destructiveHint")]
    public Destructivehint? DestructiveHint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotentHint")]
    public Idempotenthint? IdempotentHint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openWorldHint")]
    public Openworldhint? OpenWorldHint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
