using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageProjectIdentityResponse2
{
    [JsonPropertyName("enabled")]
    public string Enabled { get; } = "False";

    [JsonPropertyName("disabled")]
    public string Disabled { get; } = "True";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
