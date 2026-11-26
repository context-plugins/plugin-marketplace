using Bill.Core.Validation.Attributes;

namespace Bill.Requests.CustomFields;

/// <summary>
/// The inputs of the ListCustomFields operation.
/// </summary>
public sealed record ListCustomFieldsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public long? Max { get; init; }

    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? ApiToken { get; init; }
}
