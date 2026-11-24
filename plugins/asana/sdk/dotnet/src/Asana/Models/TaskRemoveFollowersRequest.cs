using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskRemoveFollowersRequest
{
    /// <summary>
    /// An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.
    /// </summary>
    [JsonPropertyName("followers")]
    public required IReadOnlyList<string> Followers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
