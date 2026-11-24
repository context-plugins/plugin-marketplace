using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

/// <summary>
/// Webhook status. Valid values: 'active', 'inactive'
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusFellowDeveloperWebhooksApi>))]
public sealed record StatusFellowDeveloperWebhooksApi : OpenStringEnum<StatusFellowDeveloperWebhooksApi>
{
    private StatusFellowDeveloperWebhooksApi(string value) : base(value)
    {
    }

    public static readonly StatusFellowDeveloperWebhooksApi Active = new("active");

    public static readonly StatusFellowDeveloperWebhooksApi Inactive = new("inactive");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onInactive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
