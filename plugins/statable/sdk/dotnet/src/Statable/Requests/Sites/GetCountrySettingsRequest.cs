namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetCountrySettings operation.
/// </summary>
public sealed record GetCountrySettingsRequest
{
    public required long Id { get; init; }
}
