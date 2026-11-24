using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction its DLP policies returned (block, warn, audit or none). The text itself went to Microsoft, never here
/// </summary>
public record Purview
{
    [JsonPropertyName("restriction")]
    public required Restriction? Restriction { get; init; }

    [JsonPropertyName("actions")]
    [Minimum(0)]
    [Maximum(1000)]
    public required int Actions { get; init; }

    [JsonPropertyName("scopeModified")]
    public required bool ScopeModified { get; init; }

    [JsonPropertyName("unavailable")]
    public required bool Unavailable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
