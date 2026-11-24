using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// API Version status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusEinsteinBotsApiBetaVersionsApi>))]
public sealed record StatusEinsteinBotsApiBetaVersionsApi : OpenStringEnum<StatusEinsteinBotsApiBetaVersionsApi>
{
    private StatusEinsteinBotsApiBetaVersionsApi(string value) : base(value)
    {
    }

    public static readonly StatusEinsteinBotsApiBetaVersionsApi Active = new("ACTIVE");

    public static readonly StatusEinsteinBotsApiBetaVersionsApi Deprecated = new("DEPRECATED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onDeprecated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deprecated => onDeprecated(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeprecated, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deprecated) onDeprecated();
        else otherwise(Value);
    }
}
