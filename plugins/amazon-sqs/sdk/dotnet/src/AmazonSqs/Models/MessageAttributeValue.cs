using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record MessageAttributeValue
{
    /// <summary>
    /// Strings are Unicode with UTF-8 binary encoding. For a list of code values, see ASCII Printable Characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StringValue")]
    public string? StringValue { get; init; }

    /// <summary>
    /// Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BinaryValue")]
    public string? BinaryValue { get; init; }

    /// <summary>
    /// Not implemented. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StringListValues")]
    public IReadOnlyList<string>? StringListValues { get; init; }

    /// <summary>
    /// Not implemented. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BinaryListValues")]
    public IReadOnlyList<string>? BinaryListValues { get; init; }

    /// <summary>
    /// Amazon SQS supports the following logical data types: String, Number, and Binary. For the Number data type, you must use StringValue. You can also append custom labels. For more information, see Amazon SQS Message Attributes in the Amazon SQS Developer Guide.
    /// </summary>
    [JsonPropertyName("DataType")]
    public required string DataType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
