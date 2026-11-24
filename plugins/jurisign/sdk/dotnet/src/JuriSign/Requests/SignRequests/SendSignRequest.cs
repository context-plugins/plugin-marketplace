using System;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the SendSignRequest operation.
/// </summary>
public sealed record SendSignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
