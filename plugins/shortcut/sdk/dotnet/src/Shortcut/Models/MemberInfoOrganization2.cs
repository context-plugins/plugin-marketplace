using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record MemberInfoOrganization2
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }
}
