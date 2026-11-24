using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageProjectResponse
{
    [JsonPropertyName("project")]
    public required Project Project { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
