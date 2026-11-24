using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The config variable value of data type multi int.
/// </summary>
public record GoogleCloudApihubV1MultiIntValues
{
    /// <summary>
    /// Optional. The config variable value of data type multi int.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<int>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
