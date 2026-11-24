using PlinthUsGrantsData.Models.AnyOf;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetApiV1ScreeningByEin operation.
/// </summary>
public sealed record GetApiV1ScreeningByEinRequest
{
    public required string Ein { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }

    /// <summary>
    /// Set to <c>candid</c> to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say.
    /// </summary>
    public Compat? Compat { get; init; }

    /// <summary>
    /// Return a canned example instead of querying the corpus. <b>Needs no API key and is not metered.</b> <c>1</c> is the plain success case; <c>list</c> enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.
    /// </summary>
    public ExamplePlinthUsGrantsDataOrganizationsApi? Example { get; init; }
}
