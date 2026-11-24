using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DataPrivacy
{
    /// <summary>
    /// For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and
    /// </summary>
    [JsonPropertyName("childDirected")]
    public required bool ChildDirected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
