using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApiRecapTemplateSectionType>))]
public sealed record ApiRecapTemplateSectionType : OpenStringEnum<ApiRecapTemplateSectionType>
{
    private ApiRecapTemplateSectionType(string value) : base(value)
    {
    }

    public static readonly ApiRecapTemplateSectionType Standard = new("STANDARD");

    public static readonly ApiRecapTemplateSectionType Custom = new("CUSTOM");

    public TResult Match<TResult>(Func<TResult> onStandard, Func<TResult> onCustom, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onCustom, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
