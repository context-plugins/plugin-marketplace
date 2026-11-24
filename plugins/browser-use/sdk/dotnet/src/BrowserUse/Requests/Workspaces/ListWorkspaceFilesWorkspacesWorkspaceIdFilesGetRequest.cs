using System;
using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet operation.
/// </summary>
public sealed record ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest
{
    public required Guid WorkspaceId { get; init; }

    public string Prefix { get; init; } = "";

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    public Cursor? Cursor { get; init; }

    public bool IncludeUrls { get; init; } = false;

    public Contentdisposition1? ContentDisposition { get; init; }
}
