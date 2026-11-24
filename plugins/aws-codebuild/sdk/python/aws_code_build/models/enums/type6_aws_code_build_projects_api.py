from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6AwsCodeBuildProjectsApi(str, Enum):
    """The type of webhook filter. There are 11 webhook filter types: EVENT, ACTOR_ACCOUNT_ID, HEAD_REF, BASE_REF,
    FILE_PATH, COMMIT_MESSAGE, TAG_NAME, RELEASE_NAME, REPOSITORY_NAME, ORGANIZATION_NAME, and WORKFLOW_NAME. EVENT A
    webhook event triggers a build when the provided pattern matches one of nine event types: PUSH,
    PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED, PULL_REQUEST_CLOSED, PULL_REQUEST_REOPENED, PULL_REQUEST_MERGED,
    RELEASED, PRERELEASED, and WORKFLOW_JOB_QUEUED. The EVENT patterns are specified as a comma-separated string. For
    example, PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED f"""

    EVENT = "EVENT"
    BASE_REF = "BASE_REF"
    HEAD_REF = "HEAD_REF"
    ACTOR_ACCOUNT_ID = "ACTOR_ACCOUNT_ID"
    FILE_PATH = "FILE_PATH"
    COMMIT_MESSAGE = "COMMIT_MESSAGE"
    WORKFLOW_NAME = "WORKFLOW_NAME"
    TAG_NAME = "TAG_NAME"
    RELEASE_NAME = "RELEASE_NAME"
    REPOSITORY_NAME = "REPOSITORY_NAME"
    ORGANIZATION_NAME = "ORGANIZATION_NAME"

    __str__ = str.__str__


Type6AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    Type6AwsCodeBuildProjectsApi | str, open_enum_validator(Type6AwsCodeBuildProjectsApi)
]
