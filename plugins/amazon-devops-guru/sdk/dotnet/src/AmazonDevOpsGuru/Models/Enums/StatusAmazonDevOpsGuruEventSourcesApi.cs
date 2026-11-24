using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations that are generated from Amazon CodeGuru Profiler.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonDevOpsGuruEventSourcesApi>))]
public sealed record StatusAmazonDevOpsGuruEventSourcesApi : OpenStringEnum<StatusAmazonDevOpsGuruEventSourcesApi>
{
    private StatusAmazonDevOpsGuruEventSourcesApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonDevOpsGuruEventSourcesApi Enabled = new("ENABLED");

    public static readonly StatusAmazonDevOpsGuruEventSourcesApi Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onEnabled, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnabled, Action onDisabled, Action<string> otherwise)
    {
        if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
