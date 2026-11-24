namespace Divvy.Requests.Reimbursements;

/// <summary>
/// The inputs of the CreateImageUploadUrl operation.
/// </summary>
public sealed record CreateImageUploadUrlRequest
{
    public string? ApiToken { get; init; }
}
