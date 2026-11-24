namespace Contentstack.Requests.Accounts;

/// <summary>
/// The inputs of the GetAllAccounts operation.
/// </summary>
public sealed record GetAllAccountsRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
