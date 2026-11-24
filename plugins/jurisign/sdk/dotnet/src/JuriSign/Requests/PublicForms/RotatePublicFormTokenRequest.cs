using System;

namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the RotatePublicFormToken operation.
/// </summary>
public sealed record RotatePublicFormTokenRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
