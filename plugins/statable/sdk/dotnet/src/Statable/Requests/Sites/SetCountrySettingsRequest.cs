using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the SetCountrySettings operation.
/// </summary>
public sealed record SetCountrySettingsRequest
{
    public required long Id { get; init; }

    public required CountryListRequest Body { get; init; }
}
