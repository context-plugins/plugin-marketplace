from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.conflict_detection import ConflictDetectionOrStr
from .enums.conflict_handler import ConflictHandlerOrStr
from .lambda_conflict_handler_config import LambdaConflictHandlerConfig, LambdaConflictHandlerConfigDict


class SyncConfig(SdkBaseModel):
    conflict_handler: Optional[ConflictHandlerOrStr] = Field(default=UNSET, alias="conflictHandler")
    """The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY: Resolve conflicts
    by rejecting mutations when versions don't match the latest version at the server. AUTOMERGE: Resolve conflicts with
    the Automerge conflict resolution strategy. LAMBDA: Resolve conflicts with an Lambda function supplied in the
    LambdaConflictHandlerConfig."""

    conflict_detection: Optional[ConflictDetectionOrStr] = Field(default=UNSET, alias="conflictDetection")
    """The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for this resolver.
    NONE: Do not detect conflicts when invoking this resolver."""

    lambda_conflict_handler_config: Optional[LambdaConflictHandlerConfig] = Field(
        default=UNSET, alias="lambdaConflictHandlerConfig"
    )


class SyncConfigDict(TypedDict):
    conflict_handler: NotRequired[ConflictHandlerOrStr]
    conflict_detection: NotRequired[ConflictDetectionOrStr]
    lambda_conflict_handler_config: NotRequired[LambdaConflictHandlerConfigDict]
