using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Request = new("REQUEST");

    public static readonly Category Application = new("APPLICATION");

    public static readonly Category Server = new("SERVER");

    public static readonly Category Downstream = new("DOWNSTREAM");

    public TResult Match<TResult>(Func<TResult> onRequest,
        Func<TResult> onApplication,
        Func<TResult> onServer,
        Func<TResult> onDownstream,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Request => onRequest(),
            _ when this == Application => onApplication(),
            _ when this == Server => onServer(),
            _ when this == Downstream => onDownstream(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequest,
        Action onApplication,
        Action onServer,
        Action onDownstream,
        Action<string> otherwise)
    {
        if (this == Request) onRequest();
        else if (this == Application) onApplication();
        else if (this == Server) onServer();
        else if (this == Downstream) onDownstream();
        else otherwise(Value);
    }
}
