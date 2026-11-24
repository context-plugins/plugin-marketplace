using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record GetAcmeExternalAccountBindingCredentialsRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME external account binding.
    /// </summary>
    [JsonPropertyName("AcmeExternalAccountBindingArn")]
    public required string AcmeExternalAccountBindingArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
