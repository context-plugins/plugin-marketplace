using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResponsibilityTypeDto>))]
public sealed record ResponsibilityTypeDto : OpenStringEnum<ResponsibilityTypeDto>
{
    private ResponsibilityTypeDto(string value) : base(value)
    {
    }

    public static readonly ResponsibilityTypeDto User = new("user");

    public static readonly ResponsibilityTypeDto UserGroup = new("userGroup");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onUserGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == UserGroup => onUserGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onUserGroup, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == UserGroup) onUserGroup();
        else otherwise(Value);
    }
}
