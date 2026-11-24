using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// APIProductAssociation has the API product and its administrative state association.
/// </summary>
public record GoogleCloudApigeeV1ApiProductAssociation
{
    /// <summary>
    /// The API product credential associated status. Valid values are <c>approved</c> or <c>revoked</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// API product to be associated with the credential.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiproduct")]
    public string? Apiproduct { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
