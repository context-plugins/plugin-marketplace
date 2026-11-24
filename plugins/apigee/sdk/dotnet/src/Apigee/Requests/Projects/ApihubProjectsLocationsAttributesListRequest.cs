namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsAttributesList operation.
/// </summary>
public sealed record ApihubProjectsLocationsAttributesListRequest
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
    /// Optional. An expression that filters the list of Attributes. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c> or <c>=</c>. Filters are not case sensitive. The following fields in the <c>Attribute</c> are eligible for filtering: * <c>display_name</c> - The display name of the Attribute. Allowed comparison operators: <c>=</c>. * <c>definition_type</c> - The definition type of the attribute. Allowed comparison operators: <c>=</c>. * <c>scope</c> - The scope of the attribute. Allowed comparison operators: <c>=</c>. * <c>data_type</c> - The type of the data of the attribute. Allowed comparison operators: <c>=</c>. * <c>mandatory</c> - Denotes whether the attribute is mandatory or not. Allowed comparison operators: <c>=</c>. * <c>create_time</c> - The time at which the Attribute was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: <c>&gt;</c> and <c>&lt;</c>. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>display_name = production</c> - - The display name of the attribute is _production_. * <c>(display_name = production) AND (create_time &lt; \"2021-08-15T14:50:00Z\") AND (create_time &gt; \"2021-08-10T12:00:00Z\")</c> - The display name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * <c>display_name = production OR scope = api</c> - The attribute where the display name is _production_ or the scope is _api_.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of attribute resources to return. The service may return fewer than this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListAttributes</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListAttributes</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
