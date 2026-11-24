using System;

namespace Skribble.Requests.Reports;

/// <summary>
/// The inputs of the GetReportsEtsi operation.
/// </summary>
public sealed record GetReportsEtsiRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }
}
