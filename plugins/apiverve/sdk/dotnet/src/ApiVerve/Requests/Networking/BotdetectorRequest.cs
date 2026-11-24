namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Botdetector operation.
/// </summary>
public sealed record BotdetectorRequest
{
    /// <summary>
    /// The user agent string to analyze (URL encoded)
    /// </summary>
    public required string Ua { get; init; }

    /// <summary>
    /// Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple crawler, it is checked against that operator's published IP ranges
    /// </summary>
    public string? Ip { get; init; }
}
