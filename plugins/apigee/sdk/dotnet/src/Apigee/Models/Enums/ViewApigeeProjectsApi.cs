using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ViewApigeeProjectsApi>))]
public sealed record ViewApigeeProjectsApi : OpenStringEnum<ViewApigeeProjectsApi>
{
    private ViewApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly ViewApigeeProjectsApi ApiViewTypeUnspecified = new("API_VIEW_TYPE_UNSPECIFIED");

    public static readonly ViewApigeeProjectsApi McpServer = new("MCP_SERVER");

    public static readonly ViewApigeeProjectsApi McpTool = new("MCP_TOOL");

    public TResult Match<TResult>(Func<TResult> onApiViewTypeUnspecified,
        Func<TResult> onMcpServer,
        Func<TResult> onMcpTool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiViewTypeUnspecified => onApiViewTypeUnspecified(),
            _ when this == McpServer => onMcpServer(),
            _ when this == McpTool => onMcpTool(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiViewTypeUnspecified, Action onMcpServer, Action onMcpTool, Action<string> otherwise)
    {
        if (this == ApiViewTypeUnspecified) onApiViewTypeUnspecified();
        else if (this == McpServer) onMcpServer();
        else if (this == McpTool) onMcpTool();
        else otherwise(Value);
    }
}
