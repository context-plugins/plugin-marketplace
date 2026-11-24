using System.ComponentModel.DataAnnotations;
using JuriSign.Models;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the CreateSignRequest operation.
/// </summary>
public sealed record CreateSignRequest
{
    /// <summary>
    /// Optional. Send a unique key (for example your own order reference) to make this call safely repeatable. If the network drops after your request reaches us but before you get the response, replay the exact same call with the same key: you receive the original response — same body, same status, with an <c>Idempotent-Replayed: true</c> header — and no second signature request is created, so no second SMS is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry. Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.
    /// </summary>
    [MaxLength(255)]
    public string? IdempotencyKey { get; init; }

    public required CreateSignRequestInput Body { get; init; }
}
