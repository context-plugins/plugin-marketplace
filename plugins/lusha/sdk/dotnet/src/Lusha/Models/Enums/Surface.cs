using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Surface>))]
public sealed record Surface : OpenStringEnum<Surface>
{
    private Surface(string value) : base(value)
    {
    }

    public static readonly Surface Api = new("api");

    public static readonly Surface Mcp = new("mcp");

    public static readonly Surface Workspace = new("workspace");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onMcp,
        Func<TResult> onWorkspace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Mcp => onMcp(),
            _ when this == Workspace => onWorkspace(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi, Action onMcp, Action onWorkspace, Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Mcp) onMcp();
        else if (this == Workspace) onWorkspace();
        else otherwise(Value);
    }
}
