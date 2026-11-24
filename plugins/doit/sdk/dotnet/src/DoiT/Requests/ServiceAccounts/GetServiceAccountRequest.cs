using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the GetServiceAccount operation.
/// </summary>
public sealed record GetServiceAccountRequest
{
    /// <summary>
    /// Service account ID, as returned in the id field by the list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string Id { get; init; }
}
