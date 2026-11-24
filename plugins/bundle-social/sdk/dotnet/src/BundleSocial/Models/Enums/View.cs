using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<View>))]
public sealed record View : OpenStringEnum<View>
{
    private View(string value) : base(value)
    {
    }

    public static readonly View CategoryViewUnspecified = new("CATEGORY_VIEW_UNSPECIFIED");

    public static readonly View Basic = new("BASIC");

    public static readonly View Full = new("FULL");

    public TResult Match<TResult>(Func<TResult> onCategoryViewUnspecified,
        Func<TResult> onBasic,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CategoryViewUnspecified => onCategoryViewUnspecified(),
            _ when this == Basic => onBasic(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onCategoryViewUnspecified, Action onBasic, Action onFull, Action<string> otherwise)
    {
        if (this == CategoryViewUnspecified) onCategoryViewUnspecified();
        else if (this == Basic) onBasic();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
