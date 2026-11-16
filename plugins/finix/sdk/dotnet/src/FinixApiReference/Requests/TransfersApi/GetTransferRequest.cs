namespace FinixApiReference.Requests.TransfersApi;

/// <summary>
/// The inputs of the GetTransfer operation.
/// </summary>
public sealed record GetTransferRequest
{
    /// <summary>
    /// The ID of the <c>Transfer</c> resource.
    /// </summary>
    public required string TransferId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
