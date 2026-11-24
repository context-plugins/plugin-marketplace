using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Bug = new("bug");

    public static readonly Category FeatureRequest = new("feature_request");

    public static readonly Category Docs = new("docs");

    public static readonly Category Other = new("other");

    public TResult Match<TResult>(Func<TResult> onBug,
        Func<TResult> onFeatureRequest,
        Func<TResult> onDocs,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bug => onBug(),
            _ when this == FeatureRequest => onFeatureRequest(),
            _ when this == Docs => onDocs(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onBug, Action onFeatureRequest, Action onDocs, Action onOther, Action<string> otherwise)
    {
        if (this == Bug) onBug();
        else if (this == FeatureRequest) onFeatureRequest();
        else if (this == Docs) onDocs();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
