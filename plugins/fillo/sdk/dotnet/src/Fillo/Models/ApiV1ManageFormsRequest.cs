using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsRequest
{
    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
