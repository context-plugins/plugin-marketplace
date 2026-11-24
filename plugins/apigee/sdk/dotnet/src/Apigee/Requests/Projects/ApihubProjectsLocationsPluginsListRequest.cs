namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsListRequest
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
    /// Optional. An expression that filters the list of plugins. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c> or <c>=</c>. Filters are not case sensitive. The following fields in the <c>Plugins</c> are eligible for filtering: * <c>plugin_category</c> - The category of the Plugin. Allowed comparison operators: <c>=</c>. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>plugin_category = ON_RAMP</c> - The plugin is of category on ramp.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListPlugins</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListPlugins</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
