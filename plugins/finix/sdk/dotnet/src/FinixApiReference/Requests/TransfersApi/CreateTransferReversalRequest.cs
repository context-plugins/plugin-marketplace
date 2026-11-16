using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.TransfersApi;

/// <summary>
/// The inputs of the CreateTransferReversal operation.
/// </summary>
public sealed record CreateTransferReversalRequest
{
    /// <summary>
    /// The ID of the parent <c>Transfer</c> resource.
    /// </summary>
    public required string TransferId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required TransfersReversalsRequest Body { get; init; }
}
