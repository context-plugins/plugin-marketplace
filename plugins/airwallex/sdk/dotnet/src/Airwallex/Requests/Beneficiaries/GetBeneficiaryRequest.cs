namespace Airwallex.Requests.Beneficiaries;

/// <summary>
/// The inputs of the GetBeneficiary operation.
/// </summary>
public sealed record GetBeneficiaryRequest
{
    public required string Id { get; init; }
}
