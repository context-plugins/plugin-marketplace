using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCallnodeIoSipTrunksApi>))]
public sealed record StatusCallnodeIoSipTrunksApi : OpenStringEnum<StatusCallnodeIoSipTrunksApi>
{
    private StatusCallnodeIoSipTrunksApi(string value) : base(value)
    {
    }

    public static readonly StatusCallnodeIoSipTrunksApi Active = new("active");

    public static readonly StatusCallnodeIoSipTrunksApi Disabled = new("disabled");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDisabled, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
