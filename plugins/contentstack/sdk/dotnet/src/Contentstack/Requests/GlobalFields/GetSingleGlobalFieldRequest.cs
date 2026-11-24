namespace Contentstack.Requests.GlobalFields;

/// <summary>
/// The inputs of the GetSingleGlobalField operation.
/// </summary>
public sealed record GetSingleGlobalFieldRequest
{
    /// <summary>
    /// The unique identifier (UID) of the global field.
    /// </summary>
    public required string GlobalFieldUid { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
