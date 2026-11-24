namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Cronparser operation.
/// </summary>
public sealed record CronparserRequest
{
    /// <summary>
    /// The cron expression to parse (5-field or 6-field format)
    /// </summary>
    public required string Expression { get; init; }
}
