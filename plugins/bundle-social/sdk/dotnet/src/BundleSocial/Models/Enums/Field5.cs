using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field5>))]
public sealed record Field5 : OpenStringEnum<Field5>
{
    private Field5(string value) : base(value)
    {
    }

    public static readonly Field5 Uri = new("uri");

    public static readonly Field5 PlaceActionType = new("placeActionType");

    public static readonly Field5 IsPreferred = new("isPreferred");

    public TResult Match<TResult>(Func<TResult> onUri,
        Func<TResult> onPlaceActionType,
        Func<TResult> onIsPreferred,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Uri => onUri(),
            _ when this == PlaceActionType => onPlaceActionType(),
            _ when this == IsPreferred => onIsPreferred(),
            _ => otherwise(Value)
        };

    public void Match(Action onUri, Action onPlaceActionType, Action onIsPreferred, Action<string> otherwise)
    {
        if (this == Uri) onUri();
        else if (this == PlaceActionType) onPlaceActionType();
        else if (this == IsPreferred) onIsPreferred();
        else otherwise(Value);
    }
}
