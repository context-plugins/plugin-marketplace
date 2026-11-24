using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the GetCheckImageData operation.
/// </summary>
public sealed record GetCheckImageDataRequest
{
    [MinLength(1)]
    public required string PaymentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
