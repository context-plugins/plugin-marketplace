using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record ErrorResponseModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
