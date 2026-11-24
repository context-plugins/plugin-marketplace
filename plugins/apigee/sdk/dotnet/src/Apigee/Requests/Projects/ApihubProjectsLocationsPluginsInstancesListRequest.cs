namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsInstancesList operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsInstancesListRequest
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
    /// Resource name segment (pluginsId).
    /// </summary>
    public required string PluginsId { get; init; }

    /// <summary>
    /// Optional. An expression that filters the list of plugin instances. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c> or <c>=</c>. Filters are not case sensitive. The following fields in the <c>PluginInstances</c> are eligible for filtering: * <c>state</c> - The state of the Plugin Instance. Allowed comparison operators: <c>=</c>. * <c>source_project_id</c> - The source project id of the Plugin Instance. Allowed comparison operators: <c>=</c>. A filter function is also supported in the filter string. The filter function is <c>id(name)</c>. The <c>id(name)</c> function returns the id of the resource name. For example, <c>id(name) = \"plugin-instance-1\"</c> is equivalent to <c>name = \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"</c> provided the parent is <c>projects/test-project-id/locations/test-location-id/plugins/plugin-1</c>. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>state = ENABLED</c> - The plugin instance is in enabled state.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListPluginInstances</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListPluginInstances</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
