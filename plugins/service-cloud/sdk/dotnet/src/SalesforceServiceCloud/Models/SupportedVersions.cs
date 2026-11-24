using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

public record SupportedVersions
{
    /// <summary>
    /// List of supported API versions.
    /// </summary>
    [JsonPropertyName("versions")]
    public required IReadOnlyList<VersionModel> Versions { get; init; }
}
