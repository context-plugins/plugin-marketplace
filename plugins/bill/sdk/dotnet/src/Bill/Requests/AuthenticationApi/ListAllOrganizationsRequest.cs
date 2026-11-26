namespace Bill.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the ListAllOrganizations operation.
/// </summary>
public sealed record ListAllOrganizationsRequest
{
    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
