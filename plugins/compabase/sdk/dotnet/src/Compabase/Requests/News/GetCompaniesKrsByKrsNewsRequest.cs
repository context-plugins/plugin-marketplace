namespace Compabase.Requests.News;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsNews operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsNewsRequest
{
    public required string Krs { get; init; }

    public string Locale { get; init; } = "en";
}
