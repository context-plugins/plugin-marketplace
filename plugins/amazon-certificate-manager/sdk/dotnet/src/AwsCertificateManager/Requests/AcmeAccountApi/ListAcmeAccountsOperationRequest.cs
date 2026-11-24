using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeAccountApi;

/// <summary>
/// The inputs of the ListAcmeAccounts operation.
/// </summary>
public sealed record ListAcmeAccountsOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
