namespace Contentstack.Requests.GlobalFields;

/// <summary>
/// The inputs of the GetAllGlobalFields operation.
/// </summary>
public sealed record GetAllGlobalFieldsRequest
{
    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
