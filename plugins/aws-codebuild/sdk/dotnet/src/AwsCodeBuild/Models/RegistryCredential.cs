using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record RegistryCredential
{
    /// <summary>
    /// The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. The credential can use the name of the credentials only if they exist in your current Amazon Web Services Region.
    /// </summary>
    [JsonPropertyName("credential")]
    public required string Credential { get; init; }

    /// <summary>
    /// The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for Secrets Manager.
    /// </summary>
    [JsonPropertyName("credentialProvider")]
    public string CredentialProvider { get; } = "SECRETS_MANAGER";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
