using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record MemberInfo
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("is_owner")]
    public required bool IsOwner { get; init; }

    [JsonPropertyName("mention_name")]
    public required string MentionName { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonPropertyName("workspace2")]
    public required BasicWorkspaceInfo Workspace2 { get; init; }

    [JsonPropertyName("organization2")]
    public required MemberInfoOrganization2 Organization2 { get; init; }
}
