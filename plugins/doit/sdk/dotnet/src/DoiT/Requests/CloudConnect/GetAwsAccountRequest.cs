namespace DoiT.Requests.CloudConnect;

/// <summary>
/// The inputs of the GetAwsAccount operation.
/// </summary>
public sealed record GetAwsAccountRequest
{
    /// <summary>
    /// The AWS account ID.
    /// </summary>
    public required string AccountId { get; init; }
}
