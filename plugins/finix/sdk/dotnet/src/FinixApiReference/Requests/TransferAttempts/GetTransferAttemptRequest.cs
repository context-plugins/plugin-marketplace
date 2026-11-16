namespace FinixApiReference.Requests.TransferAttempts;

/// <summary>
/// The inputs of the GetTransferAttempt operation.
/// </summary>
public sealed record GetTransferAttemptRequest
{
    /// <summary>
    /// The ID of the <c>Transfer Attempt</c>.
    /// </summary>
    public required string TransferAttemptId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
