using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ResponseTimeRootCause
{
    /// <summary>
    /// A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Services")]
    public IReadOnlyList<ResponseTimeRootCauseService>? Services { get; init; }

    /// <summary>
    /// A flag that denotes that the root cause impacts the trace client.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientImpacting")]
    public bool? ClientImpacting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
