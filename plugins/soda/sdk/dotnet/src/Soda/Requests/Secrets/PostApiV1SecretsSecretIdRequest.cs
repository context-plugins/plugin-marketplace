using Soda.Models;

namespace Soda.Requests.Secrets;

/// <summary>
/// The inputs of the PostApiV1SecretsSecretId operation.
/// </summary>
public sealed record PostApiV1SecretsSecretIdRequest
{
    public required string SecretId { get; init; }

    public required PublicApiUpdateSecretRequestDto Body { get; init; }
}
