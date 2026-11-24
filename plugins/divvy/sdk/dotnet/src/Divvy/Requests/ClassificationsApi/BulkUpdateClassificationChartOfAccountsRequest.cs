using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkUpdateClassificationChartOfAccounts operation.
/// </summary>
public sealed record BulkUpdateClassificationChartOfAccountsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateClassificationChartOfAccountsWithIdRequestDto> Body { get; init; }
}
