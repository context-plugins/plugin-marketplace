from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .status1 import Status1, Status1Dict


class Operation(SdkBaseModel):
    """This resource represents a long-running operation that is the result of a network API call."""

    error: Optional[Status1] = UNSET
    """The error result of the operation in case of failure or cancellation."""

    done: Optional[bool] = UNSET
    """If the value is ``false``, it means the operation is still in progress. If ``true``, the operation is completed,
    and either ``error`` or ``response`` is available."""

    name: Optional[str] = UNSET
    """The server-assigned name, which is only unique within the same service that originally returns it. If you use the
    default HTTP mapping, the ``name`` should be a resource name ending with ``operations/{unique_id}``."""

    metadata: Optional[dict[str, Any]] = UNSET
    """Service-specific metadata associated with the operation. It typically contains progress information and common
    metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running
    operation should document the metadata type, if any."""

    response: Optional[dict[str, Any]] = UNSET
    """The normal, successful response of the operation. If the original method returns no data on success, such as
    ``Delete``, the response is ``google.protobuf.Empty``. If the original method is standard
    ``Get``/``Create``/``Update``, the response should be the resource. For other methods, the response should have the
    type ``XxxResponse``, where ``Xxx`` is the original method name. For example, if the original method name is
    ``TakeSnapshot()``, the inferred response type is ``TakeSnapshotResponse``."""


class OperationDict(TypedDict):
    error: NotRequired[Status1Dict]
    done: NotRequired[bool]
    name: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    response: NotRequired[dict[str, Any]]
