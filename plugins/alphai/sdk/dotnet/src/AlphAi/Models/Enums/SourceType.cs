using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceType>))]
public sealed record SourceType : OpenStringEnum<SourceType>
{
    private SourceType(string value) : base(value)
    {
    }

    public static readonly SourceType Gdelt = new("gdelt");

    public static readonly SourceType SecForm4 = new("sec_form4");

    public static readonly SourceType SecForm8K = new("sec_form8k");

    public static readonly SourceType SecForm6K = new("sec_form6k");

    public TResult Match<TResult>(Func<TResult> onGdelt,
        Func<TResult> onSecForm4,
        Func<TResult> onSecForm8K,
        Func<TResult> onSecForm6K,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gdelt => onGdelt(),
            _ when this == SecForm4 => onSecForm4(),
            _ when this == SecForm8K => onSecForm8K(),
            _ when this == SecForm6K => onSecForm6K(),
            _ => otherwise(Value)
        };

    public void Match(Action onGdelt,
        Action onSecForm4,
        Action onSecForm8K,
        Action onSecForm6K,
        Action<string> otherwise)
    {
        if (this == Gdelt) onGdelt();
        else if (this == SecForm4) onSecForm4();
        else if (this == SecForm8K) onSecForm8K();
        else if (this == SecForm6K) onSecForm6K();
        else otherwise(Value);
    }
}
