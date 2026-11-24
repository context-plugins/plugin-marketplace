using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The status of the user (invited)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DoiTUsersApi>))]
public sealed record Status1DoiTUsersApi : OpenStringEnum<Status1DoiTUsersApi>
{
    private Status1DoiTUsersApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTUsersApi Invited = new("invited");

    public TResult Match<TResult>(Func<TResult> onInvited, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Invited => onInvited(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvited, Action<string> otherwise)
    {
        if (this == Invited) onInvited();
        else otherwise(Value);
    }
}
