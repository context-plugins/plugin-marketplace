namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the ListPublicForms operation.
/// </summary>
public sealed record ListPublicFormsRequest
{
    public int PerPage { get; init; } = 20;
}
