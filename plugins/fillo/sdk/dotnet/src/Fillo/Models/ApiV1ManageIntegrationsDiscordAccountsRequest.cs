using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageIntegrationsDiscordAccountsRequest
{
    /// <summary>
    /// An empty string clears the name.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
