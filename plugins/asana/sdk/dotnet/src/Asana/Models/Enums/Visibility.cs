using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The visibility of the team to users in the same organization
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Visibility>))]
public sealed record Visibility : OpenStringEnum<Visibility>
{
    private Visibility(string value) : base(value)
    {
    }

    public static readonly Visibility Secret = new("secret");

    public static readonly Visibility RequestToJoin = new("request_to_join");

    public static readonly Visibility Public = new("public");

    public TResult Match<TResult>(Func<TResult> onSecret,
        Func<TResult> onRequestToJoin,
        Func<TResult> onPublic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Secret => onSecret(),
            _ when this == RequestToJoin => onRequestToJoin(),
            _ when this == Public => onPublic(),
            _ => otherwise(Value)
        };

    public void Match(Action onSecret, Action onRequestToJoin, Action onPublic, Action<string> otherwise)
    {
        if (this == Secret) onSecret();
        else if (this == RequestToJoin) onRequestToJoin();
        else if (this == Public) onPublic();
        else otherwise(Value);
    }
}
