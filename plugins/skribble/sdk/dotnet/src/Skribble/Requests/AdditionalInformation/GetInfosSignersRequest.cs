using System;

namespace Skribble.Requests.AdditionalInformation;

/// <summary>
/// The inputs of the GetInfosSigners operation.
/// </summary>
public sealed record GetInfosSignersRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }
}
