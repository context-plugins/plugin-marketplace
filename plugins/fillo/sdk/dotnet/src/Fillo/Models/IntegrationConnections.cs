using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record IntegrationConnections
{
    [JsonPropertyName("accounts")]
    public required IReadOnlyList<Account> Accounts { get; init; }

    /// <summary>
    /// The account id this project uses for each provider, or null.
    /// </summary>
    [JsonPropertyName("selected")]
    public required Selected Selected { get; init; }

    [JsonPropertyName("discordServers")]
    public required IReadOnlyList<DiscordServer> DiscordServers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
