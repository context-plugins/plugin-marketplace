using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageIntegrationsDiscordServersResponse
{
    [JsonPropertyName("disconnected")]
    public string Disconnected { get; } = "True";

    [JsonPropertyName("guildId")]
    public required string GuildId { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
