using System;

namespace Skribble.Requests.AdditionalInformation;

/// <summary>
/// The inputs of the GetInfosFormat operation.
/// </summary>
public sealed record GetInfosFormatRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }
}
