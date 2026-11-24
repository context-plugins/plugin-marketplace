using System;
using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1PoliciesByIdVersions operation.
/// </summary>
public sealed record PostApiV1PoliciesByIdVersionsRequest
{
    /// <summary>
    /// The policy
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1PoliciesVersionsRequest? Body { get; init; }
}
