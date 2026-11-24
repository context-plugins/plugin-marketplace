using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Member = new("member");

    public static readonly TypeEnum External = new("external");

    public static readonly TypeEnum Api = new("api");

    public static readonly TypeEnum Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onMember,
        Func<TResult> onExternal,
        Func<TResult> onApi,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == External => onExternal(),
            _ when this == Api => onApi(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onExternal, Action onApi, Action onUnknown, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == External) onExternal();
        else if (this == Api) onApi();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
