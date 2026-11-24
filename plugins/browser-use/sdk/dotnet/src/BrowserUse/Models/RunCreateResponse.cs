using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

public record RunCreateResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("workspaceId")]
    public required Guid WorkspaceId { get; init; }

    [JsonPropertyName("eventsUrl")]
    public required string EventsUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missingFileIds")]
    public IReadOnlyList<Guid>? MissingFileIds { get; init; }

    /// <summary>
    /// Titles of opVaultId items that hold a credential but no 1Password website, so deriving their domains left them with nowhere to be typed. The run still starts without them; add a website to the item or pass opVaultAllowedDomains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skippedVaultItems")]
    public IReadOnlyList<string>? SkippedVaultItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
