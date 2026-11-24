using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsSendResponse
{
    [JsonPropertyName("sent")]
    public required IReadOnlyList<Sent> Sent { get; init; }

    /// <summary>
    /// Recipients who could already open it; emailed again anyway
    /// </summary>
    [JsonPropertyName("alreadyHadAccess")]
    public required IReadOnlyList<string> AlreadyHadAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
