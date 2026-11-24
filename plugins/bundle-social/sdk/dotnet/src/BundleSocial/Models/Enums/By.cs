using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// How the list was resolved. <c>category</c> means your <c>regionCode</c>/<c>languageCode</c> were applied; <c>location</c> means they could not be (the location has no primary category or no region code, which is common for service-area businesses) and the attributes are the location's defaults instead.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<By>))]
public sealed record By : OpenStringEnum<By>
{
    private By(string value) : base(value)
    {
    }

    public static readonly By Category = new("category");

    public static readonly By Location = new("location");

    public TResult Match<TResult>(Func<TResult> onCategory,
        Func<TResult> onLocation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Category => onCategory(),
            _ when this == Location => onLocation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCategory, Action onLocation, Action<string> otherwise)
    {
        if (this == Category) onCategory();
        else if (this == Location) onLocation();
        else otherwise(Value);
    }
}
