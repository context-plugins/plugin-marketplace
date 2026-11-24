namespace JuriSign.Requests.Templates;

/// <summary>
/// The inputs of the ListTemplates operation.
/// </summary>
public sealed record ListTemplatesRequest
{
    public int PerPage { get; init; } = 20;

    public int Page { get; init; } = 1;
}
