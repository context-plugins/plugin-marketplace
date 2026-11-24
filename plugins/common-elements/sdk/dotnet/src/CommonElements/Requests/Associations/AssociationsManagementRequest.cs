using System;

namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsManagement operation.
/// </summary>
public sealed record AssociationsManagementRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }
}
