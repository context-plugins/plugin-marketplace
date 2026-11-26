using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record ExtensionUploadCreate
{
    [JsonPropertyName("schedule")]
    public required Schedule1 Schedule { get; init; }

    [JsonPropertyName("schemaSyncMode")]
    public required SchemaSyncMode1 SchemaSyncMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
