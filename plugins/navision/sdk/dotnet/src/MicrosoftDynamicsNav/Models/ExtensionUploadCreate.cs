using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record ExtensionUploadCreate
{
    [JsonPropertyName("schedule")]
    public required Schedule1 Schedule { get; init; }

    [JsonPropertyName("schemaSyncMode")]
    public required SchemaSyncMode1 SchemaSyncMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
