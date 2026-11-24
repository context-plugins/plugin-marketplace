namespace DidLogic.Requests.SmsApi;

/// <summary>
/// The inputs of the SmsIndex operation.
/// </summary>
public sealed record SmsIndexRequest
{
    /// <summary>
    /// Page number for pagination (starts from 1)
    /// </summary>
    public string Page { get; init; } = "1";

    /// <summary>
    /// Number of items per page
    /// </summary>
    public string PerPage { get; init; } = "20";
}
