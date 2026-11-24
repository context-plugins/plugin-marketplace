using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RecipientScope>))]
public sealed record RecipientScope : OpenStringEnum<RecipientScope>
{
    private RecipientScope(string value) : base(value)
    {
    }

    public static readonly RecipientScope Internal = new("internal");

    public static readonly RecipientScope External = new("external");

    public TResult Match<TResult>(Func<TResult> onInternal,
        Func<TResult> onExternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Internal => onInternal(),
            _ when this == External => onExternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onInternal, Action onExternal, Action<string> otherwise)
    {
        if (this == Internal) onInternal();
        else if (this == External) onExternal();
        else otherwise(Value);
    }
}
