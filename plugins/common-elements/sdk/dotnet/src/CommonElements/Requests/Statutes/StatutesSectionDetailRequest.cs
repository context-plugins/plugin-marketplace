using System;

namespace CommonElements.Requests.Statutes;

/// <summary>
/// The inputs of the StatutesSectionDetail operation.
/// </summary>
public sealed record StatutesSectionDetailRequest
{
    /// <summary>
    /// Section id from search or by-state.
    /// </summary>
    public required Guid Id { get; init; }
}
