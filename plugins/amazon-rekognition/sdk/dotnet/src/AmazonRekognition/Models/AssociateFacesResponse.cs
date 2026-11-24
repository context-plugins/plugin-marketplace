using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record AssociateFacesResponse
{
    /// <summary>
    /// An array of AssociatedFace objects containing FaceIDs that have been successfully associated with the UserID. Returned if the AssociateFaces action is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AssociatedFaces")]
    public IReadOnlyList<AssociatedFace>? AssociatedFaces { get; init; }

    /// <summary>
    /// An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully associated along with the reasons. Returned if the AssociateFaces action is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnsuccessfulFaceAssociations")]
    public IReadOnlyList<UnsuccessfulFaceAssociation>? UnsuccessfulFaceAssociations { get; init; }

    /// <summary>
    /// The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserStatus")]
    public UserStatus? UserStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
