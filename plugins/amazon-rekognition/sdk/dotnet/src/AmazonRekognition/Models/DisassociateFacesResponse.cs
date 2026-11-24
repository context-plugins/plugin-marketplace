using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DisassociateFacesResponse
{
    /// <summary>
    /// An array of DissociatedFace objects containing FaceIds that are successfully disassociated with the UserID is returned. Returned if the DisassociatedFaces action is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DisassociatedFaces")]
    public IReadOnlyList<DisassociatedFace>? DisassociatedFaces { get; init; }

    /// <summary>
    /// An array of UnsuccessfulDisassociation objects containing FaceIds that are not successfully associated, along with the reasons for the failure to associate. Returned if the DisassociateFaces action is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnsuccessfulFaceDisassociations")]
    public IReadOnlyList<UnsuccessfulFaceDisassociation>? UnsuccessfulFaceDisassociations { get; init; }

    /// <summary>
    /// The status of an update made to a User. Reflects if the User has been updated for every requested change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserStatus")]
    public UserStatus1? UserStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
