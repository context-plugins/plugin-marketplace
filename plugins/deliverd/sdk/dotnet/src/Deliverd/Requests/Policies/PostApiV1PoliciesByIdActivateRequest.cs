using System;
using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1PoliciesByIdActivate operation.
/// </summary>
public sealed record PostApiV1PoliciesByIdActivateRequest
{
    /// <summary>
    /// The policy
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1PoliciesActivateRequest? Body { get; init; }
}
