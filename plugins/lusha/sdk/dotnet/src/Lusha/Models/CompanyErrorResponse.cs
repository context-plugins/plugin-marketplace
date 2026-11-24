using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyErrorResponse
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
