using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Member = new("member");

    public static readonly TypeEnum Guest = new("guest");

    public TResult Match<TResult>(Func<TResult> onMember, Func<TResult> onGuest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == Guest => onGuest(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onGuest, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == Guest) onGuest();
        else otherwise(Value);
    }
}
