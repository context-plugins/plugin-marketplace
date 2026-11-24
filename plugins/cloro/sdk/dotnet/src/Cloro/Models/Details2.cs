using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Details2
{
    /// <summary>
    /// Maximum number of <c>QUEUED</c> tasks your organization can hold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
