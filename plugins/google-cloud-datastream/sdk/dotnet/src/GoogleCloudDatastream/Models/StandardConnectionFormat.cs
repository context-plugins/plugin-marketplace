using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Standard connection format.
/// </summary>
public record StandardConnectionFormat
{
    /// <summary>
    /// Optional. Deprecated: Use the <c>additional_options</c> map to specify the <c>directConnection</c> parameter instead. For example: <c>additional_options = {"directConnection": "true"}</c>. Specifies whether the client connects directly to the host[:port] in the connection URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnection")]
    public bool? DirectConnection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
