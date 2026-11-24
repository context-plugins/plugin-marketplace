namespace ApiVerve.Requests.AiComputerVision;

/// <summary>
/// The inputs of the Articleideas operation.
/// </summary>
public sealed record ArticleideasRequest
{
    /// <summary>
    /// The topic for which you want to generate article ideas (up to 50 characters)
    /// </summary>
    public required string Topic { get; init; }
}
