using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status of the webhook. Valid values include: CREATING: The webhook is being created. CREATE_FAILED: The webhook has failed to create. ACTIVE: The webhook has succeeded and is active. DELETING: The webhook is being deleted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsCodeBuildProjectsApi>))]
public sealed record StatusAwsCodeBuildProjectsApi : OpenStringEnum<StatusAwsCodeBuildProjectsApi>
{
    private StatusAwsCodeBuildProjectsApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsCodeBuildProjectsApi Creating = new("CREATING");

    public static readonly StatusAwsCodeBuildProjectsApi CreateFailed = new("CREATE_FAILED");

    public static readonly StatusAwsCodeBuildProjectsApi Active = new("ACTIVE");

    public static readonly StatusAwsCodeBuildProjectsApi Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onCreateFailed,
        Func<TResult> onActive,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == CreateFailed => onCreateFailed(),
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onCreateFailed,
        Action onActive,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == CreateFailed) onCreateFailed();
        else if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
