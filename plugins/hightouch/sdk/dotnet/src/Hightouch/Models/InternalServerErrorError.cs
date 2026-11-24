using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record InternalServerErrorError
{
    [JsonPropertyName("Enum_Internal Server Error")]
    public string EnumInternalServerError { get; init; } = "Internal Server Error";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
