using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the VoidPayment operation.
/// </summary>
public sealed record VoidPaymentRequest
{
    [MinLength(1)]
    public required string PaymentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required VoidRequestDto Body { get; init; }
}
