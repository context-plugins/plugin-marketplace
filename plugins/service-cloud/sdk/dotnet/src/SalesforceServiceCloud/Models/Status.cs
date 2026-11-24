using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

public record Status
{
    /// <summary>
    /// Health status of Einstein Bots API.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 StatusValue { get; init; }
}
