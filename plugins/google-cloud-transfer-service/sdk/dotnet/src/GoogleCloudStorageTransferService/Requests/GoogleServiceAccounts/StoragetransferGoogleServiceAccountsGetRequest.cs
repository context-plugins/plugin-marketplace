namespace GoogleCloudStorageTransferService.Requests.GoogleServiceAccounts;

/// <summary>
/// The inputs of the StoragetransferGoogleServiceAccountsGet operation.
/// </summary>
public sealed record StoragetransferGoogleServiceAccountsGetRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud project that the Google service account is associated with.
    /// </summary>
    public required string ProjectId { get; init; }
}
