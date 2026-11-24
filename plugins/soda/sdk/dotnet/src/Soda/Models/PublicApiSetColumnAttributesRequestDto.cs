using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiSetColumnAttributesRequestDto
{
    [JsonPropertyName("columnAttributes")]
    public required object ColumnAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
