using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PutSlotTypeRequest
{
    /// <summary>
    /// The name of the slot type. The name is not case sensitive. The name can't match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called AMAZON.DATE, you can't create a custom slot type called DATE. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A description of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A list of EnumerationValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, which are additional values that help train the machine learning model about the values that it resolves for a slot. A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values. When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumerationValues")]
    public IReadOnlyList<EnumerationValue>? EnumerationValues { get; init; }

    /// <summary>
    /// Identifies a specific revision of the $LATEST version. When you create a new slot type, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a slot type, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy, the default is ORIGINAL_VALUE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueSelectionStrategy")]
    public ValueSelectionStrategy2? ValueSelectionStrategy { get; init; }

    /// <summary>
    /// When set to true a new numbered version of the slot type is created. This is the same as calling the CreateSlotTypeVersion operation. If you do not specify createVersion, the default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createVersion")]
    public bool? CreateVersion { get; init; }

    /// <summary>
    /// The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent. Only AMAZON.AlphaNumeric is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentSlotTypeSignature")]
    public string? ParentSlotTypeSignature { get; init; }

    /// <summary>
    /// Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeConfigurations")]
    public IReadOnlyList<SlotTypeConfiguration>? SlotTypeConfigurations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
