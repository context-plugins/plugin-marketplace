using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The type of job
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeCircleCiRestApiV2WorkflowApi>))]
public sealed record TypeCircleCiRestApiV2WorkflowApi : OpenStringEnum<TypeCircleCiRestApiV2WorkflowApi>
{
    private TypeCircleCiRestApiV2WorkflowApi(string value) : base(value)
    {
    }

    public static readonly TypeCircleCiRestApiV2WorkflowApi Build = new("build");

    public static readonly TypeCircleCiRestApiV2WorkflowApi Approval = new("approval");

    public TResult Match<TResult>(Func<TResult> onBuild, Func<TResult> onApproval, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Build => onBuild(),
            _ when this == Approval => onApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuild, Action onApproval, Action<string> otherwise)
    {
        if (this == Build) onBuild();
        else if (this == Approval) onApproval();
        else otherwise(Value);
    }
}
