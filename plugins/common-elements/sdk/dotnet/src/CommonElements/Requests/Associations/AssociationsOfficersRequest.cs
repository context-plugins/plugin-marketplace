using System;

namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsOfficers operation.
/// </summary>
public sealed record AssociationsOfficersRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }
}
