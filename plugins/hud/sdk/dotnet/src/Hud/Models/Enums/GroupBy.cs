using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupBy>))]
public sealed record GroupBy : OpenStringEnum<GroupBy>
{
    private GroupBy(string value) : base(value)
    {
    }

    public static readonly GroupBy ApiKey = new("api_key");

    public static readonly GroupBy Byok = new("byok");

    public static readonly GroupBy Model = new("model");

    public static readonly GroupBy User = new("user");

    public static readonly GroupBy Route = new("route");

    public TResult Match<TResult>(Func<TResult> onApiKey,
        Func<TResult> onByok,
        Func<TResult> onModel,
        Func<TResult> onUser,
        Func<TResult> onRoute,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiKey => onApiKey(),
            _ when this == Byok => onByok(),
            _ when this == Model => onModel(),
            _ when this == User => onUser(),
            _ when this == Route => onRoute(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiKey,
        Action onByok,
        Action onModel,
        Action onUser,
        Action onRoute,
        Action<string> otherwise)
    {
        if (this == ApiKey) onApiKey();
        else if (this == Byok) onByok();
        else if (this == Model) onModel();
        else if (this == User) onUser();
        else if (this == Route) onRoute();
        else otherwise(Value);
    }
}
