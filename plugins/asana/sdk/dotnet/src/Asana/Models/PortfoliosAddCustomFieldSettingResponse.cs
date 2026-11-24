using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfoliosAddCustomFieldSettingResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public CustomFieldSettingResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
