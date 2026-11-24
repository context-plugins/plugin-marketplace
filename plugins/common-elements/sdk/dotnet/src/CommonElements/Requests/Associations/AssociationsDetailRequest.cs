using System;

namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsDetail operation.
/// </summary>
public sealed record AssociationsDetailRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }
}
