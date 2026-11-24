using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The config variable value of data type multi select.
/// </summary>
public record GoogleCloudApihubV1MultiSelectValues
{
    /// <summary>
    /// Optional. The config variable value of data type multi select.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<GoogleCloudApihubV1ConfigValueOption>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
