namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsOperationsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsOperationsListRequest
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
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (versionsId).
    /// </summary>
    public required string VersionsId { get; init; }

    /// <summary>
    /// Optional. An expression that filters the list of ApiOperations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c> or <c>=</c>. Filters are not case sensitive. The following fields in the <c>ApiOperation</c> are eligible for filtering: * <c>name</c> - The ApiOperation resource name. Allowed comparison operators: <c>=</c>. * <c>details.http_operation.path.path</c> - The http operation's complete path relative to server endpoint. Allowed comparison operators: <c>=</c>. * <c>details.http_operation.method</c> - The http operation method type. Allowed comparison operators: <c>=</c>. * <c>details.deprecated</c> - Indicates if the ApiOperation is deprecated. Allowed values are True / False indicating the deprycation status of the ApiOperation. Allowed comparison operators: <c>=</c>. * <c>create_time</c> - The time at which the ApiOperation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: <c>&gt;</c> and <c>&lt;</c>. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id</c> - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name</c> - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values</c> - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values</c> - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>details.deprecated = True</c> - The ApiOperation is deprecated. * <c>details.http_operation.method = GET AND create_time &lt; \"2021-08-15T14:50:00Z\" AND create_time &gt; \"2021-08-10T12:00:00Z\"</c> - The method of the http operation of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * <c>details.http_operation.method = GET OR details.http_operation.method = POST</c>. - The http operation of the method of ApiOperation is _GET_ or _POST_. * <c>details.deprecated = True AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test</c> - The filter string specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string is _test_.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of operations to return. The service may return fewer than this value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListApiOperations</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListApiOperations</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
