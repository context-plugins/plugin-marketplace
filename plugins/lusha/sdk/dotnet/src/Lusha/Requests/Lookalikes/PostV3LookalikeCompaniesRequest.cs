using Lusha.Models;

namespace Lusha.Requests.Lookalikes;

/// <summary>
/// The inputs of the PostV3LookalikeCompanies operation.
/// </summary>
public sealed record PostV3LookalikeCompaniesRequest
{
    public required CompanyLookalikesRequest2 Body { get; init; }
}
