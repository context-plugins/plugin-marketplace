using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record DescribeStateMachineInputAwsStepFunctionsStateMachinesApi
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine for which you want the information. If you specify a state machine version ARN, this API returns details about that version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response without the encrypted definition. When calling a labelled ARN for an encrypted state machine, the includedData = METADATA_ONLY parameter will not apply because Step Functions needs to decrypt the entire state machine definition to get the Distributed Map state’s definition. In this case, the API caller needs to have kms:Decrypt permission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedData")]
    public IncludedData1AwsStepFunctionsStateMachinesApi? IncludedData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
