using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The Salesforce objects to exclude from the stream.
/// </summary>
public record SalesforceOrg3
{
    /// <summary>
    /// Salesforce objects in the database server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objects")]
    public IReadOnlyList<SalesforceObject>? Objects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
