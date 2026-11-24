using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContentLanguage>))]
public sealed record ContentLanguage : OpenStringEnum<ContentLanguage>
{
    private ContentLanguage(string value) : base(value)
    {
    }

    public static readonly ContentLanguage En = new("en");

    public TResult Match<TResult>(Func<TResult> onEn, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn, Action<string> otherwise)
    {
        if (this == En) onEn();
        else otherwise(Value);
    }
}
