using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeAccountApi;

/// <summary>
/// The inputs of the DescribeAcmeAccount operation.
/// </summary>
public sealed record DescribeAcmeAccountOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
