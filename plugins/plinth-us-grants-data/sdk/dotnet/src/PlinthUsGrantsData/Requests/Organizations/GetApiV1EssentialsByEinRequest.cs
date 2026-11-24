using PlinthUsGrantsData.Models.AnyOf;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetApiV1EssentialsByEin operation.
/// </summary>
public sealed record GetApiV1EssentialsByEinRequest
{
    public required string Ein { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }

    /// <summary>
    /// Return a canned example instead of querying the corpus. <b>Needs no API key and is not metered.</b> <c>1</c> is the plain success case; <c>list</c> enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.
    /// </summary>
    public Example1? Example { get; init; }
}
