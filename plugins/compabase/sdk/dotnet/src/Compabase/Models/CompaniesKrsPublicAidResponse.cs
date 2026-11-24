using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record CompaniesKrsPublicAidResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("krs")]
    public string? Krs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
