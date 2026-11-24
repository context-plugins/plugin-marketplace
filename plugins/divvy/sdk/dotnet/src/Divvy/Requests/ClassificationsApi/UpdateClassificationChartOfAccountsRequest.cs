using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the UpdateClassificationChartOfAccounts operation.
/// </summary>
public sealed record UpdateClassificationChartOfAccountsRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateClassificationChartOfAccountsRequestDto Body { get; init; }
}
