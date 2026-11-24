using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

/// <summary>
/// The stored lists, as GET returns them. Both keys are always present; an empty list is [].
/// </summary>
public record HostnameList
{
    [JsonPropertyName("allowed")]
    public required IReadOnlyList<string> Allowed { get; init; }

    [JsonPropertyName("blocked")]
    public required IReadOnlyList<string> Blocked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
