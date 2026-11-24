from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type6_aws_code_build_projects_api import Type6AwsCodeBuildProjectsApiOrStr


class WebhookFilterAwsCodeBuildProjectsApi(SdkBaseModel):
    type_: Type6AwsCodeBuildProjectsApiOrStr = Field(alias="type")
    """The type of webhook filter. There are 11 webhook filter types: EVENT, ACTOR_ACCOUNT_ID, HEAD_REF, BASE_REF,
    FILE_PATH, COMMIT_MESSAGE, TAG_NAME, RELEASE_NAME, REPOSITORY_NAME, ORGANIZATION_NAME, and WORKFLOW_NAME. EVENT A
    webhook event triggers a build when the provided pattern matches one of nine event types: PUSH,
    PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED, PULL_REQUEST_CLOSED, PULL_REQUEST_REOPENED, PULL_REQUEST_MERGED,
    RELEASED, PRERELEASED, and WORKFLOW_JOB_QUEUED. The EVENT patterns are specified as a comma-separated string. For
    example, PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED f"""

    pattern: str
    """For a WebHookFilter that uses EVENT type, a comma-separated string that specifies one or more events. For
    example, the webhook filter PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED allows all push, pull request created,
    and pull request updated events to trigger a build. For a WebHookFilter that uses any of the other filter types, a
    regular expression pattern. For example, a WebHookFilter that uses HEAD_REF for its type and the pattern
    ^refs/heads/ triggers a build when the head reference is a branch with a reference name refs/heads/branch-name."""

    exclude_matched_pattern: Optional[bool] = Field(default=UNSET, alias="excludeMatchedPattern")
    """Used to indicate that the pattern determines which webhook events do not trigger a build. If true, then a webhook
    event that does not match the pattern triggers a build. If false, then a webhook event that matches the pattern
    triggers a build."""


class WebhookFilterAwsCodeBuildProjectsApiDict(TypedDict):
    type_: Type6AwsCodeBuildProjectsApiOrStr
    pattern: str
    exclude_matched_pattern: NotRequired[bool]
