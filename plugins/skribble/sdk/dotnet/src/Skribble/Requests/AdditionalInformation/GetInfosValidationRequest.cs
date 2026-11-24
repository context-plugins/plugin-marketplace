using System;

namespace Skribble.Requests.AdditionalInformation;

/// <summary>
/// The inputs of the GetInfosValidation operation.
/// </summary>
public sealed record GetInfosValidationRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }
}
