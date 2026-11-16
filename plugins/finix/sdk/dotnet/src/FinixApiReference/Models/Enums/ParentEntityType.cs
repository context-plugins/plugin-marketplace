using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of the original parent resource where the transaction occurred. This is only populated when <c>sub_type</c> is <c>FEE</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParentEntityType>))]
public sealed record ParentEntityType : OpenStringEnum<ParentEntityType>
{
    private ParentEntityType(string value) : base(value)
    {
    }

    public static readonly ParentEntityType Transfer = new("TRANSFER");

    public TResult Match<TResult>(Func<TResult> onTransfer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transfer => onTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransfer, Action<string> otherwise)
    {
        if (this == Transfer) onTransfer();
        else otherwise(Value);
    }
}
