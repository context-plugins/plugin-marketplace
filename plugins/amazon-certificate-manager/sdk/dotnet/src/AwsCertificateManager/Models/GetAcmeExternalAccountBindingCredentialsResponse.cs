using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record GetAcmeExternalAccountBindingCredentialsResponse
{
    /// <summary>
    /// The key identifier for the external account binding credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyId")]
    public string? KeyId { get; init; }

    /// <summary>
    /// The MAC key for the external account binding credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MacKey")]
    public string? MacKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
