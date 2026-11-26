using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LineType>))]
public sealed record LineType : OpenStringEnum<LineType>
{
    private LineType(string value) : base(value)
    {
    }

    public static readonly LineType Comment = new("Comment");

    public static readonly LineType Account = new("Account");

    public static readonly LineType Item = new("Item");

    public static readonly LineType FixedAsset = new("Fixed Asset");

    public static readonly LineType Charge = new("Charge");

    public TResult Match<TResult>(Func<TResult> onComment,
        Func<TResult> onAccount,
        Func<TResult> onItem,
        Func<TResult> onFixedAsset,
        Func<TResult> onCharge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comment => onComment(),
            _ when this == Account => onAccount(),
            _ when this == Item => onItem(),
            _ when this == FixedAsset => onFixedAsset(),
            _ when this == Charge => onCharge(),
            _ => otherwise(Value)
        };

    public void Match(Action onComment,
        Action onAccount,
        Action onItem,
        Action onFixedAsset,
        Action onCharge,
        Action<string> otherwise)
    {
        if (this == Comment) onComment();
        else if (this == Account) onAccount();
        else if (this == Item) onItem();
        else if (this == FixedAsset) onFixedAsset();
        else if (this == Charge) onCharge();
        else otherwise(Value);
    }
}
