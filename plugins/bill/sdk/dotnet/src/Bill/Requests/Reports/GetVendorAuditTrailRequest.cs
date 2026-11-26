using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Reports;

/// <summary>
/// The inputs of the GetVendorAuditTrail operation.
/// </summary>
public sealed record GetVendorAuditTrailRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public bool? IncludeArchived { get; init; }

    public int? Start { get; init; }

    public int? Max { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
