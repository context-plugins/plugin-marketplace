using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache. PER_RESOLVER_CACHING: Individual resolvers that you specify are cached. OPERATION_LEVEL_CACHING: Full requests are cached together and returned without executing resolvers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiCachingBehavior>))]
public sealed record ApiCachingBehavior : OpenStringEnum<ApiCachingBehavior>
{
    private ApiCachingBehavior(string value) : base(value)
    {
    }

    public static readonly ApiCachingBehavior FullRequestCaching = new("FULL_REQUEST_CACHING");

    public static readonly ApiCachingBehavior PerResolverCaching = new("PER_RESOLVER_CACHING");

    public static readonly ApiCachingBehavior OperationLevelCaching = new("OPERATION_LEVEL_CACHING");

    public TResult Match<TResult>(Func<TResult> onFullRequestCaching,
        Func<TResult> onPerResolverCaching,
        Func<TResult> onOperationLevelCaching,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullRequestCaching => onFullRequestCaching(),
            _ when this == PerResolverCaching => onPerResolverCaching(),
            _ when this == OperationLevelCaching => onOperationLevelCaching(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullRequestCaching,
        Action onPerResolverCaching,
        Action onOperationLevelCaching,
        Action<string> otherwise)
    {
        if (this == FullRequestCaching) onFullRequestCaching();
        else if (this == PerResolverCaching) onPerResolverCaching();
        else if (this == OperationLevelCaching) onOperationLevelCaching();
        else otherwise(Value);
    }
}
