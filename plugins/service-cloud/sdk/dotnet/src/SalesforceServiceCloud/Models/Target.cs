using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

public record Target
{
    /// <summary>
    /// Type of the transfer target.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// ID of the transfer target.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }
}
