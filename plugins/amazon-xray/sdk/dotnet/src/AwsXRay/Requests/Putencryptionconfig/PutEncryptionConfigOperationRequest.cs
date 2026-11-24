using AwsXRay.Models;

namespace AwsXRay.Requests.Putencryptionconfig;

/// <summary>
/// The inputs of the PutEncryptionConfig operation.
/// </summary>
public sealed record PutEncryptionConfigOperationRequest
{
    public PutEncryptionConfigRequest? Body { get; init; }
}
