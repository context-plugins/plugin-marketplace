using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record WorkspacePermissionsResponse
{
    /// <summary>
    /// A map of OAuth resources to the permission actions granted for each. Keys are resource names (e.g. <c>posts</c>, <c>segments</c>) and values are arrays of granted actions (<c>read</c> and/or <c>write</c>). API keys receive all granular OAuth scopes. OAuth tokens receive only the scopes they were authorized for. <c>posts</c> write access is only included when the Send API feature is enabled for the workspace; if the token has <c>posts:write</c> but Send API is disabled, <c>posts</c> is returned as <c>["read"]</c>.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyDictionary<string, object> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
