using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.Meta;

/// <summary>
/// The inputs of the GetMeta operation.
/// </summary>
public sealed record GetMetaRequest
{
    /// <summary>
    /// Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. <c>x_plinth.dataset</c> names the source, licence and currency behind the answer. Distinct from <c>country</c>, which is where the RECIPIENT sits.
    /// </summary>
    public Jurisdiction? Jurisdiction { get; init; }
}
