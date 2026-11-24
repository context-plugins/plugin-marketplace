namespace Unbounce.Requests.Pages;

/// <summary>
/// The inputs of the ListFormFields operation.
/// </summary>
public sealed record ListFormFieldsRequest
{
    public required string PageId { get; init; }
}
