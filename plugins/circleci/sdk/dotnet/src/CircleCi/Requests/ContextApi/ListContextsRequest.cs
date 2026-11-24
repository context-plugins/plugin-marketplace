using System;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the ListContexts operation.
/// </summary>
public sealed record ListContextsRequest
{
    /// <summary>
    /// The unique identifier of the owner
    /// </summary>
    public Guid? OwnerId { get; init; }

    /// <summary>
    /// The slug for the owner
    /// </summary>
    public string? OwnerSlug { get; init; }

    /// <summary>
    /// The type of the owner
    /// </summary>
    public OwnerType? OwnerType { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
