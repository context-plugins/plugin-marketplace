using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record AccessControlRequestRequest
{
    /// <summary>
    /// Email address requesting access
    /// </summary>
    [JsonPropertyName("email")]
    public string Email { get; } = "email";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
