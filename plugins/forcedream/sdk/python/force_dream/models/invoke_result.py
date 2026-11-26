from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status import StatusOrStr


class InvokeResult(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    agent: Optional[str] = UNSET
    task_id: Optional[str] = UNSET
    output: Optional[Any] = UNSET
    charged_pence: OptionalNullable[int] = UNSET
    proof_id: Optional[str] = UNSET
    error: Optional[str] = UNSET
    message: Optional[str] = UNSET


class InvokeResultDict(TypedDict):
    status: NotRequired[StatusOrStr]
    agent: NotRequired[str]
    task_id: NotRequired[str]
    output: NotRequired[Any]
    charged_pence: NotRequired[int | None]
    proof_id: NotRequired[str]
    error: NotRequired[str]
    message: NotRequired[str]
