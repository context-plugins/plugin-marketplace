using System.Collections.Generic;
using Divvy.Models;

namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the BillApproveDenyActions operation.
/// </summary>
public sealed record BillApproveDenyActionsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<BillApproveDenyActionRequestDto> Body { get; init; }
}
