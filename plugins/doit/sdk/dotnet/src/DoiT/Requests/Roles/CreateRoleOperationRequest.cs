using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.Roles;

/// <summary>
/// The inputs of the CreateRole operation.
/// </summary>
public sealed record CreateRoleOperationRequest
{
    /// <summary>
    /// Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same body returns the original response.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string IdempotencyKey { get; init; }

    public required CreateRoleRequest Body { get; init; }
}
