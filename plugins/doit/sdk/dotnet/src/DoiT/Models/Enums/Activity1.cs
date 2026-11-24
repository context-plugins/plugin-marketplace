using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Activity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Activity1>))]
public sealed record Activity1 : OpenStringEnum<Activity1>
{
    private Activity1(string value) : base(value)
    {
    }

    public static readonly Activity1 NodeCreate = new("NODE_CREATE");

    public static readonly Activity1 NodeUpdate = new("NODE_UPDATE");

    public static readonly Activity1 NodeDelete = new("NODE_DELETE");

    public TResult Match<TResult>(Func<TResult> onNodeCreate,
        Func<TResult> onNodeUpdate,
        Func<TResult> onNodeDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NodeCreate => onNodeCreate(),
            _ when this == NodeUpdate => onNodeUpdate(),
            _ when this == NodeDelete => onNodeDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onNodeCreate, Action onNodeUpdate, Action onNodeDelete, Action<string> otherwise)
    {
        if (this == NodeCreate) onNodeCreate();
        else if (this == NodeUpdate) onNodeUpdate();
        else if (this == NodeDelete) onNodeDelete();
        else otherwise(Value);
    }
}
