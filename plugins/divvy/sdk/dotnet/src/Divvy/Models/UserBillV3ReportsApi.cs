using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record UserBillV3ReportsApi
{
    /// <summary>
    /// BILL-generated ID of the user. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Name of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
