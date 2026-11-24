namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsCurationsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsCurationsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Optional. An expression that filters the list of curation resources. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c>, <c>:</c> or <c>=</c>. Filters are case insensitive. The following fields in the <c>curation resource</c> are eligible for filtering: * <c>create_time</c> - The time at which the curation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: <c>&gt;</c> and <c>&lt;</c>. * <c>display_name</c> - The display name of the curation. Allowed comparison operators: <c>=</c>. * <c>state</c> - The state of the curation. Allowed comparison operators: <c>=</c>. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>create_time &lt; \"2021-08-15T14:50:00Z\" AND create_time &gt; \"2021-08-10T12:00:00Z\"</c> - The curation resource was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of curation resources to return. The service may return fewer than this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListCurations</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListCurations</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
