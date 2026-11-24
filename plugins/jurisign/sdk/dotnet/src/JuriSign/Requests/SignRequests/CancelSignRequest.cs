using System;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the CancelSignRequest operation.
/// </summary>
public sealed record CancelSignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
