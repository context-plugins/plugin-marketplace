using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// An application property. It is a caller defined JSON object that Bitbucket will store and return.
/// The <c>_attributes</c> field at its top level can be used to control who is allowed to read and update the property.
/// The keys of the JSON object must match an allowed pattern. For details,
/// see <see href="/cloud/bitbucket/application-properties/">Application properties</see>.
/// </summary>
public record ApplicationProperty
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_attributes")]
    public IReadOnlyList<AttributeEnum>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
