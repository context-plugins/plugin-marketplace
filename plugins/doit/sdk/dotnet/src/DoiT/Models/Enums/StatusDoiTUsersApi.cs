using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The status of the user (active or invited).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTUsersApi>))]
public sealed record StatusDoiTUsersApi : OpenStringEnum<StatusDoiTUsersApi>
{
    private StatusDoiTUsersApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTUsersApi Active = new("active");

    public static readonly StatusDoiTUsersApi Invited = new("invited");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onInvited, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Invited => onInvited(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInvited, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Invited) onInvited();
        else otherwise(Value);
    }
}
