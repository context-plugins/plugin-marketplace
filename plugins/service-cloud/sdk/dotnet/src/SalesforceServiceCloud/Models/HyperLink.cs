using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models;

/// <summary>
/// Hyperlink object included in the Links schema
/// </summary>
public record HyperLink
{
    /// <summary>
    /// Link to the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
