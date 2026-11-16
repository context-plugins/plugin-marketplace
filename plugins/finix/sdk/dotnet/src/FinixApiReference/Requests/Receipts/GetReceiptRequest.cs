namespace FinixApiReference.Requests.Receipts;

/// <summary>
/// The inputs of the GetReceipt operation.
/// </summary>
public sealed record GetReceiptRequest
{
    /// <summary>
    /// The ID of the <c>Receipt</c>.
    /// </summary>
    public required string ReceiptId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
