namespace AmazonAppSync.Requests.DataSources;

/// <summary>
/// The inputs of the GetDataSourceIntrospection operation.
/// </summary>
public sealed record GetDataSourceIntrospectionRequest
{
    /// <summary>
    /// The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.
    /// </summary>
    public required string IntrospectionId { get; init; }

    /// <summary>
    /// A boolean flag that determines whether SDL should be generated for introspected types. If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL only contains the type data and no additional metadata or directives.
    /// </summary>
    public bool? IncludeModelsSdl { get; init; }

    /// <summary>
    /// Determines the number of types to be returned in a single response before paginating. This value is typically taken from nextToken value from the previous response.
    /// </summary>
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of introspected types that will be returned in a single response.
    /// </summary>
    public int? MaxResults { get; init; }
}
