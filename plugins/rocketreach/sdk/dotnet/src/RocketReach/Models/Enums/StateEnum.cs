using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Enum;

namespace RocketReach.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StateEnum>))]
public sealed record StateEnum : OpenStringEnum<StateEnum>
{
    private StateEnum(string value) : base(value)
    {
    }

    public static readonly StateEnum Anonymous = new("anonymous");

    public static readonly StateEnum TestUser = new("test_user");

    public static readonly StateEnum Registered = new("registered");

    public TResult Match<TResult>(Func<TResult> onAnonymous,
        Func<TResult> onTestUser,
        Func<TResult> onRegistered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Anonymous => onAnonymous(),
            _ when this == TestUser => onTestUser(),
            _ when this == Registered => onRegistered(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnonymous, Action onTestUser, Action onRegistered, Action<string> otherwise)
    {
        if (this == Anonymous) onAnonymous();
        else if (this == TestUser) onTestUser();
        else if (this == Registered) onRegistered();
        else otherwise(Value);
    }
}
