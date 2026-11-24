from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data1(SdkBaseModel):
    job_id: Optional[UUID] = UNSET
    status: Optional[str] = UNSET
    stage: OptionalNullable[str] = UNSET
    """Present on chained jobs (e.g. "search")."""


class Data1Dict(TypedDict):
    job_id: NotRequired[UUID]
    status: NotRequired[str]
    stage: NotRequired[str | None]
