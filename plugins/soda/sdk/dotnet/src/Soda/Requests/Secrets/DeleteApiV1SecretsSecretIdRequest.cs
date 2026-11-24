namespace Soda.Requests.Secrets;

/// <summary>
/// The inputs of the DeleteApiV1SecretsSecretId operation.
/// </summary>
public sealed record DeleteApiV1SecretsSecretIdRequest
{
    public required string SecretId { get; init; }
}
