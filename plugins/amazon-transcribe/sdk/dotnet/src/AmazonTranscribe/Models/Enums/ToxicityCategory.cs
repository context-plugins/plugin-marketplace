using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ToxicityCategory>))]
public sealed record ToxicityCategory : OpenStringEnum<ToxicityCategory>
{
    private ToxicityCategory(string value) : base(value)
    {
    }

    public static readonly ToxicityCategory All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action<string> otherwise)
    {
        if (this == All) onAll();
        else otherwise(Value);
    }
}
