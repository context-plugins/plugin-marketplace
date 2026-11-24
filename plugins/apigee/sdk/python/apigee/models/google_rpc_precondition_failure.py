from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_rpc_precondition_failure_violation import (
    GoogleRpcPreconditionFailureViolation,
    GoogleRpcPreconditionFailureViolationDict,
)


class GoogleRpcPreconditionFailure(SdkBaseModel):
    """Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service
    to be acknowledged, it could list the terms of service violation in the PreconditionFailure message."""

    violations: Optional[list[GoogleRpcPreconditionFailureViolation]] = UNSET
    """Describes all precondition violations."""


class GoogleRpcPreconditionFailureDict(TypedDict):
    violations: NotRequired[list[GoogleRpcPreconditionFailureViolationDict]]
