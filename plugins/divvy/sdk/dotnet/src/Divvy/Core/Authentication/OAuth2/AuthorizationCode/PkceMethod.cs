using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Core.Authentication.OAuth2.AuthorizationCode;

[JsonConverter(typeof(StringEnumConverter<PkceMethod>))]
public sealed record PkceMethod : ClosedStringEnum<PkceMethod>
{
    public static readonly PkceMethod S256 = new("S256");
    public static readonly PkceMethod Plain = new("plain");

    private PkceMethod(string value) : base(value) { }

    internal TResult Match<TResult>(
        Func<TResult> onS256,
        Func<TResult> onPlain) =>
        this switch
        {
            _ when this == S256 => onS256(),
            _ when this == Plain => onPlain(),
            _ => throw new InvalidOperationException($"{nameof(PkceMethod)} holds no known value."),
        };
}
