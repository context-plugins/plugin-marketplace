using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of webhook filter. There are 11 webhook filter types: EVENT, ACTOR_ACCOUNT_ID, HEAD_REF, BASE_REF, FILE_PATH, COMMIT_MESSAGE, TAG_NAME, RELEASE_NAME, REPOSITORY_NAME, ORGANIZATION_NAME, and WORKFLOW_NAME. EVENT A webhook event triggers a build when the provided pattern matches one of nine event types: PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED, PULL_REQUEST_CLOSED, PULL_REQUEST_REOPENED, PULL_REQUEST_MERGED, RELEASED, PRERELEASED, and WORKFLOW_JOB_QUEUED. The EVENT patterns are specified as a comma-separated string. For example, PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED f
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type8>))]
public sealed record Type8 : OpenStringEnum<Type8>
{
    private Type8(string value) : base(value)
    {
    }

    public static readonly Type8 Event = new("EVENT");

    public static readonly Type8 BaseRef = new("BASE_REF");

    public static readonly Type8 HeadRef = new("HEAD_REF");

    public static readonly Type8 ActorAccountId = new("ACTOR_ACCOUNT_ID");

    public static readonly Type8 FilePath = new("FILE_PATH");

    public static readonly Type8 CommitMessage = new("COMMIT_MESSAGE");

    public static readonly Type8 WorkflowName = new("WORKFLOW_NAME");

    public static readonly Type8 TagName = new("TAG_NAME");

    public static readonly Type8 ReleaseName = new("RELEASE_NAME");

    public static readonly Type8 RepositoryName = new("REPOSITORY_NAME");

    public static readonly Type8 OrganizationName = new("ORGANIZATION_NAME");

    public TResult Match<TResult>(Func<TResult> onEvent,
        Func<TResult> onBaseRef,
        Func<TResult> onHeadRef,
        Func<TResult> onActorAccountId,
        Func<TResult> onFilePath,
        Func<TResult> onCommitMessage,
        Func<TResult> onWorkflowName,
        Func<TResult> onTagName,
        Func<TResult> onReleaseName,
        Func<TResult> onRepositoryName,
        Func<TResult> onOrganizationName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Event => onEvent(),
            _ when this == BaseRef => onBaseRef(),
            _ when this == HeadRef => onHeadRef(),
            _ when this == ActorAccountId => onActorAccountId(),
            _ when this == FilePath => onFilePath(),
            _ when this == CommitMessage => onCommitMessage(),
            _ when this == WorkflowName => onWorkflowName(),
            _ when this == TagName => onTagName(),
            _ when this == ReleaseName => onReleaseName(),
            _ when this == RepositoryName => onRepositoryName(),
            _ when this == OrganizationName => onOrganizationName(),
            _ => otherwise(Value)
        };

    public void Match(Action onEvent,
        Action onBaseRef,
        Action onHeadRef,
        Action onActorAccountId,
        Action onFilePath,
        Action onCommitMessage,
        Action onWorkflowName,
        Action onTagName,
        Action onReleaseName,
        Action onRepositoryName,
        Action onOrganizationName,
        Action<string> otherwise)
    {
        if (this == Event) onEvent();
        else if (this == BaseRef) onBaseRef();
        else if (this == HeadRef) onHeadRef();
        else if (this == ActorAccountId) onActorAccountId();
        else if (this == FilePath) onFilePath();
        else if (this == CommitMessage) onCommitMessage();
        else if (this == WorkflowName) onWorkflowName();
        else if (this == TagName) onTagName();
        else if (this == ReleaseName) onReleaseName();
        else if (this == RepositoryName) onRepositoryName();
        else if (this == OrganizationName) onOrganizationName();
        else otherwise(Value);
    }
}
