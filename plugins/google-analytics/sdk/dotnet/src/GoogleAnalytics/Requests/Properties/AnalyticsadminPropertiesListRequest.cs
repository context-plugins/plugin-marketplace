namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesList operation.
/// </summary>
public sealed record AnalyticsadminPropertiesListRequest
{
    /// <summary>
    /// Required. An expression for filtering the results of the request. Fields eligible for filtering are: <c>parent:</c>(The resource name of the parent account/property) or <c>ancestor:</c>(The resource name of the parent account) or <c>firebase_project:</c>(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListProperties</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListProperties</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
    /// </summary>
    public bool? ShowDeleted { get; init; }
}
