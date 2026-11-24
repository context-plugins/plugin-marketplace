using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// Entity type (returned on read APIs)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Users = new("users");

    public static readonly TypeEnum Groups = new("groups");

    public TResult Match<TResult>(Func<TResult> onUsers, Func<TResult> onGroups, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Users => onUsers(),
            _ when this == Groups => onGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsers, Action onGroups, Action<string> otherwise)
    {
        if (this == Users) onUsers();
        else if (this == Groups) onGroups();
        else otherwise(Value);
    }
}
