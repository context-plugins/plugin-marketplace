using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record V1ApisRequest1
{
    /// <summary>
    /// The new name for the GraphqlApi object.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logConfig")]
    public LogConfig? LogConfig { get; init; }

    /// <summary>
    /// The new authentication type for the GraphqlApi object.
    /// </summary>
    [JsonPropertyName("authenticationType")]
    public required AuthenticationType3 AuthenticationType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userPoolConfig")]
    public UserPoolConfig? UserPoolConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openIDConnectConfig")]
    public OpenIdConnectConfig? OpenIdConnectConfig { get; init; }

    /// <summary>
    /// A list of additional authentication providers for the GraphqlApi API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalAuthenticationProviders")]
    public IReadOnlyList<AdditionalAuthenticationProvider>? AdditionalAuthenticationProviders { get; init; }

    /// <summary>
    /// A flag indicating whether to use X-Ray tracing for the GraphqlApi.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xrayEnabled")]
    public bool? XrayEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaAuthorizerConfig")]
    public LambdaAuthorizerConfig? LambdaAuthorizerConfig { get; init; }

    /// <summary>
    /// The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the AUTO_MERGE to update the merged API endpoint with the source API changes automatically.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mergedApiExecutionRoleArn")]
    public string? MergedApiExecutionRoleArn { get; init; }

    /// <summary>
    /// The owner contact information for an API resource. This field accepts any string input with a length of 0 - 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerContact")]
    public string? OwnerContact { get; init; }

    /// <summary>
    /// Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see GraphQL introspection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("introspectionConfig")]
    public IntrospectionConfig? IntrospectionConfig { get; init; }

    /// <summary>
    /// The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is 0 (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between 1 and 75 nested levels. This field will produce a limit error if the operation falls out of bounds. Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryDepthLimit")]
    public int? QueryDepthLimit { get; init; }

    /// <summary>
    /// The maximum number of resolvers that can be invoked in a single request. The default value is 0 (or unspecified), which will set the limit to 10000. When specified, the limit value can be between 1 and 10000. This field will produce a limit error if the operation falls out of bounds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolverCountLimit")]
    public int? ResolverCountLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enhancedMetricsConfig")]
    public EnhancedMetricsConfig? EnhancedMetricsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
