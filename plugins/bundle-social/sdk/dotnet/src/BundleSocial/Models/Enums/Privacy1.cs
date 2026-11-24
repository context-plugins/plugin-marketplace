using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Privacy1>))]
public sealed record Privacy1 : OpenStringEnum<Privacy1>
{
    private Privacy1(string value) : base(value)
    {
    }

    public static readonly Privacy1 Connections = new("CONNECTIONS");

    public static readonly Privacy1 Public = new("PUBLIC");

    public static readonly Privacy1 LoggedIn = new("LOGGED_IN");

    public static readonly Privacy1 Container = new("CONTAINER");

    public TResult Match<TResult>(Func<TResult> onConnections,
        Func<TResult> onPublic,
        Func<TResult> onLoggedIn,
        Func<TResult> onContainer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Connections => onConnections(),
            _ when this == Public => onPublic(),
            _ when this == LoggedIn => onLoggedIn(),
            _ when this == Container => onContainer(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnections,
        Action onPublic,
        Action onLoggedIn,
        Action onContainer,
        Action<string> otherwise)
    {
        if (this == Connections) onConnections();
        else if (this == Public) onPublic();
        else if (this == LoggedIn) onLoggedIn();
        else if (this == Container) onContainer();
        else otherwise(Value);
    }
}
