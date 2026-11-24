using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<License>))]
public sealed record License : OpenStringEnum<License>
{
    private License(string value) : base(value)
    {
    }

    public static readonly License Public = new("Public");

    public static readonly License Share = new("Share");

    public static readonly License ShareCommercially = new("ShareCommercially");

    public static readonly License Modify = new("Modify");

    public static readonly License ModifyCommercially = new("ModifyCommercially");

    public TResult Match<TResult>(Func<TResult> onPublic,
        Func<TResult> onShare,
        Func<TResult> onShareCommercially,
        Func<TResult> onModify,
        Func<TResult> onModifyCommercially,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Share => onShare(),
            _ when this == ShareCommercially => onShareCommercially(),
            _ when this == Modify => onModify(),
            _ when this == ModifyCommercially => onModifyCommercially(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic,
        Action onShare,
        Action onShareCommercially,
        Action onModify,
        Action onModifyCommercially,
        Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Share) onShare();
        else if (this == ShareCommercially) onShareCommercially();
        else if (this == Modify) onModify();
        else if (this == ModifyCommercially) onModifyCommercially();
        else otherwise(Value);
    }
}
