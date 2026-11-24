using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FeatureType>))]
public sealed record FeatureType : OpenStringEnum<FeatureType>
{
    private FeatureType(string value) : base(value)
    {
    }

    public static readonly FeatureType Tables = new("TABLES");

    public static readonly FeatureType Forms = new("FORMS");

    public TResult Match<TResult>(Func<TResult> onTables, Func<TResult> onForms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Tables => onTables(),
            _ when this == Forms => onForms(),
            _ => otherwise(Value)
        };

    public void Match(Action onTables, Action onForms, Action<string> otherwise)
    {
        if (this == Tables) onTables();
        else if (this == Forms) onForms();
        else otherwise(Value);
    }
}
