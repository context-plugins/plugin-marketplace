using System;

namespace Skribble.Requests.ValidationApi;

/// <summary>
/// The inputs of the DeleteValidation operation.
/// </summary>
public sealed record DeleteValidationRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }
}
