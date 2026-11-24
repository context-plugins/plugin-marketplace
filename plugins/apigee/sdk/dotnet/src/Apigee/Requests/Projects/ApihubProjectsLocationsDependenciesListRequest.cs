namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDependenciesList operation.
/// </summary>
public sealed record ApihubProjectsLocationsDependenciesListRequest
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
    /// Optional. An expression that filters the list of Dependencies. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. Allowed comparison operator is <c>=</c>. Filters are not case sensitive. The following fields in the <c>Dependency</c> are eligible for filtering: * <c>consumer.operation_resource_name</c> - The operation resource name for the consumer entity involved in a dependency. Allowed comparison operators: <c>=</c>. * <c>consumer.external_api_resource_name</c> - The external api resource name for the consumer entity involved in a dependency. Allowed comparison operators: <c>=</c>. * <c>supplier.operation_resource_name</c> - The operation resource name for the supplier entity involved in a dependency. Allowed comparison operators: <c>=</c>. * <c>supplier.external_api_resource_name</c> - The external api resource name for the supplier entity involved in a dependency. Allowed comparison operators: <c>=</c>. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. For example, <c>consumer.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"</c> - The dependencies with either consumer or supplier operation resource name as _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of dependency resources to return. The service may return fewer than this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListDependencies</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListDependencies</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
