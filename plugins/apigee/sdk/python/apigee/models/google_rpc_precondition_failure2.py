from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_rpc_precondition_failure_violation import (
    GoogleRpcPreconditionFailureViolation,
    GoogleRpcPreconditionFailureViolationDict,
)


class GoogleRpcPreconditionFailure2(SdkBaseModel):
    """Validation errors that would cause the deployment change request to be rejected."""

    violations: Optional[list[GoogleRpcPreconditionFailureViolation]] = UNSET
    """Describes all precondition violations."""


class GoogleRpcPreconditionFailure2Dict(TypedDict):
    violations: NotRequired[list[GoogleRpcPreconditionFailureViolationDict]]
