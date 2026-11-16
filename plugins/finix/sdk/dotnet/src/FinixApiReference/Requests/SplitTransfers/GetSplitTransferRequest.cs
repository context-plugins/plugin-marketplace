namespace FinixApiReference.Requests.SplitTransfers;

/// <summary>
/// The inputs of the GetSplitTransfer operation.
/// </summary>
public sealed record GetSplitTransferRequest
{
    /// <summary>
    /// The ID of the <c>Split Transfer</c>.
    /// </summary>
    public required string SplitTransferId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
