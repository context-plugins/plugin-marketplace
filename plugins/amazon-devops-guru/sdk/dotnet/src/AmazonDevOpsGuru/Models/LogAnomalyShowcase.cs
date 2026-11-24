using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record LogAnomalyShowcase
{
    /// <summary>
    /// A list of anomalous log events that may be related.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogAnomalyClasses")]
    public IReadOnlyList<LogAnomalyClass>? LogAnomalyClasses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
