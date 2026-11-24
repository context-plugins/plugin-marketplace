using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record PublicApiUpdateDataStandardStatusRequestDto
{
    [JsonPropertyName("status")]
    public required DataStandardStatusDto Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
