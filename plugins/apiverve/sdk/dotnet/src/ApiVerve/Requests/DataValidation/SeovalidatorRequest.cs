using ApiVerve.Models;

namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Seovalidator operation.
/// </summary>
public sealed record SeovalidatorRequest
{
    public required V1SeovalidatorRequest Body { get; init; }
}
