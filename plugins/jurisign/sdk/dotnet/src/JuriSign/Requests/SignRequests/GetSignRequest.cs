using System;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the GetSignRequest operation.
/// </summary>
public sealed record GetSignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
