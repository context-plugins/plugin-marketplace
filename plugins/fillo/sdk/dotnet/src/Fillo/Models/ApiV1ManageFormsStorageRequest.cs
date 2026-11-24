using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record ApiV1ManageFormsStorageRequest
{
    [JsonPropertyName("destination")]
    public required Destination1 Destination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
