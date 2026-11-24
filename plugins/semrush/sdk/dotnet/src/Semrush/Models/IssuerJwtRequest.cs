using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

public record IssuerJwtRequest
{
    /// <summary>
    /// JWT by <see href="https://www.semrush.com/apps/docs/server-to-server-api/bearer-token#generate-a-jwt">specification</see>,
    /// signed by your secret key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jwt")]
    public string? Jwt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
