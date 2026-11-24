using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TimePeriodsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TimePeriodResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
