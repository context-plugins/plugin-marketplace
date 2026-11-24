from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .status1 import Status1, Status1Dict


class Operation(SdkBaseModel):
    """This resource represents a long-running operation that is the result of a network API call."""

    metadata: Optional[dict[str, Any]] = UNSET
    """Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get."""

    response: Optional[dict[str, Any]] = UNSET
    """The normal, successful response of the operation. If the original method returns no data on success, such as
    ``Delete``, the response is ``google.protobuf.Empty``. If the original method is standard
    ``Get``/``Create``/``Update``, the response should be the resource. For other methods, the response should have the
    type ``XxxResponse``, where ``Xxx`` is the original method name. For example, if the original method name is
    ``TakeSnapshot()``, the inferred response type is ``TakeSnapshotResponse``."""

    name: Optional[str] = UNSET
    """The server-assigned unique name. The format of ``name`` is ``transferOperations/some/unique/name``."""

    error: Optional[Status1] = UNSET
    """The error result of the operation in case of failure or cancellation."""

    done: Optional[bool] = UNSET
    """If the value is ``false``, it means the operation is still in progress. If ``true``, the operation is completed,
    and either ``error`` or ``response`` is available."""


class OperationDict(TypedDict):
    metadata: NotRequired[dict[str, Any]]
    response: NotRequired[dict[str, Any]]
    name: NotRequired[str]
    error: NotRequired[Status1Dict]
    done: NotRequired[bool]
