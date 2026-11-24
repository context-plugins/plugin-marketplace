namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2 operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Flag that specifies whether the schema is be read from the database or cache. Set to <c>true</c> to read the schema from the database. Defaults to cache.
    /// </summary>
    public bool? DisableCache { get; init; }

    /// <summary>
    /// Required. Name of the dataset for which you want to retrieve the schema. For example: <c>fact</c> or <c>agg_cus1</c>
    /// </summary>
    public string? Type { get; init; }
}
