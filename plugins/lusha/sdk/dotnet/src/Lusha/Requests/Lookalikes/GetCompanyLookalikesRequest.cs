using Lusha.Models;

namespace Lusha.Requests.Lookalikes;

/// <summary>
/// The inputs of the GetCompanyLookalikes operation.
/// </summary>
public sealed record GetCompanyLookalikesRequest
{
    public required CompanyLookalikesRequest Body { get; init; }
}
