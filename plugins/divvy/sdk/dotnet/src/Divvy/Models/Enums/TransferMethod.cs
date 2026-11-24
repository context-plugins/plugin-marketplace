using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// International Payment Transfer Method.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransferMethod>))]
public sealed record TransferMethod : OpenStringEnum<TransferMethod>
{
    private TransferMethod(string value) : base(value)
    {
    }

    public static readonly TransferMethod Wire = new("WIRE");

    public static readonly TransferMethod Local = new("LOCAL");

    public static readonly TransferMethod Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onWire,
        Func<TResult> onLocal,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Wire => onWire(),
            _ when this == Local => onLocal(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onWire, Action onLocal, Action onUndefined, Action<string> otherwise)
    {
        if (this == Wire) onWire();
        else if (this == Local) onLocal();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
