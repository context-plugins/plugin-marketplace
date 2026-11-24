using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Accounts;

/// <summary>
/// The inputs of the DescribeAccountOverview operation.
/// </summary>
public sealed record DescribeAccountOverviewRequest
{
    public AccountsOverviewRequest? Body { get; init; }
}
