namespace WhoisFreaks.Requests.Typosquatting;

/// <summary>
/// The inputs of the TyposquattingInvoke operation.
/// </summary>
public sealed record TyposquattingRequest
{
    public string? Keyword { get; init; }

    public string? Pattern { get; init; }

    public string? PageToken { get; init; }
}
