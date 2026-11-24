using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Globe = new("globe");

    public static readonly TypeEnum LiveUsers = new("live-users");

    public static readonly TypeEnum Map = new("map");

    public static readonly TypeEnum Countries = new("countries");

    public TResult Match<TResult>(Func<TResult> onGlobe,
        Func<TResult> onLiveUsers,
        Func<TResult> onMap,
        Func<TResult> onCountries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Globe => onGlobe(),
            _ when this == LiveUsers => onLiveUsers(),
            _ when this == Map => onMap(),
            _ when this == Countries => onCountries(),
            _ => otherwise(Value)
        };

    public void Match(Action onGlobe, Action onLiveUsers, Action onMap, Action onCountries, Action<string> otherwise)
    {
        if (this == Globe) onGlobe();
        else if (this == LiveUsers) onLiveUsers();
        else if (this == Map) onMap();
        else if (this == Countries) onCountries();
        else otherwise(Value);
    }
}
