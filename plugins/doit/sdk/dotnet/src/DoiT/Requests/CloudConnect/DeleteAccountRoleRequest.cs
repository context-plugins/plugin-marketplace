namespace DoiT.Requests.CloudConnect;

/// <summary>
/// The inputs of the DeleteAccountRole operation.
/// </summary>
public sealed record DeleteAccountRoleRequest
{
    /// <summary>
    /// The AWS account ID.
    /// </summary>
    public required string AccountId { get; init; }
}
