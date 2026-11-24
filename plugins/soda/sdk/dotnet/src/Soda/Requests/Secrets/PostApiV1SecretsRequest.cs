using Soda.Models;

namespace Soda.Requests.Secrets;

/// <summary>
/// The inputs of the PostApiV1Secrets operation.
/// </summary>
public sealed record PostApiV1SecretsRequest
{
    public required PublicApiCreateSecretRequestDto Body { get; init; }
}
