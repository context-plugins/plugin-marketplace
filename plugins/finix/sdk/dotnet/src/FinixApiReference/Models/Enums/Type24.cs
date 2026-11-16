using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of transaction the receipt was created for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type24>))]
public sealed record Type24 : OpenStringEnum<Type24>
{
    private Type24(string value) : base(value)
    {
    }

    public static readonly Type24 Transfer = new("TRANSFER");

    public static readonly Type24 Authorization = new("AUTHORIZATION");

    public TResult Match<TResult>(Func<TResult> onTransfer,
        Func<TResult> onAuthorization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transfer => onTransfer(),
            _ when this == Authorization => onAuthorization(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransfer, Action onAuthorization, Action<string> otherwise)
    {
        if (this == Transfer) onTransfer();
        else if (this == Authorization) onAuthorization();
        else otherwise(Value);
    }
}
