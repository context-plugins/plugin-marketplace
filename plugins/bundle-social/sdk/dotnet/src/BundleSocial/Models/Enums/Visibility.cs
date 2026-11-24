using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Visibility>))]
public sealed record Visibility : OpenStringEnum<Visibility>
{
    private Visibility(string value) : base(value)
    {
    }

    public static readonly Visibility Connections = new("CONNECTIONS");

    public static readonly Visibility Public = new("PUBLIC");

    public static readonly Visibility LoggedIn = new("LOGGED_IN");

    public static readonly Visibility Container = new("CONTAINER");

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
