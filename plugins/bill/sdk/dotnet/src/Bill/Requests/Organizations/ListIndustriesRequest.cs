namespace Bill.Requests.Organizations;

/// <summary>
/// The inputs of the ListIndustries operation.
/// </summary>
public sealed record ListIndustriesRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
