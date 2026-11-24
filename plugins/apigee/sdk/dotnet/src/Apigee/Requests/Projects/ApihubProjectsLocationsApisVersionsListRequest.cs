namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsListRequest
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
    /// Optional. An expression that filters the list of Versions. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: <c>&lt;</c>, <c>&gt;</c> or <c>=</c>. Filters are not case sensitive. The following fields in the <c>Version</c> are eligible for filtering: * <c>display_name</c> - The display name of the Version. Allowed comparison operators: <c>=</c>. * <c>create_time</c> - The time at which the Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: <c>&gt;</c> and <c>&lt;</c>. * <c>lifecycle.enum_values.values.id</c> - The allowed value id of the lifecycle attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>lifecycle.enum_values.values.display_name</c> - The allowed value display name of the lifecycle attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>compliance.enum_values.values.id</c> - The allowed value id of the compliances attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>compliance.enum_values.values.display_name</c> - The allowed value display name of the compliances attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>accreditation.enum_values.values.id</c> - The allowed value id of the accreditations attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>accreditation.enum_values.values.display_name</c> - The allowed value display name of the accreditations attribute associated with the Version. Allowed comparison operators: <c>:</c>. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id</c> - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name</c> - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values</c> - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * <c>attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values</c> - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is <c>:</c>. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either <c>AND</c> logic operator or <c>OR</c> logical operator but not both of them together i.e. only one of the <c>AND</c> or <c>OR</c> operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then <c>INVALID_ARGUMENT</c> error is returned by the API. Here are a few examples: * <c>lifecycle.enum_values.values.id: preview-id</c> - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_. * <c>lifecycle.enum_values.values.display_name: \"Preview Display Name\"</c> - The filter string specifies that the display name of the allowed value associated with the lifecycle attribute of the Version is <c>Preview Display Name</c>. * <c>lifecycle.enum_values.values.id: preview-id AND create_time &lt; \"2021-08-15T14:50:00Z\" AND create_time &gt; \"2021-08-10T12:00:00Z\"</c> - The id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and it was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * <c>compliance.enum_values.values.id: gdpr-id OR compliance.enum_values.values.id: pci-dss-id</c> - The id of the allowed value associated with the compliance attribute is _gdpr-id_ or _pci-dss-id_. * <c>lifecycle.enum_values.values.id: preview-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test</c> - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and the value of the user defined attribute of type string is _test_.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListVersions</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListVersions</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
