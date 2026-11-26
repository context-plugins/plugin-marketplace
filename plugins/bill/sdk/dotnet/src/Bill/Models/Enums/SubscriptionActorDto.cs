using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Subscription change actor information.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionActorDto>))]
public sealed record SubscriptionActorDto : OpenStringEnum<SubscriptionActorDto>
{
    private SubscriptionActorDto(string value) : base(value)
    {
    }

    public static readonly SubscriptionActorDto Client = new("CLIENT");

    public static readonly SubscriptionActorDto System = new("SYSTEM");

    public TResult Match<TResult>(Func<TResult> onClient, Func<TResult> onSystem, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Client => onClient(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onClient, Action onSystem, Action<string> otherwise)
    {
        if (this == Client) onClient();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
